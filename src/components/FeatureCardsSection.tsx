import { motion } from "framer-motion"
import { ChevronRight, Plus } from "lucide-react"

const featureCards = [
  {
    title: "Drag & Drop блоки",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6 pt-10">
        <svg width="100%" height="100%" viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="100" height="50" rx="8" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5"/>
          <text x="80" y="50" textAnchor="middle" fill="#A1A1AA" fontSize="12">Начало</text>
          <rect x="160" y="20" width="110" height="50" rx="8" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5"/>
          <text x="215" y="50" textAnchor="middle" fill="#A1A1AA" fontSize="12">Авторизация</text>
          <line x1="130" y1="45" x2="160" y2="45" stroke="#52525B" strokeWidth="1.5" strokeDasharray="4 2"/>
          <polygon points="158,41 166,45 158,49" fill="#52525B"/>
          <rect x="90" y="110" width="120" height="50" rx="8" fill="#1E1E2E" stroke="#6366F1" strokeWidth="1.5"/>
          <text x="150" y="140" textAnchor="middle" fill="#818CF8" fontSize="12">Обработка</text>
          <line x1="80" y1="70" x2="130" y2="110" stroke="#52525B" strokeWidth="1.5" strokeDasharray="4 2"/>
          <polygon points="127,108 135,112 128,117" fill="#52525B"/>
          <line x1="215" y1="70" x2="175" y2="110" stroke="#52525B" strokeWidth="1.5" strokeDasharray="4 2"/>
          <polygon points="172,108 180,110 174,117" fill="#52525B"/>
          <rect x="50" y="200" width="90" height="44" rx="8" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5"/>
          <text x="95" y="227" textAnchor="middle" fill="#A1A1AA" fontSize="12">Успех</text>
          <rect x="165" y="200" width="90" height="44" rx="8" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5"/>
          <text x="210" y="227" textAnchor="middle" fill="#A1A1AA" fontSize="12">Ошибка</text>
          <line x1="130" y1="160" x2="95" y2="200" stroke="#52525B" strokeWidth="1.5" strokeDasharray="4 2"/>
          <polygon points="92,197 100,201 93,206" fill="#52525B"/>
          <line x1="170" y1="160" x2="210" y2="200" stroke="#52525B" strokeWidth="1.5" strokeDasharray="4 2"/>
          <polygon points="207,197 215,201 208,206" fill="#52525B"/>
        </svg>
      </div>
    ),
  },
  {
    title: "Умные стрелки-соединители",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-6 pt-10">
        <svg width="100%" height="100%" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="36" fill="#1A1A2E" stroke="#6366F1" strokeWidth="1.5"/>
          <text x="60" y="65" textAnchor="middle" fill="#818CF8" fontSize="11">API</text>
          <circle cx="240" cy="60" r="36" fill="#1A2E1A" stroke="#22C55E" strokeWidth="1.5"/>
          <text x="240" y="65" textAnchor="middle" fill="#4ADE80" fontSize="11">DB</text>
          <circle cx="60" cy="180" r="36" fill="#2E1A1A" stroke="#F59E0B" strokeWidth="1.5"/>
          <text x="60" y="185" textAnchor="middle" fill="#FCD34D" fontSize="11">UI</text>
          <circle cx="240" cy="180" r="36" fill="#1A1A2E" stroke="#8B5CF6" strokeWidth="1.5"/>
          <text x="240" y="185" textAnchor="middle" fill="#C4B5FD" fontSize="11">Cache</text>
          <path d="M96 60 Q150 30 204 60" stroke="#6366F1" strokeWidth="1.5" fill="none" markerEnd="url(#arr1)"/>
          <path d="M96 180 Q150 150 204 180" stroke="#8B5CF6" strokeWidth="1.5" fill="none" markerEnd="url(#arr2)"/>
          <path d="M60 96 Q80 120 60 144" stroke="#F59E0B" strokeWidth="1.5" fill="none" markerEnd="url(#arr3)"/>
          <path d="M240 96 Q220 120 240 144" stroke="#22C55E" strokeWidth="1.5" fill="none" markerEnd="url(#arr4)"/>
          <defs>
            <marker id="arr1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#6366F1"/></marker>
            <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#8B5CF6"/></marker>
            <marker id="arr3" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#F59E0B"/></marker>
            <marker id="arr4" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#22C55E"/></marker>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    title: "Экспорт и совместная работа",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/precision-grid.png"
          alt="Сетка диаграммы"
          className="w-full h-full object-cover"
          style={{ filter: "invert(1) opacity(0.3)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-3">
            {["PNG", "SVG", "PDF"].map((fmt) => (
              <div key={fmt} className="flex items-center gap-3 bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-zinc-300 text-sm font-mono">{fmt}</span>
                <span className="text-zinc-500 text-xs ml-auto">↓</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
]

export function FeatureCardsSection() {
  return (
    <div className="relative z-20 py-40" style={{ backgroundColor: "#09090B" }}>
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)",
        }}
      />
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-5xl">
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white max-w-md"
              style={{
                letterSpacing: "-0.0325em",
                fontVariationSettings: '"opsz" 28',
                fontWeight: 538,
                lineHeight: 1.1,
              }}
            >
              Всё для работы с диаграммами
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-zinc-400 leading-relaxed">
                FlowBoard создан для тех, кто ценит скорость и ясность: создавайте блок-схемы, UML, флоучарты
                и архитектурные диаграммы без лишних настроек.{" "}
                <a href="#" className="text-white inline-flex items-center gap-1 hover:underline">
                  Попробовать бесплатно <ChevronRight className="w-4 h-4" />
                </a>
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group overflow-hidden relative flex flex-col justify-end"
                style={{
                  aspectRatio: "336 / 360",
                  borderRadius: "30px",
                  height: "360px",
                  isolation: "isolate",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full flex"
                  style={{
                    maskImage: "linear-gradient(#000 70%, transparent 90%)",
                    WebkitMaskImage: "linear-gradient(#000 70%, transparent 90%)",
                  }}
                >
                  {card.illustration}
                </div>
                <div
                  className="relative z-10 flex items-center justify-between w-full"
                  style={{ padding: "0 24px 40px", gap: "16px" }}
                >
                  <h3 className="text-white font-medium text-lg leading-tight">{card.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300 transition-colors flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}