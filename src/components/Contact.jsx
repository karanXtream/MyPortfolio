import React, { useState } from "react";
import { portfolioData } from "../data/mock";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://myportfoliobackend-4usf.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => null);
        const errorText = errBody?.error || errBody?.message || res.statusText || `Status: ${res.status}`;
        throw new Error(errorText);
      }

      const data = await res.json().catch(() => null);

      if (!data || data.success !== true) {
        const errorText = (data && (data.error || data.message)) || "Unknown response from server";
        throw new Error(errorText);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact submit error:", err);
      toast({
        title: "Send Failed",
        description: err.message || "Unable to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-normal">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Email</h3>
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Phone</h3>
                  <a
                    href={`tel:${portfolioData.contact.phone}`}
                    className="text-gray-600 hover:text-black transition-colors font-medium"
                  >
                    {portfolioData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group hover:translate-x-2 transition-all duration-300 p-4 rounded-lg hover:bg-gray-50">
                <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 text-white flex items-center justify-center flex-shrink-0 rounded-lg group-hover:scale-110 transition-transform">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black mb-1">Location</h3>
                  <p className="text-gray-600 font-medium">{portfolioData.contact.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 transition-all duration-300 font-normal"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 transition-all duration-300 font-normal"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 transition-all duration-300 font-normal"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 transition-all duration-300 resize-none font-normal"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-black to-gray-800 text-white text-sm font-semibold hover:shadow-lg rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
