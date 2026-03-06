import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const [sending, setSending] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_9pynseu",       // Your EmailJS service ID
        "template_b4ta4i9",      // Your EmailJS template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          message: formData.message,
          time: new Date().toLocaleString(), // Current time
        },
        "bCJOsNOOJfqs6otL0"       // Your EmailJS public key
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      // Reset form
      setFormData({ user_name: "", user_email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="px-6 py-20 md:py-32 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">SalesEdge</h1>
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
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Key Features</h2>
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

      {/* Contact Us */}
      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <Input
                id="user_name"
                name="user_name"
                required
                placeholder="Your name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <Input
                id="user_email"
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="How can we help?"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={sending} className="w-full">
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* Privacy link */}
      <section className="px-6 py-12 text-center">
        <Link to="/privacy-policy" className="text-primary underline underline-offset-4 hover:opacity-80">Privacy Policy</Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SalesEdge. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;