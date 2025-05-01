
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorGrid from "@/components/doctors/DoctorGrid";

const Doctors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Our Doctors</h1>
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
