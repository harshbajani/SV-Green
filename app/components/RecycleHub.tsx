import { motion } from "framer-motion";
import ScrollFloat from "./react-bits/ScrollFloat";

export const RecycleHub = ({
  title,
  description,
  src,
  alt,
  item,
}: {
  title: string;
  description: string;
  src: string;
  alt: string;

  item: { title: string; Icon?: any }[];
}) => {
  return (
    <section className="py-20 px-4 bg-brand-600">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-4xl font-bold mb-4 text-brand-50">
            <ScrollFloat stagger={0.03}>{title}</ScrollFloat>
          </h2>
          <p className="text-brand-50 max-w-3xl mx-auto text-sm">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {item?.map(({ title, Icon }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white hover:bg-brand-600 hover:group rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-200 h-full relative overflow-hidden group cursor-pointer z-30"
            >
              <motion.div className="w-16 h-16 bg-brand-600 group-hover:bg-white rounded-full flex items-center justify-center mb-4 relative z-10 transition-all duration-300 shadow-md group-hover:shadow-lg">
                <span className="text-white group-hover:text-brand-600 font-bold text-xl">
                  <Icon className="h-10 w-10" />
                </span>
              </motion.div>

              <h3 className="font-bold text-lg mb-3 text-brand-800 relative z-10 group-hover:text-white transition-colors duration-300">
                {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 z-0 -mt-[500px] hidden sm:block">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover invert opacity-15"
        />
      </div>
      <div className="absolute left-0 z-0 -mt-[500px] hidden sm:block">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover invert opacity-15"
        />
      </div>
    </section>
  );
};
