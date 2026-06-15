import Image from "next/image";

type SiteLogoProps = {
  href?: string;
  variant?: "header" | "mobile" | "footer";
  className?: string;
  onClick?: () => void;
};

const variantClasses = {
  header: "h-10 w-auto sm:h-11",
  mobile: "h-9 w-auto",
  footer: "h-14 w-auto sm:h-16",
};

export default function SiteLogo({
  href = "/",
  variant = "header",
  className = "",
  onClick,
}: SiteLogoProps) {
  const image = (
    <Image
      src="/createmyshop-logo.png"
      alt="CreateMyshop.in"
      width={180}
      height={180}
      className={`object-contain ${variantClasses[variant]} ${className}`}
      priority={variant === "header"}
    />
  );

  if (variant === "footer") {
    return <span className="inline-flex items-center">{image}</span>;
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex shrink-0 items-center hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded-lg transition-opacity"
    >
      {image}
    </a>
  );
}
