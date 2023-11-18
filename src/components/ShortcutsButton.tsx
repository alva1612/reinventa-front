import { Button } from "@/components/ui/button"
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

const ShortcutsButton = () => {

    return (<>
        <section>
            <BottomBarButton icon="plin" label="Transferir"></BottomBarButton>
        </section>
    </>)
}

export default ShortcutsButton