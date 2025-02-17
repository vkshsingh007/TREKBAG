import Select from "react-select";
import EmptyView from "./EmptyView";

import { useMemo, useState } from "react";
import { useItemStore } from "../stores/itemsStore";

const sortingOptions = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];

const ItemList = () => {
  const [sortBy, setSortBy] = useState("default");
  const item = useItemStore((state) => state.item);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const toggleItem = useItemStore((state) => state.toggleItem);

  const sortItems = useMemo(
    () =>
      [...item].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [item, sortBy]
  );

  return (
    <ul className="item-list">
      {item.length === 0 ? <EmptyView /> : null}

      {item.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onlDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;

function Item({ item, onlDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onlDeleteItem(item.id)}>❌</button>
    </li>
  );
}
