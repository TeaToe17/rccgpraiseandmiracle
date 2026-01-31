// In-memory storage for stream links
let streamChannels = {
  video: {
    id: "video",
    name: "Live Video",
    type: "video" as const,
    link: "",
  },
  audio: {
    id: "audio",
    name: "Live Audio",
    type: "audio" as const,
    link: "",
  },
};

export async function GET() {
  return Response.json(streamChannels);
}

export async function POST(request: Request) {
  try {
    const { channelType, link, password } = await request.json();

    const ADMIN_PASSWORD = "rccgpm2026";

    if (password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!channelType || !["video", "audio"].includes(channelType)) {
      return Response.json({ error: "Invalid channel type" }, { status: 400 });
    }

    streamChannels[channelType as "video" | "audio"].link = link;

    return Response.json(streamChannels);
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
