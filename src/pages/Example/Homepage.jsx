import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <p> This is Homepage </p>
      <button
        onClick={() => navigate("/categories")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Categories
      </button>
    </>
  );
}

export default Homepage;
