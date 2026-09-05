import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export function useBreakpoint(): {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const getBreakpoint = (): Breakpoint => {
    if (typeof window === 'undefined') return 'desktop';
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1200) return 'tablet';
    return 'desktop';
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
  };
}
