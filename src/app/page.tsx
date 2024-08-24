import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CodeTracks from "./components/sections/CodeTracks";
import Hero from "./components/sections/Hero";
import Outcome from "./components/sections/Outcome";
import SpecialTracks from "./components/sections/SpecialTracks";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CodeTracks />
      <SpecialTracks />
      <Outcome />
      <Footer />
    </main>
  );
}
