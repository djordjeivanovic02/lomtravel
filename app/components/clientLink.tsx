"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ClientLink() {
  const { data: session } = useSession();
  return (
    <Link
      href={session ? "/dashboard" : "/destinations"}
      className="hidden md:flex bg-main rounded-full py-3 px-5 text-white first-l hover:bg-title transition-all duration-300 ease-in-out"
    >
      {session ? session.user?.name : "Rezervisi putovanje"}
    </Link>
  );
}
