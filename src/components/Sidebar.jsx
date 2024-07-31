import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemContext } from "../lib/hooks";

const Sidebar = () => {
  const { handelAddItem } = useItemContext();
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handelAddItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
