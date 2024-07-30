import Button from "./Button";

const ButtonGroup = ({
  handelRemoveAllItems,
  handelResetToInitialItem,
  handelMarkAllComplete,
  handelMarkAllIncomplete,
}) => {
  return (
    <section className="button-group">
      <Button onClick={handelMarkAllComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handelMarkAllIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handelResetToInitialItem} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handelRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
