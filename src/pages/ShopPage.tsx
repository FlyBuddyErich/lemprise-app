"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../components/ProductCard";
import SortDialog, { type FilterOptions } from "../components/SortDialog";
import products from "../data/products";

const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSortDialog, setShowSortDialog] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, Math.max(...products.map((p) => p.price))],
    category: "all",
    color: "all",
    onlyInStock: false,
  });

  const filteredProducts = products.filter((product) => {
    // Search query filter
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Price range filter
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];

    // Category filter
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;

    // Color filter
    const matchesColor =
      filters.color === "all" || product.color.includes(filters.color);

    // Stock filter
    const matchesStock = !filters.onlyInStock || product.in_stock;

    return (
      matchesSearch &&
      matchesPrice &&
      matchesCategory &&
      matchesColor &&
      matchesStock
    );
  });

  return (
    <div>
      <div className="mx-auto px-4 pl-8 pr-8">
        <div className="mb-8">
          <div className="flex justify-end gap-4 mb-2">
            <input
              type="text"
              placeholder="Find on Lemprise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-2xl p-1 px-4 border w-sm border-border text-sm border-gray-200 focus:border-gray-400 focus:outline-none"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowSortDialog(true)}
              className="px-4 border-gray-200 hover:border-gray-400 focus:border-gray-400 cursor-pointer"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Сетка товаров с общим скроллом страницы */}
        <div className="grid grid-cols-1 justify-center align-middle lg:grid-cols-2 gap-4 pb-8 pl-2 pr-2 min-h-[50vh]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="w-full">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="col-span-full text-center py-12 text-gray-500">
              No products found matching your criteria.
            </p>
          )}
        </div>

        <SortDialog
          open={showSortDialog}
          onOpenChange={setShowSortDialog}
          onFiltersChange={setFilters}
          products={products}
        />
      </div>
    </div>
  );
};

export default ShopPage;
