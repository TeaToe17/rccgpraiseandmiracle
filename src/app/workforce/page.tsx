"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface DepartmentCardProps {
  title: string;
  description: string;
  images: { imageColor: string; src: string }[];
  reverse?: boolean;
  index: number;
}

function DepartmentCard({
  title,
  description,
  images,
  reverse,
  index,
}: DepartmentCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.42, 0, 0, 1] }}
      viewport={{ once: true }}
      className="py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 items-center`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.1 + 0.2,
              ease: [0.42, 0, 0, 1],
            }}
            viewport={{ once: true }}
            className="lg:flex-1 w-full"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Carousel container */}
              <div className="relative h-96 overflow-hidden rounded-3xl shadow-2xl">
                {images.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      opacity: idx === currentIndex ? 1 : 0,
                      scale: idx === currentIndex ? 1 : 0.8,
                      transition: { duration: 0.7, ease: [0.42, 0, 0, 1] },
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${image.imageColor} rounded-3xl`}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex  items-center justify-center overflow-hidden">
                      <img
                        src={`${image.src}?tr=w-1800,c-at_max,f-auto`}
                        alt="Team image"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-500 ease-in hover:bg-white hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-all duration-500 ease-in hover:bg-white hover:scale-110"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-500 ease-in ${
                      idx === currentIndex ? "bg-purple-600 w-8" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: index * 0.1 + 0.3,
              ease: [0.42, 0, 0, 1],
            }}
            viewport={{ once: true }}
            className="lg:flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default function Workforce() {
  const departments = [
    {
      title: "Choir",
      description:
        "Join our vibrant choir and use your voice to lead worship and glorify God. We welcome singers of all skill levels who have a passion for praising the Lord through music. Our choir ministers during services, special programs, and outreach events, bringing souls closer to God through harmonious melodies.",
      images: [
        {
          imageColor: "from-purple-400 to-pink-400",
          src: "https://ik.imagekit.io/jale/choir1.jpg",
        },
        {
          imageColor: "from-pink-400 to-amber-400",
          src: "https://ik.imagekit.io/jale/choir2.jpg",
        },
        {
          imageColor: "from-amber-400 to-purple-400",
          src: "https://ik.imagekit.io/jale/choir1.jpg",
        },
      ],
    },
    {
      title: "Ushers",
      description:
        "Be the welcoming face of our church! Our ushering team ensures every visitor and member feels at home. Ushers help maintain order, assist with seating, collect offerings, and ensure the comfort and safety of everyone in our congregation during services and special events.",
      images: [
        {
          imageColor: "from-amber-400 to-purple-400",
          src: "https://ik.imagekit.io/jale/usher3.jpg",
        },
        {
          imageColor: "from-purple-500 to-pink-500",
          src: "https://ik.imagekit.io/jale/usher3.jpg",
        },
        {
          imageColor: "from-pink-500 to-amber-500",
          src: "https://ik.imagekit.io/jale/usher3.jpg",
        },
      ],
      reverse: true,
    },
    {
      title: "Media",
      description:
        "Leverage technology to spread the Gospel! Our media team handles live streaming, video production, photography, social media management, and graphic design. If you have skills in any digital media area, join us in extending our reach beyond the four walls of the church.",
      images: [
        {
          imageColor: "from-pink-500 to-amber-500",
          src: "https://ik.imagekit.io/jale/media.png",
        },
        {
          imageColor: "from-amber-500 to-purple-500",
          src: "https://ik.imagekit.io/jale/media2.jpg",
        },
        {
          imageColor: "from-purple-400 to-pink-400",
          src: "https://ik.imagekit.io/jale/media.png",
        },
      ],
    },
    {
      title: "Sound Engineering",
      description:
        "Ensure excellent sound and lighting for our services. Our sound engineering team operates audio equipment, manages lighting systems, and maintains all technical infrastructure. We need dedicated individuals with a heart for service and an interest in sound engineering and technical operations.",
      images: [
        {
          imageColor: "from-purple-300 to-pink-300",
          src: "https://ik.imagekit.io/jale/sound1.jpg",
        },
        {
          imageColor: "from-pink-300 to-amber-300",
          src: "https://ik.imagekit.io/jale/sound2.jpg",
        },
        {
          imageColor: "from-amber-300 to-purple-300",
          src: "https://ik.imagekit.io/jale/sound3.jpg",
        },
      ],
      reverse: true,
    },
    {
      title: "Technical",
      description:
        "Power the service safely and effectively! The technical team is responsible for lighting, electrical setups, power distribution, and equipment safety within the church. If you have interest or skills in electricity, lighting systems, or technical installations, this team ensures everything runs smoothly behind the scenes.",
      images: [
        {
          imageColor: "from-pink-500 to-amber-500",
          src: "https://ik.imagekit.io/jale/technical.jpg",
        },
        {
          imageColor: "from-amber-500 to-purple-500",
          src: "https://ik.imagekit.io/jale/technical.jpg",
        },
        {
          imageColor: "from-purple-400 to-pink-400",
          src: "https://ik.imagekit.io/jale/technical.jpg",
        },
      ],
    },
    {
      title: "Medical",
      description:
        "Care with compassion and readiness! Our medical team provides first aid, emergency response, and health support during services and programs. If you have medical training or a heart for caring for others, you can help ensure the safety and wellbeing of everyone present.",
      images: [
        {
          imageColor: "from-purple-300 to-pink-300",
          src: "https://ik.imagekit.io/jale/med1.jpg",
        },
        {
          imageColor: "from-pink-300 to-amber-300",
          src: "https://ik.imagekit.io/jale/med2.jpg",
        },
        {
          imageColor: "from-amber-300 to-purple-300",
          src: "https://ik.imagekit.io/jale/med3.jpg",
        },
      ],
      reverse: true,
    },
    {
      title: "Evangelism",
      description:
        "Go out and make disciples! Our evangelism team is passionate about soul-winning and spreading the good news of Jesus Christ. Join us in outreach programs, street evangelism, door-to-door ministry, and community events as we fulfill the Great Commission.",
      images: [
        {
          imageColor: "from-amber-300 to-purple-300",
          src: "https://ik.imagekit.io/jale/evan1.jpg",
        },
        {
          imageColor: "from-purple-600 to-pink-600",
          src: "https://ik.imagekit.io/jale/evan2.jpg",
        },
        {
          imageColor: "from-pink-600 to-amber-600",
          src: "https://ik.imagekit.io/jale/evan3.jpg",
        },
      ],
    },
    {
      title: "Counsellors",
      description:
        "Help new converts and visitors grow in their faith journey. The Counselling team contacts new members, provides spiritual guidance, connects people to cell groups, and ensures no one falls through the cracks. Your caring touch can make all the difference in someone's spiritual growth.",
      images: [
        {
          imageColor: "from-pink-600 to-amber-600",
          src: "https://ik.imagekit.io/jale/lgf1.jpg?updatedAt=1766117026221",
        },
        {
          imageColor: "from-amber-400 to-purple-400",
          src: "https://ik.imagekit.io/jale/couns2.jpg",
        },
        {
          imageColor: "from-purple-500 to-pink-500",
          src: "https://ik.imagekit.io/jale/lgf1.jpg?updatedAt=1766117026221",
        },
      ],
      reverse: true,
    },
    {
      title: "Children's Ministry",
      description:
        "Shape the next generation for Christ! Our children's ministry provides engaging, age-appropriate Bible lessons, games, and activities that plant seeds of faith in young hearts. If you love children and have a passion for teaching, this is your calling.",
      images: [
        {
          imageColor: "from-purple-400 to-pink-500",
          src: "https://ik.imagekit.io/jale/children1.jpg",
        },
        {
          imageColor: "from-pink-500 to-amber-500",
          src: "https://ik.imagekit.io/jale/children2.jpg",
        },
        {
          imageColor: "from-amber-400 to-purple-600",
          src: "https://ik.imagekit.io/jale/children1.jpg",
        },
      ],
    },
    {
      title: "Security / Safety",
      description:
        "Protect and serve our congregation. Our security team ensures the physical safety of all attendees, monitors entrances and exits, handles emergencies, and maintains a secure worship environment. Join us in creating a safe space where people can worship freely.",
      images: [
        {
          imageColor: "from-amber-500 to-purple-600",
          src: "https://ik.imagekit.io/jale/security2.jpg",
        },
        {
          imageColor: "from-purple-500 to-pink-400",
          src: "https://ik.imagekit.io/jale/security2.jpg",
        },
        {
          imageColor: "from-pink-400 to-amber-500",
          src: "https://ik.imagekit.io/jale/security2.jpg",
        },
      ],
      reverse: true,
    },
    {
      title: "Sanitation",
      description:
        "Keep God's house clean and beautiful! Our sanitation team maintains the cleanliness of our facilities, ensuring a hygienic and presentable environment for worship. This behind-the-scenes ministry is vital to creating a welcoming atmosphere for all who enter.",
      images: [
        {
          imageColor: "from-pink-400 to-amber-400",
          src: "https://ik.imagekit.io/jale/sanitation.jpg",
        },
        {
          imageColor: "from-amber-300 to-purple-400",
          src: "https://ik.imagekit.io/jale/sanitation.jpg",
        },
        {
          imageColor: "from-purple-400 to-pink-500",
          src: "https://ik.imagekit.io/jale/sanitation.jpg",
        },
      ],
    },
    {
      title: "Drama",
      description:
        "Bring the message to life through storytelling and performance! Our drama team uses stage plays, skits, and creative expressions to communicate biblical truths in engaging and impactful ways. If you love acting, scriptwriting, or stage presentation, this team is for you.",
      images: [
        {
          imageColor: "from-amber-500 to-purple-600",
          src: "https://ik.imagekit.io/jale/drama.jpg",
        },
        {
          imageColor: "from-purple-500 to-pink-400",
          src: "https://ik.imagekit.io/jale/drama.jpg",
        },
        {
          imageColor: "from-pink-400 to-amber-500",
          src: "https://ik.imagekit.io/jale/drama.jpg",
        },
      ],
      reverse: true,
    },
    {
      title: "Protocol",
      description:
        "Serve with excellence and order! The protocol team ensures smooth coordination during services and events by managing seating, guest reception, orderliness, and flow of activities. If you are organized, respectful, and passionate about creating a welcoming atmosphere, join this team.",
      images: [
        {
          imageColor: "from-pink-400 to-amber-400",
          src: "https://ik.imagekit.io/jale/protocol.jpg",
        },
        {
          imageColor: "from-amber-300 to-purple-400",
          src: "https://ik.imagekit.io/jale/protocol.jpg",
        },
        {
          imageColor: "from-purple-400 to-pink-500",
          src: "https://ik.imagekit.io/jale/protocol.jpg",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden mt-20 bg-gradient-to-br from-purple-500 via-pink-500 to-amber-500">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.42, 0, 0, 1] }}
            className="text-center"
          >
            <h1 className="text-7xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
              Join the Workforce
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.42, 0, 0, 1] }}
              className="text-2xl md:text-3xl font-light drop-shadow-lg max-w-3xl mx-auto"
            >
              Discover your calling and serve God with your unique gifts and
              talents
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-white/10 backdrop-blur-sm"
        />
      </section>

      {/* Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0, 1] }}
            viewport={{ once: true }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 bg-clip-text text-transparent"
          >
            Use Your Gifts to Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.42, 0, 0, 1] }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            God has uniquely equipped each believer with gifts and talents to
            build His kingdom. Whether you're passionate about worship,
            technology, hospitality, or working with children, there's a place
            for you in our workforce. Explore the departments below and discover
            where God is calling you to serve.
          </motion.p>
        </div>
      </section>

      {/* Department Cards */}
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <DepartmentCard key={dept.title} {...dept} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Serve?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Don't wait! Step into your purpose today. Contact any of our
              department heads after service or speak with a pastor to learn
              more about joining the workforce. Your gifts are needed in God's
              house!
            </p>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5, ease: [0.42, 0, 0, 1] },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 ease-in">
                Get Involved Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
