import { motion } from 'framer-motion';

export const TreePatternBanner = () => {
  return (
    <div className="w-full h-16 md:h-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center">
        <svg 
          viewBox="0 0 1920 80" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <pattern id="treePattern" width="160" height="80" patternUnits="userSpaceOnUse">
              <motion.g 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Pine tree silhouette */}
                <line x1="80" y1="80" x2="80" y2="50" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="50" x2="60" y2="60" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="50" x2="100" y2="60" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="40" x2="55" y2="55" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="40" x2="105" y2="55" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="30" x2="50" y2="50" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="30" x2="110" y2="50" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="20" x2="45" y2="45" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                <line x1="80" y1="20" x2="115" y2="45" stroke="hsl(72, 60%, 35%)" strokeWidth="2" />
                
                {/* Hop/diamond shapes */}
                <polygon 
                  points="0,40 20,60 40,40 20,20" 
                  fill="hsl(72, 60%, 35%)" 
                  opacity="0.5"
                />
                <polygon 
                  points="120,40 140,60 160,40 140,20" 
                  fill="hsl(72, 60%, 35%)" 
                  opacity="0.5"
                />
              </motion.g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#treePattern)" />
        </svg>
      </div>
    </div>
  );
};
