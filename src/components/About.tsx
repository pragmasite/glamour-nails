import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { number: "10+", label: t.about.stat1 },
    { number: "500+", label: t.about.stat2 },
    { number: "1000+", label: t.about.stat3 },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.about.title1} <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{t.about.p2}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">{stat.number}</div>
                <p className="text-sm text-foreground/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-background border border-border shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-serif text-lg text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
