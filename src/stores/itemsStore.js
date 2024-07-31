import { create } from "zustand";
import { initialItem } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist(
    (set) => ({
      item: initialItem,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        set((state) => {
          const newItems = [...state.item, newItem];
          return { item: newItems };
        });
      },
      deleteItem: (id) => {
        set((state) => {
          const removeItem = state.item.filter((item) => item.id !== id);
          return { item: removeItem };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.item.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
          );
          return { item: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ item: [] }));
      },
      resetToInitialItem: () => {
        set(() => ({ item: initialItem }));
      },
      markAllCompleted: () => {
        set((state) => {
          const newItems = state.item.map((item) => ({
            ...item,
            packed: true,
          }));
          return { item: newItems };
        });
      },
      markAllIncomplete: () => {
        set((state) => {
          const newItems = state.item.map((item) => ({
            ...item,
            packed: false,
          }));
          return { item: newItems };
        });
      },
    }),
    {
      name: "items",
    }
  )
);
