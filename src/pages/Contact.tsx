import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you have any questions, suggestions, or concerns, please feel free to reach out to us via the phone numbers below:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🇫🇷 France
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For support in France
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("tel:+33756757342", "_blank")}
                >
                  +33 7 56 75 73 42
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🇬🇧 United Kingdom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For support in the UK
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("tel:+447476966269", "_blank")}
                >
                  +44 7476 966269
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                WhatsApp Group Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You may also reach us through our WhatsApp group link for faster support.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;