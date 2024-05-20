import { HeaderComponent } from "./(platform)/_components/header/HeaderComponent";
import { MarcSection } from "./(platform)/_components/MarcSection";
import { MenuProvider } from "./(platform)/context/MenuContext";

export default function Home() {
  return (
    <MenuProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HeaderComponent />
        <MarcSection />
      </main>
    </MenuProvider>
  );
}
