import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const totalTime = duration * 1000;
    const increment = end / (totalTime / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
