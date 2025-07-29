import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-2xl font-bold">Terms & Conditions</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By joining our WhatsApp group, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not join or participate in the group.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Group Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our WhatsApp group is designed to share news, offers, insights, and relevant information 
                with our community members. The content shared is for informational purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. User Conduct</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Be respectful to all group members</li>
                <li>Do not share spam, inappropriate content, or promotional materials without permission</li>
                <li>Keep discussions relevant to the group's purpose</li>
                <li>Respect privacy and confidentiality of shared information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Content and Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no warranties 
                about the completeness, reliability, or accuracy of the information shared in the group.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please refer to our Privacy Policy for detailed 
                information about how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to remove any member from the group who violates these terms 
                or engages in behavior that we deem inappropriate or harmful to the community.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms and Conditions from time to time. Continued participation 
                in the group after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us 
                through our official contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;