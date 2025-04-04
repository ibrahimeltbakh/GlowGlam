import SignInButton from "@/components/Buttons/SigninButton";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold text-center">Welcome to E-commerce</h1>
      <h1 className="text-3xl font-bold text-center">Login with Google</h1>
      <SignInButton />
    </div>
  );
}
