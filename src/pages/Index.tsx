
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import DoctorCard from "@/components/doctors/DoctorCard";
import { Calendar, Phone, MonitorSmartphone, MessageSquare, Search, ShoppingCart, Star, User, Home } from "lucide-react";

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

  // Service categories
  const serviceCategories = [
    { icon: <Calendar className="w-6 h-6 text-mydent-500" />, title: "Book Appointment", link: "/consultations" },
    { icon: <MonitorSmartphone className="w-6 h-6 text-mydent-500" />, title: "Video Consult", link: "/consultations" },
    { icon: <Phone className="w-6 h-6 text-mydent-500" />, title: "Call Doctor", link: "/contact" },
    { icon: <MessageSquare className="w-6 h-6 text-mydent-500" />, title: "Chat Support", link: "/contact" },
    { icon: <Search className="w-6 h-6 text-mydent-500" />, title: "Search Doctor", link: "/doctors" },
    { icon: <ShoppingCart className="w-6 h-6 text-mydent-500" />, title: "Products", link: "/products" },
  ];

  // App Features
  const appFeatures = [
    { icon: <Calendar className="w-8 h-8 text-mydent-500" />, title: "Book Appointments", description: "Schedule your dental visits with ease" },
    { icon: <Star className="w-8 h-8 text-mydent-500" />, title: "Top Rated Doctors", description: "Connect with verified dental specialists" },
    { icon: <MonitorSmartphone className="w-8 h-8 text-mydent-500" />, title: "Video Consultations", description: "Get expert advice from anywhere" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-white pt-4">
        <div className="container mx-auto px-4">
          <div className="bg-mydent-500 rounded-xl text-white p-4 md:p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 space-y-3 mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold">Digital Dental Care</h1>
              <p className="text-sm md:text-base">Smart aligners and professional dental services at your fingertips</p>
              <Button className="bg-white text-mydent-500 hover:bg-gray-100">
                <Link to="/smile-design">Try Smile Design</Link>
              </Button>
            </div>
            <div className="md:w-1/3">
              <img 
                src="public/lovable-uploads/ba4907f6-77f6-4c7e-a5bc-c8b581472a1c.png" 
                alt="Dental care" 
                className="h-40 w-auto mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {serviceCategories.map((category, index) => (
              <Link to={category.link} key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-100 rounded-full p-4 mb-2">
                  {category.icon}
                </div>
                <span className="text-xs md:text-sm font-medium">{category.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-center">How mydent Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
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
