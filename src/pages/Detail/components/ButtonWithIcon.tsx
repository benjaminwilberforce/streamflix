import { Button } from "@/components/ui/button"
import type React from "react"


export function ButtonWithIcon({icon, text, colors, disc}: {icon?: React.ReactNode, text?: string, colors: {text?: string, bg: string}, disc?: boolean}) {
  return (
    <Button variant="outline" size="sm" className={`${colors.text} ${colors.bg} ${disc ? "rounded-full" : ""}`}>
      {icon && icon} {text}
    </Button>
  )
}
