import React, { useState } from "react";
import { data } from "../data";

export const GlobalContext = React.createContext();

const ContextAPI = ({ children }) => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(() => {
      return people.filter((p) => p.id !== id);
    });
  };

  return (
    <GlobalContext.Provider value={{ removePerson, people }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextAPI;
