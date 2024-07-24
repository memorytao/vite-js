import { LinkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const URL = "https://randomfox.ca/floof/?ref=public_apis";

function Images(props) {
  const [fox, setFox] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(URL);
      const fox = await res.json();
      console.log(fox.image, fox.link);
      setFox(fox);
    };
    getData();
  }, []);

  return <>{fox && <img src={fox.image}></img>}</>;
}

export default Images;
