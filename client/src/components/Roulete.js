import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";

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

  const handlePrizeDefined = () => {
    console.log("🥳 Prize defined! 🥳");
    console.log(prizeList[prizeIndex]);
    setPrizeChosen(true);
  };

  return (
    <>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
        options={{ stopInCenter: true }}
        defaultDesignOptions={{ prizesWithText: true }}
      />
      <button className='button-85' onClick={handleStart}>
        PRESS HERE FOR AN IDEA
      </button>
    </>
  );
};

export default App;
