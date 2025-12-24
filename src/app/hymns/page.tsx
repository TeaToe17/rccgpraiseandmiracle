"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Music, X } from "lucide-react";
import { searchHymns } from "@/lib/hymns-data";

interface Hymn {
  id: string;
  number: string;
  title: string;
  firstLine: string;
  lyrics: string;
  author: string;
}

export default function HymnsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedHymn, setSelectedHymn] = useState<Hymn | null>(null);
  const [searchResults, setSearchResults] = useState<Hymn[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const results = searchHymns(query);
    setSearchResults(results);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Music className="w-12 h-12 text-purple-600" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                RCCG Hymns
              </h1>
            </div>
            <p className="text-xl text-gray-700">
              Search for any hymn by title, lyrics, number, or keywords
            </p>
          </motion.div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            className="relative mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by title, lyrics, number, or keywords..."
                className="w-full pl-14 pr-4 py-5 text-lg rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-all duration-500 ease-in shadow-lg hover:shadow-xl bg-white"
              />
            </div>
          </motion.div>

          {/* Search Results */}
          <AnimatePresence mode="wait">
            {searchQuery.trim() && searchResults.length > 0 && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
                className="space-y-4 mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Found {searchResults.length} hymn
                  {searchResults.length !== 1 ? "s" : ""}
                </h2>

                {searchResults.map((hymn, index) => (
                  <motion.button
                    key={hymn.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.42, 0, 0.58, 1],
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
                    }}
                    onClick={() => setSelectedHymn(hymn)}
                    className="w-full p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-in text-left border-2 border-transparent hover:border-purple-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {hymn.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {hymn.title}
                        </h3>
                        <p className="text-gray-600 italic mb-1">
                          {hymn.firstLine}
                        </p>
                        <p className="text-sm text-purple-600">
                          by {hymn.author}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {searchQuery.trim() && searchResults.length === 0 && (
              <motion.div
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600">
                  No hymns found. Try different keywords.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hymn Modal */}
      <AnimatePresence>
        {selectedHymn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedHymn(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm opacity-90 mb-1">
                      Hymn #{selectedHymn.number}
                    </div>
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedHymn.title}
                    </h2>
                    <p className="text-sm opacity-90">
                      by {selectedHymn.author}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedHymn(null)}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 ease-in hover:scale-110"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)]">
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
                    {selectedHymn.lyrics}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
