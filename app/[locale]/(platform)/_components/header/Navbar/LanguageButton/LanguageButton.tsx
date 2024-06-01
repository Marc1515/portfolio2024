"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Image from "next/image";
import "./LanguageButton.scss";

interface LanguageButtonProps {
  show: boolean;
}

export const LanguageButton = ({ show }: LanguageButtonProps) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  useEffect(() => {
    if (selectedLocale !== currentLocale) {
      const scrollY = window.scrollY;
      sessionStorage.setItem("scrollPosition", scrollY.toString());

      const hash = window.location.hash;

      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = date.toUTCString();
      document.cookie = `NEXT_LOCALE=${selectedLocale};expires=${expires};path=/`;

      let newUrl;

      if (
        currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
      ) {
        newUrl = "/" + selectedLocale + currentPathname + hash;
      } else {
        newUrl =
          currentPathname.replace(`/${currentLocale}`, `/${selectedLocale}`) +
          hash;
      }

      // Esperar a que la animación CSS termine (500ms)
      const timer = setTimeout(() => {
        router.push(newUrl);
        router.refresh();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentLocale, currentPathname, router, selectedLocale]);

  const handleChange = (newLocale: string) => {
    setSelectedLocale(newLocale);
  };

  return (
    <div className={`container ${show ? "" : "hide"}`}>
      <div className="selector">
        <div className="selector-item">
          <input
            type="radio"
            id="radio1"
            name="selector"
            value="en"
            checked={selectedLocale === "en"}
            onChange={() => handleChange("en")}
            className="selector-item_radio"
          />
          <label htmlFor="radio1" className="selector-item_label">
            <Image
              src="/flags/england-flag.svg"
              alt="English"
              width={25}
              height={25}
              className="selector-item_label"
            />
          </label>
        </div>
        <div className="selector-item">
          <input
            type="radio"
            id="radio2"
            name="selector"
            value="es"
            checked={selectedLocale === "es"}
            onChange={() => handleChange("es")}
            className="selector-item_radio"
          />
          <label htmlFor="radio2" className="selector-item_label">
            <Image
              src="/flags/spain-flag.svg"
              alt="Spanish"
              width={25}
              height={25}
              className="selector-item_label"
            />
          </label>
        </div>
        <div className="selector-item">
          <input
            type="radio"
            id="radio3"
            name="selector"
            value="ca"
            checked={selectedLocale === "ca"}
            onChange={() => handleChange("ca")}
            className="selector-item_radio"
          />
          <label htmlFor="radio3" className="selector-item_label">
            <Image
              src="/flags/catalonia-flag.svg"
              alt="Catalan"
              width={25}
              height={25}
              className="selector-item_label"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
