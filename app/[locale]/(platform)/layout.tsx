import { MenuProvider } from "./context/MenuContext";
import TranslationsProvider from "./context/TranslationsProvider";
import initTranslations from "@/app/i18n";
import HeaderComponent from "./_components/Header/HeaderComponent";
import { MarcSection } from "./_components/MarcSection/MarcSectionComponent";
import AboutComponent from "./_components/About/AboutComponent";
import { TechnologiesComponent } from "./_components/Technologies/TechnologiesComponent";
import { ProjectsComponent } from "./_components/Projects/ProjectsComponent";
import { ContactComponent } from "./_components/Contact/ContactComponent";
import "./styles/styles.scss";

interface HomePageProps {
  params: {
    locale: string;
  };
}

const i18nNamespaces = ["default"];

const HomePage = async ({ params: { locale } }: HomePageProps) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
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
    // Añadir más traducciones aquí según sea necesario
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
          <HeaderComponent />
          <MarcSection translations={MarcSectionTranslations} />
          <AboutComponent translations={AboutTranslations} />
          <TechnologiesComponent translations={TechnologiesTranslations} />
          <ProjectsComponent translations={ProjectsTranslations} />
          <ContactComponent translations={ContactTranslations} />
        </main>
      </MenuProvider>
    </TranslationsProvider>
  );
};

export async function generateStaticParams() {
  // Suponiendo que tus locales soportados son 'en' y 'es'
  const locales = ["en", "es", "ca"];

  return locales.map((locale) => ({
    locale,
  }));
}

export default HomePage;
