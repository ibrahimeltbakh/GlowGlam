import React from "react";
import PagesLink from "./Buttons/PagesLink";
import { getServerSession } from "next-auth/next";
import authConfig from "@/utils/auth";
import Profile from "./Buttons/Profile";

const Navigation = async () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "Cart", href: "/cart" },
  ];

  const session = await getServerSession(authConfig);

  if (!session?.user) pages.push({ name: "Sign In", href: "/login" });

  return (
    <nav>
      <ul className="flex gap-4 mt-4">
        {pages.map((page) => (
          <li key={page.name}>
            <PagesLink page={page} />
          </li>
        ))}
        {session?.user && (
          <li>
            <Profile />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
