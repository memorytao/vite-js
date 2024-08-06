import { Link } from "react-router-dom";

const PageNav = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/pricing"> Pricing </Link>
      <Link to="/categories"> Cagegories </Link>
    </>
  );
};

export default PageNav;
