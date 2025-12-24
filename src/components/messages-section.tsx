"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Play, Pause } from "lucide-react";

// Define sermon message type
type SermonMessage = {
  id: string;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  mp3Url: string;
};

// Sample data
const sermonMessages: SermonMessage[] = [
  {
    id: "1",
    title: "Money,man & mammon",
    speaker: "Pastor Lanre Aiyedun",
    date: "",
    duration: "01:13:00",
    mp3Url:
      "https://archive.org/download/money-man-mammon-pst.-lanre-aiyedun-1-st-service/MONEY%2C%20MAN%20%26%20MAMMON_%20PST.%20LANRE%20AIYEDUN_1ST%20SERVICE.mp3",
  },
  {
    id: "2",
    title: "Your life & your time",
    speaker: "Deacon Kehinde Ayanbadejo",
    date: "",
    duration: "01:04:44",
    mp3Url:
      "https://archive.org/download/your-life-your-time-deacon-kehinde-ayanbadejo/YOUR%20LIFE%20%26%20YOUR%20TIME%20-%20DEACON%20KEHINDE%20AYANBADEJO.mp3",
  },
  {
    id: "3",
    title: "The mystery of the eyes",
    speaker: "Pastor Lanre Aiyedun",
    date: "",
    duration: "01:04:06",
    mp3Url:
      "https://archive.org/download/the-mystery-of-eyes-pst.-lanre-aiyedun/THE%20MYSTERY%20OF%20EYES%20-%20PST.%20LANRE%20AIYEDUN.mp3",
  },
  {
    id: "4",
    title: "The north & south gates",
    speaker: "Pastor Lanre Aiyedun",
    date: "",
    duration: "01:03:11",
    mp3Url:
      "https://archive.org/download/the-north-and-south-gates-pst.-lanre-aiyedun-2-nd-service-14-th-december-2025/THE%20NORTH%20AND%20SOUTH%20GATES%20%20PST.%20LANRE%20AIYEDUN%20%202ND%20SERVICE%20%2014TH%20DECEMBER%2C%202025.mp3",
  },
  {
    id: "5",
    title: "Own your future",
    speaker: "Pastor (Mrs) Adejumoke Aiyedun",
    date: "",
    duration: "44:42",
    mp3Url:
      "https://archive.org/download/own-your-future-pst-mrs-adejumoke-aiyedun-wife-apicp-csr-ii-lp-40/OWN%20YOUR%20FUTURE_%20PST%20%28MRS%29%20ADEJUMOKE%20AIYEDUN%20-%20WIFE%2C%20APICP%20%28CSR%20II%29%20LP%2040.mp3",
  },
  {
    id: "6",
    title: "Gainful grace",
    speaker: "Pastor Lanre Aiyedun",
    date: "November 10, 2024",
    duration: "39:",
    mp3Url:
      "https://archive.org/download/gainful-grace-pst.-lanre-aiyedun-14-th-december-2025/GAINFUL%20GRACE%20%20PST.%20LANRE%20AIYEDUN%20%2014TH%20DECEMBER%2C%202025.mp3",
  },
];

export default function MessagesSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlayPause = (sermon: SermonMessage) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.preload = "none";
    }

    const audio = audioRef.current;

    if (playingId === sermon.id) {
      audio.pause();
      setPlayingId(null);
      return;
    }

    audio.pause();
    audio.src = sermon.mp3Url;
    audio.play();
    audio.onended = () => setPlayingId(null);

    setPlayingId(sermon.id);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Recent Messages
          </h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Download and listen to our latest sermon messages. Be blessed and
            inspired by the Word of God.
          </p>
        </div>

        {/* Messages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sermonMessages.map((sermon, index) => (
            <div
              key={sermon.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in hover:shadow-2xl hover:scale-105 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: mounted ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl line-clamp-2">
                    {sermon.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  <p className="text-purple-700 font-semibold">
                    {sermon.speaker}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{sermon.date}</span>
                    <span className="font-semibold text-purple-600">
                      {sermon.duration}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePlayPause(sermon)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {playingId === sermon.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Play
                      </>
                    )}
                  </button>

                  <a
                    href={sermon.mp3Url}
                    download={`${sermon.title}.mp3`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
