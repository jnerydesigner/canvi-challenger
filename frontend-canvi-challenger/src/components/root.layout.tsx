import { Outlet } from "react-router";
import { Header } from "./header";

export const RootLayout = () => {
  return (
    <div className="mx-auto max-w-md overflow-hidden bg-canvi-purple-light md:max-w-7xl">
      <Header />
      <Outlet />
    </div>
  );
};
