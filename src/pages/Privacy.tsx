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
              <p className="text-muted-foreground leading-relaxed text-lg">
                We value your privacy. This website does not collect, store, or sell any personal data. 
                When you click the "Join WhatsApp Group" button, you are redirected to WhatsApp voluntarily and independently. 
                We do not retain your phone number or any identifiable information.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                We do not use cookies, tracking pixels, or third-party advertising scripts on this site.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                Your interaction with this page is anonymous and limited to the content displayed here.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                If you have any concerns about your data or privacy, feel free to contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Privacy;