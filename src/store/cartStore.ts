import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, selectedSize: string, quantity: number) => void;
  removeFromCart: (productId: string, selectedSize: string) => void;
  updateQuantity: (productId: string, selectedSize: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product, selectedSize, quantity) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => item.product.id === product.id && item.selectedSize === selectedSize,
        );

        if (existingItemIndex !== -1) {
          // Если товар уже есть в корзине, обновляем количество
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += quantity;
          set({ items: updatedItems });
        } else {
          // Добавляем новый товар с указанным количеством
          set({ items: [...items, { product, quantity, selectedSize }] });
        }
      },

      removeFromCart: (productId, selectedSize) => {
        const { items } = get();
        set({
          items: items.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize)),
        });
      },

      updateQuantity: (productId, selectedSize, quantity) => {
        const { items } = get();
        const updatedItems = items.map((item) => {
          if (item.product.id === productId && item.selectedSize === selectedSize) {
            return { ...item, quantity };
          }
          return item;
        });
        set({ items: updatedItems });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useCartStore;