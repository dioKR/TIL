import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => {
  return <FaStar color={selected ? "gold" : "grey"} onClick={onSelect} />;
};

const createArray = (length) => [...Array(length)];

const StarRating = ({ totalStarts = 5 }) => {
  const [selectedStar, setSelectedStar] = useState(2);

  return createArray(totalStarts).map((n, i) => (
    <Star
      key={i}
      selected={selectedStar > i}
      onSelect={() => setSelectedStar(i + 1)}
    />
  ));
};

export default StarRating;
