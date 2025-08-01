import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Lock, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  // Admin states
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");
  const [newWhatsappLink, setNewWhatsappLink] = useState("");

  // Load WhatsApp link from localStorage on component mount
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
  }, []);

  const handleJoinGroup = () => {
    window.open(whatsappLink, "_blank");
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
        description: "WhatsApp group link updated successfully ✅",
      });
    }
  };

  const closeAdminPanel = () => {
    setShowAdminPanel(false);
  };

  // Reviews data
  const reviews = [
    { name: "Ali Raza", text: "Thanks Enzo! Received my UC in 2 mins! Trusted service 💯", rating: 5 },
    { name: "Usman Khan", text: "Car mila just after payment, fast delivery bro 🔥", rating: 5 },
    { name: "Ayesha Malik", text: "Smooth process, highly recommend Enzo!", rating: 5 },
    { name: "Danish Mughal", text: "Amazing service, got my UC instantly!", rating: 5 },
    { name: "Hina Shahid", text: "Fast and reliable, thank you Enzo 🙏", rating: 5 },
    { name: "Bilal Aslam", text: "Trusted again, got my car fast!", rating: 5 },
    { name: "Sana Rauf", text: "Wasn't expecting this fast delivery, amazing!", rating: 5 },
    { name: "Hamza Tariq", text: "Best service for UC, highly recommended!", rating: 5 },
    { name: "Maham Khan", text: "Super quick delivery, very satisfied 👍", rating: 5 },
    { name: "Saad Ahmed", text: "Enzo delivers as promised, excellent!", rating: 5 },
    { name: "Zoya Akbar", text: "Got my car skin immediately, love it!", rating: 5 },
    { name: "Zain Malik", text: "Professional service, will use again!", rating: 5 },
    { name: "Nimra Iftikhar", text: "Fast UC delivery, totally worth it!", rating: 5 },
    { name: "Hassan Javed", text: "Smooth transaction, very impressed!", rating: 5 },
    { name: "Saba Qureshi", text: "Quick and easy process, thank you!", rating: 5 },
    { name: "Waleed Shah", text: "Got my UC within minutes, amazing!", rating: 5 },
    { name: "Iqra Javed", text: "Reliable service, highly recommend!", rating: 5 },
    { name: "Fahad Rehman", text: "Fast delivery as always, great work!", rating: 5 },
    { name: "Mehwish Farooq", text: "Trusted service, got my car fast!", rating: 5 },
    { name: "Adeel Noman", text: "Excellent service, very professional!", rating: 5 },
    { name: "Kiran Bashir", text: "Quick UC delivery, very satisfied!", rating: 5 },
    { name: "Shahzaib Akhtar", text: "Trusted again, got my car fast!", rating: 5 },
    { name: "Anum Tariq", text: "Amazing speed, highly recommend!", rating: 5 },
    { name: "Haris Anwar", text: "Best UC service, super fast!", rating: 5 },
    { name: "Fatima Noor", text: "Quick and reliable, thank you Enzo!", rating: 5 },
    { name: "Taimoor Abbasi", text: "Got my car immediately, excellent!", rating: 5 },
    { name: "Laiba Hassan", text: "Fast delivery, very professional service!", rating: 5 },
    { name: "Imran Qureshi", text: "Smooth process, highly satisfied!", rating: 5 },
    { name: "Rabia Imran", text: "Quick UC delivery, amazing service!", rating: 5 },
    { name: "Noman Sheikh", text: "Reliable and fast, will use again!", rating: 5 },
    { name: "Komal Rehman", text: "Got my car skin quickly, love it!", rating: 5 },
    { name: "Adnan Siddiqui", text: "Professional service, highly recommend!", rating: 5 },
    { name: "Jawad Mirza", text: "Fast UC delivery, very impressed!", rating: 5 },
    { name: "Omer Farooq", text: "Quick and easy, excellent service!", rating: 5 },
    { name: "Hammad Ali", text: "Trusted service, got my car fast!", rating: 5 },
    { name: "Asad Bhatti", text: "Amazing delivery speed, thank you!", rating: 5 },
    { name: "Kamran Bashir", text: "Reliable UC service, highly recommend!", rating: 5 },
    { name: "Yousaf Raza", text: "Fast and professional, very satisfied!", rating: 5 },
    { name: "Rayan Khalid", text: "Quick delivery, excellent work!", rating: 5 },
    { name: "Umar Saeed", text: "Got my UC instantly, amazing!", rating: 5 },
    { name: "Shayan Haider", text: "Smooth transaction, will use again!", rating: 5 },
    { name: "Zeeshan Tariq", text: "Fast car delivery, highly recommend!", rating: 5 },
    { name: "Atif Iqbal", text: "Professional service, very impressed!", rating: 5 },
    { name: "Nabeel Shah", text: "Quick UC delivery, excellent!", rating: 5 },
    { name: "Ahsan Saleem", text: "Reliable and fast, thank you Enzo!", rating: 5 },
    { name: "Salman Gul", text: "Got my car quickly, amazing service!", rating: 5 },
    { name: "Hashir Nawaz", text: "Fast delivery, highly satisfied!", rating: 5 },
    { name: "Junaid Mehmood", text: "Smooth process, excellent work!", rating: 5 },
    { name: "Fawad Chaudhry", text: "Quick and reliable, highly recommend!", rating: 5 },
    { name: "Taha Aziz", text: "Fast UC delivery, very professional!", rating: 5 }
  ];

  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, 8));
  const [currentIndex, setCurrentIndex] = useState(8);
  const [allReviews, setAllReviews] = useState(reviews);
  const [newReview, setNewReview] = useState({ name: "", text: "", rating: 5 });

  // Content filter function
  const filterContent = (text) => {
    const bannedWords = ['fake', 'scammer', 'scam', 'jot', 'jota'];
    return bannedWords.some(word => text.toLowerCase().includes(word));
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name.trim() && newReview.text.trim() && newReview.rating > 0) {
      if (filterContent(newReview.text) || filterContent(newReview.name)) {
        alert("Review contains inappropriate content and cannot be posted.");
        return;
      }
      const reviewToAdd = { 
        name: newReview.name.trim(), 
        text: newReview.text.trim(),
        rating: newReview.rating
      };
      setAllReviews(prev => [reviewToAdd, ...prev]);
      setNewReview({ name: "", text: "", rating: 5 });
    } else {
      alert("Please fill all fields including star rating.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedReviews(prev => {
        const newReviews = [...prev.slice(1)];
        const nextReview = allReviews[currentIndex % allReviews.length];
        newReviews.push(nextReview);
        return newReviews;
      });
      setCurrentIndex(prev => (prev + 1) % allReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, allReviews]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Header with Verified Brand Badge and Admin Button */}
      <header className="absolute top-4 left-4 right-4 z-10 flex justify-between items-center">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
          <span className="text-xl font-bold text-foreground">Enzo</span>
          <img 
            src="/lovable-uploads/e6c23de5-527b-44f7-8742-0dcb1306da29.png" 
            alt="Verified badge" 
            className="w-5 h-5"
          />
        </div>
        
        {/* Admin Button */}
        <Button
          onClick={handleAdminClick}
          variant="outline"
          size="sm"
          className="bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:bg-white/95"
        >
          <Lock className="w-4 h-4 mr-1" />
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
            
            <form onSubmit={handleSaveWhatsappLink}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Set WhatsApp Group Link</label>
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
                Save WhatsApp Link
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Live Reviews Sidebar */}
      <div className="fixed right-4 top-20 bottom-20 w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-4 z-10 overflow-hidden hidden lg:block">
        <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Live Reviews</h3>
        <div className="space-y-3 h-full overflow-hidden">
          {displayedReviews.map((review, index) => (
            <div 
              key={`${review.name}-${index}`}
              className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200 animate-fade-in"
            >
              <div className="flex text-yellow-400 mb-1">
                ⭐⭐⭐⭐✨
              </div>
              <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
              <p className="text-xs font-medium text-gray-600">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 lg:pr-96">
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
              className="px-8 py-6 text-lg md:text-xl rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 font-semibold animate-[float_3s_ease-in-out_infinite]"
              style={{
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2 animate-pulse" />
              Join WhatsApp Group
            </Button>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              By clicking, you agree to receive messages via WhatsApp. You can leave the group anytime.
            </p>
          </div>

          {/* Live Reviews Section */}
          <div className="mt-12 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Live Customer Reviews</h3>
            <div className="rounded-2xl p-4 h-80 overflow-hidden">
              <div className="space-y-3 animate-[scroll-up_200s_linear_infinite]">
                {[...allReviews, ...allReviews].map((review, index) => (
                  <div 
                    key={`inline-${review.name}-${index}`}
                    className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200"
                  >
                    <div className="flex text-yellow-400 mb-1 text-sm">
                      {review.rating ? 
                        Array.from({ length: 5 }, (_, i) => (
                          <span key={i}>{i < review.rating ? "⭐" : "☆"}</span>
                        )) : 
                        "⭐⭐⭐⭐✨"
                      }
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{review.text}</p>
                    <p className="text-xs font-medium text-gray-600">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Write Review Section */}
          <div className="mt-8 max-w-lg mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Write Your Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Rating</label>
                <div className="flex justify-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                      className="text-3xl focus:outline-none transition-all duration-200 hover:scale-110 cursor-pointer"
                    >
                      <span 
                        className={`${star <= newReview.rating ? "text-yellow-400" : "text-gray-400"} transition-colors duration-200`}
                        style={{ 
                          filter: star <= newReview.rating ? 'brightness(1.2) saturate(1.5)' : 'brightness(0.7)',
                          textShadow: star <= newReview.rating ? '0 0 8px rgba(255, 193, 7, 0.8)' : 'none'
                        }}
                      >
                        ⭐
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600 mb-4">
                  Selected: {newReview.rating} star{newReview.rating !== 1 ? 's' : ''}
                </p>
              </div>
              <div>
                <textarea
                  placeholder="Write your review..."
                  value={newReview.text}
                  onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-20"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Submit Review
              </Button>
            </form>
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