import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
          <h1 className="text-2xl font-bold">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">Important Notice</h2>
              <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                We do not collect or store any personal data. Joining our WhatsApp group is 100% voluntary, 
                and all communication is limited to WhatsApp only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you join our WhatsApp group, we may collect your phone number, name, and 
                profile information as provided by WhatsApp. We do not collect additional personal 
                information beyond what is shared through the WhatsApp platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>To communicate with you through the WhatsApp group</li>
                <li>To send you relevant news, offers, and updates</li>
                <li>To maintain and improve our group services</li>
                <li>To ensure compliance with our Terms and Conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or share your personal information with third parties. 
                Your information is only visible to other group members as per WhatsApp's standard 
                group functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We rely on WhatsApp's end-to-end encryption to protect the security of your messages. 
                We do not store your messages or personal information on our own servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You can leave the group at any time</li>
                <li>You can block other group members if needed</li>
                <li>You can contact us to request removal from any contact lists</li>
                <li>You can adjust your WhatsApp privacy settings at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our group operates on WhatsApp, which is owned by Meta. Please review WhatsApp's 
                privacy policy for information about how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our group is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify group members 
                of any significant changes through the WhatsApp group.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through 
                our official contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;