
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/products/ProductGrid";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Input 
            type="search" 
            placeholder="Search for products..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Search size={18} />
          </div>
        </div>
      
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2 text-mydent-500">Our Products</h1>
          <p className="text-muted-foreground">
            Discover our range of premium dental products designed for your smile journey.
          </p>
        </div>
        
        <ProductGrid />
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
