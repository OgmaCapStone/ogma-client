import React, { createContext, useReducer } from "react";

const initialState = {
  technology: "",
  level: "",
  questions: "",
};
const store = createContext(initialState);
const { Provider } = store;

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_TECHNOLOGY":
        return {
          ...state,
          technology: action.technology,
        };

      case "SET_LEVEL":
        return {
          ...state,
          level: action.level,
        };

      case "RATE_QUESTION":
        return {
          ...state,
          questions: [...state.questions, action.question],
        };

      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, ContextProvider };
