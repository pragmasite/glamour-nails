import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Hours: Monday-Friday 08:30-19:00, Saturday 08:30-16:00, Sunday closed
  // Wednesday closed
  const schedule = [
    { hours: "08:30 - 19:00" }, // Monday
    { hours: "08:30 - 19:00" }, // Tuesday
    { hours: t.hours.closed },  // Wednesday
    { hours: "08:30 - 19:00" }, // Thursday
    { hours: "08:30 - 19:00" }, // Friday
    { hours: "08:30 - 16:00" }, // Saturday
    { hours: t.hours.closed },  // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">{t.hours.title}</h2>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-primary">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === adjustedTodayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div
                  key={i}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    <span className={`${isToday ? "font-semibold text-primary" : "text-foreground"}`}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={`${isClosed ? "text-muted-foreground italic" : "text-foreground font-medium"}`}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
