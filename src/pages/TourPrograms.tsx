import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SAMPLE_TOURS } from "../constants";
import { Tour } from "../types";
import { TourCard } from "../components/TourCard";
import { motion } from "motion/react";
import { Search, Filter } from "lucide-react";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

export function TourPrograms() {
  const { language } = useLanguage();
  const [tours, setTours] = useState<Tour[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const q = query(collection(db, "tours"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setTours(SAMPLE_TOURS);
      } else {
        const toursData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Tour[];
        setTours(toursData);
      }
    }, () => {
      setTours(SAMPLE_TOURS);
    });
    return () => unsubscribe();
  }, []);

  const categories = ["All", "Semiconductor", "Automobile", "Smart Factory", "Energy", "Cosmetics"];

  const filteredTours = tours.filter(tour => {
    const matchesFilter = filter === "All" || tour.category === filter;
    const matchesSearch = (language === "KR" ? tour.title_kr : tour.title_en)
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Tour Programs</h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          Explore our comprehensive range of industrial tour programs designed for corporate clients and industry professionals.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#007AFF] text-white"
                  : "bg-[#2C2C2C] text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#2C2C2C] border border-white/5 rounded-lg text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
          />
        </div>
      </div>

      {/* Tour Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredTours.map((tour, idx) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <TourCard tour={tour} language={language} />
          </motion.div>
        ))}
      </div>

      {filteredTours.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
