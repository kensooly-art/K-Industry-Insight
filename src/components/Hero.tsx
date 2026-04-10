import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920"
          alt="Industrial Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1B] via-[#1A1A1B]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-[#007AFF]/20 border border-[#007AFF]/30 rounded-full text-[#007AFF] text-xs font-bold tracking-widest uppercase mb-6">
              Premium Industrial Tours
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-lg transition-all flex items-center justify-center group"
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-md transition-all flex items-center justify-center border border-white/10">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Video
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#007AFF]/10 blur-[120px] rounded-full -mr-20 -mb-20 pointer-events-none" />
    </section>
  );
}
