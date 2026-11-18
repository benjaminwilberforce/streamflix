import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

export const Topbar = () => {
  return (
    <header className="sticky flex h-16 items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <div className="text-indigo-500 text-xl font-bold tracking-tight">Streamflix</div>
        <nav>
          <ul className="flex items-center gap-3 text-white text-sm">
            <li>
              <Link to="/" className="font-bold">Home</Link>
            </li>
            <li>
              <Link to="/my-list">My List</Link>
            </li>
            <li>
              <Link to="/genres">Genres</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className="relative">
          <Input
            id="input-field-username"
            type="text"
            placeholder="Search movies"
            className=" border-slate-600 bg-slate-900 text-slate-400 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>
    </header>
  );
};
