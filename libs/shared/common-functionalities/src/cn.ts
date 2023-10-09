import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * get class names
 * @param inputs class list
 * @returns class names
 */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export default cn;
