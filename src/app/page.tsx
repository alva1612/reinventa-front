import { ProductCard } from "@/components/ui/ProductCard";
import ShortcutsButton from "@/components/ShortcutsButton";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Salute } from "@/components/ui/Salute/Salute";

export default function Home() {
  return (
    <>
      <Salute className="mt-4" message="Te damos la bienvenida a BanBif App" />
      <ScrollArea className="w-full">
        <div className="flex p-4 gap-2">
          <ProductCard
            amount="10,000"
            productId="Cta: 123-123-123-123"
            productName="Cuenta sueldo"
          />
          <ProductCard
            amount="10,000"
            productId="Cta: 123-123-123-123"
            productName="Cuenta sueldo"
          />
          <ProductCard
            amount="10,000"
            productId="Cta: 123-123-123-123"
            productName="Cuenta sueldo"
          />
          <ProductCard
            amount="10,000"
            productId="Cta: 123-123-123-123"
            productName="Cuenta sueldo"
          />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <h1>Hola Jaime</h1>
      <h2>Te damos la bienvenida a Banbif app</h2>
      <ShortcutsButton />
    </>
  );
}
