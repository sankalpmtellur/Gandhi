import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Philosophy", path: "/philosophy" },
    { name: "Movements", path: "/movements" },
    { name: "Writing", path: "/writings" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-md border border-stone-100 rounded-full px-8 py-3 shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <Leaf className="text-emerald-700 w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-serif text-xl tracking-tight font-medium text-stone-800">
            M.K. Gandhi
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <button className="bg-stone-900 text-stone-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-800 transition-all">
            Join the Cause
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-3xl overflow-hidden shadow-xl border border-stone-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-stone-700 font-medium border-b border-stone-50 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
