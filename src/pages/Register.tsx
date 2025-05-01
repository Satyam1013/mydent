
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-mydent-500 mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join mydent for your perfect smile journey</p>
          </div>
          <RegisterForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
