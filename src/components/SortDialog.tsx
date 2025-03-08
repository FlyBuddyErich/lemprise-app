"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import type { Product } from "../data/products"

interface SortDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onFiltersChange: (filters: FilterOptions) => void
  products: Product[]
}

export interface FilterOptions {
  priceRange: [number, number]
  category: string
  color: string
  onlyInStock: boolean
}

const SortDialog = ({ open, onOpenChange, onFiltersChange, products }: SortDialogProps) => {
  const categories = Array.from(new Set(products.map((p) => p.category)))
  const colors = Array.from(new Set(products.flatMap((p) => p.color)))
  const maxPrice = Math.max(...products.map((p) => p.price))

  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, maxPrice],
    category: "all",
    color: "all",
    onlyInStock: false,
  })

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-8">
        <DialogHeader className="relative mb-8">
          <DialogTitle className="text-2xl font-medium">Sort items</DialogTitle>
          <p className="text-base text-gray-500 mt-1">Choose options</p>
        </DialogHeader>

        <div className="space-y-8">
          {/* Cost Range Slider */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">Cost</Label>
              <span className="text-base">
                ${Math.round(filters.priceRange[0])}-${Math.round(filters.priceRange[1])}
              </span>
            </div>
            <Slider
              defaultValue={[0, maxPrice]}
              max={maxPrice}
              step={1}
              value={filters.priceRange}
              onValueChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
              className="w-full bg-gray-200"
            />
            <p className="text-sm text-gray-500">Cost of item</p>
          </div>

          {/* Category Select */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Category</Label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange({ category: value })}>
              <SelectTrigger className="w-full border-gray-200 bg-white h-12">
                <SelectValue placeholder="Value" />
              </SelectTrigger>
              <SelectContent className="border-gray-400">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Color Select */}
          <div className="space-y-4">
            <Label className="text-base font-medium">Color</Label>
            <Select value={filters.color} onValueChange={(value) => handleFilterChange({ color: value })}>
              <SelectTrigger className="w-full border-gray-200 bg-white h-12">
                <SelectValue placeholder="Value" />
              </SelectTrigger>
              <SelectContent className="border-gray-400">
                <SelectItem value="all">All Colors</SelectItem>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* In Stock Toggle */}
          <div className="flex items-center justify-between pt-4 pr-4">
            <Label className="text-base font-medium">Only in stock</Label>
            <Switch
              checked={filters.onlyInStock}
              onCheckedChange={(checked) => handleFilterChange({ onlyInStock: checked })}
              className="scale-125 border-1 border-black/60"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SortDialog

