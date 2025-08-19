import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
