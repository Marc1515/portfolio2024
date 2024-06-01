"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import Image from "next/image";

export const LanguageButton = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    // Guardar la posición de desplazamiento actual
    const scrollY = window.scrollY;
    sessionStorage.setItem("scrollPosition", scrollY.toString());

    // Obtener el hash actual de la URL
    const hash = window.location.hash;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    let newUrl;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      newUrl = "/" + newLocale + currentPathname + hash;
    } else {
      newUrl =
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`) + hash;
    }

    router.push(newUrl);
    router.refresh();
  };

  return (
    <div className="w-100 mb-10 md:mb-0 flex justify-center items-center gap-10">
      <label className="h-20">
        <input
          type="radio"
          name="language"
          value="en"
          checked={currentLocale === "en"}
          onChange={() => handleChange("en")}
          className="size-7 appearance-none"
        />
        <Image
          src="/flags/england-flag.png"
          alt="English"
          width={25}
          height={25}
        />
      </label>
      <label className="h-20">
        <input
          type="radio"
          name="language"
          value="es"
          checked={currentLocale === "es"}
          onChange={() => handleChange("es")}
          className="size-7 appearance-none"
        />
        <Image
          src="/flags/spain-flag.png"
          alt="Spanish"
          width={25}
          height={25}
        />
      </label>
      <label className="h-20">
        <input
          type="radio"
          name="language"
          value="ca"
          checked={currentLocale === "ca"}
          onChange={() => handleChange("ca")}
          className="size-7 appearance-none"
        />
        <Image
          src="/flags/catalonia-flag.png"
          alt="Catalan"
          width={25}
          height={25}
        />
      </label>
    </div>
  );
};
