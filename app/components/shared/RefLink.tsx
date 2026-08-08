import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export default function RefLink({
  href,
  children,
  className,
  target = "_blank",
}: {
  href: Url;
  children?: React.ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}) {
  const hrefString = typeof href === "string" ? href : href.toString();
  const isExternal = hrefString.startsWith("http");
  const finalHref =
    isExternal && !hrefString.includes("?")
      ? `${hrefString}?ref=aklileansa.com`
      : hrefString;

  return (
    <Link
      href={finalHref}
      rel="noopener"
      target={target}
      className={className}
    >
      {children}
    </Link>
  );
}
