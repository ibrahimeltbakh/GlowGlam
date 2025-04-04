"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function SignInButton() {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
    console.log("pressed sign in button");
  };

  return (
    <button
      type="button"
      onClick={handleSignIn}
      className="flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google Logo"
        width={20}
        height={20}
        className="mr-2"
      />
      Sign in with Google
    </button>
  );
}

export default SignInButton;
