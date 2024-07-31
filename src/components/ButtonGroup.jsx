import { useItemStore } from "../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllCompleted = useItemStore((state) => state.markAllCompleted);
  const markAllIncomplete = useItemStore((state) => state.markAllIncomplete);
  const resetToInitialItem = useItemStore((state) => state.resetToInitialItem);
  const removeAllItems = useItemStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button onClick={markAllCompleted} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitialItem} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
