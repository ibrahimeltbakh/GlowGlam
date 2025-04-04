"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  const handleLogout = () => {
    signOut({ callbackUrl: "/" }); 
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {session?.user ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <img
            src={session.user.image as string}
            alt="User Image"
            className="w-32 h-32 rounded-full mb-4"
          />
          <p className="text-xl">Name: {session.user.name}</p>
          <p className="text-xl">Email: {session.user.email}</p>
          <button
            onClick={handleLogout}
            className="mt-4 p-2 bg-red-600 text-white rounded-md">
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
