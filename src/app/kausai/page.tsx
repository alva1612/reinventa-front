import { Salute } from "@/components/ui/Salute";
import { Button } from "@/components/ui/button";

export default function Kausai() {
  return (
    <>
      <Salute className="mt-4" message="¿Qué deseas protagonizar hoy?" />
      <div className="m-4 flex gap-4">
        <Button className="flex-1">Donar</Button>
        <Button className="flex-1">Presentar</Button>
      </div>
    </>
  );
}
