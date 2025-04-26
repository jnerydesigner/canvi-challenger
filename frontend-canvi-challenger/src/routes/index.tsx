import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import { Routes, Route } from "react-router";

export const RotesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
