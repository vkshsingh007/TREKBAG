import { useItemContext } from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

const Header = () => {
  const { item } = useItemContext();
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
