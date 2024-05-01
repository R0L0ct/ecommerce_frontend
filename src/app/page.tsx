import Hero from "./components/Hero/Hero";
import Ofertas from "./components/Ofertas/Ofertas";
import { Pagos } from "./components/Pagos/Pagos";
import { Recommended } from "./components/Recommended/Recommended";

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
