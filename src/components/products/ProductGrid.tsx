
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for products
  const dummyProducts: Product[] = [
    {
      id: "aligners-1",
      name: "Premium Clear Aligners",
      description: "Custom-fit clear aligners for a perfect smile. Comfortable and nearly invisible.",
      price: 1999.99,
      image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?auto=format&fit=crop&w=600&q=80",
      category: "Aligners"
    },
    {
      id: "retainers-1",
      name: "Ultra Thin Retainer",
      description: "Maintain your perfect smile with our ultra-thin, durable retainers.",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1615161204553-368fd512a406?auto=format&fit=crop&w=600&q=80",
      category: "Retainers"
    },
    {
      id: "whitening-1",
      name: "Professional Whitening Kit",
      description: "Achieve professional whitening results at home with our easy-to-use kit.",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1608125677487-834eeee82775?auto=format&fit=crop&w=600&q=80",
      category: "Whitening"
    },
    {
      id: "care-1",
      name: "Essential Care Bundle",
      description: "Complete oral care bundle with toothpaste, floss, and mouthwash.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
      category: "Care"
    },
    {
      id: "aligners-2",
      name: "Night-Time Aligners",
      description: "Correct your smile while you sleep with our night-time aligners.",
      price: 1799.99,
      image: "https://images.unsplash.com/photo-1624542316501-34626550521a?auto=format&fit=crop&w=600&q=80",
      category: "Aligners"
    },
    {
      id: "whitening-2",
      name: "Express Whitening Strips",
      description: "Quick and easy whitening strips for a brighter smile in just 7 days.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1571942676516-bcab84649e44?auto=format&fit=crop&w=600&q=80",
      category: "Whitening"
    },
  ];

  useEffect(() => {
    // Simulate API call to fetch products
    setTimeout(() => {
      setProducts(dummyProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-grow">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg border overflow-hidden">
              <Skeleton className="h-[250px] w-full" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <div className="flex items-end justify-between pt-2">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-9 w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 border rounded-lg bg-muted/20">
              <h3 className="text-lg font-medium">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter criteria.</p>
              {searchQuery && (
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery("")}
                  className="mt-2"
                >
                  Clear search
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductGrid;
