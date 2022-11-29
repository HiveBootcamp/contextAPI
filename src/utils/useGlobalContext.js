import { useContext } from "react";
import { GlobalContext } from "../context/context";

export const useGlobalContext = () => {
  const appContext = useContext(GlobalContext);
  return appContext;
};
