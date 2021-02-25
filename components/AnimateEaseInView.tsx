import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimateInViewProps {
  x?: number;
  y?: number;
  duration?: number;
}

const AnimateEaseInView: React.FC<AnimateInViewProps> = ({
  x = 0,
  y = 0,
  duration = 0,
  children,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          x,
          y,
          opacity: 0,
        },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration,
            ease: [0.6, -0.05, 0.1, 0.99],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateEaseInView;
