import React, { useState, useEffect } from "react";
import { Hero } from "../components/Hero";
import { TourCard } from "../components/TourCard";
import { useLanguage } from "../context/LanguageContext";
import { SAMPLE_TOURS } from "../constants";
import { Tour } from "../types";
import { motion } from "motion/react";
import { Shield, Zap, Users, Globe, Building2, Map, ClipboardList, Layout, Star } from "lucide-react";
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export function Home() {
  const { t, language } = useLanguage();
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const q = query(collection(db, "tours"), where("featured", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        setTours(SAMPLE_TOURS.filter(t => t.featured));
      } else {
        const toursData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Tour[];
        setTours(toursData);
      }
    }, () => {
      setTours(SAMPLE_TOURS.filter(t => t.featured));
    });
    return () => unsubscribe();
  }, []);

  const whyUsFeatures = [
    {
      icon: <Users className="w-8 h-8 text-[#007AFF]" />,
      title: t.whyUs.expert,
      desc: t.whyUs.expertDesc
    },
    {
      icon: <Shield className="w-8 h-8 text-[#007AFF]" />,
      title: t.whyUs.exclusive,
      desc: t.whyUs.exclusiveDesc
    },
    {
      icon: <Zap className="w-8 h-8 text-[#007AFF]" />,
      title: t.whyUs.network,
      desc: t.whyUs.networkDesc
    }
  ];

  const valueProps = [
    { ...t.valueProp.visitor, icon: <Globe className="w-8 h-8 text-[#007AFF]" />, color: "from-[#007AFF]/20 to-transparent" },
    { ...t.valueProp.company, icon: <Building2 className="w-8 h-8 text-[#007AFF]" />, color: "from-[#007AFF]/20 to-transparent" },
    { ...t.valueProp.region, icon: <Map className="w-8 h-8 text-[#007AFF]" />, color: "from-[#007AFF]/20 to-transparent" }
  ];

  const guideCards = [
    { ...t.guide.participation, icon: <ClipboardList className="w-8 h-8 text-[#007AFF]" /> },
    { ...t.guide.general, icon: <Layout className="w-8 h-8 text-[#007AFF]" /> },
    { ...t.guide.special, icon: <Star className="w-8 h-8 text-[#007AFF]" /> }
  ];

  return (
    <div className="pb-20">
      <Hero />

      {/* Why Us Section */}
      <section className="py-24 bg-[#1A1A1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.whyUs.title}</h2>
            <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {whyUsFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 bg-[#2C2C2C] rounded-2xl border border-white/5 hover:border-[#007AFF]/30 transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Value Proposition Sub-section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full group"
              >
                <div className="p-8 bg-[#2C2C2C] rounded-2xl border border-white/5 hover:border-[#007AFF]/50 transition-all flex-grow flex flex-col relative overflow-hidden">
                  {/* Accent Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prop.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-[#1A1A1B] rounded-xl border border-white/5 group-hover:border-[#007AFF]/30 transition-all">
                      {prop.icon}
                    </div>
                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#007AFF]/20">
                      {prop.tag}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-[#007AFF] transition-colors">{prop.title}</h4>
                  <p className="text-gray-400 text-sm mb-8">{prop.subtitle}</p>
                  
                  <ul className="space-y-4 mt-auto">
                    {prop.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start text-sm text-gray-300 group-hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 bg-[#007AFF] rounded-full mt-1.5 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(0,122,255,0.8)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Guide Section */}
      <section className="py-24 bg-[#2C2C2C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.guide.title}</h2>
            <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guideCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 bg-[#1A1A1B] rounded-2xl border border-white/5 hover:border-[#007AFF]/30 transition-all text-center"
              >
                <div className="mb-6 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-24 bg-[#1A1A1B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.tours.title}</h2>
              <p className="text-gray-400 max-w-xl">
                Experience the world's most advanced industrial facilities with our curated selection of featured tours.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Participant Reviews Section */}
      <section className="py-24 bg-[#2C2C2C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.reviews.title}</h2>
            <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.reviews.items.map((review: any, idx: number) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-[#1A1A1B] rounded-2xl border border-white/5 italic text-gray-300 flex flex-col"
              >
                <p className="mb-6 leading-relaxed flex-grow">"{review.text}"</p>
                <div className="flex items-center not-italic mt-auto">
                  <div className="w-10 h-10 bg-[#007AFF] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
