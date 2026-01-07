import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Placeholder gallery - showing beauty nails related descriptions
  const galleryItems = [
    { id: 1, alt: "Manucure classique", color: "from-pink-400" },
    { id: 2, alt: "Ongles Gel", color: "from-purple-400" },
    { id: 3, alt: "Nail Art floral", color: "from-rose-400" },
    { id: 4, alt: "Pédicure luxe", color: "from-magenta-400" },
    { id: 5, alt: "Design géométrique", color: "from-pink-500" },
    { id: 6, alt: "Finish brillant", color: "from-purple-500" },
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">{t.gallery.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/70">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-accent opacity-70`} />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{item.alt}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
