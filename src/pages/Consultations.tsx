
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/booking/AppointmentForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Consultations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-2">Book a Virtual Consultation</h1>
            <p className="text-muted-foreground">
              Speak with our dental professionals from the comfort of your home.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
            <h2 className="text-xl font-semibold mb-4">How Virtual Consultations Work</h2>
            
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-lg font-bold text-primary">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Schedule Your Appointment</h3>
                  <p className="text-muted-foreground mt-1">
                    Choose a date and time that works for you using our online booking system.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-lg font-bold text-primary">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Receive Confirmation</h3>
                  <p className="text-muted-foreground mt-1">
                    We'll send you a confirmation email with your appointment details and a secure video call link.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-lg font-bold text-primary">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Join Your Consultation</h3>
                  <p className="text-muted-foreground mt-1">
                    At the scheduled time, click the video call link to connect with your dental professional.
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-primary/10 w-10 h-10 flex items-center justify-center text-lg font-bold text-primary">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Receive Your Treatment Plan</h3>
                  <p className="text-muted-foreground mt-1">
                    After your consultation, we'll provide you with a personalized treatment plan and next steps.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose a Doctor or Book with Any Available Doctor</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1">
                <Link to="/doctors">Choose a Specific Doctor</Link>
              </Button>
              <Button variant="outline" className="flex-1">
                Book with Any Available Doctor
              </Button>
            </div>
          </div>
          
          <AppointmentForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Consultations;
