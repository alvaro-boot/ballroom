import Link from "next/link";

const navLinks = [
  { href: "/historia", label: "Historia" },
  { href: "/linea-del-tiempo", label: "Línea del tiempo" },
  { href: "/casas", label: "Casas" },
  { href: "/categorias", label: "Categorías" },
  { href: "/identidades", label: "Identidades" },
  { href: "/leyendas", label: "Leyendas" },
  { href: "/documentales", label: "Documentales" },
  { href: "/galeria", label: "Galería" },
  { href: "/blog", label: "Blog" },
  { href: "/recursos", label: "Recursos" },
  { href: "/sobre", label: "Sobre Cuarzo 007" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="group">
          <span className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.15em] text-white uppercase transition-colors group-hover:text-gold">
            Vogue Society
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.12em] text-white/70 uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <details className="relative xl:hidden">
          <summary className="cursor-pointer list-none text-xs tracking-[0.2em] text-gold uppercase">
            Menú
          </summary>
          <nav className="absolute top-full right-0 mt-4 w-56 border border-white/10 bg-dark-gray p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-xs tracking-[0.1em] text-white/70 uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
