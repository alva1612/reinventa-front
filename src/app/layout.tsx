import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import { ReactNode } from "react";
import { AiFillBank } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type IconType = "bank" | "home" | "plin";
const Icon: Record<IconType, ReactNode> = {
  home: <IoHome />,
  bank: <AiFillBank />,
  plin: <FaMoneyBillTransfer />,
};
interface BottomBarBtnProps {
  icon: IconType;
  label: string;
}
const BottomBarButton = ({ icon, label }: BottomBarBtnProps) => {
  return (
    <>
      <div className={clsx("flex flex-col align-middle")}>
        {Icon[icon]}
        <p>{label}</p>
      </div>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={clsx("flex flex-col min-h-screen mx-8")}>
          {children}
        </div>
        <div
          className={clsx(
            "fixed bottom-0 w-screen left-0 right-0 flex justify-center"
          )}
        >
          <BottomBarButton icon="home" label="Inicio"></BottomBarButton>
          <BottomBarButton icon="plin" label="Plin"></BottomBarButton>
        </div>
      </body>
    </html>
  );
}
