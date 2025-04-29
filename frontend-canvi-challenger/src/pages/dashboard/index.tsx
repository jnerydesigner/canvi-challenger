import { GeneratePix } from "@/components/generate-pix";
import { OperationsTable } from "@/components/operations-table";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-full p-6 mx-auto bg-canvi-purple-light flex justify-center items-center flex-col">
      <h1 className="text-white font-bold">Bem-vindo ao Dashboard da Canvi!</h1>
      <GeneratePix />
      <OperationsTable />
    </div>
  );
}
