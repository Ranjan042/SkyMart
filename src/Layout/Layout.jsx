import { Outlet } from "react-router";
import CartDrawer from "../components/CartDrawer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <CartDrawer />
    </>
  );
};

export default Layout;