import { Link } from "react-router";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-primary cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-md hover:opacity-90">
                    NoteApp
                </h1>
                <div className="flex items-center gap-3">
                    <Link to="/create" className="btn btn-primary">
                    <Plus className="size-5" />
                    <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    );
};
export default Navbar;