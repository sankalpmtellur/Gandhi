import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Quote, Wind, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".char", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
      });

      gsap.to(".bg-circle", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 100,
        scale: 1.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="bg-stone-50 min-h-screen pt-24 overflow-hidden"
    >
      <div className="bg-circle absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl -z-10" />

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 bg-white border border-stone-200 px-4 py-1.5 rounded-full mb-8 shadow-sm"
        >
          <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500">
            The Modern Satyagraha
          </span>
        </motion.div>

        <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-[1.1] mb-8 overflow-hidden">
          {"Be the change.".split("").map((char, i) => (
            <span key={i} className="char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
        >
          An advocate for truth, a pioneer of non-violence, and a 21st-century
          guide to mindful living and social justice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-emerald-800 text-white px-8 py-4 rounded-full font-medium hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 group">
            Explore the Vision{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="bg-white border border-stone-200 text-stone-800 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all">
            Read the Journals
          </button>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-col justify-between aspect-video md:aspect-auto"
          >
            <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
              <Quote size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-serif text-stone-800 mb-4">
                Non-Violence is not a garment to be put on and off at will.
              </h3>
              <p className="text-stone-500">
                It sits in the heart, and it must be an inseparable part of our
                very being.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-stone-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-between"
          >
            <Wind className="text-emerald-400 mb-6" size={32} />
            <div>
              <h3 className="text-2xl font-serif mb-2">Simplicity</h3>
              <p className="text-stone-400 text-sm">
                Digital minimalism for a noisy world.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 flex flex-col justify-between"
          >
            <ShieldCheck className="text-emerald-700 mb-6" size={32} />
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-2">Truth</h3>
              <p className="text-emerald-700/70 text-sm">
                The ultimate foundation of any movement.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-2 bg-stone-200 p-10 rounded-[2.5rem] flex items-center gap-8 overflow-hidden relative"
          >
            <div className="z-10">
              <h3 className="text-3xl font-serif text-stone-800 mb-2">
                The Charkha Project
              </h3>
              <p className="text-stone-600 mb-6 max-w-md">
                Promoting sustainable fashion and local craftsmanship in the
                digital age.
              </p>
              <button className="text-stone-900 font-bold text-sm underline underline-offset-4">
                Learn More
              </button>
            </div>
            <Zap className="absolute right-[-20px] bottom-[-20px] text-stone-300 w-64 h-64 -rotate-12" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
