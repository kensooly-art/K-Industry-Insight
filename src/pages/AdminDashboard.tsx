import React, { useState, useEffect } from "react";
import { SAMPLE_TOURS } from "../constants";
import { Tour, Application, Inquiry, Partner } from "../types";
import { Plus, Edit2, Trash2, Save, X, LayoutDashboard, Settings, FileText, LogOut, LogIn, ShieldCheck, Inbox, MessageSquare, CheckCircle2, Lock, Send, Building2, Globe, MapPin, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";
import { auth, db, googleProvider, handleFirestoreError, OperationType } from "../firebase";
import { signInWithPopup, onAuthStateChanged, User, signOut } from "firebase/auth";
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, orderBy, getDoc } from "firebase/firestore";

export function AdminDashboard() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [activeTab, setActiveTab] = useState<"tours" | "applications" | "inquiries" | "partners" | "settings">("tours");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({ id: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [answeringInquiry, setAnsweringInquiry] = useState<Inquiry | null>(null);
  const [answerText, setAnswerText] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    // Tours
    const toursRef = collection(db, "tours");
    const toursUnsubscribe = onSnapshot(query(toursRef), (snapshot) => {
      setTours(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Tour[]);
    });

    // Applications
    const appsRef = collection(db, "applications");
    const appsUnsubscribe = onSnapshot(query(appsRef, orderBy("createdAt", "desc")), (snapshot) => {
      setApplications(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Application[]);
    });

    // Inquiries
    const inquiriesRef = collection(db, "inquiries");
    const inquiriesUnsubscribe = onSnapshot(query(inquiriesRef, orderBy("createdAt", "desc")), (snapshot) => {
      setInquiries(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Inquiry[]);
    });

    // Partners
    const partnersRef = collection(db, "partners");
    const partnersUnsubscribe = onSnapshot(query(partnersRef, orderBy("createdAt", "desc")), (snapshot) => {
      setPartners(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Partner[]);
    });

    return () => {
      toursUnsubscribe();
      appsUnsubscribe();
      inquiriesUnsubscribe();
      partnersUnsubscribe();
    };
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    
    try {
      const { signInWithEmailAndPassword } = await import("firebase/auth");
      await signInWithEmailAndPassword(auth, loginForm.id, loginForm.password);
    } catch (error: any) {
      console.error("Login failed:", error);
      setLoginError("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleEdit = (tour: Tour) => {
    setIsEditing(tour.id);
    setEditForm(tour);
  };

  const handleSave = async () => {
    try {
      const collectionName = activeTab === "partners" ? "partners" : "tours";
      if (isEditing === "new") {
        await addDoc(collection(db, collectionName), {
          ...editForm,
          createdAt: new Date().toISOString()
        });
      } else if (isEditing) {
        const docRef = doc(db, collectionName, isEditing);
        await updateDoc(docRef, editForm);
      }
      setIsEditing(null);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `${activeTab}/${isEditing}`);
    }
  };

  const handleDelete = async (id: string, collectionName: string) => {
    if (confirm(`Are you sure you want to delete this ${collectionName.slice(0, -1)}?`)) {
      try {
        await deleteDoc(doc(db, collectionName, id));
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, `${collectionName}/${id}`);
      }
    }
  };

  const handleAnswer = async () => {
    if (!answeringInquiry) return;
    try {
      await updateDoc(doc(db, "inquiries", answeringInquiry.id), {
        answer: answerText,
        status: "answered"
      });
      setAnsweringInquiry(null);
      setAnswerText("");
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `inquiries/${answeringInquiry.id}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1B]">
        <div className="w-12 h-12 border-4 border-[#007AFF] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1A1A1B] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-10 bg-[#2C2C2C] rounded-3xl border border-white/5 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#007AFF]/20">
              <ShieldCheck className="w-10 h-10 text-[#007AFF]" />
            </div>
            <h1 className="text-3xl font-bold mb-2">관리자 로그인</h1>
            <p className="text-gray-400 leading-relaxed">
              관리자 계정 정보를 입력하여 접속해 주세요.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">아이디</label>
              <input
                type="text"
                required
                value={loginForm.id}
                onChange={(e) => setLoginForm({ ...loginForm, id: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                placeholder="Admin ID"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">비밀번호</label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 transition-all"
                placeholder="••••••••"
              />
            </div>

            {loginError && (
              <p className="text-red-400 text-xs font-medium text-center">{loginError}</p>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-xl transition-all flex items-center justify-center group mt-4"
            >
              <LogIn className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              로그인
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#1A1A1B] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2C2C2C] border-r border-white/5 hidden md:block relative">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-10 p-2 bg-white/5 rounded-xl border border-white/5">
            <div className="w-10 h-10 bg-[#007AFF] rounded-lg flex items-center justify-center text-white font-bold">
              {user.displayName?.[0] || "A"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{user.displayName || "Admin"}</p>
              <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Management</h2>
          <nav className="space-y-2">
            {[
              { id: "tours", icon: <LayoutDashboard className="w-5 h-5" />, label: "Tour Programs" },
              { id: "partners", icon: <Building2 className="w-5 h-5" />, label: "Partners" },
              { id: "applications", icon: <Inbox className="w-5 h-5" />, label: "Applications" },
              { id: "inquiries", icon: <MessageSquare className="w-5 h-5" />, label: "Inquiries" },
              { id: "settings", icon: <Settings className="w-5 h-5" />, label: "Global Settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeTab === item.id
                    ? "bg-[#007AFF] text-white shadow-lg shadow-[#007AFF]/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="absolute bottom-0 w-64 p-6 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 text-gray-400 hover:text-red-400 transition-colors text-sm font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">
              {activeTab === "tours" && "Tour Programs"}
              {activeTab === "partners" && "Participation Status"}
              {activeTab === "applications" && "Tour Applications"}
              {activeTab === "inquiries" && "Inquiry Board"}
              {activeTab === "settings" && "Global Settings"}
            </h1>
            {(activeTab === "tours" || activeTab === "partners") && (
              <button
                onClick={() => {
                  setIsEditing("new");
                  if (activeTab === "tours") {
                    setEditForm({
                      title_kr: "",
                      title_en: "",
                      category: "Semiconductor",
                      price: 0,
                      duration: "",
                      featured: false,
                      image: "https://picsum.photos/seed/newtour/1200/800"
                    });
                  } else {
                    setEditForm({
                      name: "",
                      location: "",
                      industry: "",
                      type: "company"
                    });
                  }
                }}
                className="px-4 py-2 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-lg transition-all flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                {activeTab === "tours" ? "Add New Tour" : "Add Partner"}
              </button>
            )}
          </div>

          {activeTab === "tours" && (
            <div className="space-y-4">
              {tours.length === 0 && (
                <div className="text-center py-20 bg-[#2C2C2C] rounded-3xl border border-dashed border-white/10">
                  <p className="text-gray-500">No tours found in database. Add your first program!</p>
                </div>
              )}
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-[#2C2C2C] p-6 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-[#007AFF]/30 transition-all"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={tour.image}
                      alt={tour.title_en}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{tour.title_en}</h3>
                      <p className="text-gray-500 text-sm">{tour.category} • ${tour.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(tour)}
                      className="p-2 text-gray-400 hover:text-[#007AFF] hover:bg-[#007AFF]/10 rounded-lg transition-all"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(tour.id, "tours")}
                      className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "partners" && (
            <div className="space-y-4">
              {partners.length === 0 && (
                <div className="text-center py-20 bg-[#2C2C2C] rounded-3xl border border-dashed border-white/10">
                  <p className="text-gray-500">No partners found. Add your first partner!</p>
                </div>
              )}
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-[#2C2C2C] p-6 rounded-2xl border border-white/5 flex items-center justify-between group hover:border-[#007AFF]/30 transition-all"
                >
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[#007AFF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{partner.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {partner.location}</span>
                        <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {partner.industry}</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                          partner.type === "company" ? "bg-blue-500/20 text-blue-400" :
                          partner.type === "school" ? "bg-green-500/20 text-green-400" :
                          "bg-purple-500/20 text-purple-400"
                        )}>
                          {partner.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setIsEditing(partner.id);
                        setEditForm(partner);
                      }}
                      className="p-2 text-gray-400 hover:text-[#007AFF] hover:bg-[#007AFF]/10 rounded-lg transition-all"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id, "partners")}
                      className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "applications" && (
            <div className="space-y-4">
              {applications.length === 0 && (
                <div className="text-center py-20 bg-[#2C2C2C] rounded-3xl border border-dashed border-white/10">
                  <p className="text-gray-500">No applications received yet.</p>
                </div>
              )}
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="bg-[#2C2C2C] p-6 rounded-2xl border border-white/5 space-y-4 hover:border-[#007AFF]/30 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xl text-[#007AFF]">{app.tourTitle}</h3>
                      <p className="text-gray-400 text-sm">{new Date(app.createdAt).toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => handleDelete(app.id, "applications")}
                      className="p-2 text-gray-500 hover:text-red-400"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Company</p>
                      <p className="text-white">{app.companyName}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Visit Date</p>
                      <p className="text-white">{app.visitDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Visitors</p>
                      <p className="text-white">{app.visitorCount} People</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Manager</p>
                      <p className="text-white">{app.manager}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Contact</p>
                      <p className="text-white">{app.contact}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-1">Email</p>
                      <p className="text-white">{app.email}</p>
                    </div>
                  </div>
                  {app.message && (
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-gray-500 uppercase text-[10px] font-bold mb-2">Other Inquiries / Opinions</p>
                      <p className="text-gray-300 text-sm bg-[#1A1A1B] p-4 rounded-xl border border-white/5 whitespace-pre-wrap">
                        {app.message}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "inquiries" && (
            <div className="space-y-4">
              {inquiries.length === 0 && (
                <div className="text-center py-20 bg-[#2C2C2C] rounded-3xl border border-dashed border-white/10">
                  <p className="text-gray-500">No inquiries received yet.</p>
                </div>
              )}
              {inquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="bg-[#2C2C2C] p-6 rounded-2xl border border-white/5 space-y-4 hover:border-[#007AFF]/30 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      {inquiry.isPrivate && <Lock className="w-4 h-4 text-gray-500" />}
                      <h3 className="font-bold text-lg">{inquiry.title}</h3>
                      <span className={cn(
                        "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase",
                        inquiry.status === "answered" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      )}>
                        {inquiry.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setAnsweringInquiry(inquiry);
                          setAnswerText(inquiry.answer || "");
                        }}
                        className="p-2 text-gray-400 hover:text-[#007AFF]"
                      >
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(inquiry.id, "inquiries")}
                        className="p-2 text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="flex space-x-4 text-xs text-gray-500">
                    <span>Author: {inquiry.author}</span>
                    <span>Date: {new Date(inquiry.createdAt).toLocaleString()}</span>
                  </div>
                  <div className="p-4 bg-[#1A1A1B] rounded-xl border border-white/5 text-gray-300 text-sm whitespace-pre-wrap">
                    {inquiry.content}
                  </div>
                  {inquiry.answer && (
                    <div className="p-4 bg-[#007AFF]/5 rounded-xl border border-[#007AFF]/10 text-gray-300 text-sm whitespace-pre-wrap">
                      <p className="text-[#007AFF] font-bold mb-2 flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-1" /> Answer:
                      </p>
                      {inquiry.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === "settings" && (
            <div className="text-center py-20 bg-[#2C2C2C] rounded-3xl border border-dashed border-white/10">
              <p className="text-gray-500">Global settings are managed via metadata.json and constants.ts.</p>
            </div>
          )}
        </div>
      </main>

      {/* Edit Tour Modal */}
      <AnimatePresence>
        {isEditing && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEditing(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#2C2C2C] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {isEditing === "new" 
                    ? (activeTab === "tours" ? "Add New Tour" : "Add Partner") 
                    : (activeTab === "tours" ? "Edit Tour" : "Edit Partner")}
                </h2>
                <button onClick={() => setIsEditing(null)} className="text-gray-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                {activeTab === "tours" ? (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Title (KR)</label>
                        <input
                          type="text"
                          value={editForm.title_kr}
                          onChange={(e) => setEditForm({ ...editForm, title_kr: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Title (EN)</label>
                        <input
                          type="text"
                          value={editForm.title_en}
                          onChange={(e) => setEditForm({ ...editForm, title_en: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Category</label>
                      <select
                        value={editForm.category}
                        onChange={(e) => setEditForm({ ...editForm, category: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 appearance-none"
                      >
                        <option value="Semiconductor">Semiconductor</option>
                        <option value="Automobile">Automobile</option>
                        <option value="Smart Factory">Smart Factory</option>
                        <option value="Energy">Energy</option>
                        <option value="Cosmetics">Cosmetics</option>
                        <option value="Education">Education</option>
                        <option value="Medical">Medical</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Price ($)</label>
                        <input
                          type="number"
                          value={editForm.price}
                          onChange={(e) => setEditForm({ ...editForm, price: parseInt(e.target.value) })}
                          className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Duration</label>
                        <input
                          type="text"
                          value={editForm.duration}
                          onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                          className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                          placeholder="e.g. 3 Days"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Image URL</label>
                      <input
                        type="text"
                        value={editForm.image}
                        onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={editForm.featured}
                        onChange={(e) => setEditForm({ ...editForm, featured: e.target.checked })}
                        className="w-5 h-5 rounded bg-[#1A1A1B] border-white/10 text-[#007AFF] focus:ring-0"
                      />
                      <label htmlFor="featured" className="text-sm font-medium text-gray-300">Featured Tour</label>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">기관명 (Name)</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">소재지 (Location)</label>
                      <input
                        type="text"
                        value={editForm.location}
                        onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">분야 (Industry)</label>
                      <input
                        type="text"
                        value={editForm.industry}
                        onChange={(e) => setEditForm({ ...editForm, industry: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Type</label>
                      <select
                        value={editForm.type}
                        onChange={(e) => setEditForm({ ...editForm, type: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 appearance-none"
                      >
                        <option value="company">Company (기업)</option>
                        <option value="school">School (학교)</option>
                        <option value="medical">Medical (의료기관)</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="p-8 border-t border-white/5 flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditing(null)}
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-8 py-2 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-xl transition-all flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Answer Inquiry Modal */}
      <AnimatePresence>
        {answeringInquiry && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAnsweringInquiry(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#2C2C2C] rounded-3xl border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Answer Inquiry</h2>
                <button onClick={() => setAnsweringInquiry(null)} className="text-gray-500 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 space-y-6">
                <div className="p-4 bg-[#1A1A1B] rounded-xl border border-white/5 text-gray-400 text-sm whitespace-pre-wrap">
                  <p className="font-bold text-white mb-2">Inquiry Content:</p>
                  {answeringInquiry.content}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Your Answer</label>
                  <textarea
                    rows={6}
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    className="w-full px-4 py-3 bg-[#1A1A1B] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#007AFF]/50 resize-none"
                    placeholder="Write your answer here..."
                  />
                </div>
              </div>
              <div className="p-8 border-t border-white/5 flex justify-end space-x-4">
                <button
                  onClick={() => setAnsweringInquiry(null)}
                  className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAnswer}
                  className="px-8 py-2 bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold rounded-xl transition-all flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Answer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
