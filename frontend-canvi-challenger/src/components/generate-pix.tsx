import { DatePicker } from "./date-picker";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreatePix } from "@/api/dynamic-pix";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export const createPixFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  cpf: z
    .string()
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF inválido (use formato XXX.XXX.XXX-XX)"
    ),
  amount: z
    .number({ invalid_type_error: "Valor deve ser um número" })
    .positive("Valor deve ser positivo"),
});

export type TypePix = z.infer<typeof createPixFormSchema>;

export const GeneratePix = () => {
  const queryClient = useQueryClient();
  const [dueDate, setDueDate] = useState<Date | undefined>(new Date());
  const mutation = useMutation({
    mutationFn: (data: TypePix & { dueDate: Date | undefined }) =>
      CreatePix(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["list-dynamic-pix"] });
      toast.success("Pix Gerado com Sucesso");
    },
  });
  const { register, handleSubmit } = useForm<TypePix>();

  const onSubmit = (data: TypePix) => {
    console.log("Form data:", data);
    console.log("Due date:", dueDate);

    mutation.mutate({ ...data, dueDate });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-[8px] bg-canvi-pink p-6 flex flex-row gap-4 justify-center items-center my-4"
      >
        <div className="w-[520px] p-2 flex justify-center items-center flex-col">
          <div className="w-[500px]">
            <label className="block text-white mb-1">Nome</label>
            <Input
              placeholder="Nome"
              value="Jander Nery"
              {...register("name")}
              className="w-full bg-white"
            />
          </div>
          <div className="w-[500px]">
            <label className="block text-white mb-1">Digite seu email</label>
            <Input
              placeholder="Digite o email"
              value="jander@gmail.com"
              {...register("email")}
              className="w-full bg-white"
            />
          </div>
          <div className="w-[500px]">
            <label className="block text-white mb-1">CPF</label>
            <Input
              placeholder="Digite seu cpf"
              value="908.982.860-50"
              className="w-full bg-white"
              {...register("cpf")}
            />
          </div>
          <div className="w-[500px]">
            <label className="block text-white mb-1">Valor</label>
            <Input
              placeholder="Digite o valor"
              className="w-full bg-white"
              {...register("amount")}
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <label className="block text-white mb-1">Data de Vencimento</label>
          <DatePickerWrapper dueDate={dueDate} setDueDate={setDueDate} />
        </div>

        <Button
          type="submit"
          className="mt-4 bg-white text-canvi-pink cursor-pointer"
        >
          Gerar Pix
        </Button>
      </form>
      <Toaster position="top-center" />
    </>
  );
};

const DatePickerWrapper = ({
  dueDate,
  setDueDate,
}: {
  dueDate: Date | undefined;
  setDueDate: (date: Date | undefined) => void;
}) => {
  return <DatePicker date={dueDate} setDate={setDueDate} />;
};
