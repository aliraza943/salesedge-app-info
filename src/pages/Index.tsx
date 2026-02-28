import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const features = [
  "RFP Tracking & Management",
  "Broker Relationship Management",
  "Pipeline Stages (Draft → Recommended → Sold)",
  "Goal Setting & Progress Tracking",
  "Follow-Up Reminders & Scheduling",
  "AI-Powered Voice RFP Entry",
  "AI Chat Assistant for Sales Insights",
  "Calendar Reminders & Notifications",
  "Closed Deal Tracking & Reporting",
  "Daily Sales Plan Export",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="px-6 py-20 md:py-32 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          SalesEdge
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          The Ultimate Sales Command Center for Insurance Professionals
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          SalesEdge is a mobile sales productivity app built for insurance professionals. 
          Manage your entire sales workflow — from RFP creation to closed deals — all in one place. 
          Stay organized, hit your goals, and close more business with powerful AI-assisted tools.
        </p>
      </header>

      {/* Features */}
      <section className="px-6 py-16 bg-secondary/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
            Key Features
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Privacy link */}
      <section className="px-6 py-12 text-center">
        <Link
          to="/privacy-policy"
          className="text-primary underline underline-offset-4 hover:opacity-80"
        >
          Privacy Policy
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SalesEdge. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
