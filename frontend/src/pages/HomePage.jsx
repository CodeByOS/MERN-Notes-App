import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RateLimit from "../components/RateLimit";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";
import { Loader2Icon } from "lucide-react";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-100">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isRateLimited ? (
          <RateLimit />
        ) : loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2Icon className="animate-spin text-primary size-10" />
            <span className="ml-3 text-lg text-primary">Loading notes...</span>
          </div>
        ) : notes.length === 0 ? (
          <NotesNotFound />
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-primary-content">Your Notes</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage
