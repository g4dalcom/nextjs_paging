import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (callback: () => void) => {
  const [observeTarget, setObserveTarget] = useState(null);

  const observer = useRef<MutableRefObject<Element> | any>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
      { threshold: 1 },
    );
  });

  useEffect(() => {
    const currentTarget = observeTarget;
    const currentObserver = observer.current;

    if (currentTarget) currentObserver.observe(currentTarget);

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observeTarget]);

  return setObserveTarget;
};

export default useIntersectionObserver;
