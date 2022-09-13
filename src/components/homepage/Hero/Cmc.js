import { /* useEffect */ useState } from "react";

function Cmc() {
  const [cardName, setCardName] = useState();
  const [cardNamelist, setCardNamelist] = useState([]);
  const [manaCost, setmanaCost] = useState([]);

  function handleCardName(event) {
    setCardName(event.target.value);
  }

  /*   useEffect(() => {
    console.log(cardNamelist)
  }, [cardNamelist]) */

  function handleSearch(e) {
    e.preventDefault();

    setCardNamelist(cardName.split("\n"));
    console.log(cardNamelist);
    cardNamelist.forEach((item) =>
      fetch(`https://api.scryfall.com/cards/search?q=${item}`)
        .then((response) => response.json())
        .then((data) => data.data[0].mana_cost)
        .then((element) => {
          console.log("console", element);
          setmanaCost([...manaCost, element]);
        })
    );

    console.log(manaCost);
    /*  setCardNamelist([]) */
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <form
        className="d-flex flex-column align-items-center justify-content-center mt-3"
        onSubmit={handleSearch}
      >
        <textarea
          type="text"
          className=" border border-dark"
          rows={3}
          placeholder="1st Card Name&#10;2nd Card Name&#10;3rd Card Name..."
          onChange={handleCardName}
        ></textarea>
        <button type="submit" className=" w-100 mt-1 border border-dark">
          Send
        </button>
      </form>
      <ul
        className={
          manaCost.length === 0
            ? ""
            : "mt-3 align-self-start mt-5 border border-dark border-2 px-5 py-3 ms-2"
        }
      >
        {manaCost.map((manacost, index) => (
          <li key={manacost + index}>{manacost}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cmc;
