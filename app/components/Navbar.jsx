import React from "react";
import Logout from "./Logout";
import Link from "next/link";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession();
  console.log(session, "  session in navbar");
  return (
    <nav className="border flex gap-2 justify-between items-center p-2">
      <div>Navbar</div>
      <div>
        {!!session ? (
          <>
            <Logout />
          </>
        ) : (
          <div className="flex gap-2">
            <Link href={"/signin"} className="p-1 border rounded">
              SignIn
            </Link>
            <Link href="/signup" className="p-1 border rounded">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
