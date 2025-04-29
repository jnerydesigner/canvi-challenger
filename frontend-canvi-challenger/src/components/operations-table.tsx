import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { FetchPixList } from "@/api/dynamic-pix";
import { DetailsOperation } from "./details-operation";

export type ClientType = {
  name: string;
};

export type DynamicPixType = {
  id: number;
  pixInvoiceId: number;
  amount: number;
  collectorName: string;
  Client: ClientType;
};

export function OperationsTable() {
  const { data: dynamicPix, isLoading } = useQuery({
    queryKey: ["list-dynamic-pix"],
    queryFn: () => FetchPixList(),
  });

  const columnsDynamicPix: ColumnDef<DynamicPixType>[] = [
    { accessorKey: "pixInvoiceId", header: "Invoice" },
    { accessorKey: "amount", header: "Valor" },
    { accessorKey: "collectorName", header: "Empresa" },
    {
      header: "Cliente",
      accessorFn: (row) => row.Client?.name ?? "N/A",
      id: "clientName",
    },
    {
      header: "Ações",
      id: "actions",
      cell: ({ row }) => (
        <DetailsOperation
          key={row.original.pixInvoiceId}
          rowId={row.original.pixInvoiceId}
        />
      ),
    },
  ];

  const table = useReactTable({
    data: dynamicPix ?? [],
    columns: columnsDynamicPix,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center bg-gray-100">
        <h1>Carregando</h1>
      </div>
    );
  }

  return (
    <Card className="w-full mt-6">
      <CardContent>
        <table className="w-full text-left border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-2 border-b">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2 border-b">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
