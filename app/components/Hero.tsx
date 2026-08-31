import { WHATSAPP_LINK } from "@/app/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black lg:h-screen">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/backdasktop.png" />
        <img
          src="/backmob1.png"
          alt="Mascote da Rufino Baterias ao lado de baterias automotivas Moura, Heliar e Zetta"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-x-0 top-0 h-[85%] bg-linear-to-b from-black/45 via-black/0 to-transparent lg:hidden" />
      <div className="absolute inset-0 hidden bg-linear-to-r from-black/45 via-black/0 to-transparent lg:block" />

      <div className="relative z-10 flex flex-col gap-3 px-5 pt-8 lg:h-full lg:max-w-2xl lg:justify-center lg:gap-6 lg:px-16 lg:pt-0">
        <div className="flex flex-wrap gap-2">
          <span className="w-fit rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black lg:px-4 lg:py-1.5 lg:text-sm">
            Entrega grátis Vespasiano e região
          </span>
          <span className="w-fit rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black lg:px-4 lg:py-1.5 lg:text-sm">
            Divide no cartão até 10x
          </span>
        </div>

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg lg:text-6xl">
          Sua bateria nova{" "}
          <span className="text-yellow-400">sem enrolação</span>
        </h1>

        <p className="max-w-[18rem] text-sm leading-relaxed text-zinc-100 drop-shadow-md lg:max-w-md lg:text-lg">
          Moura, Heliar e Zetta com instalação rápida e garantia.
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-yellow-400 drop-shadow-md lg:text-base">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <span>Dividimos em até 10x no cartão</span>
        </div>

        <div className="flex flex-col gap-2.5 pt-1 lg:flex-row lg:gap-4 lg:pt-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 items-center justify-center gap-2 rounded-full bg-[#25D366] text-base font-bold text-white shadow-lg shadow-black/30 active:scale-[0.98] lg:w-auto lg:px-8"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.6 14.7 3.1 13.4 3.1 12c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9z" />
            </svg>
            Peça no WhatsApp
          </a>

          <a
            href="#marcas"
            className="flex h-13 items-center justify-center rounded-full border border-white/40 bg-black/20 text-base font-semibold text-white backdrop-blur-sm active:scale-[0.98] lg:w-auto lg:px-8"
          >
            Ver marcas disponíveis
          </a>
        </div>
      </div>
    </section>
  );
}
