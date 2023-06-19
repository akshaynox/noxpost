import "./globals.css";
import { Roboto } from "next/font/google";
import Nav from "./auth/Nav";
import QueryWrapper from "./auth/QueryWrapper";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Nox Post",
  description: "A simple post it app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-4 md:max-48 xl:mx-96 ${roboto.variable} font-sans bg-gray-200`}
        suppressHydrationWarning={true}
      >
        <QueryWrapper>
          <Nav />
          <Toaster />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
