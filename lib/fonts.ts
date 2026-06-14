import localFont from "next/font/local";

export const clashDisplay = localFont({
  src: "../public/fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
  weight: "200 700",
  display: "swap",
});

export const fontVariables = clashDisplay.variable;
