import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-40 text-center">
      <p className="text-xs tracking-[0.3em] text-gold uppercase">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-playfair)] text-4xl text-white">
        Página no encontrada
      </h1>
      <p className="mt-4 text-white/60">
        La página que buscas no existe en el archivo.
      </p>
      <Link
        href="/"
        className="link-gold mt-8 text-sm tracking-[0.15em] uppercase"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
