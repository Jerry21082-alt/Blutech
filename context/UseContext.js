"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export default function UseContext({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const supplier = "FragranceX";
      const search = "EAU SAUVAGE by Christian Dior";
      const quantity_gt = 2;
      const cost_price_lt = 20;

      const url = new URL("http://3.88.1.181:8000/products/public/catalog");
      url.searchParams.append("supplier", supplier);
      url.searchParams.append("search", search);
      url.searchParams.append("Quantity_gt", quantity_gt);
      url.searchParams.append("Cost Price_lt", cost_price_lt);

      try {
        const response = await fetch(url.toString());
        if (!response.ok) {
          throw new Error("Invalid reponse!");
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <Context.Provider value={{ data, isLoading }}>{children}</Context.Provider>
  );
}

export const contextFun = () => useContext(Context);
