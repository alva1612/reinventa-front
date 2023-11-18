import clsx from "clsx";

interface SaluteProps {
  message: string;
  className?: string;
}
export const Salute = ({ message, className }: SaluteProps) => {
  return (
    <div className={clsx("mx-4", className)}>
      <h1 className="text-lg text-cyan-500 font-bold">HOLA Jaime</h1>
      <h2>{message}</h2>
    </div>
  );
};
