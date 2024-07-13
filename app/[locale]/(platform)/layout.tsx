// Layout.tsx

import { ReactNode } from "react";
import { MenuProvider } from "./context/MenuContext";
import TranslationsProvider from "./context/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { HeaderComponent } from "./_components/header/HeaderComponent";
import { MarcSection } from "./_components/MarcSection/MarcSectionComponent";
import { AboutComponent } from "./_components/about/AboutComponent";
import { TechnologiesComponent } from "./_components/Technologies/TechnologiesComponent";
import { ProjectsComponent } from "./_components/Projects/ProjectsComponent";
import { ContactComponent } from "./_components/Contact/ContactComponent";
import "./styles/styles.scss";
import ScrollTopButtonComponent from "./_components/ScrollTopButton/ScrollTopButtonComponent";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
    platform: string;
  };
}

const i18nNamespaces = ["default"];

export default async function Layout({
  children,
  params: { locale, platform },
}: LayoutProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  const HeaderTranslations = {
    about_title: t("about_title") || "",
    technologies_title: t("technologies_title") || "",
    projects_title: t("projects_title") || "",
    contact_title: t("contact_title") || "",
    // Añadir más traducciones aquí según sea necesario
  };

  const MarcSectionTranslations = {
    writer_text: t("writer_text") || "Default Text",
    cv_text: t("cv_text") || "Download CV",
    // Añadir más traducciones aquí según sea necesario
  };

  const AboutTranslations = {
    about_title: t("about_title") || "",
    first_text: t("first_text") || "",
    second_text: t("second_text") || "",
    // Añadir más traducciones aquí según sea necesario
  };

  const TechnologiesTranslations = {
    technologies_title: t("technologies_title") || "",
    technologies_intro: t("technologies_intro") || "",
    technologies_basic_title: t("technologies_basic_title") || "",
    technologies_htmlCssJs_explanation:
      t("technologies_htmlCssJs_explanation") || "",
    technologies_cssLibraries_title: t("technologies_cssLibraries_title") || "",
    technologies_tailwindBootstrap_explanation:
      t("technologies_tailwindBootstrap_explanation") || "",
    technologies_Pre_Processors_title:
      t("technologies_Pre_Processors_title") || "",
    technologies_sassLess_explanation:
      t("technologies_sassLess_explanation") || "",
    technologies_typescriptRxjs_explanation:
      t("technologies_typescriptRxjs_explanation") || "",
    technologies_reactAngular_explanation:
      t("technologies_reactAngular_explanation") || "",
    technologies_wordpressWoocommerce_explanation:
      t("technologies_wordpressWoocommerce_explanation") || "",
    // Añadir más traducciones aquí según sea necesario
  };

  const ProjectsTranslations = {
    projects_title: t("projects_title") || "",
    projects_intro: t("projects_intro") || "",
    projects_trello_text: t("projects_trello_text"),
    projects_country_text: t("projects_country_text"),
    projects_gifs_text: t("projects_gifs_text"),
    projects_learn_text: t("projects_learn_text"),
    projects_trailers_text: t("projects_trailers_text"),
    projects_weather_text: t("projects_weather_text"),
  };

  const ContactTranslations = {
    contact_title: t("contact_title") || "",
    contact_intro: t("contact_intro") || "",
    contact_send_btn: t("contact_send_btn") || "",
    // Añadir más traducciones aquí según sea necesario
  };

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <MenuProvider>
        <main>
          <HeaderComponent translations={HeaderTranslations} />
          <ScrollTopButtonComponent />
          <MarcSection translations={MarcSectionTranslations} />
          <ProjectsComponent
            translations={ProjectsTranslations}
            locale={locale}
          />
          <TechnologiesComponent translations={TechnologiesTranslations} />
          <AboutComponent translations={AboutTranslations} />
          <ContactComponent translations={ContactTranslations} />
          {children}
        </main>
      </MenuProvider>
    </TranslationsProvider>
  );
}

// Aquí es donde se define generateStaticParams
export async function generateStaticParams() {
  const locales: string[] = ["en", "es", "ca"];
  const platforms: string[] = ["web", "mobile"]; // Ajusta según las plataformas soportadas

  const params: { locale: string; platform: string }[] = [];

  locales.forEach((locale) => {
    platforms.forEach((platform) => {
      params.push({ locale, platform });
    });
  });

  return params;
}
