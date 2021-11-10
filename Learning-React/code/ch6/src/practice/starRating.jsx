import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => {
  return <FaStar color={selected ? "gold" : "grey"} onClick={onSelect} />;
};

const createArray = (length) => [...Array(length)];

const StarRating = ({
  totalStarts = 5,
  selectedStarts = 0,
  onRate = (f) => f,
}) => {
  return (
    <>
      {createArray(totalStarts).map((n, i) => (
        <Star
          key={i}
          selected={selectedStarts > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStarts} / {totalStarts}
      </p>
    </>
  );
};

export default StarRating;
