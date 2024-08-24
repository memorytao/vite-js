import { NavLink, Outlet } from "react-router-dom";
export default function Categories() {
  return (
    <>
      <NavLink to="male"> Men </NavLink>
      <NavLink to="female"> Women </NavLink>
      <Outlet />
    </>
  );
}
