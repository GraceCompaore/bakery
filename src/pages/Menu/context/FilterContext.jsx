import React, { useState } from 'react';

const defaultFilter = {
  categories: [],
  minPrice: null,
  maxPrice: null,
};

export const FilterContext = React.createContext(defaultFilter);

export const FilterProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  return (
    <FilterContext.Provider
      value={{
        categories,
        setCategories,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};