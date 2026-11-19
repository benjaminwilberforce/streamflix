import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Star } from "lucide-react"

export function CardSmall() {
  return (
    <Card size="sm" className="w-80 max-w-sm py-2 rounded-lg text-slate-300 border-slate-600">
      <CardContent className="flex items-center gap-2 text-xs">
        <span>
          Your raiting
        </span>
        <span className="flex items center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </span>
        <span>4 of 5</span>
      </CardContent>
    </Card>
  )
}
