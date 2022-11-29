import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { useGlobalContext } from "../utils/useGlobalContext";
import { SinglePerson } from "./SinglePerson";

export const PersonList = () => {
  const { people } = useGlobalContext();

  return (
    <>
      <h1>Context</h1>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};
