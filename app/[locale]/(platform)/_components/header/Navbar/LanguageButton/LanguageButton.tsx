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
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="mt-10 flex justify-center gap-10">
      <label>
        <input
          type="radio"
          name="language"
          value="en"
          checked={currentLocale === "en"}
          onChange={() => handleChange("en")}
          style={{ display: "none" }}
        />
        <Image
          src="/flags/england-flag.png"
          alt="English"
          width={25}
          height={25}
        />
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="es"
          checked={currentLocale === "es"}
          onChange={() => handleChange("es")}
          style={{ display: "none" }}
        />
        <Image
          src="/flags/spain-flag.png"
          alt="Spanish"
          width={25}
          height={25}
        />
      </label>
      <label>
        <input
          type="radio"
          name="language"
          value="ca"
          checked={currentLocale === "ca"}
          onChange={() => handleChange("ca")}
          style={{ display: "none" }}
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
