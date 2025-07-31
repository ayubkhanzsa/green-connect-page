import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const handleJoinGroup = () => {
    window.open("https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Custom Messaging Icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg mb-2">
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Not affiliated with or endorsed by WhatsApp Inc.
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Join Our Exclusive WhatsApp Group!
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Get real-time updates, news, and exclusive offers via WhatsApp – directly from us.
          </p>

          {/* Join Button */}
          <div className="pt-4 space-y-3">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleJoinGroup}
              className="px-8 py-6 text-lg md:text-xl rounded-full"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              By clicking, you agree to receive messages via WhatsApp. You can leave the group anytime.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <a
              href="terms.html"
              className="hover:text-foreground transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="privacy.html"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="returns.html"
              className="hover:text-foreground transition-colors"
            >
              Return & Refund Policy
            </a>
            <a
              href="contact.html"
              className="hover:text-foreground transition-colors"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <div>© 2025 midasbuy Connect. All rights reserved.</div>
            <div>This is an independent service and is not affiliated with WhatsApp Inc.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;