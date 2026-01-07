import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 79 285 91 50",
      href: "tel:+41792859150",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "glamour-nails@gmx.ch",
      href: "mailto:glamour-nails@gmx.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Merlachfeld 215, 3280 Murten, CH",
      href: "https://maps.google.com/?q=Merlachfeld+215,+3280+Murten",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70 mt-6">{t.contact.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-6 p-6 rounded-xl bg-background border border-border shadow-soft hover:shadow-medium hover:border-primary transition-all"
                >
                  <div className="mt-1 p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                    <p className="text-foreground/70">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg" className="w-full rounded-full">
                <a href="tel:+41792859150">{t.contact.cta}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-medium border border-border"
          >
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.3506482936433!2d7.104781!3d46.918678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478f1e1e1e1e1e1f%3A0x1e1e1e1e1e1e1e1e!2sMerlachfeld%20215%2C%203280%20Murten!5e0!3m2!1sen!2sch!4v1704662400000&markers=color:0xdb2777%7C46.918678,7.104781"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
