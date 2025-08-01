import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const handleJoinGroup = () => {
    window.open("https://chat.whatsapp.com/BkbSqbYehbJ7LeHsze7Y0o?mode=ac_t", "_blank");
  };

  // Reviews data
  const reviews = [
    { name: "Ali Raza", text: "Thanks Enzo! Received my UC in 2 mins! Trusted service 💯" },
    { name: "Usman Khan", text: "Car mila just after payment, fast delivery bro 🔥" },
    { name: "Ayesha Malik", text: "Smooth process, highly recommend Enzo!" },
    { name: "Danish Mughal", text: "Amazing service, got my UC instantly!" },
    { name: "Hina Shahid", text: "Fast and reliable, thank you Enzo 🙏" },
    { name: "Bilal Aslam", text: "Trusted again, got my car fast!" },
    { name: "Sana Rauf", text: "Wasn't expecting this fast delivery, amazing!" },
    { name: "Hamza Tariq", text: "Best service for UC, highly recommended!" },
    { name: "Maham Khan", text: "Super quick delivery, very satisfied 👍" },
    { name: "Saad Ahmed", text: "Enzo delivers as promised, excellent!" },
    { name: "Zoya Akbar", text: "Got my car skin immediately, love it!" },
    { name: "Zain Malik", text: "Professional service, will use again!" },
    { name: "Nimra Iftikhar", text: "Fast UC delivery, totally worth it!" },
    { name: "Hassan Javed", text: "Smooth transaction, very impressed!" },
    { name: "Saba Qureshi", text: "Quick and easy process, thank you!" },
    { name: "Waleed Shah", text: "Got my UC within minutes, amazing!" },
    { name: "Iqra Javed", text: "Reliable service, highly recommend!" },
    { name: "Fahad Rehman", text: "Fast delivery as always, great work!" },
    { name: "Mehwish Farooq", text: "Trusted service, got my car fast!" },
    { name: "Adeel Noman", text: "Excellent service, very professional!" },
    { name: "Kiran Bashir", text: "Quick UC delivery, very satisfied!" },
    { name: "Shahzaib Akhtar", text: "Trusted again, got my car fast!" },
    { name: "Anum Tariq", text: "Amazing speed, highly recommend!" },
    { name: "Haris Anwar", text: "Best UC service, super fast!" },
    { name: "Fatima Noor", text: "Quick and reliable, thank you Enzo!" },
    { name: "Taimoor Abbasi", text: "Got my car immediately, excellent!" },
    { name: "Laiba Hassan", text: "Fast delivery, very professional service!" },
    { name: "Imran Qureshi", text: "Smooth process, highly satisfied!" },
    { name: "Rabia Imran", text: "Quick UC delivery, amazing service!" },
    { name: "Noman Sheikh", text: "Reliable and fast, will use again!" },
    { name: "Komal Rehman", text: "Got my car skin quickly, love it!" },
    { name: "Adnan Siddiqui", text: "Professional service, highly recommend!" },
    { name: "Jawad Mirza", text: "Fast UC delivery, very impressed!" },
    { name: "Omer Farooq", text: "Quick and easy, excellent service!" },
    { name: "Hammad Ali", text: "Trusted service, got my car fast!" },
    { name: "Asad Bhatti", text: "Amazing delivery speed, thank you!" },
    { name: "Kamran Bashir", text: "Reliable UC service, highly recommend!" },
    { name: "Yousaf Raza", text: "Fast and professional, very satisfied!" },
    { name: "Rayan Khalid", text: "Quick delivery, excellent work!" },
    { name: "Umar Saeed", text: "Got my UC instantly, amazing!" },
    { name: "Shayan Haider", text: "Smooth transaction, will use again!" },
    { name: "Zeeshan Tariq", text: "Fast car delivery, highly recommend!" },
    { name: "Atif Iqbal", text: "Professional service, very impressed!" },
    { name: "Nabeel Shah", text: "Quick UC delivery, excellent!" },
    { name: "Ahsan Saleem", text: "Reliable and fast, thank you Enzo!" },
    { name: "Salman Gul", text: "Got my car quickly, amazing service!" },
    { name: "Hashir Nawaz", text: "Fast delivery, highly satisfied!" },
    { name: "Junaid Mehmood", text: "Smooth process, excellent work!" },
    { name: "Fawad Chaudhry", text: "Quick and reliable, highly recommend!" },
    { name: "Taha Aziz", text: "Fast UC delivery, very professional!" }
  ];

  const [displayedReviews, setDisplayedReviews] = useState(reviews.slice(0, 8));
  const [currentIndex, setCurrentIndex] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedReviews(prev => {
        const newReviews = [...prev.slice(1)];
        const nextReview = reviews[currentIndex % reviews.length];
        newReviews.push(nextReview);
        return newReviews;
      });
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, reviews]);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      {/* Header with Verified Brand Badge */}
      <header className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-xl font-bold text-foreground">Enzo</span>
          <img 
            src="/lovable-uploads/e6c23de5-527b-44f7-8742-0dcb1306da29.png" 
            alt="Verified badge" 
            className="w-5 h-5"
          />
        </div>
      </header>

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
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 h-80 overflow-hidden">
              <div className="space-y-3 animate-[scroll-up_20s_linear_infinite]">
                {[...reviews, ...reviews].map((review, index) => (
                  <div 
                    key={`inline-${review.name}-${index}`}
                    className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-lg border border-green-200"
                  >
                    <div className="flex text-yellow-400 mb-1 text-sm">
                      ⭐⭐⭐⭐✨
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{review.text}"</p>
                    <p className="text-xs font-medium text-gray-600">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>
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