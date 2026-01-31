import HeroCarousel from "@/components/hero-carousel";
import ParallaxSection from "@/components/parallax-section";
import ProgramsCarousel from "@/components/programs-carousel";
import PastoratesGallery from "@/components/pastorates-gallery";
import FoundersGallery from "@/components/founders-gallery";
import HouseFellowshipTable from "@/components/house-fellowship-table";
import MessagesSection from "@/components/messages-section";
import TitheOfferingSection from "@/components/tithe-offering-section";
import LiveStreamSection from "@/components/live-stream-section"

export default function Home() {
  const programs = [
    {
      id: 1,
      title: "Prophetic Mantle",
      date: "1st day of the month",
      time: "6:00 AM - 7:00 AM",
      location: "Main Church",
      description:
        "Join us for a prophetic and powerful time in God's presence.",
      color: "from-purple-500 to-pink-500",
      images: [
        "https://ik.imagekit.io/jale/pm1.jpg",
        "https://ik.imagekit.io/jale/pm1.jpg",
        "https://ik.imagekit.io/jale/pm1.jpg",
      ],
    },
    {
      id: 2,
      title: "Women's Program",
      date: "To be Announced",
      time: "To be Announced",
      location: "Main Church",
      description:
        "A special gathering of women seeking God's presence, learning, growing and edifying each other.",
      color: "from-pink-500 to-amber-500",
      images: [
        "https://ik.imagekit.io/jale/wp2.jpg",
        "https://ik.imagekit.io/jale/wp1.jpg",
        "https://ik.imagekit.io/jale/wp3.jpg",
      ],
    },
    {
      id: 3,
      title: "Let's go Fishing",
      date: "To be announced",
      time: "To be announced",
      location: "To be announced",
      description:
        "An outreach program focused on sharing the gospel through love, prayer, and personal engagement with the community.",
      color: "from-amber-500 to-purple-500",
      images: [
        "https://ik.imagekit.io/jale/lgf1.jpg",
        "https://ik.imagekit.io/jale/lgf2.jpg",
        "https://ik.imagekit.io/jale/lgf3.jpg",
      ],
    },
    {
      id: 4,
      title: "Cultural Sunday",
      date: "To be announced",
      time: "To be announced",
      location: "Main Church",
      description:
        "A joyful celebration of cultural diversity, unity, and faith expressed through traditions and fellowship.",
      color: "from-purple-600 to-pink-600",
      images: [
        "https://ik.imagekit.io/jale/hero1.jpg",
        "https://ik.imagekit.io/jale/cs2.jpg",
        "https://ik.imagekit.io/jale/cs3.jpg",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50 overflow-x-hidden">
      {/* Hero Section with 3D Carousel */}
      <HeroCarousel />

      {/* Believers Class & Communion Service */}
      <ParallaxSection />

      {/* Upcoming Programs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 h-26 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Upcoming Programs
          </h2>
          <p className="text-center text-lg text-purple-700 mb-12">
            Join us for these blessed gatherings
          </p>
          <ProgramsCarousel programs={programs} />
        </div>
      </section>

      {/* Digging Deep & Faith Clinic */}
      <ParallaxSection variant="weekday" />

      <MessagesSection />

      <LiveStreamSection/>

      <TitheOfferingSection />

      {/* Meet the Pastorates */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-600 to-purple-600 bg-clip-text text-transparent">
            Meet the Pastorates
          </h2>
          <p className="text-center text-lg text-purple-700 mb-12">
            Our dedicated spiritual leaders serving with passion and grace
          </p>
          <PastoratesGallery />
        </div>
      </section> */}

      {/* House Fellowship Centers */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            House Fellowship Centers
          </h2>
          <p className="text-center text-lg text-purple-700 mb-12 max-w-2xl mx-auto">
            God has spiritual gems for you. Pick them up at your house
            fellowship centers. Experience intimate fellowship and grow in faith
            together.
          </p>
          <HouseFellowshipTable />
        </div>
      </section>

      {/* Meet the Founding Fathers */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet the Fathers
          </h2>
          <p className="text-center text-lg text-purple-700 mb-12">
            Honoring those who laid the foundation of our faith community
          </p>
          <FoundersGallery />
        </div>
      </section>
    </div>
  );
}
