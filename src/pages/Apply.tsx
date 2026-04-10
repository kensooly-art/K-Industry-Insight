import React, { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";
import { Send, CheckCircle2, Calendar, Users, Building2, Phone, User, Mail, MessageSquare } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { SAMPLE_TOURS } from "../constants";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export function Apply() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const tourId = searchParams.get("tourId");
  const initialTour = SAMPLE_TOURS.find(t => t.id === tourId);

  const [formData, setFormData] = useState({
    tourId: tourId || "",
    tourTitle: initialTour ? (language === "KR" ? initialTour.title_kr : initialTour.title_en) : "",
    companyName: "",
    visitDate: "",
    visitorCount: "",
    contact: "",
    manager: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        visitorCount: parseInt(formData.visitorCount),
        createdAt: new Date().toISOString()
      });
      setIsSubmitted(true);
      
      // Simulate sending email (mailto is limited, so we just show success)
      // In a real app, this would trigger a Cloud Function or use an email service API.
      console.log("Application submitted to myks69@naver.com", formData);
      
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "applications");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          {language === "KR" ? "프로그램 신청하기" : "Program Application"}
        </h1>
        <p className="text-gray-400">
          {language === "KR" 
            ? "원하시는 투어 프로그램을 신청해 주세요. 담당자가 확인 후 연락드리겠습니다." 
            : "Please apply for the tour program you want. A manager will contact you after confirmation."}
        </p>
      </div>

      <div className="bg-[#2C2C2C] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-full flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-20 h-20 bg-[#007AFF]/10 rounded-full flex items-center justify-center mb-6 border border-[#007AFF]/20">
              <CheckCircle2 className="w-10 h-10 text-[#007AFF]" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              {language === "KR" ? "신청 완료!" : "Application Submitted!"}
            </h3>
            <p className="text-gray-400 max-w-xs mx-auto">
              {language === "KR" 
                ? "신청이 성공적으로 접수되었습니다. 곧 연락드리겠습니다." 
                : "Your application has been successfully received. We will contact you soon."}
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-8 px-8 py-3 bg-[#007AFF] text-white rounded-xl font-bold"
            >
              {language === "KR" ? "확인" : "OK"}
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {language === "KR" ? "선택한 투어" : "Selected Tour"}
              </label>
              <select 
                required
                value={formData.tourId}
                onChange={(e) => {
                  const tour = SAMPLE_TOURS.find(t => t.id === e.target.value);
                  setFormData({
                    ...formData,
                    tourId: e.target.value,
                    tourTitle: tour ? (language === "KR" ? tour.title_kr : tour.title_en) : ""
                  });
                }}
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all appearance-none"
              >
                <option value="">{language === "KR" ? "투어를 선택하세요" : "Select a tour"}</option>
                {SAMPLE_TOURS.map(tour => (
                  <option key={tour.id} value={tour.id}>
                    {language === "KR" ? tour.title_kr : tour.title_en}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  {language === "KR" ? "성명(기업/단체)" : "Name (Company/Org)"} *
                </label>
                <input
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                  placeholder={language === "KR" ? "기업명 또는 단체명을 입력하세요" : "Enter company or org name"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {language === "KR" ? "방문일자" : "Visit Date"} *
                </label>
                <input
                  required
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({...formData, visitDate: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {language === "KR" ? "방문인원" : "Number of Visitors"} *
                </label>
                <input
                  required
                  type="number"
                  min="1"
                  value={formData.visitorCount}
                  onChange={(e) => setFormData({...formData, visitorCount: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  {language === "KR" ? "연락처" : "Contact Number"} *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                  placeholder="010-0000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {language === "KR" ? "담당자" : "Person in Charge"} *
                </label>
                <input
                  required
                  type="text"
                  value={formData.manager}
                  onChange={(e) => setFormData({...formData, manager: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                  placeholder={language === "KR" ? "담당자 성함을 입력하세요" : "Enter manager name"}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {language === "KR" ? "이메일" : "Email"} *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "KR" ? "기타 문의 / 의견" : "Other Inquiries / Opinions"}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all resize-none"
                placeholder={language === "KR" ? "추가로 궁금하신 점이나 요청사항을 입력해 주세요" : "Enter any additional questions or requests"}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#007AFF] hover:bg-[#0056b3] disabled:bg-gray-600 text-white font-bold rounded-xl transition-all flex items-center justify-center group"
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {language === "KR" ? "신청하기" : "Apply Now"}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
