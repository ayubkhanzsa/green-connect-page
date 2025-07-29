import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Returns = () => {
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
          <h1 className="text-2xl font-bold">Return & Refund Policy</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-gray max-w-none">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Service Nature</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our WhatsApp group is a free informational service. As we do not charge fees or 
                sell products through the group, traditional return and refund policies do not apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Group Membership</h2>
              <p className="text-muted-foreground leading-relaxed">
                Joining our WhatsApp group is free and voluntary. You may leave the group at any 
                time without any charges or penalties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Information and Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information, news, offers, and insights shared in the group are provided for 
                informational purposes only. We do not guarantee the accuracy or completeness of 
                the information shared.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Third-Party Offers</h2>
              <p className="text-muted-foreground leading-relaxed">
                If third-party offers or products are shared in the group, any returns or refunds 
                would be subject to the policies of those specific third parties. We are not 
                responsible for third-party transactions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any concerns about content shared in the group or wish to report 
                inappropriate behavior, please contact us through our official contact page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Leaving the Group</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You can leave the group at any time through WhatsApp</li>
                <li>No notice period is required</li>
                <li>You may rejoin the group using the same invitation link if available</li>
                <li>Leaving the group removes access to future messages but not past messages on your device</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Data Removal</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you wish to have your contact information removed from any associated contact 
                lists after leaving the group, please contact us with your request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update this Return & Refund Policy at any time. Changes 
                will be announced in the group or through other appropriate channels.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For any questions regarding this policy or to request data removal, please 
                contact us through our official contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Returns;