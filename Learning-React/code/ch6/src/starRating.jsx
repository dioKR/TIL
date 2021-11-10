import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

export default function StarRating({ style = {}, totalStarts = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(3);

  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStarts).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} stars
      </p>
    </div>
  );
}
