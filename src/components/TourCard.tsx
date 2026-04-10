import React from "react";
import { Tour, Language } from "../types";
import { motion } from "motion/react";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TourCardProps {
  tour: Tour;
  language: Language;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, language }) => {
  const title = language === "KR" ? tour.title_kr : tour.title_en;
  const description = language === "KR" ? tour.description_kr : tour.description_en;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-[#2C2C2C] rounded-xl overflow-hidden border border-white/5 hover:border-[#007AFF]/50 transition-all duration-300"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={tour.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#1A1A1B]/80 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
            {tour.category}
          </span>
        </div>
        {tour.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#007AFF] rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
              Featured
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-3 text-gray-400 text-[10px] mb-2">
          <div className="flex items-center">
            <Clock className="w-2.5 h-2.5 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <MapPin className="w-2.5 h-2.5 mr-1" />
            South Korea
          </div>
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#007AFF] transition-colors leading-tight line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-400 text-[11px] mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="text-white font-bold text-sm">
            <span className="text-gray-500 text-[9px] font-normal block">Starting from</span>
            ${tour.price.toLocaleString()}
          </div>
          <Link
            to={`/apply?tourId=${tour.id}`}
            className="w-8 h-8 bg-white/5 hover:bg-[#007AFF] text-white rounded-full flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
