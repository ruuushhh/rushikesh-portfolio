"use client"
import { cn } from "@/lib/utils"

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-md border bg-white text-indigo-600 shadow-sm ring-1 ring-black/5 dark:bg-zinc-900",
        className,
      )}
      aria-label="RT monogram"
      role="img"
    >
      <span className="font-extrabold tracking-tight">RT</span>
    </div>
  )
}
