"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Youth Church", href: "/youthchurch" },
    { name: "Teens & Children", href: "/teensandchildren" },
    { name: "Workforce", href: "/workforce" },
    { name: "Hymns", href: "/hymns" },
  ];

  const contactInfo = [
    { label: "Email", value: "rccgpraiseandmiracle@gmail.com" },
    { label: "Phone", value: "+234 701 458 7423" },
    { label: "Address", value: "24 Ishasi Road, Ogun, Nigeria" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      link: "https://web.facebook.com/RCCGPRAISEANDMIRACLEPARISHLP40/",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/praiseandmiracle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      name: "YouTube",
      icon: <Youtube />,
      link: "https://www.youtube.com/@rccgpraiseandmiracle",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-pink-900 to-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/rccg-logo.png"
                alt="RCCG Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold">
                The Redeemed Christian Church of God
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Building lives, transforming communities, and spreading the gospel
              of Jesus Christ with love and power.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-500 ease-in hover:scale-105 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: [0.42, 0, 0.58, 1],
                  }}
                  viewport={{ once: true }}
                  className="space-y-1"
                >
                  <p className="text-sm font-semibold text-amber-300">
                    {info.label}
                  </p>
                  <p className="text-white/80">{info.value}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Service Times */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">Connect With Us</h4>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center text-2xl transition-all duration-500 ease-in"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-amber-300">Service Times</h5>
              <p className="text-white/80 text-sm">Sunday Service: 8:00 AM</p>
              <p className="text-white/80 text-sm">
                Bible Study: Wednesday 6:00 PM
              </p>
              <p className="text-white/80 text-sm">
                Prayer Meeting: Friday 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} The Redeemed Christian Church of
            God. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-2 text-white/60 text-xs mt-3">
            <span>Built with love for the Kingdom</span>
            <span>|</span>
            <Link
              href="/portfolio"
              className="text-amber-300 hover:text-amber-200 transition-colors duration-500 ease-in"
            >
              Built by Tea
            </Link>
            <span>|</span>
            <span>Supported by the Media Team</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
