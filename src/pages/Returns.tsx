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
              <p className="text-muted-foreground leading-relaxed text-lg">
                This site does not offer any products or services that involve payment. Therefore, no returns or refunds apply.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground leading-relaxed">
                If you believe you have encountered an issue or misleading link, please reach out to our contact details provided below.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Returns;