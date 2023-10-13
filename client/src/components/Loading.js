import React from "react";
import Loading from "react-fullpage-custom-loader";

const defaultProps = {
  sentences: [
    "As a chef prepares, so shall you feast. And I know that hunger is real, but the flavors we'll unveil are worth every meal!",
    "The kitchen warriors never take a break, and neither should you! While you wait, we're cooking up something great!",
    "I know I'm not a Michelin-star chef, but every dish I share is made with love and care. So, get your taste buds ready for a culinary affair!",
    "The recipe of life is a little bit of spice and a dash of surprise. Stay tuned, we're about to roll the foodie dice!",
    "Just like a secret ingredient, our loading screen adds a little suspense to your food adventure. Stay tuned for the recipe you'll remember!",
    "In the world of food, there's no room for being bland. We're spicing up your day, so stick around and take a stand!",
    "Food is an art, and every dish is a masterpiece. Hang tight while we craft your next culinary release!",
  ],
  loaderType: "ball-clip-rotate-multiple",
  loaderSize: "big",
  color: "#ff7f66",
  textStyles: {
    fontSize: 36,
    height: "6em",
    color: "#fffbf1",
    textShadow: "3px 3px 5px rgba(60, 127, 80, 0.5)",
  },
  wrapperBackgroundColor: "linear-gradient(to bottom, #363636, #000000)",
  counter: false,
  counterMax: 3,
  counterDelay: 2000,
  counterChars: "🍋",
  counterStyles: {
    color: "#b6ffd8",
    fontSize: 20,
    fontWeight: "bold",
    textShadow: "rgb(60, 127, 80) 1px 1px 1px",
  },
  fadeIn: true,
  startFadeOut: false,
};

const Lime = (props) => {
  return <Loading {...defaultProps} {...props} />;
};

export default Lime;
