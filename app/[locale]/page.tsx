import { HeaderComponent } from "./(platform)/_components/header/HeaderComponent";
import { MarcSection } from "./(platform)/_components/MarcSection";
import { MenuProvider } from "./(platform)/context/MenuContext";
import AboutComponent from "./(platform)/_components/about/AboutComponent";
import initTranslations from "@/app/i18n";

interface HomeProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t } = await initTranslations(locale, ["default"]);
  const MarcSectionTranslations = {
    writerText: t("writer_text") || "Default Text",
    cvText: t("cv_text") || "Download CV",
    // Añadir más traducciones aquí según sea necesario
  };
  const AboutTranslations = {
    aboutTitle: t("about_title") || "About Me",
    firstText: t("first_text") || "Download CV",
    secondText: t("second_text") || "Download CV",
    // Añadir más traducciones aquí según sea necesario
  };

  return (
    <MenuProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeaderComponent />
        <MarcSection translations={MarcSectionTranslations} />
        <AboutComponent translations={AboutTranslations} />
      </main>
    </MenuProvider>
  );
}
