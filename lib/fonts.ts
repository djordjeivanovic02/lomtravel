import { DM_Sans, Nothing_You_Could_Do, Roboto } from "next/font/google";

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "700"],
});

export const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nothing-you-could-do",
  weight: ["400"],
});
