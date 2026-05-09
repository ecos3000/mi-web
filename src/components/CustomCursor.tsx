import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('[role="button"]') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="custom-cursor-dot hidden md:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      <motion.div 
        ref={ringRef}
        className={`custom-cursor-ring hidden md:block ${isHovering ? 'hover' : ''}`}
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 250,
          mass: 0.5
        }}
      />
    </>
  );
};

export default CustomCursor;
