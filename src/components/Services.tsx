import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";
import { Sparkles } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">{t.services.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">{t.services.description}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border shadow-soft hover:shadow-medium hover:border-primary transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
