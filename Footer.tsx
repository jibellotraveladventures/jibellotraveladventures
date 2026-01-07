import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/">
              <a className="text-xl font-display font-black tracking-[0.15em] uppercase block mb-6 text-primary whitespace-nowrap">
                Jibello Travel Adventures
              </a>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curating intentional travel experiences for the modern explorer. Reconnect with the world, one journey at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-medium mb-6">Destinations</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Boutique Retreats</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Weekend Getaways</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Adventure & Outdoor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hiking & Mountaineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Philosophy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>jibellotraveladventures@gmail.com</li>
              <li>+254 716945413</li>
              <li>00100 Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Jibello Travel Adventures. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
