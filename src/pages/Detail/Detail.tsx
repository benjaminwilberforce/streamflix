import { Check, DotIcon, Play } from "lucide-react";
import { CardImage } from "./components/CardImage";
import { ButtonWithIcon } from "./components/ButtonWithIcon";
import { Badge } from "@/components/ui/badge";
import { CardSmall } from "./components/CardSmall";
import { CircularButton } from "./components/CircularButton";

export const Detail = () => {
  return (
    <div className="flex-1 flex flex-col justify-between gap-5">
      <section className="flex flex-col-reverse md:grid md:grid-cols-3 gap-5">
        <div className=" bg-amber-50">
          <CardImage />
        </div>

        <div className="col-span-2 bg-red-300">
          <div>
            <div className="flex flex-col gap-1 mb-2 sm:mb-4">
              <p className="text-slate-400 text-xs md:text-base lg:text-lg">
                Home / Movie / Midnight Harbor
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Midninght Harbor
              </h1>
              <div className="flex items-center text-xs gap-2">
                <span>8.1</span>
                <span>2026</span>
                <DotIcon />
                <span>1h 54m</span>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Drama
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white">
                  Mystery
                </Badge>
              </div>
              <p className="text-xs">
                A night-shift ferry pilot finds a message in a bottle that leads
                her to town that is not on any map. As the tide turns, she has
                to decide whether to go back or stay.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <ButtonWithIcon colors={{ text: "text-indigo-950", bg: "bg-indigo-500" }} icon={<Check />} text="In My List" />
              <ButtonWithIcon colors={{ text: "text-white", bg: "bg-white/10" }} text="Remove from My List" />
            </div>

            <div className="mb-2 sm:mb-4">
                <CardSmall />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold tracking-tight text-white">Cast</h2>
            <div className="flex items-center gap-2">
                <div className="flex flex-col">
                    <div className="size-15 sm:size-20 border rounded-lg shrink-0 "></div>
                    <p className="text-xs">Actor name</p>
                </div>
                <div className="flex flex-col">
                    <div className="size-15 sm:size-20 border rounded-lg shrink-0 "></div>
                    <p className="text-xs">Actor name</p>
                </div>
                <div className="flex flex-col">
                    <div className="size-15 sm:size-20 border rounded-lg shrink-0 "></div>
                    <p className="text-xs">Actor name</p>
                </div>
                <div className="flex flex-col">
                    <div className="size-15 sm:size-20 border rounded-lg shrink-0 "></div>
                    <p className="text-xs">Actor name</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-1 font-bold tracking-tight text-white">Trailer</h2>
        <div className="h-40 sm:h-50 lg:h-70 bg-pink-100 flex items-center justify-center rounded-lg mb-4">
            <CircularButton />
        </div>
      </section>
    </div>
  );
};
