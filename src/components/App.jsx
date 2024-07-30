import { BackgroundHeading } from "./BackgroundHeading";
import { Footer } from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { initialItem } from "../lib/constants";

function App() {
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

  const handelMarkAllComplete = () => {
    const newItems = item.map((item) => ({ ...item, packed: true }));
    setItem(newItems);
  };

  const handelMarkAllIncomplete = () => {
    const newItems = item.map((item) => ({ ...item, packed: false }));
    setItem(newItems);
  };

  const totalNumberOfItems = item.length;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(item));
  }, [item]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={totalNumberOfItems}
          numberOfItemsPacked={item.filter((item) => item.packed).length}
        />
        <ItemList
          item={item}
          handelDeleteItem={handelDeleteItem}
          handelToggleItem={handelToggleItem}
        />
        <Sidebar
          handelAddItem={handelAddItem}
          handelRemoveAllItems={handelRemoveAllItems}
          handelResetToInitialItem={handelResetToInitialItem}
          handelMarkAllComplete={handelMarkAllComplete}
          handelMarkAllIncomplete={handelMarkAllIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
