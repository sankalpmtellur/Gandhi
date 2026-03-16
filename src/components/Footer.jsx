import React from "react";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaHandsHelping,
  FaGlobe,
} from "react-icons/fa";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium text-stone-800 italic">
              "My life is my message."
            </h3>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
              Dedicated to the pursuit of truth, non-violence, and the
              upliftment of every individual through simple living and high
              thinking.
            </p>
            <div className="flex gap-4 pt-2">
              {[FaTwitter, FaInstagram, FaGlobe].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: "#047857" }}
                  className="text-stone-400 text-xl transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-widest mb-4">
                Legacy
              </h4>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Satyagraha
                </li>
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Spinning Wheel
                </li>
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Salt March
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-stone-800 text-sm uppercase tracking-widest mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-stone-600 text-sm">
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Digital Archive
                </li>
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Collectives
                </li>
                <li className="hover:text-emerald-700 cursor-pointer transition-colors">
                  Volunteering
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center gap-2">
              <FaHandsHelping className="text-emerald-600" /> Weekly Reflection
            </h4>
            <p className="text-xs text-stone-500 mb-4">
              Receive a weekly thought on peace and mindful living.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-emerald-800 transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs tracking-wide">
            © {currentYear} THE GANDHI FOUNDATION. BUILT FOR A BETTER WORLD.
          </p>
          <div className="flex items-center gap-1 text-stone-400 text-xs">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart size={12} className="fill-stone-400 text-stone-400" />
            </motion.div>
            <span>and Ahimsa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
