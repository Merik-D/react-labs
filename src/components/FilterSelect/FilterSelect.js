import React from "react";
import "./FilterSelect.css";

const FilterSelect = ({ options, value, onChange }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>None</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
