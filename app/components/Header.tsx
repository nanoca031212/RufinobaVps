import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";

const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Veículos", href: "#veiculos" },
  { label: "Produtos", href: "#marcas" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-100 bg-white px-5 py-4 lg:px-12 lg:py-4">
      <Image
        src="/Logo.webp"
        alt="Rufino Baterias"
        width={1024}
        height={347}
        priority
        className="h-12 w-auto lg:h-14"
      />

      <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 lg:flex">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors hover:text-black"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <WhatsAppLink
        aria-label="Falar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] lg:h-12 lg:w-12 shadow-md"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white lg:h-6 lg:w-6">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
          <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.9.9-3.2-.2-.3C3.6 14.7 3.1 13.4 3.1 12c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9z" />
        </svg>
      </WhatsAppLink>
    </header>
  );
}
