import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-16", className)}>
      <h2 className="font-heading text-4xl md:text-5xl text-nude-900 mb-6 relative inline-block">
        {title}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gold-400/50"></span>
      </h2>
      {subtitle && <p className="text-lg text-nude-800/80 leading-relaxed mt-8">{subtitle}</p>}
    </div>
  );
}
