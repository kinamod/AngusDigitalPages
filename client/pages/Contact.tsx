import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a placeholder page for contact information and booking inquiries. 
              We can expand this with contact forms, booking requests, 
              and detailed contact information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  Contact Form
                </CardTitle>
                <CardDescription>
                  Send a message directly
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  A contact form will be implemented here with fields for:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Name and email</li>
                  <li>• Inquiry type (booking, press, collaboration)</li>
                  <li>• Message details</li>
                  <li>• Event date and venue (for bookings)</li>
                </ul>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  Booking Information
                </CardTitle>
                <CardDescription>
                  Professional inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Contact information for:
                </p>
                <ul className="space-y-4 text-muted-foreground mb-6">
                  <li className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    booking@alexrivers.com
                  </li>
                  <li className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    Management: +1 (555) 123-4567
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    Based in Portland, Oregon
                  </li>
                </ul>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Press Kit Download
                  </Button>
                  <Button variant="outline" className="w-full">
                    Technical Rider
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
