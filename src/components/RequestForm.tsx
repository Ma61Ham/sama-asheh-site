import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CreditCard } from "lucide-react";

const paymentMethods = [
  { id: "paypal", name: "PayPal" },
  { id: "venmo", name: "Venmo" },
  { id: "zelle", name: "Zelle" },
  { id: "applepay", name: "Apple Pay" },
  { id: "cashapp", name: "Cash App" },
];

const RequestForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    paymentMethod: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Request Sent!",
      description: "Sama will reply to your email soon.",
    });

    setFormData({ name: "", email: "", description: "", paymentMethod: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="request" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Commission
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Request an <span className="italic">Artwork</span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              If you'd like a custom piece, fill out the form below and Sama will
              reply via email.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-sans text-sm font-medium text-foreground"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="h-12 bg-background border-border/50 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-sans text-sm font-medium text-foreground"
                >
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="h-12 bg-background border-border/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="font-sans text-sm font-medium text-foreground"
              >
                Artwork Description
              </label>
              <Textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your vision for the artwork..."
                className="min-h-[160px] bg-background border-border/50 focus:border-primary resize-none"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <label className="font-sans text-sm font-medium text-foreground flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                Preferred Payment Method
              </label>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, paymentMethod: method.id }))
                    }
                    className={`px-5 py-2.5 rounded-full font-sans text-sm transition-all duration-300 ${
                      formData.paymentMethod === method.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
                    }`}
                  >
                    {method.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="hero"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Request
                    <Send className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
