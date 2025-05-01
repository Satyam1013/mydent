
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/products/ProductGrid";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-mydent-500">Our Products</h1>
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
