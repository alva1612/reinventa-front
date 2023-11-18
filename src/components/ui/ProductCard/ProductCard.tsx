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
    <Card className="p-4">
      <h4>{productName}</h4>
      <div>
        <span>S/. {amount}</span>
        <span>Disponible</span>
      </div>
      <div className="flex w-full justify-between">
        <p>{productId}</p> <Icon type="share" />
      </div>
    </Card>
  );
};
