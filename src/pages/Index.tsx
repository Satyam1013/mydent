
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import DoctorCard from "@/components/doctors/DoctorCard";
import { Calendar, Phone, MonitorSmartphone, MessageSquare, Search, ShoppingCart, Star, Home, Heart, Bell } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem, 
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

const Index = () => {
  // Featured products data
  const featuredProducts = [
    {
      id: "aligners-1",
      name: "Premium Clear Aligners",
      description: "Custom-fit clear aligners for a perfect smile. Comfortable and nearly invisible.",
      price: 1999.99,
      image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?auto=format&fit=crop&w=600&q=80",
      category: "Aligners"
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
  ];

  // Featured doctors data
  const featuredDoctors = [
    {
      id: "doctor-1",
      name: "Sarah Johnson",
      specialization: "Orthodontist",
      experience: 12,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
      availability: "Today, 3:00 PM",
      tags: ["Braces", "Aligners", "Pediatric"]
    },
    {
      id: "doctor-2",
      name: "Michael Thompson",
      specialization: "Cosmetic Dentist",
      experience: 15,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
      availability: "Tomorrow, 10:00 AM",
      tags: ["Veneers", "Whitening", "Smile Design"]
    },
  ];

  // Promotional banners
  const promotionalBanners = [
    {
      id: "promo-1",
      title: "Happy Janmashtami",
      description: "Nurture your body with natural & pure goodness of Ayurveda",
      discount: "20% off",
      image: "public/lovable-uploads/f84082f8-0943-41e0-ba6f-b6a19a7612ae.png"
    },
    {
      id: "promo-2",
      title: "Summer Sale",
      description: "Get exclusive deals on all dental care products",
      discount: "30% off",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "promo-3",
      title: "New Customer Offer",
      description: "First consultation free with any product purchase",
      discount: "Free Consult",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  // Service categories data
  const serviceCategories = [
    { 
      icon: <Calendar className="w-6 h-6 text-mydent-500" />, 
      title: "Book Appointment", 
      description: "With Top Ayurvedic Doctors",
      link: "/consultations" 
    },
    { 
      icon: <MonitorSmartphone className="w-6 h-6 text-mydent-500" />, 
      title: "Instant Video Consultation", 
      description: "Connects within 60 seconds",
      link: "/consultations" 
    },
    { 
      icon: <ShoppingCart className="w-6 h-6 text-mydent-500" />, 
      title: "Buy Medicines", 
      description: "Top Ayurvedic Products",
      link: "/products" 
    },
    { 
      icon: <Star className="w-6 h-6 text-mydent-500" />, 
      title: "Beauty Products", 
      description: "Exclusive lifestyle Products",
      link: "/products" 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header with location and icons */}
      <div className="bg-white py-4 px-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <div className="text-green-600 mr-1">
            <Home size={20} />
          </div>
          <div>
            <p className="text-sm font-medium">Hi, User</p>
            <p className="text-xs text-gray-500 flex items-center">
              Add location <span className="ml-1">▼</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Heart size={20} className="text-gray-500" />
          <Bell size={20} className="text-gray-500" />
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
      
      <Navbar />

      {/* Search bar */}
      <div className="bg-white px-4 py-3 flex items-center space-x-3">
        <div className="w-10 flex-none flex flex-col space-y-1">
          <div className="h-1.5 w-8 bg-mydent-500 rounded-full"></div>
          <div className="h-1.5 w-6 bg-mydent-500 rounded-full"></div>
          <div className="h-1.5 w-4 bg-mydent-500 rounded-full"></div>
        </div>
        
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            type="search" 
            placeholder="Search for medicines and..." 
            className="pl-9 border-gray-300 rounded-md"
          />
        </div>
        
        <Button variant="ghost" className="flex-none w-10 h-10 p-0 border border-gray-300 rounded-md">
          <ShoppingCart size={20} className="text-mydent-500" />
        </Button>
      </div>

      {/* Promotional Banner Carousel */}
      <div className="pt-2 px-4 bg-white">
        <Carousel className="w-full">
          <CarouselContent>
            {promotionalBanners.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="p-1">
                  <img 
                    src={banner.image} 
                    alt={banner.title} 
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-2 gap-1.5">
            {promotionalBanners.map((_, index) => (
              <div 
                key={index} 
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-mydent-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </Carousel>
      </div>

      {/* Service Categories */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            {serviceCategories.map((category, index) => (
              <Link to={category.link} key={index} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-3 rounded-lg overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1576091160550-0173c99955c1' : '1576091160399-96cc52b86793'}?auto=format&fit=crop&w=150&q=80`} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-sm">{category.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Our Products</h2>
            <Link to="/products" className="text-mydent-500 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Our Doctors</h2>
            <Link to="/doctors" className="text-mydent-500 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-100 rounded-lg p-6 mb-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Special Offer</h3>
                <p className="text-sm">Get 20% off on your first clear aligner treatment</p>
              </div>
              <Button className="bg-mydent-500">
                <Link to="/products/aligners">Get Offer</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-blue-100 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
                <p className="text-sm">Book a free video consultation with our dental experts</p>
              </div>
              <Button className="bg-mydent-500">
                <Link to="/consultations">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
