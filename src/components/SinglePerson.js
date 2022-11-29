import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { useGlobalContext } from "../utils/useGlobalContext";

export const SinglePerson = ({ id, name, okupacija, opis }) => {
  const { removePerson } = useGlobalContext();
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};
