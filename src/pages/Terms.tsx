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
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                By using this website, you agree to the following terms:
              </p>
              
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li>This site provides a link to a voluntary WhatsApp group for informational purposes only.</li>
                <li>Joining the WhatsApp group is entirely optional.</li>
                <li>We do not charge any fees or ask for personal information.</li>
                <li>The group may be moderated for appropriate conduct, and users can be removed for spamming or violating group guidelines.</li>
              </ul>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to update these terms at any time without prior notice.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;