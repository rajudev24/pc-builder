import React, { createContext, useState } from "react";

const PCItemsContext = createContext();

const PCItemsProvider = ({ children }) => {
  const [pcItems, setPcItems] = useState([]);

  return (
    <PCItemsContext.Provider value={{ pcItems, setPcItems }}>
      {children}
    </PCItemsContext.Provider>
  );
};

export { PCItemsContext, PCItemsProvider };
