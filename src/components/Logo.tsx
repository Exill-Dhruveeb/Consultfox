import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <Image
          src="/images/consultfox-mark.png"
          alt="consultfox logo mark"
          width={40}
          height={40}
          priority
          className="h-10 w-10 object-contain"
        />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-ink">
        consult<span className="text-primary">fox</span>
      </span>
    </span>
  );
}
