import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Animator, type AnimatorProps } from '@arwes/react';

type RevealProps = Omit<AnimatorProps, 'root' | 'active'> & {
  className?: string;
  children: ReactNode;
};

// Root animator that activates once its content scrolls into view.
export const Reveal = ({ className, children, manager = 'stagger', ...animator }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Animator root active={active} manager={manager} combine duration={{ stagger: 0.06 }} {...animator}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </Animator>
  );
};
