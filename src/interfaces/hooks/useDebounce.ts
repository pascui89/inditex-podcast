import { useEffect, useRef } from 'react';

/**
 * Hook to implement a debounce function.
 * @param callback The function to be debounced.
 * @param delay The delay time in milliseconds.
 * @returns A function to trigger the debounced callback and a cancel function to cancel the debounce.
 */
export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): [T, () => void] {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  const cancelDebounce = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return cancelDebounce;
  }, []);

  return [debouncedCallback as T, cancelDebounce];
}
