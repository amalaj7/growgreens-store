import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import heroImg from "/images/hero_microgreens.jpg";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialType = searchParams.get("type") || "general";

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: initialType,
      state: ""
    }
  });

  // Update type if it changes in URL (e.g. if navigating within the same component)
  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const typeFromUrl = currentParams.get("type");
    if (typeFromUrl && ["general", "products", "subscription", "training"].includes(typeFromUrl)) {
      form.setValue("type", typeFromUrl);
    }
  }, [location, form]);

  const onSubmit = async (data: InsertContactRequest) => {
    setIsSubmitting(true);
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL4_vySt9irPcW0gNrJJX2-Wfq0X-UykXGirYQ4IC_LX-X-g/formResponse";
    
    // Create URLSearchParams for form data
    const formData = new URLSearchParams();
    formData.append("entry.25911088", data.name);
    formData.append("entry.1052839930", data.email);
    formData.append("entry.242468177", data.phone || "");
    
    // Map type to exact Google Form values provided in DOM
    const typeMap: Record<string, string> = {
      "subscription": "Subscription",
      "training": "Training",
      "products": "Products",
      "general": "General Inquiry"
    };
    formData.append("entry.1135467792", typeMap[data.type] || "General Inquiry");
    formData.append("entry.315415258", data.state || "");
    formData.append("entry.1018339571", data.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
      });
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SEO 
        title="Contact Us | Commercial Microgreens Supplier & Business Opportunities" 
        description="Contact Grow Greens for fresh microgreens near me in Kochi, Kerala. We handle retail subscriptions, commercial supply, microgreens trainings, and global export."
        keywords="commercial microgreens supplier, microgreens business opportunity kochi, wholesale microgreens india, microgreens global export, microgreens contact kerala, buy microgreens in bulk india"
        path="/contact"
      />
      <PageHeader 
        title="Get In Touch" 
        subtitle="We'd love to hear from you"
        image={heroImg}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl mb-8">Contact Information</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/30 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 73062 99044</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/30 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">growgreensstore@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/30 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">South Chittoor, Ernakulam<br/>Kerala, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/30 rounded-full text-primary">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Social</h3>
                  <a href="https://www.instagram.com/growgreensstore/?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    @growgreensstore
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
            <h2 className="text-2xl mb-6">Send us a Message</h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" className="rounded-lg h-12 text-base border-primary/20 bg-white focus:border-primary/50 transition-colors shadow-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" className="rounded-lg h-12 text-base border-primary/20 bg-white focus:border-primary/50 transition-colors shadow-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone Number" className="rounded-lg h-12 text-base border-primary/20 bg-white focus:border-primary/50 transition-colors shadow-sm" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Inquiry Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-lg h-12 text-base border-primary/20 bg-white focus:ring-primary/50 transition-colors shadow-sm">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="products">Our Products</SelectItem>
                          <SelectItem value="subscription">Subscription</SelectItem>
                          <SelectItem value="training">Training & Workshops</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-lg h-12 text-base border-primary/20 bg-white focus:ring-primary/50 transition-colors shadow-sm">
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {[
                            "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
                            "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
                            "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
                            "Meghalaya", "Mizoram", "Nagaland", "Odisha (formerly Orissa)", "Punjab",
                            "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                            "Uttar Pradesh", "Uttarakhand"
                          ].map(state => (
                            <SelectItem key={state} value={state}>{state}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="min-h-[140px] rounded-lg text-base border-primary/20 bg-white focus:border-primary/50 transition-colors shadow-sm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-lg h-12 text-base font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}
