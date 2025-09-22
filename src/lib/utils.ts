import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildWhatsAppLink(baseUrl: string | undefined, message: string) {
  const url = baseUrl || "";
  try {
    const hasQuery = url.includes("?");
    const sep = hasQuery ? "&" : "?";
    return `${url}${sep}text=${encodeURIComponent(message)}`;
  } catch {
    return url;
  }
}
