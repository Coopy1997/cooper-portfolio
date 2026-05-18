import { useEffect } from 'react';

export function usePointerGlow() {
  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = Math.round((event.clientX / window.innerWidth) * 100);
      const y = Math.round((event.clientY / window.innerHeight) * 100);
      document.body.style.setProperty('--mx', `${x}%`);
      document.body.style.setProperty('--my', `${y}%`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);
}
