import { useState } from "react";

function CardPictures() {
  const [cardName, setCardName] = useState();
  const [cardPic, setCardPic] = useState();

  function handleCardName(event) {
    setCardName(event.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    fetch(`https://api.scryfall.com/cards/search?q=${cardName}`)
      .then((response) => response.json())
      .then((data) => setCardPic(data.data[0].image_uris.small));

  }

  return (
    <div>
      <form className="d-flex justify-content-center mt-2" onSubmit={handleSearch}>
        <input type="text" className=" border border-dark" onChange={handleCardName}></input>
        <button type="submit" className="ms-1 border border-dark">Search</button>
      </form>
      <div className="d-flex justify-content-center mt-3" >
      <img src={cardPic} alt=""></img>
      </div>
      
    </div>
  );
}

export default CardPictures;
