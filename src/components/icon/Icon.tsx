import { AiFillBank } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoQrCode } from "react-icons/io5";
import { IoIosGift } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";

import { ReactNode, memo } from "react";

export type IconKey =
  | "bank"
  | "home"
  | "plin"
  | "qr"
  | "gift"
  | "menu"
  | "share";
const IconDict: Record<IconKey, ReactNode> = {
  home: <IoHome />,
  bank: <AiFillBank />,
  plin: <FaMoneyBillTransfer />,
  qr: <IoQrCode />,
  gift: <IoIosGift />,
  menu: <CiMenuFries />,
  share: <FaShareAlt />,
};

const Comp = ({ type }: { type: IconKey }) => {
  return <>{IconDict[type]}</>;
};

export const Icon = memo(Comp);
