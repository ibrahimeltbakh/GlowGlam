"use server";
import { signIn } from "next-auth/react";

export async function handleSignIn() {
  try {
    const response = await signIn("google", { callbackUrl: "/" });
    console.log("Sign-in response:", response);
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
}
