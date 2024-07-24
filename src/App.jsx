import Card from "./components/Card/Card";

import harbor from "./assets/cards/StockCake-Sunset Harbor View_1721837549.jpg";
import seaSunset from "./assets/cards/StockCake-Tranquil Sea Sunset_1721837523.jpg";
import sunriceSerenity from "./assets/cards/StockCake-Winter Sunrise Serenity_1721837561.jpg";

const App = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        image={harbor}
        title="Card Title here"
        description="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
      />
      <Card
        image={seaSunset}
        title="Card Title here"
        description="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
      />
      <Card
        image={sunriceSerenity}
        title="Card Title here"
        description="Lorem ipsum dolor sit amet, vehiculaum ero felis loreum fitiona fringilla goes scelerisque Interdum et."
      />
    </div>
  );
};

export default App;
