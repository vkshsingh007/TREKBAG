import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handelAddItem,
  handelRemoveAllItems,
  handelResetToInitialItem,
  handelMarkAllComplete,
  handelMarkAllIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handelAddItem} />
      <ButtonGroup
        handelRemoveAllItems={handelRemoveAllItems}
        handelResetToInitialItem={handelResetToInitialItem}
        handelMarkAllComplete={handelMarkAllComplete}
        handelMarkAllIncomplete={handelMarkAllIncomplete}
      />
    </div>
  );
};

export default Sidebar;
