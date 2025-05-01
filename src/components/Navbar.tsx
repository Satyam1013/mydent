
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-mydent-500">
            mydent
          </span>
          <span className="text-sm font-medium text-mydent-500">Clear aligners</span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
            Products
          </Link>
          <Link to="/doctors" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
            Doctors
          </Link>
          <Link to="/smile-design" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
            Smile Design
          </Link>
          <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
            Contact
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="font-medium">Log In</Button>
          </Link>
          <Link to="/register">
            <Button variant="default" className="button-shine font-medium">Sign Up</Button>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
              Products
            </Link>
            <Link to="/doctors" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
              Doctors
            </Link>
            <Link to="/smile-design" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
              Smile Design
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted">
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login">
                <Button variant="outline" className="w-full font-medium">Log In</Button>
              </Link>
              <Link to="/register">
                <Button variant="default" className="w-full button-shine font-medium">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
