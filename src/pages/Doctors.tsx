
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorGrid from "@/components/doctors/DoctorGrid";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Input 
            type="search" 
            placeholder="Search for doctors..." 
            className="pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <Search size={18} />
          </div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2 text-mydent-500">Our Doctors</h1>
          <p className="text-muted-foreground">
            Meet our team of experienced dental professionals ready to guide your smile journey.
          </p>
        </div>
        
        <DoctorGrid />
      </div>
      
      <Footer />
    </div>
  );
};

export default Doctors;
