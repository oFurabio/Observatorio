import { Link } from "react-router-dom";

type CTAButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseStyles = `inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2`;
  const variants = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900",
    secondary: "bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 focus:ring-zinc-900",
  };

  return (
    <Link
      to={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
