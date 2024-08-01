import Card from "../../components/Card/Card";
import harbor from "../../assets/cards/StockCake-Eclectic_Shopping_Collage_1721963763.jpg";
import seaSunset from "../../assets/cards/StockCake-Tranquil Sea Sunset_1721837523.jpg";
import sunriceSerenity from "../../assets/cards/StockCake-Winter Sunrise Serenity_1721837561.jpg";

const Menu = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card image={harbor} title="NBA" description="Set up banner priority" />
      <Card image={seaSunset} title="Titile" description="Description" />
      <Card image={sunriceSerenity} title="Title" description="Description" />
    </div>
  );
};

export default Menu;
