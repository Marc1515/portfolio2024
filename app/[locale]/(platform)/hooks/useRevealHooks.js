import { useEffect } from 'react';

export const useScrollReveal = (selector, options = {}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        ScrollReveal.default().reveal(selector, {
          delay: 300,
          distance: '100px',
          easing: 'ease-in-out',
          origin: 'bottom',
          reset: false,
          ...options,
        });
      });
    }
  }, [selector, options]);
};

export const useInitReveal = (selector, options = {}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then((ScrollReveal) => {
        const sr = ScrollReveal.default().reveal(selector, {
          duration: 2000,
          opacity: 0,
          distance: '0px',
          reset: false,
          ...options,
        });
        return () => {
          if (sr) {
            ScrollReveal.default().clean(selector);
          }
        };
      });
    }
  }, [selector, options]);
};
