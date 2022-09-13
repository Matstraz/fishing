import Header from "./Header/Header";
import Cmc from "./Hero/Cmc";
import CardPictures from "./Hero/CardPictures";

function Homepage() {
  return (
    <div className="w-100 vh-100 home">
      <Header />
      <CardPictures />
      <Cmc />
    </div>
  );
}

export default Homepage;
