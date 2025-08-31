import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Download } from "lucide-react";

export default function Music() {
  return (
    <Layout>
      <div className="min-h-screen py-20 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F21581e62f4a04f28b8004856654be23b?format=webp&width=800')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            filter: 'blur(4px)',
            zIndex: 1
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center mb-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F3e6c2ecfcb9b4fc0bc1757a0d8e40f71?format=webp&width=800"
              alt="Soundwaves"
              className="w-16 h-16 mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">Music</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Listen to the latest tracks and mixes from Angus Digital
            </p>
          </div>

          {/* Featured Tracks */}
          <div className="mb-12">
            <Card className="max-w-4xl mx-auto">
              <CardContent>
                <div className="w-full">
              
                  <iframe 
                    src="https://audius.co/embed/playlist/XOqJPvy?flavor=card" 
                    width="100%" 
                    height="700" 
                    allow="encrypted-media" 
                    style={{border: 'none'}}
                    >

                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>


        </div>
      </div>
    </Layout>
  );
}
