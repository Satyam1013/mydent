
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-mydent-500 mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Log in to your mydent account</p>
          </div>
          <LoginForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
