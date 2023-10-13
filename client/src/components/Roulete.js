import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import Iframe from "react-iframe";

const App = () => {
  const [start, setStart] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [prizeChosen, setPrizeChosen] = useState(false);

  const dishes = recipes.map((recipee) => ({
    id: recipee._id,
    image: recipee.imageUrl,
    text: recipee.dishname,
    recipeLink: recipee.recipe,
  }));

  const winPrizeIndex = Math.floor(Math.random() * dishes.length);

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...dishes,
    ...reproductionArray(dishes, dishes.length * 3),
    ...dishes,
    ...reproductionArray(dishes, dishes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const handlePrizeDefined = () => {
    setPrizeChosen(true);

    console.log("🥳 Prize defined! 🥳");
    console.log(prizeList[prizeIndex]);
  };

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));

  function getRecipes() {
    try {
      axios.get("http://localhost:3000/").then((response) => {
        setRecipes(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  const prizeIndex = dishes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart((prevState) => !prevState);
    setPrizeChosen(false);
  };

  return (
    <>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        defaultDesignOptions={{ prizesWithText: true }}
        options={{ stopInCenter: true }}
        onPrizeDefined={handlePrizeDefined}
        spinningTime={3}
      />
      <button className='button-85' onClick={handleStart}>
        PRESS HERE FOR AN IDEA
      </button>
      {prizeChosen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2em",
          }}
        >
          <Iframe
            url={prizeList[prizeIndex].recipeLink}
            width='640px'
            height='320px'
            id=''
            className='iFrame'
            display='block'
            position='relative'
            align='center'
          />
        </div>
      )}
    </>
  );
};

export default App;
