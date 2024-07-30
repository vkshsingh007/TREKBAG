import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ onAddItem }) => {
  const [itemText, setItemText] = useState();
  const inputRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    //basic validation error
    if (!itemText) {
      alert("Please enter a valid item name");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
  };
  return (
    <form onSubmit={handelSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
