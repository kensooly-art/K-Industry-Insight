import { Tour } from "./types";

export const SAMPLE_TOURS: Tour[] = [
  {
    id: "1",
    title_kr: "K-제조산업 투어 (반도체 & 자동차)",
    title_en: "K-Manufacturing Tour (Semiconductor & Automobile)",
    description_kr: "대한민국을 대표하는 반도체와 자동차 산업의 최첨단 제조 공정을 직접 확인하는 프리미엄 투어입니다.",
    description_en: "A premium tour to witness the state-of-the-art manufacturing processes of Korea's leading semiconductor and automobile industries.",
    category: "Semiconductor",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    price: 1500,
    duration: "3 Days",
    featured: true
  },
  {
    id: "2",
    title_kr: "인공지능 기반 스마트팩토리 투어",
    title_en: "AI-Powered Smart Factory Tour",
    description_kr: "인공지능과 사물인터넷(IoT)이 결합된 미래형 지능형 공장의 자동화 솔루션을 경험하십시오.",
    description_en: "Experience the automation solutions of future intelligent factories where AI and IoT are integrated.",
    category: "Smart Factory",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200",
    price: 1000,
    duration: "2 Days",
    featured: true
  },
  {
    id: "3",
    title_kr: "K-뷰티 화장품 제조 투어",
    title_en: "K-Beauty Cosmetics Manufacturing Tour",
    description_kr: "글로벌 트렌드를 선도하는 K-뷰티 제품의 탄생 과정과 첨단 R&D 연구 시설을 탐방합니다.",
    description_en: "Explore the birth process of global trend-setting K-Beauty products and advanced R&D research facilities.",
    category: "Cosmetics",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1200",
    price: 900,
    duration: "2 Days",
    featured: true
  },
  {
    id: "4",
    title_kr: "친환경 에너지 및 지속가능 기술 투어",
    title_en: "Eco-Friendly Energy & Sustainable Tech Tour",
    description_kr: "태양광, 풍력 및 수소 에너지 등 대한민국의 신재생 에너지 기술 현장을 탐방합니다.",
    description_en: "Explore South Korea's renewable energy technology sites, including solar, wind, and hydrogen energy.",
    category: "Energy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
    price: 1100,
    duration: "2 Days",
    featured: true
  },
  {
    id: "5",
    title_kr: "교육기관(초·중·특성화고·대) 혁신 탐방",
    title_en: "Educational Innovation Tour (School & University)",
    description_kr: "대한민국의 우수한 교육 시스템과 미래 인재 양성을 위한 교육 현장을 직접 체험하십시오.",
    description_en: "Experience South Korea's excellent education system and educational sites for fostering future talent.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200",
    price: 800,
    duration: "1 Day",
    featured: true
  },
  {
    id: "6",
    title_kr: "첨단 의료 및 병원 방문 투어",
    title_en: "Advanced Medical & Hospital Visit Tour",
    description_kr: "세계적인 수준의 의료 기술과 최첨단 병원 시설을 방문하여 스마트 헬스케어를 경험하십시오.",
    description_en: "Visit world-class medical technology and state-of-the-art hospital facilities to experience smart healthcare.",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    price: 1200,
    duration: "1 Day",
    featured: true
  }
];

export const TRANSLATIONS = {
  KR: {
    nav: {
      home: "홈",
      tours: "신청하기",
      about: "회사 소개",
      contact: "문의게시판",
      admin: "관리자"
    },
    hero: {
      title: "대한민국 산업의 심장을 경험하십시오",
      subtitle: "세계 최고의 기술력과 혁신이 살아있는 현장으로 여러분을 초대합니다.",
      cta: "회사 소개"
    },
    whyUs: {
      title: "왜 K-Industry 투어인가?",
      expert: "전문 코디네이터",
      expertDesc: "산업 분야별 전문 지식을 갖춘 코디네이터가 동행합니다.",
      exclusive: "독점적 접근",
      exclusiveDesc: "일반인에게 공개되지 않는 핵심 시설 방문 기회를 제공합니다.",
      network: "글로벌 네트워크",
      networkDesc: "국내 유수의 기업들과의 긴밀한 협력을 통해 최상의 프로그램을 구성합니다."
    },
    valueProp: {
      visitor: {
        title: "외국인 방문객",
        subtitle: "단순 관광을 넘어선 미래 기회 탐색",
        items: ["산업 이해", "취업/유학 정보", "비즈니스 네트워크", "투자 기회", "기술 인사이트"],
        tag: "여행 + 커리어 + 비즈니스"
      },
      company: {
        title: "참여 기업",
        subtitle: "글로벌 마케팅 및 인재 확보의 장",
        items: ["글로벌 홍보", "해외 인재 확보", "해외 바이어 발굴", "브랜드 이미지 상승", "ESG/CSR 활동 인정"],
        tag: "글로벌 마케팅 채널"
      },
      region: {
        title: "국가 및 지역",
        subtitle: "산업 관광을 통한 경쟁력 강화",
        items: ["제조업 이미지 개선", "산업 관광 시장 창출", "지역경제 활성화", "외국인 장기 체류 유도"],
        tag: "관광 산업 고급화"
      }
    },
    tours: {
      title: "추천 투어 프로그램"
    },
    guide: {
      title: "프로그램 가이드",
      participation: {
        title: "참여조건",
        desc: "산업 시찰에 관심 있는 기업인, 학생, 공공기관 단체 등 누구나 신청 가능합니다. (최소 인원 15명 이상 권장)"
      },
      general: {
        title: "일반 프로그램",
        desc: "주요 산업시설 및 학교 견학 및 관계자 브리핑이 포함된 표준 코스입니다. (1~2일 소요)"
      },
      special: {
        title: "스페셜 프로그램",
        desc: "비즈니스 매칭, 기술 세미나, R&D 센터 방문 등 맞춤형 심화 프로그램을 제공합니다. (3일 이상)"
      }
    },
    reviews: {
      title: "참여자 후기",
      items: [
        {
          name: "존 스미스",
          role: "필리핀, 글로벌테크 이사",
          text: "한국의 제조기업 투어는 새로운 기술에 대한 매우 좋은 경험이었습니다. 제공된 접근 수준은 전례가 없었고, 기업 관계자들의 설명도 매우 만족스럽습니다."
        },
        {
          name: "필립",
          role: "아랍에미레이트, 하이머천다이징 대표이사",
          text: "이 투어는 우리 팀이 스마트 제조의 미래를 이해하는 데 큰 도움이 되는 깊이 있는 통찰을 제공했습니다. 다른 혁신 기업도 방문을 해보고 싶습니다."
        },
        {
          name: "라웅 페이",
          role: "베트남, 롱테이크직업학교",
          text: "기술대학에 대한 교육시설과 교수법에 대한 이해와 통찰을 할 수 있는 아주 소중한 시간이었습니다."
        }
      ]
    },
    aboutPage: {
      title: "회사소개",
      description: "당사는 한국의 선도적인 제조산업과 교육·의료 현장을 직접 경험할 수 있는 전문 산업 방문 프로그램을 기획·운영하는 기업입니다. 해외 기업 관계자, 공공기관, 교육기관, 연구자 및 투자자를 대상으로 공장 견학, 학교 방문, 병원 탐방 등 다양한 맞춤형 산업 투어 서비스를 제공합니다.",
      description2: "한국은 첨단 제조, 스마트팩토리, IT·반도체, 바이오·헬스케어, 교육 혁신 분야에서 세계적인 경쟁력을 보유하고 있습니다. 당사는 이러한 핵심 산업과 기관을 직접 연결하여, 참가자들이 현장의 기술·운영·문화·협력 기회를 깊이 있게 이해할 수 있도록 돕습니다.",
      services: {
        title: "주요 서비스",
        items: [
          { title: "제조 산업 견학", desc: "스마트팩토리, 자동화 설비, 품질관리 시스템 체험" },
          { title: "교육기관 방문", desc: "초·중·고 및 대학의 교육 시스템과 미래 교육 사례 탐방" },
          { title: "병원 및 의료기관 방문", desc: "첨단 의료 시스템, 병원 운영 및 디지털 헬스케어 사례 이해" },
          { title: "맞춤형 프로그램 기획", desc: "산업·목적·기간·예산에 따른 전 일정 설계 및 운영" },
          { title: "전문 통역 및 해설", desc: "전문 통역 및 산업 전문가 해설 제공" }
        ]
      },
      participationEntities: {
        title: "참여 현황",
        items: [
          { title: "기업", desc: "글로벌 제조 및 혁신 기술 선도 기업", icon: "Building2" },
          { title: "학교", desc: "초·중·고 및 특성화고, 대학교 등 교육 기관", icon: "GraduationCap" },
          { title: "의료기관", desc: "첨단 의료 시스템 및 디지털 헬스케어 기관", icon: "Stethoscope" }
        ]
      },
      mission: {
        title: "우리의 미션",
        desc: "K-콘텐츠를 넘어 K-테크로 확장되는 K-Industry Insight Tour는 산업 현장을 직접 보고 배우는 경험을 통해 사람과 산업을 연결하고, 미래를 향한 통찰과 영감을 제공합니다. 우리는 단순한 방문을 넘어 이해와 협력으로 이어지는 의미 있는 산업 경험을 창출합니다."
      },
      partners: {
        title: "함께하는 파트너",
        list: ["I&PGE", "KCCT", "토모코리아", "토모재팬", "유에스트래블", "스마트트래블"]
      },
      team: {
        title: "인더스터리 프로 팀",
        members: [
          { name: "육근수", role: "CEO / Youk KenSoo", desc: "기획 개발 및 컨설턴트", image: "/y_ks-edit.png" },
          { name: "양은정", role: "COO / Yang EunJung", desc: "사업총괄운영", image: "/y_ej-edit.png" },
          { name: "류선수", role: "CTO / Ryu SunSoo", desc: "기술/산업 책임자", image: "/r_ss-edit.png" }
        ]
      },
      stats: [
        { label: "역사와 전통", value: "15+" },
        { label: "산업/교육 파트너사", value: "120+" },
        { label: "연간 투어인원", value: "100,000+" },
        { label: "참여국가", value: "15+" },
        { label: "소비자만족도", value: "9.5+" }
      ]
    },
    footer: {
      rights: "© 2026 K-Industry Insight Tour. 모든 권리 보유."
    }
  },
  EN: {
    nav: {
      home: "Home",
      tours: "Apply",
      about: "About Us",
      contact: "Inquiry Board",
      admin: "Admin"
    },
    hero: {
      title: "Experience the Heart of Korean Industry",
      subtitle: "We invite you to the front lines of the world's best technology and innovation.",
      cta: "About Us"
    },
    whyUs: {
      title: "Why K-Industry Tour?",
      expert: "Professional Coordinators",
      expertDesc: "Accompanied by coordinators with specialized knowledge in each industry sector.",
      exclusive: "Exclusive Access",
      exclusiveDesc: "Opportunities to visit core facilities not open to the general public.",
      network: "Global Network",
      networkDesc: "Best programs through close cooperation with leading Korean companies."
    },
    valueProp: {
      visitor: {
        title: "Foreign Visitors",
        subtitle: "Exploring future opportunities beyond tourism",
        items: ["Industry Understanding", "Job/Study Info", "Business Network", "Investment Opportunities", "Tech Insights"],
        tag: "Travel + Career + Business"
      },
      company: {
        title: "Participating Companies",
        subtitle: "Global marketing and talent acquisition",
        items: ["Global Promotion", "Overseas Talent Acquisition", "Buyer Discovery", "Brand Image Enhancement", "ESG/CSR Recognition"],
        tag: "Global Marketing Channel"
      },
      region: {
        title: "National & Regional",
        subtitle: "Strengthening competitiveness through industrial tourism",
        items: ["Manufacturing Image Improvement", "Market Creation", "Local Economy Vitalization", "Long-term Stay Induction"],
        tag: "Premium Tourism Industry"
      }
    },
    tours: {
      title: "Featured Tour Programs"
    },
    guide: {
      title: "Program Guide",
      participation: {
        title: "Participation Requirements",
        desc: "Open to anyone interested in industrial tours, including business professionals, students, and public organizations. (Recommended minimum group size: 15 people)"
      },
      general: {
        title: "General Program",
        desc: "Standard tour courses including visits to major industrial facilities, schools, and briefings from representatives. (Duration: 1-2 days)"
      },
      special: {
        title: "Special Program",
        desc: "Provides customized in-depth programs such as business matching, technical seminars, and R&D center visits. (Duration: 3+ days)"
      }
    },
    reviews: {
      title: "Participant Reviews",
      items: [
        {
          name: "John Smith",
          role: "Philippines, Global Tech Director",
          text: "The tour of Korean manufacturing companies was a very good experience with new technologies. The level of access provided was unprecedented, and the explanations from company representatives were very satisfying."
        },
        {
          name: "Philip",
          role: "UAE, High Merchandising CEO",
          text: "This tour provided deep insights that helped our team understand the future of smart manufacturing. I would like to visit other innovative companies as well."
        },
        {
          name: "Raung Fei",
          role: "Vietnam, Long Take Vocational School",
          text: "It was a very valuable time to gain understanding and insight into the educational facilities and teaching methods of technical universities."
        }
      ]
    },
    aboutPage: {
      title: "About Us",
      description: "We are a company that plans and operates professional industrial visit programs where you can directly experience Korea's leading manufacturing industries and educational/medical sites. We provide various customized industrial tour services such as factory tours, school visits, and hospital explorations for overseas corporate officials, public institutions, educational institutions, researchers, and investors.",
      description2: "Korea possesses world-class competitiveness in advanced manufacturing, smart factories, IT/semiconductors, bio/healthcare, and educational innovation. We directly connect these core industries and institutions to help participants deeply understand on-site technology, operation, culture, and cooperation opportunities.",
      services: {
        title: "Major Services",
        items: [
          { title: "Manufacturing Industry Tours", desc: "Experience smart factories, automation facilities, and quality control systems." },
          { title: "Educational Institution Visits", desc: "Explore educational systems and future education cases of schools and universities." },
          { title: "Hospital & Medical Visits", desc: "Understand advanced medical systems, hospital operations, and digital healthcare." },
          { title: "Customized Planning", desc: "Design and operate full schedules based on industry, purpose, duration, and budget." },
          { title: "Expert Interpretation", desc: "Professional interpretation and industrial expert commentary provided." }
        ]
      },
      participationEntities: {
        title: "Participation Status",
        items: [
          { title: "Companies", desc: "Leading global manufacturing and innovation tech companies", icon: "Building2" },
          { title: "Schools", desc: "Educational institutions including K-12 and universities", icon: "GraduationCap" },
          { title: "Medical Institutions", desc: "Advanced medical systems and digital healthcare providers", icon: "Stethoscope" }
        ]
      },
      mission: {
        title: "Our Mission",
        desc: "Expanding beyond K-Content to K-Tech, K-Industry Insight Tour connects people and industries through direct on-site learning experiences, providing insights and inspiration for the future. We create meaningful industrial experiences that go beyond simple visits to lead to understanding and cooperation."
      },
      partners: {
        title: "Our Partners",
        list: ["I&PGE", "KCCT", "Tomo Korea", "Tomo Japan", "US Travel", "Smart Travel"]
      },
      team: {
        title: "Industry Pro Team",
        members: [
          { name: "Youk KenSoo", role: "CEO", desc: "Planning, Development & Consultant", image: "/y_ks-edit.png" },
          { name: "Yang EunJung", role: "COO", desc: "Business Operations Management", image: "/y_ej-edit.png" },
          { name: "Ryu SunSoo", role: "CTO", desc: "Technical & Industrial Lead", image: "/r_ss-edit.png" }
        ]
      },
      stats: [
        { label: "History & Tradition", value: "15+" },
        { label: "Industrial/Educational Partners", value: "120+" },
        { label: "Annual Tour Participants", value: "100,000+" },
        { label: "Participating Countries", value: "15+" },
        { label: "Customer Satisfaction", value: "9.5+" }
      ]
    },
    footer: {
      rights: "© 2026 K-Industry Insight Tour. All rights reserved."
    }
  }
};
