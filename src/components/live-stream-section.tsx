"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Play, Radio, Lock, Unlock } from "lucide-react";

interface StreamChannel {
  id: string;
  name: string;
  type: "video" | "audio";
  link: string;
}

const ADMIN_PASSWORD = process.env.NEXT_ADMIN_PASSWORD;

export default function LiveStreamSection() {
  const [videoChannel, setVideoChannel] = useState<StreamChannel>({
    id: "video",
    name: "Live Video",
    type: "video",
    link: "",
  });

  const [audioChannel, setAudioChannel] = useState<StreamChannel>({
    id: "audio",
    name: "Live Audio",
    type: "audio",
    link: "",
  });

  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [editingChannel, setEditingChannel] = useState<
    "video" | "audio" | null
  >(null);
  const [newLink, setNewLink] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [mounted, setMounted] = useState(false);

  // Fetch streams on mount and set up polling
  useEffect(() => {
    setMounted(true);
    fetchStreams();
    const interval = setInterval(fetchStreams, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchStreams = async () => {
    try {
      const response = await fetch("/api/streams");
      const data = await response.json();
      if (data.video) setVideoChannel(data.video);
      if (data.audio) setAudioChannel(data.audio);
    } catch (error) {
      console.log("[v0] Error fetching streams:", error);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdminMode(true);
      setAdminPassword(passwordInput);
      setPasswordError("");
      setPasswordInput("");
    } else {
      setPasswordError("Incorrect password");
      setPasswordInput("");
    }
  };

  const handleUpdateChannel = async (channelType: "video" | "audio") => {
    try {
      const response = await fetch("/api/streams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channelType,
          link: newLink.trim(),
          password: ADMIN_PASSWORD,
        }),
      });

      if (!response.ok) {
        setPasswordError("Failed to update stream");
        return;
      }

      const data = await response.json();
      if (channelType === "video") {
        setVideoChannel(data.video);
      } else {
        setAudioChannel(data.audio);
      }

      setNewLink("");
      setEditingChannel(null);
      setPasswordError("");
    } catch (error) {
      console.log("[v0] Error updating stream:", error);
      setPasswordError("Error updating stream");
    }
  };

  const extractEmbedUrl = (url: string): string => {
    if (!url) return "";

    // YouTube formats: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/live/ID
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      let videoId = "";

      // Try /live/ format first (YouTube Live)
      const liveMatch = url.match(/youtube\.com\/live\/([a-zA-Z0-9_-]+)/);
      if (liveMatch) {
        videoId = liveMatch[1];
      } else {
        // Try watch?v= format
        const watchMatch = url.match(/[\?&]v=([a-zA-Z0-9_-]+)/);
        if (watchMatch) {
          videoId = watchMatch[1];
        } else {
          // Try youtu.be/ format
          const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
          if (shortMatch) {
            videoId = shortMatch[1];
          }
        }
      }

      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }

    // Facebook video/live
    if (url.includes("facebook.com") || url.includes("fb.watch")) {
      return url; // Facebook embeds should work with direct URL
    }

    // Mixlr
    if (url.includes("mixlr.com")) {
      return url; // Mixlr handles streaming with direct link
    }

    // DasaRadio
    if (url.includes("dasaradio") || url.includes("dasa")) {
      return url; // DasaRadio handles streaming with direct link
    }

    return url;
  };

  if (!mounted) return null;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Watch & Listen Live
        </h2>
        <p className="text-center text-lg text-purple-700 mb-16">
          {isAdminMode && adminPassword
            ? "Admin Mode: Update live streams for all users"
            : "Connect with our live services and worship events"}
        </p>

        {!isAdminMode && (
          <div className="mb-12 text-center">
            <button
              onClick={() => setIsAdminMode(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            >
              <Lock className="w-4 h-4" />
              Admin Access
            </button>
          </div>
        )}

        {isAdminMode && !adminPassword && (
          <div className="max-w-md mx-auto mb-12 p-6 bg-white rounded-lg shadow-lg">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <h3 className="text-xl font-bold text-purple-700">Admin Login</h3>
              <input
                type="password"
                placeholder="Enter admin password"
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setPasswordError("");
                }}
                className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {passwordError && (
                <p className="text-red-600 text-sm">{passwordError}</p>
              )}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsAdminMode(false)}
                className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Channel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-purple-600 to-pink-600" />
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-purple-100">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-700">
                    {videoChannel.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    YouTube, Facebook, or custom stream
                  </p>
                </div>
              </div>

              {videoChannel.link && !editingChannel ? (
                <div className="space-y-4">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    {videoChannel.link.includes("youtube") ||
                    videoChannel.link.includes("youtu.be") ? (
                      <iframe
                        src={extractEmbedUrl(videoChannel.link)}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <p className="text-white text-center px-4">
                          Live stream available at:{" "}
                          <a
                            href={videoChannel.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline break-all"
                          >
                            {videoChannel.link}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>

                  {isAdminMode && adminPassword && (
                    <button
                      onClick={() => {
                        setEditingChannel("video");
                        setNewLink(videoChannel.link);
                      }}
                      className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Update Link
                    </button>
                  )}
                </div>
              ) : !videoChannel.link && !editingChannel ? (
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600 text-center">
                    {isAdminMode && adminPassword
                      ? "No stream configured"
                      : "Stream not available"}
                  </p>
                </div>
              ) : null}

              {editingChannel === "video" && isAdminMode && adminPassword && (
                <div className="p-4 bg-purple-50 rounded-lg space-y-3">
                  <label className="block text-sm font-semibold text-purple-700 mb-2">
                    Video Stream Link
                  </label>
                  <input
                    type="text"
                    placeholder="Enter YouTube, Facebook, or stream link"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateChannel("video")}
                      className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingChannel(null);
                        setNewLink("");
                      }}
                      className="flex-1 px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {!videoChannel.link &&
                !editingChannel &&
                isAdminMode &&
                adminPassword && (
                  <button
                    onClick={() => {
                      setEditingChannel("video");
                      setNewLink("");
                    }}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add Video Stream
                  </button>
                )}
            </div>
          </div>

          {/* Audio Channel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-2 bg-gradient-to-r from-pink-600 to-amber-600" />
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-pink-100">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-pink-700">
                    {audioChannel.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Mixlr, DasaRadio, or custom audio stream
                  </p>
                </div>
              </div>

              {audioChannel.link && !editingChannel ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-pink-100 to-amber-100 rounded-lg p-8 flex flex-col items-center justify-center min-h-48">
                    <div className="text-5xl mb-4">🎙️</div>
                    <p className="text-sm text-gray-700 text-center mb-4">
                      Audio Stream Active
                    </p>
                    <a
                      href={audioChannel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-semibold"
                    >
                      Open Stream
                    </a>
                  </div>

                  {isAdminMode && adminPassword && (
                    <button
                      onClick={() => {
                        setEditingChannel("audio");
                        setNewLink(audioChannel.link);
                      }}
                      className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                    >
                      Update Link
                    </button>
                  )}
                </div>
              ) : !audioChannel.link && !editingChannel ? (
                <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center min-h-48">
                  <p className="text-gray-600 text-center">
                    {isAdminMode && adminPassword
                      ? "No stream configured"
                      : "Stream not available"}
                  </p>
                </div>
              ) : null}

              {editingChannel === "audio" && isAdminMode && adminPassword && (
                <div className="p-4 bg-pink-50 rounded-lg space-y-3">
                  <label className="block text-sm font-semibold text-pink-700 mb-2">
                    Audio Stream Link
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Mixlr, DasaRadio, or stream link"
                    value={newLink}
                    onChange={(e) => setNewLink(e.target.value)}
                    className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateChannel("audio")}
                      className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingChannel(null);
                        setNewLink("");
                      }}
                      className="flex-1 px-3 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {!audioChannel.link &&
                !editingChannel &&
                isAdminMode &&
                adminPassword && (
                  <button
                    onClick={() => {
                      setEditingChannel("audio");
                      setNewLink("");
                    }}
                    className="w-full px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                  >
                    Add Audio Stream
                  </button>
                )}
            </div>
          </div>
        </div>

        {isAdminMode && adminPassword && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setIsAdminMode(false);
                setAdminPassword("");
                setEditingChannel(null);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              <Unlock className="w-4 h-4" />
              Exit Admin Mode
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
