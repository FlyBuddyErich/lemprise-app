"use client";

import { useState } from "react";
import useCartStore from "../store/cartStore";
import { Trash2 } from "lucide-react";
import Checkbox from "@/components/ui/Checkbox";

const CartPage = () => {
  const { items, getTotalPrice, updateQuantity, removeFromCart } =
    useCartStore();
  const [promoCode, setPromoCode] = useState("");

  const handleQuantityChange = (
    productId: string,
    selectedSize: string,
    change: number
  ) => {
    const item = items.find(
      (item) =>
        item.product.id === productId && item.selectedSize === selectedSize
    );
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      updateQuantity(productId, selectedSize, newQuantity);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-gray-500 font-bold text-2xl">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Cart Items */}
        <div className="flex flex-col gap-8 mb-16">
          {items.map((item, index) => (
            <div
              key={`${item.product.id}-${item.selectedSize}-${index}`}
              className="flex flex-col sm:flex-row gap-8 p-6 border border-gray-200 rounded-lg w-full"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={item.product.images.front}
                  alt={item.product.name}
                  className="w-full h-full aspect-square object-cover rounded-lg"
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.product.name} *{item.quantity}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.product.description}
                      </p>
                    </div>
                    <p className="text-2xl font-bold">
                      {item.product.price.toFixed(2)}$
                    </p>
                  </div>

                  <div className="space-y-2 mb-2">
                    <p className="text-lg">Size: {item.selectedSize}</p>
                    <p className="text-lg">
                      Color: {item.product.color[0].toUpperCase()}
                    </p>
                  </div>

                  {item.product.in_stock ? (
                    <div className="flex items-center gap-2 text-lg text-gray-600">
                      <Checkbox checked={true} />
                      <span>This item is in stock and can be ordered.</span>
                    </div>
                  ) : (
                    <div className="inline-block bg-black text-white text-lg px-3 py-1">
                      CAN'T BE ORDERED
                    </div>
                  )}

                  <div className="text-lg text-gray-600 mt-2 pt-4">
                    <p>Material: {item.product.material}</p>
                    <a
                      href="https://github.com/FlyBuddyErich"
                      target="_blank"
                      className="underline mt-1 cursor-pointer"
                    >
                      Information about delivery times
                    </a>
                  </div>
                </div>

                <div className="flex justify-end items-center gap-6 mt-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id,
                          item.selectedSize,
                          -1
                        )
                      }
                      className="text-2xl font-medium cursor-pointer"
                    >
                      −
                    </button>
                    <span className="text-xl">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id,
                          item.selectedSize,
                          1
                        )
                      }
                      className="text-2xl font-medium cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      removeFromCart(item.product.id, item.selectedSize)
                    }
                    className="text-gray-500 hover:text-black transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex justify-between items-center text-2xl mb-8">
            <span>TOTAL:</span>
            <span className="border-b-2 border-black">
              {getTotalPrice().toFixed(2)}$
            </span>
          </div>

          <div className="mb-8">
            <p className="mb-2">PROMO</p>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter your promo here"
              className="w-full p-3 border rounded-2xl border-gray-200 focus:border-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="rounded-xl text-white bg-[#2C2C2C] hover:bg-[#1E1E1E] py-3 px-6 transition-colors cursor-pointer">
              Proceed checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
