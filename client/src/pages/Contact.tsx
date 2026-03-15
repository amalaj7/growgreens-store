import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useContactSubmit } from "@/hooks/use-contact";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import heroImg from "/images/hero_microgreens.jpg";

export default function Contact() {
  const { mutate, isPending } = useContactSubmit();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      type: "general"
    }
  });

  const onSubmit = (data: InsertContactRequest) => {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <div>
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
                        <Input placeholder="Your Name" className="rounded-lg" {...field} />
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
                          <Input placeholder="your@email.com" className="rounded-lg" {...field} />
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
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+91..." className="rounded-lg" {...field} value={field.value || ''} />
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
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="subscription">Subscription (Kerala)</SelectItem>
                          <SelectItem value="training">Training & Workshops</SelectItem>
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
                        <Textarea placeholder="How can we help you?" className="min-h-[120px] rounded-lg" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-lg h-12 text-base font-semibold" disabled={isPending}>
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
}
