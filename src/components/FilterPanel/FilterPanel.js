import React, { useEffect, useState } from "react";
import "./FilterPanel.css";
import FilterSelect from "../../components/FilterSelect/FilterSelect";
import SearchInput from "../SearchInput/SearchInput";
import { getAuthors, getPrices } from "../../services/song_api";

const FilterPanel = ({
  setSearchQuery,
  setSelectedAuthor,
  setSelectedPrice,
  searchQuery,
  selectedAuthor,
  selectedPrice,
}) => {
  const [authorOptions, setAuthorOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authors = await getAuthors();
        const prices = await getPrices();

        setAuthorOptions(authors);
        setPriceOptions(prices);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery, selectedAuthor, selectedPrice]);

  return (
    <div className="panel">
      <label>By author</label>
      <FilterSelect
        options={authorOptions}
        value={selectedAuthor}
        onChange={(value) => setSelectedAuthor(value)}
      />
      <label>By price</label>
      <FilterSelect
        options={priceOptions}
        value={selectedPrice}
        onChange={(value) => setSelectedPrice(value)}
      />
      <SearchInput onInputChange={setSearchQuery} />
    </div>
  );
};

export default FilterPanel;
