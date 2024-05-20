import Hero from "./components/Hero/Hero";
import Ofertas from "./components/Ofertas/Ofertas";
import { Pagos } from "./components/Pagos/Pagos";
import { Recommended } from "./components/Recommended/Recommended";
import { Overlay } from "./components/ui/Overlay";

export default function Home() {
  return (
    <div className="border-t">
      <Hero />
      <Ofertas />
      <Recommended />
      <Pagos />
    </div>
  );
}
