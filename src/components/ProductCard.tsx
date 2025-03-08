"use client"

import { useState } from "react"
import type { Product } from "../data/products"
import ProductDialog from "./ProductDialog"

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <div
        className="flex flex-col h-full cursor-pointer items-center w-max-[600px] mx-auto"
        onClick={() => setShowDialog(true)}
      >
        <div
          className="overflow-hidden mb-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={isHovered ? product.images.back : product.images.front}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300"
          />
        </div>

        <div className="w-full lg:w-156 text-left px-2 sm:px-0">
          <h3 className="text-sm sm:text-base mb-1">{product.name}</h3>
          <p className="text-sm sm:text-base mb-2">${product.price.toFixed(2)}</p>
          <p className="text-xs text-gray-500">{product.description}</p>
        </div>
      </div>
      <ProductDialog product={product} open={showDialog} onOpenChange={setShowDialog}/>

    </>
  )
}

export default ProductCard