
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, description, price, image, category }: ProductCardProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    setIsAdding(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      toast({
        title: "Added to cart",
        description: `${name} has been added to your cart.`,
      });
    }, 500);
  };

  return (
    <div className="group relative rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link to={`/products/${id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full px-2 py-0.5">
            {category}
          </span>
        </div>
        
        <Link to={`/products/${id}`}>
          <h3 className="font-medium text-lg mb-1 transition-colors hover:text-primary">
            {name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>
        
        <div className="flex items-end justify-between">
          <div className="text-lg font-semibold">${price.toFixed(2)}</div>
          <Button 
            variant="outline" 
            size="sm" 
            className="transition-all hover:bg-primary hover:text-white"
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "Adding..." : "Add to cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
