import { Open_Sans } from "next/font/google";
import "./globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Edilitics",
  metadataBase: new URL("https://edilitics-next.vercel.app"),
  applicationName: "edilitics.com",
  authors: [
    {
      name: "Ediltics",
      url: "https://edilitics-next.vercel.app",
    },
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  creator: "Edilitics",
  manifest: `/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
