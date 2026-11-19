import { Play} from "lucide-react"
import { Button } from "@/components/ui/button"

export function CircularButton() {
  return (
    <Button size="icon" className="rounded-full bg-indigo-500 sm:size-15">
      <Play className="size-3 sm:size-5" />
    </Button>
  )
}
