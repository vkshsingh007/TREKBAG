import { useItemStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

const Header = () => {
  const item = useItemStore((state) => state.item);
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={item.length}
        numberOfItemsPacked={item.filter((item) => item.packed).length}
      />
    </header>
  );
};

export default Header;
