// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="w-full px-4 py-3 bg-gray-800 text-white flex justify-between items-center shadow">
      <div className="w-[120px] max-w-xs">
        <img
          src="/logo_sem_fundo.png"
          alt="Logo da Empresa"
          className="w-full h-auto"
        />
      </div>
      <h1 className="text-xl font-bold text-canvi-pink">CANVI Dashboard</h1>
      <Button
        className="bg-canvi-purple text-white border-white hover:bg-canvi-pink cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </header>
  );
}
