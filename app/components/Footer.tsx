import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";

const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Veículos", href: "#veiculos" },
  { label: "Produtos", href: "#marcas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-5 py-12 text-white lg:px-12 lg:py-16">
      <div className="lg:mx-auto lg:grid lg:max-w-6xl lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
        <div>
          <div className="w-fit rounded-lg bg-white px-2 py-1">
            <Image
              src="/Logo.webp"
              alt="Rufino Baterias"
              width={1024}
              height={347}
              className="h-10 w-auto lg:h-12"
            />
          </div>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
            Bateria nova sem enrolação em Vespasiano: entrega e instalação no
            mesmo dia, com as marcas em que você confia.
          </p>

          <WhatsAppLink className="mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-base font-bold text-white active:scale-[0.98] lg:w-fit lg:px-8">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.6 14.7 3.1 13.4 3.1 12c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9z" />
            </svg>
            Falar no WhatsApp
          </WhatsAppLink>
        </div>

        <nav className="mt-8 grid grid-cols-2 gap-y-3 border-t border-white/10 pt-8 text-sm text-zinc-300 lg:mt-0 lg:grid-cols-1 lg:gap-y-4 lg:border-t-0 lg:pt-2">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="active:text-white lg:transition-colors lg:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-500 lg:mt-0 lg:border-t-0 lg:pt-2 lg:text-sm">
          <p>Vespasiano, MG</p>
          <p className="mt-1">Seg a sáb · 8h às 18h</p>
          <p className="mt-4">
            © {year} Rufino Baterias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
