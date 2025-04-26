import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/"); // 🔒 Se não tem token, volta para login
    }
  }, [navigate]);

  return (
    <div className="p-6">
      <h1>Bem-vindo à Dashboard!</h1>
    </div>
  );
}
