import { Button } from "@/components/ui/button"

export function ButtonWithIcon({ colors, icon, text}) {
  return (
    <Button variant="outline" size="sm" className={`${colors.text} ${colors.bg}`}>
      {icon}{text}
    </Button>
  )

}
