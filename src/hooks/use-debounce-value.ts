import { useState, useEffect } from "react";

export function useDebounceValue(value: string, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // Clear timeout if value changes before delay
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}