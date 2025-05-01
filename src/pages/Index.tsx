
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import DoctorCard from "@/components/doctors/DoctorCard";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Smile With Digital Dentistry
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Experience the future of dental care with our AI-powered smile design, virtual consultations, and premium dental products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="button-shine">
                <Link to="/smile-design">Design Your Smile</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/50">
                <Link to="/consultations">Book Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80"
              alt="Dental professional"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive dental care solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clear Aligners</h3>
              <p className="text-muted-foreground mb-4">
                Custom-designed clear aligners for a perfect smile, comfortable and nearly invisible.
              </p>
              <Link to="/products/aligners" className="text-primary font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>

            <div className="feature-card">
              <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 19.25V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15.25"></path>
                  <path d="m8.82 11.25 3.06-2.26a2.64 2.64 0 0 1 3.12 0l3.06 2.26"></path>
                  <circle cx="10" cy="9" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Smile Design</h3>
              <p className="text-muted-foreground mb-4">
                Preview your new smile with our advanced AI technology before starting treatment.
              </p>
              <Link to="/smile-design" className="text-primary font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>

            <div className="feature-card">
              <div className="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Virtual Consultations</h3>
              <p className="text-muted-foreground mb-4">
                Connect with our dental experts from the comfort of your home through secure video calls.
              </p>
              <Link to="/consultations" className="text-primary font-medium hover:underline">
                Learn More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-primary hover:underline font-medium">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Our simple process to your perfect smile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  1
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-muted-foreground">
                Complete our online smile assessment to determine your treatment needs.
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  2
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Meet virtually with our dental experts to discuss your treatment options.
              </p>
            </div>

            <div className="text-center relative">
              <div className="relative">
                <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                  3
                </div>
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground">
                Receive your personalized treatment plan and preview your new smile with AI.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Begin Treatment</h3>
              <p className="text-muted-foreground">
                Start your journey to a new smile with regular virtual check-ins.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="button-shine">
              <Link to="/assessment">Start Your Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Doctors</h2>
            <Link to="/doctors" className="text-primary hover:underline font-medium">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real stories from people who transformed their smiles with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I never thought I could have straight teeth without traditional braces. The clear aligners were comfortable and barely noticeable. Best decision I've made!"
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <h4 className="font-medium">Jessica R.</h4>
                  <p className="text-sm text-muted-foreground">Clear Aligner Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The virtual consultations were so convenient - I could speak with my doctor without leaving my house. The entire process was seamless from start to finish."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <h4 className="font-medium">Michael T.</h4>
                  <p className="text-sm text-muted-foreground">Virtual Consultation Patient</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The AI smile design was incredible! Being able to see my future smile before starting treatment gave me so much confidence in the process."
              </p>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Patient" className="w-10 h-10 rounded-full object-cover" />
                <div className="ml-3">
                  <h4 className="font-medium">Alisha K.</h4>
                  <p className="text-sm text-muted-foreground">Smile Design Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Take the first step towards the smile you've always dreamed of. Start with a free virtual consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="button-shine">
                <Link to="/assessment">Free Smile Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/50">
                <Link to="/consultations">Book Consultation</Link>
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
