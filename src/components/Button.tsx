import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300";
  const styles =
    variant === "primary"
      ? "border border-gold bg-gold text-black hover:bg-transparent hover:text-gold"
      : "border border-white/30 text-white hover:border-gold hover:text-gold";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
