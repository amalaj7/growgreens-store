import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-primary">
      {image && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
