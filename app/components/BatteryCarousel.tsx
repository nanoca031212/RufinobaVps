import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";

const BRANDS = [
  { name: "Moura", image: "/produtos/Moura.png" },
  { name: "Heliar", image: "/produtos/Heliar.png" },
  { name: "Zetta", image: "/produtos/Zetta.png" },
  { name: "Outras Baterias", image: null },
];

export default function BatteryCarousel() {
  return (
    <section id="marcas" className="bg-white py-28 lg:py-32">
      <div className="px-5 lg:mx-auto lg:max-w-6xl lg:px-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-black lg:text-5xl">
          Baterias disponíveis
        </h2>
        <p className="mt-1 text-base text-zinc-500 lg:text-lg">
          <span className="lg:hidden">Deslize para o lado e escolha a sua</span>
          <span className="hidden lg:inline">Marcas com garantia de fábrica</span>
        </p>
      </div>

      <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-auto lg:mt-12 lg:grid lg:max-w-6xl lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-12 lg:pb-0">
        {BRANDS.map((brand) => (
          <div
            key={brand.name}
            className="flex w-[72%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm lg:w-full"
          >
            <div className="relative flex aspect-4/3 w-full items-center justify-center bg-zinc-50">
              {brand.image ? (
                <Image
                  src={brand.image}
                  alt={`Bateria ${brand.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 72vw"
                  className="object-contain p-6"
                />
              ) : (
                <svg className="h-16 w-16 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1 p-4">
              <span className="text-lg font-bold text-black">{brand.name}</span>

              <WhatsAppLink className="mt-3 flex h-11 items-center justify-center rounded-full bg-black text-sm font-semibold text-white active:scale-[0.98]">
                Consultar no WhatsApp
              </WhatsAppLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
