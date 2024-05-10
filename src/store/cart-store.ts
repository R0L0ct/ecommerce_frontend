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
};

export const useCartStore = create<State & Action>()((set) => ({
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
  addItemsToCart: (item) => {
    set((state) => {
      const updateCartItems = [...state.cartItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
      return { cartItems: updateCartItems };
    });
  },
  removeItemFromCart: (productId) => {
    set((state) => {
      const updateCartItems = state.cartItems.filter(
        (item) => item.productId !== productId
      );
      localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
      return { cartItems: updateCartItems };
    });
  },
}));
