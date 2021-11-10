import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./colorList";

const App = (props) => {
  const [colors, setColors] = useState(colorData.colors);

  return (
    <ColorList
      colors={colors}
      onRateColor={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
      }}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => color.id !== id);
        setColors(newColors);
      }}
    />
  );
};

export default App;
