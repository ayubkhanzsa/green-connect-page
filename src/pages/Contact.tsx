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
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions about our WhatsApp group or need assistance? We're here to help. 
              Reach out to us using any of the methods below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  WhatsApp Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For immediate assistance, you can message us directly on WhatsApp.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("https://wa.me/message", "_blank")}
                >
                  Send WhatsApp Message
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email for detailed inquiries or support requests.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("mailto:support@example.com", "_blank")}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Response Times
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">WhatsApp Messages</span>
                  <span className="text-muted-foreground">Within 2-4 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Email Inquiries</span>
                  <span className="text-muted-foreground">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Business Hours</span>
                  <span className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">How do I join the WhatsApp group?</h4>
                <p className="text-muted-foreground">
                  Simply click the "Join WhatsApp Group" button on our main page, and you'll be 
                  redirected to WhatsApp where you can join the group.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Can I leave the group anytime?</h4>
                <p className="text-muted-foreground">
                  Yes, you can leave the group at any time through WhatsApp's group settings. 
                  There are no penalties or charges for leaving.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What type of content is shared?</h4>
                <p className="text-muted-foreground">
                  We share news, offers, insights, and relevant information that our community 
                  finds valuable. All content is carefully curated and relevant.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How often are messages sent?</h4>
                <p className="text-muted-foreground">
                  We respect your time and don't spam. Messages are sent only when we have 
                  valuable, relevant information to share with the community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;