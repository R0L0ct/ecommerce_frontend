import { create } from "zustand";

type State = {
  product: {
    productId: number;
    amount: number;
    price: number;
    image: string;
    title: string;
  };
};

type Action = {
  addProductToCart: (product: State["product"]) => void;
};

export const useProductStore = create<State & Action>()((set) => ({
  product: {
    productId: 0,
    amount: 0,
    price: 0,
    image: "",
    title: "",
  },
  addProductToCart: (product) => set(() => ({ product: product })),
}));
