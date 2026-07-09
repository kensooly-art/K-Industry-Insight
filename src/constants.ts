import { Tour, Partner } from "./types";

export const SAMPLE_TOURS: Tour[] = [
  {
    id: "1",
    title_kr: "K-제조산업 투어 (반도체 & 자동차)",
    title_en: "K-Manufacturing Tour (Semiconductor & Automobile)",
    title_cn: "K-制造产业观光（半导体与汽车）",
    description_kr: "대한민국을 대표하는 반도체와 자동차 산업의 최첨단 제조 공정을 직접 확인하는 프리미엄 투어입니다.",
    description_en: "A premium tour to witness the state-of-the-art manufacturing processes of Korea's leading semiconductor and automobile industries.",
    description_cn: "亲眼见证代表韩国的半导体和汽车产业最尖端制造流程的高端参观项目。",
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
    title_cn: "基于人工智能的智能工厂参观",
    description_kr: "인공지능과 사물인터넷(IoT)이 결합된 미래형 지능형 공장의 자동화 솔루션을 경험하십시오.",
    description_en: "Experience the automation solutions of future intelligent factories where AI and IoT are integrated.",
    description_cn: "体验结合了人工智能和物联网（IoT）的未来型智能工厂自动化解决方案。",
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
    title_cn: "K-Beauty 化妆品制造参观",
    description_kr: "글로벌 트렌드를 선도하는 K-뷰티 제품의 탄생 과정과 첨단 R&D 연구 시설을 탐방합니다.",
    description_en: "Explore the birth process of global trend-setting K-Beauty products and advanced R&D research facilities.",
    description_cn: "探访引领全球趋势的 K-Beauty 产品的诞生过程以及先进的研发（R&D）设施。",
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
    title_cn: "环保能源与可持续技术参观",
    description_kr: "태양광, 풍력 및 수소 에너지 등 대한민국의 신재생 에너지 기술 현장을 탐방합니다.",
    description_en: "Explore South Korea's renewable energy technology sites, including solar, wind, and hydrogen energy.",
    description_cn: "探访韩国的太阳能、风能和氢能等新能源与可再生能源技术现场。",
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
    title_cn: "教育机构（中小学、职业高中、大学）创新考察",
    description_kr: "대한민국의 우수한 교육 시스템과 미래 인재 양성을 위한 교육 현장을 직접 체험하십시오.",
    description_en: "Experience South Korea's excellent education system and educational sites for fostering future talent.",
    description_cn: "亲身体验韩国优秀的教育体系以及培养未来人才的教育现场。",
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
    title_cn: "先进 medical 与医院访问参观",
    description_kr: "세계적인 수준의 의료 기술과 최첨단 병원 시설을 방문하여 스마트 헬스케어를 경험하십시오.",
    description_en: "Visit world-class medical technology and state-of-the-art hospital facilities to experience smart healthcare.",
    description_cn: "访问世界级水平的医疗技术和最先进的医院设施，体验智慧医疗保健。",
    category: "Medical",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    price: 1200,
    duration: "1 Day",
    featured: true
  }
];

export const INITIAL_PARTNERS: Partner[] = [
  { id: "p1", name: "(주)에스이에프코리아", location: "천안", industry: "친환경 특수무기질도료", type: "company", createdAt: new Date().toISOString() },
  { id: "p2", name: "(주)드림텍", location: "천안", industry: "자동차 부품", type: "company", createdAt: new Date().toISOString() },
  { id: "p3", name: "건국대학교", location: "서울", industry: "종합대학", type: "school", createdAt: new Date().toISOString() },
  { id: "p4", name: "대전과학기술대학교", location: "대전", industry: "기술대학", type: "school", createdAt: new Date().toISOString() },
  { id: "p5", name: "강동 경희대학교병원", location: "서울", industry: "종합병원", type: "medical", createdAt: new Date().toISOString() },
  { id: "p6", name: "일산 동국대학교병원", location: "경기", industry: "종합병원", type: "medical", createdAt: new Date().toISOString() }
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
  },
  CN: {
    nav: {
      home: "首页",
      tours: "申请参观",
      about: "公司介绍",
      contact: "咨询留言板",
      admin: "管理员"
    },
    hero: {
      title: "亲身体验韩国工业的心脏",
      subtitle: "我们邀请您前往充满世界一流技术与创新的最前沿阵地。",
      cta: "公司介绍"
    },
    whyUs: {
      title: "为什么选择 K-Industry Tour？",
      expert: "专业协调员",
      expertDesc: "由在各工业领域拥有专业知识的协调员全程陪同。",
      exclusive: "专属访问权限",
      exclusiveDesc: "提供访问不向公众开放的核心设施的宝贵机会。",
      network: "全球合作网络",
      networkDesc: "通过与韩国领先企业的紧密合作，为您量身定制最佳项目。"
    },
    valueProp: {
      visitor: {
        title: "外籍访客",
        subtitle: "超越单纯观光，探索未来机遇",
        items: ["行业理解", "就业/留学信息", "商业网络", "投资机会", "技术洞察"],
        tag: "旅行 + 职业 + 商业"
      },
      company: {
        title: "参与企业",
        subtitle: "全球营销与人才引进的平台",
        items: ["全球宣传", "海外人才招聘", "发掘海外买家", "提升品牌形象", "ESG/CSR 活动认可"],
        tag: "全球营销渠道"
      },
      region: {
        title: "国家与地区",
        subtitle: "通过工业旅游增强竞争力",
        items: ["改善制造业形象", "开创工业旅游市场", "活跃地方经济", "吸引外籍长期滞留"],
        tag: "旅游产业高端化"
      }
    },
    tours: {
      title: "推荐参观项目"
    },
    guide: {
      title: "项目指南",
      participation: {
        title: "参与条件",
        desc: "欢迎所有对工业考察感兴趣的企业界人士、学生、公共机构团体等申请。（建议最少人数为15人或以上）"
      },
      general: {
        title: "普通项目",
        desc: "包括参观主要工业设施、学校及听取相关负责人简报的标准路线。（时长：1-2天）"
      },
      special: {
        title: "特别项目",
        desc: "提供商业配对、技术研讨会、参观研发中心等定制化深度项目。（时长：3天及以上）"
      }
    },
    reviews: {
      title: "参与者评价",
      items: [
        {
          name: "约翰·史密斯",
          role: "菲律宾，Global Tech 董事",
          text: "参观韩国制造企业是一次了解新技术的极佳体验。提供如此深度的参观权限是前所未有的，企业代表的讲解也让人非常满意。"
        },
        {
          name: "菲利普",
          role: "阿联酋，High Merchandising 首席执行官",
          text: "这次参观提供了深刻的见解，帮助我们团队理解了智能制造的未来。我非常希望能参观更多这样的创新企业。"
        },
        {
          name: "阮飞",
          role: "越南，隆特职业学校",
          text: "这是一次非常宝贵的经历，让我们对技术大学的教学设施和教学方法有了深刻的认识与启发。"
        }
      ]
    },
    aboutPage: {
      title: "公司介绍",
      description: "我们是一家专业策划 and 运营工业参观项目的公司，致力于让您亲身体验韩国领先的制造产业、教育和医疗现场。我们面向海外企业代表、公共机构、教育机构、研究人员和投资者，提供包括工厂参观、学校访问、医院考察等在内的各种定制化工业旅游服务。",
      description2: "韩国在先进制造、智能工厂、IT/半导体、生物/医疗保健以及教育创新等领域拥有世界一流的竞争力。我们直接连接这些核心产业和机构，帮助参与者深入了解现场技术、运营、文化以及合作机会。",
      services: {
        title: "主要服务",
        items: [
          { title: "制造产业参观", desc: "体验智能工厂、自动化设备及质量控制系统。" },
          { title: "教育机构访问", desc: "考察中小学及大学的教育体制与未来教育案例。" },
          { title: "医院及医疗机构访问", desc: "了解先进医疗系统、医院运营及数字医疗案例。" },
          { title: "定制化项目策划", desc: "根据行业、目的、时长和预算设计并运营全套行程。" },
          { title: "专业翻译与讲解", desc: "提供专业翻译及工业专家的现场讲解服务。" }
        ]
      },
      participationEntities: {
        title: "参与现状",
        items: [
          { title: "企业", desc: "引领全球制造与创新技术的骨干企业", icon: "Building2" },
          { title: "学校", desc: "包括中小学、职业高中及大学在内的教育机构", icon: "GraduationCap" },
          { title: "医疗机构", desc: "先进的医疗系统及数字医疗服务提供商", icon: "Stethoscope" }
        ]
      },
      mission: {
        title: "我们的使命",
        desc: "K-Industry Insight Tour 从 K-Content（韩国文化内容）延伸至 K-Tech（韩国科技），通过直接的现场学习体验连接人与产业，为未来提供洞察与灵感。我们创造超越单纯参观的有意义的工业体验，促进更深层次的理解与合作。"
      },
      partners: {
        title: "我们的合作伙伴",
        list: ["I&PGE", "KCCT", "Tomo Korea", "Tomo Japan", "US Travel", "Smart Travel"]
      },
      team: {
        title: "工业专业团队",
        members: [
          { name: "Youk KenSoo / 陆根洙", role: "CEO", desc: "策划、开发与咨询顾问", image: "/y_ks-edit.png" },
          { name: "Yang EunJung / 梁恩贞", role: "COO", desc: "业务运营管理总监", image: "/y_ej-edit.png" },
          { name: "Ryu SunSoo / 柳选手", role: "CTO", desc: "技术与工业项目负责人", image: "/r_ss-edit.png" }
        ]
      },
      stats: [
        { label: "历史与传承", value: "15+" },
        { label: "工业/教育合作伙伴", value: "120+" },
        { label: "年均参观人数", value: "100,000+" },
        { label: "参与国家", value: "15+" },
        { label: "客户满意度", value: "9.5+" }
      ]
    },
    footer: {
      rights: "© 2026 K-Industry Insight Tour. 版权所有。"
    }
  }
};
