import { Badge } from "@/components/ui/badge";
import { ButtonWithIcon } from "./components/ButtonWithIcon";
import { Play, Plus } from "lucide-react";
import { CardImage } from "./components/CardImage";

export const Home = () => {
  return (
    <div className="flex-1 flex flex-col">
      <section className="h-1/3 mt-20 mb-10">
      
        <div className="relative">
          <div className="absolute right-[6%] top-10 -translate-y-1/2 size-25 rounded-full bg-radial-[at_35%_35%] from-indigo-100 via-indigo-300 to-indigo-500 shadow-[0_0_80px_rgba(129,140,248,0.35)]"></div>
        </div>

        <div className="flex flex-col gap-4">
          <Badge variant="secondary" className="bg-white/10 text-white">
            Trending this week
          </Badge>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Midnight Harbor
          </h1>

          <p className="text-sm text-white max-w-60 sm:max-w-80">
            A night-shift ferry pilot finds a message in a bottle that leads her
            to a town that is not on any map.
          </p>

          <div className="flex gap-2">
            <ButtonWithIcon
              colors={{ text: "text-indigo-950", bg: "bg-indigo-500" }}
              icon={<Play />}
              text="Play trailer"
            />
            <ButtonWithIcon
              colors={{ text: "text-white", bg: "bg-white/10" }}
              icon={<Plus />}
              text="Add to My List"
            />
          </div>
        </div>

      </section>

      <section className="">
        <div>
          <h2 className="mb-4 text-lg font-bold tracking-tight text-white">
            Trending now
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array(6).fill(null).map(() => <CardImage key={crypto.randomUUID()} />)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold tracking-tight text-white">
            Trending now
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array(6).fill(null).map(() => <CardImage key={crypto.randomUUID()} />)}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-lg font-bold tracking-tight text-white">
            Trending now
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array(6).fill(null).map(() => <CardImage key={crypto.randomUUID()} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
