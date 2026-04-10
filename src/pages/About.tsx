import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Target, History, Users, Award, CheckCircle2, Building2, GraduationCap, Stethoscope, Globe, MapPin, Briefcase } from "lucide-react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { Partner } from "../types";

export function About() {
  const { t } = useLanguage();
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    const partnersRef = collection(db, "partners");
    const unsubscribe = onSnapshot(query(partnersRef, orderBy("createdAt", "desc")), (snapshot) => {
      setPartners(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Partner[]);
    });
    return () => unsubscribe();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2": return <Building2 className="w-12 h-12 text-[#007AFF] mb-6" />;
      case "GraduationCap": return <GraduationCap className="w-12 h-12 text-[#007AFF] mb-6" />;
      case "Stethoscope": return <Stethoscope className="w-12 h-12 text-[#007AFF] mb-6" />;
      default: return <Building2 className="w-12 h-12 text-[#007AFF] mb-6" />;
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{t.aboutPage.title}</h1>
        <div className="space-y-6 max-w-4xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            {t.aboutPage.description}
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t.aboutPage.description2}
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-32">
        {t.aboutPage.stats.map((stat: any, idx: number) => (
          <div key={idx} className="text-center p-8 bg-white/5 rounded-2xl border border-white/5 flex flex-col justify-center">
            <div className="text-3xl font-bold text-[#007AFF] mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Participation Status Section */}
      <div id="participation" className="mb-32 scroll-mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.aboutPage.participationEntities.title}</h2>
          <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
        </div>
        
        {/* Category Cards with Counts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { id: 'company', icon: 'Building2', title: t.language === "KR" ? "기업" : "Companies", color: "text-blue-400" },
            { id: 'school', icon: 'GraduationCap', title: t.language === "KR" ? "학교" : "Schools", color: "text-green-400" },
            { id: 'medical', icon: 'Stethoscope', title: t.language === "KR" ? "의료기관" : "Medical", color: "text-purple-400" }
          ].map((cat, idx) => {
            const count = partners.filter(p => p.type === cat.id).length;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-[#2C2C2C] rounded-3xl border border-white/5 hover:border-[#007AFF]/30 transition-all group flex flex-col items-center text-center"
              >
                {getIcon(cat.icon)}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#007AFF] transition-colors">{cat.title}</h3>
                <div className={`text-3xl font-bold ${cat.color} mb-2`}>{count}</div>
                <p className="text-gray-500 text-sm uppercase tracking-widest">{t.language === "KR" ? "참여 기관" : "Entities"}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Partner List (Board Structure) */}
        {partners.length > 0 && (
          <div className="space-y-12">
            {[
              { id: 'company', title: t.language === "KR" ? "기업 참여 현황" : "Company Participation", icon: <Building2 className="w-6 h-6" /> },
              { id: 'school', title: t.language === "KR" ? "학교 참여 현황" : "School Participation", icon: <GraduationCap className="w-6 h-6" /> },
              { id: 'medical', title: t.language === "KR" ? "의료기관 참여 현황" : "Medical Participation", icon: <Stethoscope className="w-6 h-6" /> }
            ].map((section) => {
              const sectionPartners = partners.filter(p => p.type === section.id);
              if (sectionPartners.length === 0) return null;

              return (
                <div key={section.id} className="bg-[#2C2C2C] rounded-3xl border border-white/5 overflow-hidden">
                  <div className="p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#007AFF]">{section.icon}</div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] rounded-full text-xs font-bold">
                      {sectionPartners.length} {t.language === "KR" ? "개소" : "Items"}
                    </span>
                  </div>
                  <div className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/5 text-[10px] uppercase tracking-widest text-gray-500">
                            <th className="px-6 py-4 font-bold">{t.language === "KR" ? "상호명" : "Name"}</th>
                            <th className="px-6 py-4 font-bold">{t.language === "KR" ? "분야" : "Industry"}</th>
                            <th className="px-6 py-4 font-bold">{t.language === "KR" ? "소재지" : "Location"}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {sectionPartners.map((partner) => (
                            <tr key={partner.id} className="hover:bg-white/5 transition-colors group">
                              <td className="px-6 py-4 text-sm font-bold text-white group-hover:text-[#007AFF] transition-colors">{partner.name}</td>
                              <td className="px-6 py-4 text-sm text-gray-400">{partner.industry}</td>
                              <td className="px-6 py-4 text-sm text-gray-400">{partner.location}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Mission & Partners Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-gradient-to-br from-[#007AFF]/10 to-transparent rounded-3xl border border-[#007AFF]/20 flex flex-col items-center text-center"
        >
          <Target className="w-16 h-16 text-[#007AFF] mb-8" />
          <h2 className="text-3xl font-bold mb-6">{t.aboutPage.mission.title}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {t.aboutPage.mission.desc}
          </p>
        </motion.div>

        {/* Partners Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-[#2C2C2C] rounded-3xl border border-white/5 flex flex-col"
        >
          <div className="text-center mb-10">
            <Users className="w-16 h-16 text-[#007AFF] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-2">{t.aboutPage.partners.title}</h2>
            <div className="w-12 h-1 bg-[#007AFF] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {t.aboutPage.partners.list.map((partner: string, idx: number) => (
              <div key={idx} className="p-4 bg-[#1A1A1B]/50 backdrop-blur-sm rounded-xl border border-white/5 flex items-center justify-center text-center hover:border-[#007AFF]/50 transition-all group">
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Major Services Section */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.aboutPage.services.title}</h2>
          <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {t.aboutPage.services.items.map((service: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="aspect-square bg-[#2C2C2C] rounded-full border border-white/5 hover:border-[#007AFF]/30 transition-all group flex flex-col items-center justify-center p-8 text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-[#007AFF] mb-4 flex-shrink-0" />
              <h3 className="text-base font-bold mb-2 group-hover:text-[#007AFF] transition-colors leading-tight">{service.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed hidden sm:block">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.aboutPage.team.title}</h2>
        <div className="w-20 h-1 bg-[#007AFF] mx-auto rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.aboutPage.team.members.map((member: any, idx: number) => (
          <div key={idx} className="group text-center">
            <div className="relative mb-6 inline-block">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#2C2C2C] group-hover:border-[#58A6FF] transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{member.name}</h3>
            <p className="text-[#007AFF] text-sm font-medium mb-1">{member.role}</p>
            <p className="text-gray-500 text-xs">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
