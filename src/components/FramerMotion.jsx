import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FramerMotion = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
