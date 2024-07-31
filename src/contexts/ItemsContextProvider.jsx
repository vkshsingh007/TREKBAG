import { createContext, useEffect, useState } from "react";
import { initialItem } from "../lib/constants";

export const ItemContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));

  const [item, setItem] = useState(itemsFromLocalStorage || initialItem);

  const handelAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...item, newItem];
    setItem(newItems);
  };

  const handelDeleteItem = (id) => {
    const removeItem = item.filter((item) => item.id !== id);
    setItem(removeItem);
  };

  const handelToggleItem = (id) => {
    const newItems = item.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setItem(newItems);
  };

  const handelRemoveAllItems = () => {
    setItem([]);
  };

  const handelResetToInitialItem = () => {
    setItem(initialItem);
  };

  const handelMarkAllCompleted = () => {
    const newItems = item.map((item) => ({ ...item, packed: true }));
    setItem(newItems);
  };

  const handelMarkAllIncomplete = () => {
    const newItems = item.map((item) => ({ ...item, packed: false }));
    setItem(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(item));
  }, [item]);

  return (
    <ItemContext.Provider
      value={{
        item,
        handelAddItem,
        handelDeleteItem,
        handelToggleItem,
        handelRemoveAllItems,
        handelResetToInitialItem,
        handelMarkAllCompleted,
        handelMarkAllIncomplete,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemsContextProvider;
