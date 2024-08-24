import { Link } from "react-router-dom";

const PageNav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/categories" className="text-white hover:text-gray-300">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PageNav;
