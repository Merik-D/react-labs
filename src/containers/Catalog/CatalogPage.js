import Catalog from "../Catalog/Catalog";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import { useState } from "react";

const CatalogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("None");
  const [selectedPrice, setSelectedPrice] = useState("None");

  const handleSearchFilterChange = (query, author, price) => {
    setSearchQuery(query);
    setSelectedAuthor(author);
    setSelectedPrice(price);
  };

  return (
    <div className="section">
      <hr />
      <FilterPanel
        setSearchQuery={setSearchQuery}
        setSelectedAuthor={setSelectedAuthor}
        setSelectedPrice={setSelectedPrice}
        onFilterChange={handleSearchFilterChange}
        searchQuery={searchQuery}
        selectedAuthor={selectedAuthor}
        selectedPrice={selectedPrice}
      />

      <hr />
      <Catalog
        searchQuery={searchQuery}
        selectedAuthor={selectedAuthor}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default CatalogPage;
