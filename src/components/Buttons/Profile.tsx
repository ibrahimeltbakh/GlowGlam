import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth/next";
import authConfig from "@/utils/auth";

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <Link href={"/profile"} className="flex items-center gap-2">
      <img
        src={session?.user?.image as string}
        alt="user image"
        className="w-10 h-10 rounded-full"
      />
    </Link>
  );
}
