"use client";

import { useEffect, useRef } from "react";

export const useScrollReveal = (
  selector: string,
  options: Record<string, any> = {}
) => {
  const srInstance = useRef<any>(null);
  const selectorRef = useRef(selector);
  const optionsRef = useRef(options);

  useEffect(() => {
    const currentSelector = selectorRef.current;
    const currentOptions = optionsRef.current;

    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        if (!srInstance.current) {
          srInstance.current = ScrollReveal.default();
        }
        srInstance.current.reveal(currentSelector, {
          delay: 300,
          distance: "100px",
          easing: "ease-in-out",
          origin: "bottom",
          reset: false,
          ...currentOptions,
        });
      });
    }

    return () => {
      if (
        srInstance.current &&
        typeof srInstance.current.clean === "function"
      ) {
        srInstance.current.clean(currentSelector);
      }
    };
  }, []); // Solo se ejecuta una vez cuando el componente se monta
};

export const useInitReveal = (
  selector: string,
  options: Record<string, any> = {}
) => {
  const srInstance = useRef<any>(null);
  const selectorRef = useRef(selector);
  const optionsRef = useRef(options);

  useEffect(() => {
    const currentSelector = selectorRef.current;
    const currentOptions = optionsRef.current;

    if (typeof window !== "undefined") {
      import("scrollreveal").then((ScrollReveal) => {
        if (!srInstance.current) {
          srInstance.current = ScrollReveal.default();
        }
        srInstance.current.reveal(currentSelector, {
          duration: 2000,
          opacity: 0,
          distance: "0px",
          reset: false,
          ...currentOptions,
        });

        return () => {
          if (
            srInstance.current &&
            typeof srInstance.current.clean === "function"
          ) {
            srInstance.current.clean(currentSelector);
          }
        };
      });
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta
};
