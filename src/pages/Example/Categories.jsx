import { NavLink, Outlet } from "react-router-dom";
export default function Categories() {
  return (
    <>
      <NavLink to="men"> Men </NavLink>
      <NavLink to="women"> Women </NavLink>
      <Outlet />
    </>
  );
}
