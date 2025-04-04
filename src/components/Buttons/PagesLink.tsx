"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function PagesLink({
  page,
}: {
  page: { name: string; href: string };
}) {
  const pathName = usePathname();
  return (
    <Link
      href={page.href}
      className={` ${pathName === page.href ? "text-teal-600" : "text-white"}
                text-2xl hover:text-teal-900
              `}>
      {page.name}
    </Link>
  );
}
