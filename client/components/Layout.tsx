import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                
                <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                  Angus Digital
                </span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Dub and reggae producer crafting atmospheric soundscapes
                that blend traditional reggae with modern digital production techniques.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="flex gap-4 text-muted-foreground">
                <a href="/" className="hover:text-primary transition-colors">Home</a>
                <a href="/bio" className="hover:text-primary transition-colors">Bio</a>
                <a href="/music" className="hover:text-primary transition-colors">Music</a>
                <a href="/live" className="hover:text-primary transition-colors">Shows</a>
              </div>
            </div>
            
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 Angus Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
