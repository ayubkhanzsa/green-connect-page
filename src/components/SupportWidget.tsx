import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const SupportWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const messages = [
    "How can I help you?",
    "Need assistance with your order?",
    "Looking for product information?",
    "Have questions about our services?",
    "Need help with payment?",
    "Want to track your order?",
    "Need technical support?",
    "Have billing questions?",
    "Looking for offers and deals?",
    "Need help getting started?"
  ];

  const whatsappNumber = "447476966269";

  // Show widget after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Rotate messages every 3 seconds when open
  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setIsTyping(true);
        setTimeout(() => {
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
          setIsTyping(false);
        }, 1000);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isOpen, messages.length]);

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hello! I need help with PlayZone services.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg border p-4 w-80 animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/308ad7e9-46bf-4db5-af45-ab8964cbb093.png" 
                  alt="Support" 
                  className="w-5 h-5"
                />
              </div>
              <div>
                <div className="font-semibold text-sm">PlayZone Support</div>
                <div className="flex items-center gap-1 text-xs text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <img 
                  src="/lovable-uploads/308ad7e9-46bf-4db5-af45-ab8964cbb093.png" 
                  alt="Support" 
                  className="w-3 h-3 invert"
                />
              </div>
              <div className="flex-1">
                {isTyping ? (
                  <div className="flex gap-1 items-center">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">typing...</span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-700">
                    {messages[currentMessageIndex]}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Support button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 relative"
      >
        <img 
          src="/lovable-uploads/308ad7e9-46bf-4db5-af45-ab8964cbb093.png" 
          alt="Support" 
          className="w-6 h-6 invert"
        />
        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
      </button>
    </div>
  );
};

export default SupportWidget;