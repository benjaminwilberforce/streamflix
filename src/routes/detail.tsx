import { Detail } from '@/pages/Detail/Detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/detail')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Detail />
}
