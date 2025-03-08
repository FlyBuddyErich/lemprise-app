"use client";

import { useState } from "react";
import type { Product } from "../data/products";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react";
import useCartStore from "../store/cartStore";
import { toast } from "sonner";

interface ProductDialogProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductDialog = ({ product, open, onOpenChange }: ProductDialogProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);

  const allImages = [product.images.front, product.images.back];

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize, quantity);
      onOpenChange(false);
      setSelectedSize("");
      setQuantity(1);
      setCurrentImageIndex(0);

      toast.success("Item has been successfully added to your cart!", {
        description: `${product.name} (${selectedSize}, amount: ${quantity})`,
        duration: 3000,
      });
    } else {
      
      toast.error("Пожалуйста, выберите размер.");
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="lg:min-w-[1000px]">
        <DialogHeader></DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 mt-0">
          {/* Image Carousel */}
          <div className="flex justify-center">
            <div className="relative aspect-square max-w-[calc(85%-2rem)] lg:max-w-full">
              <img
                src={allImages[currentImageIndex]}
                alt={`${product.name} view ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                className="absolute left-2 top-1/2 w-8 h-8 -translate-y-1/2 rounded-full bg-black/10 hover:bg-black/30 cursor-pointer"
                onClick={previousImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                className="absolute right-2 top-1/2 w-8 h-8 -translate-y-1/2 rounded-full bg-black/10 hover:bg-black/30 cursor-pointer"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-1.5 lg:gap-6">
            <DialogTitle className="text-xl lg:text-3xl font-bold">{product.name}</DialogTitle>
            <p className="text-sm lg:text-base text-gray-600">
              {product.description}
            </p>

            <div>
              <p className="text-xl lg:text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <Select>
                <SelectTrigger className="w-full lg:w-[200px] border-gray-400">
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent className="border-gray-400">
                  {product.color.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex gap-2">
                {product.sizes_available.map((size) => (
                  <button
                    key={size}
                    className={`w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border text-sm transition-colors
                      ${
                        selectedSize === size
                          ? "bg-black text-white border-black rounded-sm"
                          : "border-gray-200 hover:border-gray-400 rounded-sm"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Amount</label>
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-gray-200">
                  <button
                    className="p-2 hover:bg-gray-100"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4 cursor-pointer" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    className="p-2 hover:bg-gray-100"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <p>Material: {product.material}</p>
              <p className="mt-1 underline cursor-pointer">
                Information about delivery times
              </p>
            </div>

            <div className="flex lg:gap-4 gap-2 lg:mt-4 pb-2">
              <Button
                variant="outline"
                className="flex-1 lg:h-12 h-10 cursor-pointer rounded-xl text-white bg-[#2C2C2C] hover:bg-[#1E1E1E] transition-colors"
                onClick={() => onOpenChange(false)}
              >
                Back to store
              </Button>
              <Button
                className="flex-1 lg:h-12 h-10 cursor-pointer bg-[#E3E3E3] rounded-xl text-[#2C2C2C] hover:bg-[#CDCDCD] transition-colors"
                disabled={!selectedSize}
                onClick={handleAddToCart}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;