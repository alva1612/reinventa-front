import { Icon, IconKey } from "@/components/icon/Icon";
import clsx from "clsx";

interface BottomBarBtnProps {
  icon: IconKey;
  label: string;
}
const BottomBarButton = ({ icon, label }: BottomBarBtnProps) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-col align-middle justify-center w-14 h-14 p-0"
        )}
      >
        <div className={clsx("flex align-middle justify-center")}>
          <Icon type={icon} />
        </div>
        <p className={clsx("text-center")}>{label}</p>
      </div>
    </>
  );
};
export const BottomNavigation = () => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 w-screen left-0 right-0 flex justify-between gap-2 px-4"
      )}
    >
      <BottomBarButton icon="home" label="Inicio"></BottomBarButton>
      <BottomBarButton icon="plin" label="Plin"></BottomBarButton>
      <BottomBarButton icon="qr" label="QR"></BottomBarButton>
      <BottomBarButton icon="gift" label="Para ti"></BottomBarButton>
      <BottomBarButton icon="menu" label="Más"></BottomBarButton>
    </div>
  );
};
