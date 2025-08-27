import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Lock, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SupportWidget from "@/components/SupportWidget";

const Index = () => {
  const { toast } = useToast();
  
  // Admin states
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [newWhatsappLink, setNewWhatsappLink] = useState("");
  const [redirectLink, setRedirectLink] = useState("");
  const [newRedirectLink, setNewRedirectLink] = useState("");

  // Load Support PlayZone link and redirect link from localStorage on component mount
  useEffect(() => {
    const savedLink = localStorage.getItem("whatsapp_group_link");
    if (savedLink) {
      setWhatsappLink(savedLink);
      setNewWhatsappLink(savedLink);
    } else {
      const defaultLink = "https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t";
      setWhatsappLink(defaultLink);
      setNewWhatsappLink(defaultLink);
    }

    const savedRedirectLink = localStorage.getItem("redirect_link");
    if (savedRedirectLink) {
      setRedirectLink(savedRedirectLink);
      setNewRedirectLink(savedRedirectLink);
    } else {
      const defaultRedirectLink = "https://middasbuy.com";
      setRedirectLink(defaultRedirectLink);
      setNewRedirectLink(defaultRedirectLink);
    }
  }, []);

  const handleJoinGroup = () => {
    window.open(redirectLink, "_blank");
  };

  // Admin functions
  const handleAdminClick = () => {
    setShowPasswordDialog(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "3359") {
      setShowPasswordDialog(false);
      setShowAdminPanel(true);
      setPassword("");
      toast({
        title: "Success",
        description: "Welcome to Admin Panel",
      });
    } else {
      toast({
        title: "Error",
        description: "Wrong password",
        variant: "destructive",
      });
      setPassword("");
    }
  };

  const handleSaveWhatsappLink = (e) => {
    e.preventDefault();
    if (newWhatsappLink.trim()) {
      localStorage.setItem("whatsapp_group_link", newWhatsappLink.trim());
      setWhatsappLink(newWhatsappLink.trim());
      toast({
        title: "Success",
        description: "Support PlayZone group link updated successfully ✅",
      });
    }
  };

  const handleSaveRedirectLink = (e) => {
    e.preventDefault();
    if (newRedirectLink.trim()) {
      localStorage.setItem("redirect_link", newRedirectLink.trim());
      setRedirectLink(newRedirectLink.trim());
      toast({
        title: "Success",
        description: "Redirect link updated successfully ✅",
      });
    }
  };

  const closeAdminPanel = () => {
    setShowAdminPanel(false);
  };



  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Header with Verified Brand Badge and Admin Button */}
      <header className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 md:px-4 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="text-sm md:text-lg font-semibold text-gray-800">PlayZone</span>
          <img 
            src="/lovable-uploads/6b70ec2e-51b2-4378-8736-51c0f8c54e4a.png" 
            alt="Verified badge" 
            className="w-3 h-3 md:w-5 md:h-5"
          />
        </div>
        
        {/* Admin Button */}
        <Button
          onClick={handleAdminClick}
          variant="ghost"
          size="sm"
          className="bg-transparent text-xs px-2 py-1 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <Lock className="w-3 h-3 mr-1" />
          Admin
        </Button>
      </header>

      {/* Password Dialog */}
      {showPasswordDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">Admin Access</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowPasswordDialog(false);
                    setPassword("");
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Access
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Panel */}
      {showAdminPanel && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <Button
                onClick={closeAdminPanel}
                variant="outline"
                size="sm"
              >
                ×
              </Button>
            </div>
            
            <form onSubmit={handleSaveWhatsappLink} className="mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Set Support PlayZone Group Link</label>
                <input
                  type="url"
                  value={newWhatsappLink}
                  onChange={(e) => setNewWhatsappLink(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="https://chat.whatsapp.com/..."
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Current active link will be updated</p>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Current Link Preview</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  <p className="text-xs text-gray-600 break-all">{whatsappLink}</p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                Save Support PlayZone Link
              </Button>
            </form>

            <form onSubmit={handleSaveRedirectLink}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Set Get Started Button Redirect Link</label>
                <input
                  type="url"
                  value={newRedirectLink}
                  onChange={(e) => setNewRedirectLink(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://www.playzone.com"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">This link will be opened when users click Get Started</p>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Current Redirect Link</label>
                <div className="p-3 bg-gray-50 rounded-lg border">
                  <p className="text-xs text-gray-600 break-all">{redirectLink}</p>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Save Redirect Link
              </Button>
            </form>
          </div>
        </div>
      )}


      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Get real-time updates, news, and exclusive offers via Support PlayZone – directly from us.
          </p>

          {/* Live Reviews Section */}
          <div className="mt-12 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                5K+ Satisfied Customers
              </h2>
              <p className="text-lg text-green-600 font-semibold">
                Delivered Successfully
              </p>
            </div>
          </div>

          {/* Join Button */}
          <div className="pt-4 space-y-3">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleJoinGroup}
              className="px-8 py-6 text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 border-0 font-semibold animate-[float_3s_ease-in-out_infinite] text-white"
              style={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              By clicking, you agree to receive messages via Support PlayZone. You can leave the group anytime.
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
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/lovable-uploads/midasbuy-info-logo.png" 
                alt="PlayZone logo" 
                className="w-4 h-4"
              />
              <span>PlayZone</span>
            </div>
            <div>© 2025 PlayZone. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* Support Widget */}
      <SupportWidget />
    </div>
  );
};

export default Index;