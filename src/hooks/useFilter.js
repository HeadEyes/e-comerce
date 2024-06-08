import { useContext } from "react";
import { FiltersContext } from "../context/filterContext.jsx";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    const data = [...products];

    return data
      .filter((data) => {
        return filters.category === "all" || data.category === filters.category;
      })
      .sort((a, b) => {
        if (filters.price === false) {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      });

  };

  return { filters, filterProducts, setFilters };
}
