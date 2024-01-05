import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";

export default function Home() {
  const { data: session } = getServerSession();

  if (session && session.user) {
    console.log("session.user", session?.user);
    return (
      <button onClick={() => signOut()} className="p-1 border rounded">
        {session.user.name} Sign Out
      </button>
    );
  }

  return (
    <>
      <h1>Landing Page</h1>
    </>
  );
}
