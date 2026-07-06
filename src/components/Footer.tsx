import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark-gray">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.1em] text-white uppercase">
              {siteConfig.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Explorar</p>
            <div className="mt-4 flex flex-col gap-2">
              {[
                { href: "/historia", label: "Historia" },
                { href: "/casas", label: "Casas" },
                { href: "/categorias", label: "Categorías" },
                { href: "/identidades", label: "Identidades" },
                { href: "/leyendas", label: "Leyendas" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Archivo</p>
            <div className="mt-4 flex flex-col gap-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/recursos", label: "Glosario" },
                { href: "/documentales", label: "Documentales" },
                { href: "/sobre", label: "Sobre Cuarzo 007" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Vogue Society. Todos los derechos reservados.
          </p>
          <p className="font-[family-name:var(--font-cormorant)] text-sm text-gold italic">
            Preservando la memoria de Ballroom.
          </p>
        </div>
      </div>
    </footer>
  );
}
