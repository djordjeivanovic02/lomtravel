"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomIcon from "./icon";

type Props = {
  color?: string;
  radius?: string;
  padding?: string;
  signedText?: string | null | undefined;
  notSignedText?: string;
  signedUrl?: string;
  notSignedUrl?: string;
  signedIcon?: string;
  notSignedIcon?: string;
  action?: string;
};

export default function ClientLink({
  color = "main",
  radius = "",
  padding = "",
  signedText = "",
  notSignedText = "",
  signedUrl = "#",
  notSignedUrl = "#",
  signedIcon = "",
  notSignedIcon = "",
  action = "",
}: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  if (!signedText && session && session !== undefined) {
    signedText = session.user?.name || "";
  }

  const linkVisibility = action === "signout" ? "flex" : "hidden md:flex";

  return (
    <Link
      href={session ? signedUrl : notSignedUrl}
      className={`bg-${color} rounded-${radius} ${padding} text-white flex justify-center items-center gap-3 hover:bg-title transition-all duration-300 ease-in-out ${linkVisibility}`}
      onClick={
        action === "signout" && session
          ? async () => {
              await signOut({ redirect: false });
              router.replace("/");
            }
          : undefined
      }
    >
      {session ? signedText : notSignedText}
      {(signedIcon || notSignedIcon) && (
        <CustomIcon name={session ? signedIcon : notSignedIcon} />
      )}
    </Link>
  );
}
