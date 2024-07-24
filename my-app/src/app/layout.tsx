import type { Metadata } from "next";
import { DM_Serif_Display} from "next/font/google";
import "./globals.css";
import Nav from '@/components/Nav'

const Actor = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
 });

export const metadata: Metadata = {
  title: "Muhammad Abdullah",
  description: "Portfolio by Muhammad Abdullah",
  icons:{
    icon:'/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Actor.className}>
        <Nav></Nav>
        {children}</body>
    </html>
  );
}
