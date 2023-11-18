import { Icon } from "@/components/icon/Icon";
import { Card } from "../card";

interface ProductCardProps {
  productName: string;
  amount: string;
  productId: string;
}

export const ProductCard = ({
  amount,
  productId,
  productName,
}: ProductCardProps) => {
  return (
    <Card className="p-4 w-72">
      <h4>{productName}</h4>
      <div className="flex flex-col">
        <span className="text-cyan-500 font-extrabold text-3xl text-center">
          S/. {amount}
        </span>
        <span className="text-gray-400 text-center text-xs">Disponible</span>
      </div>
      <div className="flex w-full justify-between mt-4">
        <p className="text-gray-400 text-sm">{productId}</p>{" "}
        <div className=" flex align-middle justify-center">
          <Icon type="share" />
        </div>
      </div>
    </Card>
  );
};
