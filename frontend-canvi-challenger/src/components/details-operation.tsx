import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { FetchPixDetails } from "@/api/dynamic-pix";
import { useState } from "react";

interface DetailsOperationProps {
  rowId: number;
}

export const DetailsOperation = ({ rowId }: DetailsOperationProps) => {
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["find-invoice-details", rowId],
    queryFn: () => FetchPixDetails(rowId),
    enabled: open, // Só busca ao abrir o Sheet
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-canvi-pink text-white cursor-pointer"
        >
          Detalhes {rowId}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="p-2">
          <SheetTitle>Detalhes da Operação</SheetTitle>
          <SheetDescription className="p-2">
            {isLoading ? (
              <div className="w-full h-full flex justify-center items-center">
                <p>Carregando detalhes...</p>
              </div>
            ) : data ? (
              <div className="w-full rounded-lg border p-4 space-y-4">
                <div>
                  <span className="font-semibold">Nome:</span>{" "}
                  {data.Client.name}
                </div>
                <div>
                  <span className="font-semibold">Valor:</span> {data.amount}
                </div>
                <div>
                  <span className="font-semibold">Documento:</span>{" "}
                  {data.Client.documentNumber} (
                  {data.Client.documentType.toUpperCase()})
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  {data.Client.email}
                </div>
                <div>
                  <span className="font-semibold">Criado em:</span>{" "}
                  {new Date(data.createdAt).toLocaleString()}
                </div>
                <div>
                  <span className="font-semibold">Vencimento em:</span>{" "}
                  {new Date(data.maturity).toLocaleString()}
                </div>
                <div className="w-[full max-w-xs">
                  <img
                    src={data.qrCode}
                    alt="Logo da Empresa"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : (
              <p>Dados não encontrados.</p>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
