import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative min-h-[260px] sm:min-h-[300px] h-[32vh] sm:h-[40vh] md:h-[48vh] flex items-center justify-center overflow-hidden bg-primary pt-16 sm:pt-20 pb-8 sm:pb-12">
      {image && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 z-10" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-4 sm:mt-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-md"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
