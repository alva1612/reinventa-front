import { ProductCard } from "@/components/ui/ProductCard";
import ShortcutsButton from "@/components/ShortcutsButton";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <>
      <div className="pt-4 mx-4">
        <h1 className="text-lg text-cyan-500 font-bold">HOLA Jaime</h1>
        <h2>Te damos la bienvenida a Banbif app</h2>
      </div>
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
        <ShortcutsButton/>  
    </>
  );
}
