"use client"

import type React from "react"
import { useState } from "react"
import useCartStore, { type CartItem as CartItemType } from "../store/cartStore"

interface CartItemProps {
  item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity, selectedSize } = item
  const [itemQuantity, setItemQuantity] = useState(quantity)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = Number.parseInt(e.target.value)
    setItemQuantity(newQuantity)
    updateQuantity(product.id, selectedSize, newQuantity)
  }

  const handleRemove = () => {
    removeFromCart(product.id, selectedSize)
  }

  return (
    <div className="w-1/2 p-4">
      <div className="w-full h-[600px]">
        <img
          src={product.images.front}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-xl text-gray-500">Size: {selectedSize}</p>
        <p className="text-xl">${product.price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor={`quantity-${product.id}-${selectedSize}`} className="text-xl">
            Qty:
          </label>
          <select
            id={`quantity-${product.id}-${selectedSize}`}
            value={itemQuantity}
            onChange={handleQuantityChange}
            className="p-2 border border-border bg-white text-xl"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button className="text-xl text-gray-500 underline bg-transparent border-none p-0" onClick={handleRemove}>
          Remove
        </button>
      </div>

      <div className="font-semibold text-right mt-4 text-2xl">
        ${(product.price * quantity).toFixed(2)}
      </div>
    </div>
  )
}

export default CartItem