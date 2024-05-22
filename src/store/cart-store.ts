import { create } from "zustand";

type Item = {
  productId: number;
  amount: number;
  price: number;
  image: string;
  title: string;
};
type State = {
  cartItems: Item[];
};

type Action = {
  addItemsToCart: (item: Item) => void;
  removeItemFromCart: (productId: number) => void;
  removeAllItemsFromCart: () => void;
  updateItemQuantity: (productId: number, amount: number) => void;
};

export const useCartStore = create<State & Action>()((set) => ({
  cartItems: [],
  addItemsToCart: (item) => {
    set((state) => {
      const updateCartItems = [...state.cartItems, item];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
      }
      return { cartItems: updateCartItems };
    });
  },
  removeItemFromCart: (productId) => {
    set((state) => {
      const updateCartItems = state.cartItems.filter(
        (item) => item.productId !== productId
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
      }
      return { cartItems: updateCartItems };
    });
  },
  removeAllItemsFromCart: () => {
    set(() => {
      const updateCartItems: Item[] = [];
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
      }
      return { cartItems: updateCartItems };
    });
  },
  updateItemQuantity: (productId, amount) => {
    set((state) => {
      const updatedCartItems = state.cartItems.map((item) =>
        item.productId === productId ? { ...item, amount } : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      }
      return { cartItems: updatedCartItems };
    });
  },
}));

// typeof window !== "undefined" && localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems")!)
//   : [],
