import type { createGlobalTheme } from "@vanilla-extract/css";
import { createGlobalThemeContract, fallbackVar } from "@vanilla-extract/css";
import slugify from "../_utils/slugify";

export const colorTheme = createGlobalThemeContract(
  {
    red: {
      /**
       * @defaultValue #fef2f2 | rgb(254, 242, 242)
       */
      "50": "--color-red-50" as const,
      /**
       * @defaultValue #fee2e2 | rgb(254, 226, 226)
       */
      "100": "--color-red-100" as const,
      /**
       * @defaultValue #fecaca | rgb(254, 202, 202)
       */
      "200": "--color-red-200" as const,
      /**
       * @defaultValue #fca5a5 | rgb(252, 165, 165)
       */
      "300": "--color-red-300" as const,
      /**
       * @defaultValue #f87171 | rgb(248, 113, 113)
       */
      "400": "--color-red-400" as const,
      /**
       * @defaultValue #ef4444 | rgb(239, 68, 68)
       */
      "500": "--color-red-500" as const,
      /**
       * @defaultValue #dc2626 | rgb(220, 38, 38)
       */
      "600": "--color-red-600" as const,
      /**
       * @defaultValue #b91c1c | rgb(185, 28, 28)
       */
      "700": "--color-red-700" as const,
      /**
       * @defaultValue #991b1b | rgb(153, 27, 27)
       */
      "800": "--color-red-800" as const,
      /**
       * @defaultValue #7f1d1d | rgb(127, 29, 29)
       */
      "900": "--color-red-900" as const,
      /**
       * @defaultValue #450a0a | rgb(69, 10, 10)
       */
      "950": "--color-red-950" as const,
    },
    orange: {
      /**
       * @defaultValue #fff7ed | rgb(255, 247, 237)
       */
      "50": "--color-orange-50" as const,
      /**
       * @defaultValue #ffedd5 | rgb(255, 237, 213)
       */
      "100": "--color-orange-100" as const,
      /**
       * @defaultValue #fed7aa | rgb(254, 215, 170)
       */
      "200": "--color-orange-200" as const,
      /**
       * @defaultValue #fdba74 | rgb(253, 186, 116)
       */
      "300": "--color-orange-300" as const,
      /**
       * @defaultValue #fb923c | rgb(251, 146, 60)
       */
      "400": "--color-orange-400" as const,
      /**
       * @defaultValue #f97316 | rgb(249, 115, 22)
       */
      "500": "--color-orange-500" as const,
      /**
       * @defaultValue #ea580c | rgb(234, 88, 12)
       */
      "600": "--color-orange-600" as const,
      /**
       * @defaultValue #c2410c | rgb(194, 65, 12)
       */
      "700": "--color-orange-700" as const,
      /**
       * @defaultValue #9a3412 | rgb(154, 52, 18)
       */
      "800": "--color-orange-800" as const,
      /**
       * @defaultValue #7c2d12 | rgb(124, 45, 18)
       */
      "900": "--color-orange-900" as const,
      /**
       * @defaultValue #431407 | rgb(67, 20, 7)
       */
      "950": "--color-orange-950" as const,
    },
    amber: {
      /**
       * @defaultValue #fffbeb | rgb(255, 251, 235)
       */
      "50": "--color-amber-50" as const,
      /**
       * @defaultValue #fef3c7 | rgb(254, 243, 199)
       */
      "100": "--color-amber-100" as const,
      /**
       * @defaultValue #fde68a | rgb(253, 230, 138)
       */
      "200": "--color-amber-200" as const,
      /**
       * @defaultValue #fcd34d | rgb(252, 211, 77)
       */
      "300": "--color-amber-300" as const,
      /**
       * @defaultValue #fbbf24 | rgb(251, 191, 36)
       */
      "400": "--color-amber-400" as const,
      /**
       * @defaultValue #f59e0b | rgb(245, 158, 11)
       */
      "500": "--color-amber-500" as const,
      /**
       * @defaultValue #d97706 | rgb(217, 119, 6)
       */
      "600": "--color-amber-600" as const,
      /**
       * @defaultValue #b45309 | rgb(180, 83, 9)
       */
      "700": "--color-amber-700" as const,
      /**
       * @defaultValue #92400e | rgb(146, 64, 14)
       */
      "800": "--color-amber-800" as const,
      /**
       * @defaultValue #78350f | rgb(120, 53, 15)
       */
      "900": "--color-amber-900" as const,
      /**
       * @defaultValue #451a03 | rgb(69, 26, 3)
       */
      "950": "--color-amber-950" as const,
    },
    yellow: {
      /**
       * @defaultValue #fefce8 | rgb(254, 252, 232)
       */
      "50": "--color-yellow-50" as const,
      /**
       * @defaultValue #fef9c3 | rgb(254, 249, 195)
       */
      "100": "--color-yellow-100" as const,
      /**
       * @defaultValue #fef08a | rgb(254, 240, 138)
       */
      "200": "--color-yellow-200" as const,
      /**
       * @defaultValue #fde047 | rgb(253, 224, 71)
       */
      "300": "--color-yellow-300" as const,
      /**
       * @defaultValue #facc15 | rgb(250, 204, 21)
       */
      "400": "--color-yellow-400" as const,
      /**
       * @defaultValue #eab308 | rgb(234, 179, 8)
       */
      "500": "--color-yellow-500" as const,
      /**
       * @defaultValue #ca8a04 | rgb(202, 138, 4)
       */
      "600": "--color-yellow-600" as const,
      /**
       * @defaultValue #a16207 | rgb(161, 98, 7)
       */
      "700": "--color-yellow-700" as const,
      /**
       * @defaultValue #854d0e | rgb(133, 77, 14)
       */
      "800": "--color-yellow-800" as const,
      /**
       * @defaultValue #422006 | rgb(66, 32, 6)
       */
      "900": "--color-yellow-900" as const,
      /**
       * @defaultValue #713f12 | rgb(113, 63, 18)
       */
      "950": "--color-yellow-950" as const,
    },
    lime: {
      /**
       * @defaultValue #f7fee7 | rgb(247, 254, 231)
       */
      "50": "--color-lime-50" as const,
      /**
       * @defaultValue #ecfccb | rgb(236, 252, 203)
       */
      "100": "--color-lime-100" as const,
      /**
       * @defaultValue #d9f99d | rgb(217, 249, 157)
       */
      "200": "--color-lime-200" as const,
      /**
       * @defaultValue #bef264 | rgb(190, 242, 100)
       */
      "300": "--color-lime-300" as const,
      /**
       * @defaultValue #a3e635 | rgb(163, 230, 53)
       */
      "400": "--color-lime-400" as const,
      /**
       * @defaultValue #84cc16 | rgb(132, 204, 22)
       */
      "500": "--color-lime-500" as const,
      /**
       * @defaultValue #65a30d | rgb(101, 163, 13)
       */
      "600": "--color-lime-600" as const,
      /**
       * @defaultValue #4d7c0f | rgb(77, 124, 15)
       */
      "700": "--color-lime-700" as const,
      /**
       * @defaultValue #3f6212 | rgb(63, 98, 18)
       */
      "800": "--color-lime-800" as const,
      /**
       * @defaultValue #365314 | rgb(54, 83, 20)
       */
      "900": "--color-lime-900" as const,
      /**
       * @defaultValue #1a2e05 | rgb(26, 46, 5)
       */
      "950": "--color-lime-950" as const,
    },
    green: {
      /**
       * @defaultValue #f0fdf4 | rgb(240, 253, 244)
       */
      "50": "--color-green-50" as const,
      /**
       * @defaultValue #dcfce7 | rgb(220, 252, 231)
       */
      "100": "--color-green-100" as const,
      /**
       * @defaultValue #bbf7d0 | rgb(187, 247, 208)
       */
      "200": "--color-green-200" as const,
      /**
       * @defaultValue #86efac | rgb(134, 239, 172)
       */
      "300": "--color-green-300" as const,
      /**
       * @defaultValue #4ade80 | rgb(74, 222, 128)
       */
      "400": "--color-green-400" as const,
      /**
       * @defaultValue #22c55e | rgb(34, 197, 94)
       */
      "500": "--color-green-500" as const,
      /**
       * @defaultValue #16a34a | rgb(22, 163, 74)
       */
      "600": "--color-green-600" as const,
      /**
       * @defaultValue #15803d | rgb(21, 128, 61)
       */
      "700": "--color-green-700" as const,
      /**
       * @defaultValue #166534 | rgb(22, 101, 52)
       */
      "800": "--color-green-800" as const,
      /**
       * @defaultValue #14532d | rgb(20, 83, 45)
       */
      "900": "--color-green-900" as const,
      /**
       * @defaultValue #052e16 | rgb(5, 46, 22)
       */
      "950": "--color-green-950" as const,
    },
    emerald: {
      /**
       * @defaultValue #ecfdf5 | rgb(236, 253, 245)
       */
      "50": "--color-emerald-50" as const,
      /**
       * @defaultValue #d1fae5 | rgb(209, 250, 229)
       */
      "100": "--color-emerald-100" as const,
      /**
       * @defaultValue #a7f3d0 | rgb(167, 243, 208)
       */
      "200": "--color-emerald-200" as const,
      /**
       * @defaultValue #6ee7b7 | rgb(110, 231, 183)
       */
      "300": "--color-emerald-300" as const,
      /**
       * @defaultValue #34d399 | rgb(52, 211, 153)
       */
      "400": "--color-emerald-400" as const,
      /**
       * @defaultValue #10b981 | rgb(16, 185, 129)
       */
      "500": "--color-emerald-500" as const,
      /**
       * @defaultValue #059669 | rgb(5, 150, 105)
       */
      "600": "--color-emerald-600" as const,
      /**
       * @defaultValue #047857 | rgb(4, 120, 87)
       */
      "700": "--color-emerald-700" as const,
      /**
       * @defaultValue #065f46 | rgb(6, 95, 70)
       */
      "800": "--color-emerald-800" as const,
      /**
       * @defaultValue #064e3b | rgb(6, 78, 59)
       */
      "900": "--color-emerald-900" as const,
      /**
       * @defaultValue #022c22 | rgb(2, 44, 34)
       */
      "950": "--color-emerald-950" as const,
    },
    teal: {
      /**
       * @defaultValue #f0fdfa | rgb(240, 253, 250)
       */
      "50": "--color-teal-50" as const,
      /**
       * @defaultValue #ccfbf1 | rgb(204, 251, 241)
       */
      "100": "--color-teal-100" as const,
      /**
       * @defaultValue #99f6e4 | rgb(153, 246, 228)
       */
      "200": "--color-teal-200" as const,
      /**
       * @defaultValue #5eead4 | rgb(94, 234, 212)
       */
      "300": "--color-teal-300" as const,
      /**
       * @defaultValue #2dd4bf | rgb(45, 212, 191)
       */
      "400": "--color-teal-400" as const,
      /**
       * @defaultValue #14b8a6 | rgb(20, 184, 166)
       */
      "500": "--color-teal-500" as const,
      /**
       * @defaultValue #0d9488 | rgb(13, 148, 136)
       */
      "600": "--color-teal-600" as const,
      /**
       * @defaultValue #0f766e | rgb(15, 118, 110)
       */
      "700": "--color-teal-700" as const,
      /**
       * @defaultValue #115e59 | rgb(17, 94, 89)
       */
      "800": "--color-teal-800" as const,
      /**
       * @defaultValue #134e4a | rgb(19, 78, 74)
       */
      "900": "--color-teal-900" as const,
      /**
       * @defaultValue #042f2e | rgb(4, 47, 46)
       */
      "950": "--color-teal-950" as const,
    },
    cyan: {
      /**
       * @defaultValue #ecfeff | rgb(236, 254, 255)
       */
      "50": "--color-cyan-50" as const,
      /**
       * @defaultValue #cffafe | rgb(207, 250, 254)
       */
      "100": "--color-cyan-100" as const,
      /**
       * @defaultValue #a5f3fc | rgb(165, 243, 252)
       */
      "200": "--color-cyan-200" as const,
      /**
       * @defaultValue #67e8f9 | rgb(103, 232, 249)
       */
      "300": "--color-cyan-300" as const,
      /**
       * @defaultValue #22d3ee | rgb(34, 211, 238)
       */
      "400": "--color-cyan-400" as const,
      /**
       * @defaultValue #06b6d4 | rgb(6, 182, 212)
       */
      "500": "--color-cyan-500" as const,
      /**
       * @defaultValue #0891b2 | rgb(8, 145, 178)
       */
      "600": "--color-cyan-600" as const,
      /**
       * @defaultValue #0e7490 | rgb(14, 116, 144)
       */
      "700": "--color-cyan-700" as const,
      /**
       * @defaultValue #155e75 | rgb(21, 94, 117)
       */
      "800": "--color-cyan-800" as const,
      /**
       * @defaultValue #164e63 | rgb(22, 78, 99)
       */
      "900": "--color-cyan-900" as const,
      /**
       * @defaultValue #083344 | rgb(8, 51, 68)
       */
      "950": "--color-cyan-950" as const,
    },
    sky: {
      /**
       * @defaultValue #f0f9ff | rgb(240, 249, 255)
       */
      "50": "--color-sky-50" as const,
      /**
       * @defaultValue #e0f2fe | rgb(224, 242, 254)
       */
      "100": "--color-sky-100" as const,
      /**
       * @defaultValue #bae6fd | rgb(186, 230, 253)
       */
      "200": "--color-sky-200" as const,
      /**
       * @defaultValue #7dd3fc | rgb(125, 211, 252)
       */
      "300": "--color-sky-300" as const,
      /**
       * @defaultValue #38bdf8 | rgb(56, 189, 248)
       */
      "400": "--color-sky-400" as const,
      /**
       * @defaultValue #0ea5e9 | rgb(14, 165, 233)
       */
      "500": "--color-sky-500" as const,
      /**
       * @defaultValue #0284c7 | rgb(2, 132, 199)
       */
      "600": "--color-sky-600" as const,
      /**
       * @defaultValue #0369a1 | rgb(3, 105, 161)
       */
      "700": "--color-sky-700" as const,
      /**
       * @defaultValue #075985 | rgb(7, 89, 133)
       */
      "800": "--color-sky-800" as const,
      /**
       * @defaultValue #0c4a6e | rgb(12, 74, 110)
       */
      "900": "--color-sky-900" as const,
      /**
       * @defaultValue #082f49 | rgb(8, 47, 73)
       */
      "950": "--color-sky-950" as const,
    },
    blue: {
      /**
       * @defaultValue #eff6ff | rgb(239, 246, 255)
       */
      "50": "--color-blue-50" as const,
      /**
       * @defaultValue #dbeafe | rgb(219, 234, 254)
       */
      "100": "--color-blue-100" as const,
      /**
       * @defaultValue #bfdbfe | rgb(191, 219, 254)
       */
      "200": "--color-blue-200" as const,
      /**
       * @defaultValue #93c5fd | rgb(147, 197, 253)
       */
      "300": "--color-blue-300" as const,
      /**
       * @defaultValue #60a5fa | rgb(96, 165, 250)
       */
      "400": "--color-blue-400" as const,
      /**
       * @defaultValue #3b82f6 | rgb(59, 130, 246)
       */
      "500": "--color-blue-500" as const,
      /**
       * @defaultValue #2563eb | rgb(37, 99, 235)
       */
      "600": "--color-blue-600" as const,
      /**
       * @defaultValue #1d4ed8 | rgb(29, 78, 216)
       */
      "700": "--color-blue-700" as const,
      /**
       * @defaultValue #1e40af | rgb(30, 64, 175)
       */
      "800": "--color-blue-800" as const,
      /**
       * @defaultValue #1e3a8a | rgb(30, 58, 138)
       */
      "900": "--color-blue-900" as const,
      /**
       * @defaultValue #172554 | rgb(23, 37, 84)
       */
      "950": "--color-blue-950" as const,
    },
    indigo: {
      /**
       * @defaultValue #eef2ff | rgb(238, 242, 255)
       */
      "50": "--color-indigo-50" as const,
      /**
       * @defaultValue #e0e7ff | rgb(224, 231, 255)
       */
      "100": "--color-indigo-100" as const,
      /**
       * @defaultValue #c7d2fe | rgb(199, 210, 254)
       */
      "200": "--color-indigo-200" as const,
      /**
       * @defaultValue #a5b4fc | rgb(165, 180, 252)
       */
      "300": "--color-indigo-300" as const,
      /**
       * @defaultValue #818cf8 | rgb(129, 140, 248)
       */
      "400": "--color-indigo-400" as const,
      /**
       * @defaultValue #6366f1 | rgb(99, 102, 241)
       */
      "500": "--color-indigo-500" as const,
      /**
       * @defaultValue #4f46e5 | rgb(79, 70, 229)
       */
      "600": "--color-indigo-600" as const,
      /**
       * @defaultValue #4338ca | rgb(67, 56, 202)
       */
      "700": "--color-indigo-700" as const,
      /**
       * @defaultValue #3730a3 | rgb(55, 48, 163)
       */
      "800": "--color-indigo-800" as const,
      /**
       * @defaultValue #312e81 | rgb(49, 46, 129)
       */
      "900": "--color-indigo-900" as const,
      /**
       * @defaultValue #1e1b4b | rgb(30, 27, 75)
       */
      "950": "--color-indigo-950" as const,
    },
    violet: {
      /**
       * @defaultValue #f5f3ff | rgb(245, 243, 255)
       */
      "50": "--color-violet-50" as const,
      /**
       * @defaultValue #ede9fe | rgb(237, 233, 254)
       */
      "100": "--color-violet-100" as const,
      /**
       * @defaultValue #ddd6fe | rgb(221, 214, 254)
       */
      "200": "--color-violet-200" as const,
      /**
       * @defaultValue #c4b5fd | rgb(196, 181, 253)
       */
      "300": "--color-violet-300" as const,
      /**
       * @defaultValue #a78bfa | rgb(167, 139, 250)
       */
      "400": "--color-violet-400" as const,
      /**
       * @defaultValue #8b5cf6 | rgb(139, 92, 246)
       */
      "500": "--color-violet-500" as const,
      /**
       * @defaultValue #7c3aed | rgb(124, 58, 237)
       */
      "600": "--color-violet-600" as const,
      /**
       * @defaultValue #6d28d9 | rgb(109, 40, 217)
       */
      "700": "--color-violet-700" as const,
      /**
       * @defaultValue #5b21b6 | rgb(91, 33, 182)
       */
      "800": "--color-violet-800" as const,
      /**
       * @defaultValue #4c1d95 | rgb(76, 29, 149)
       */
      "900": "--color-violet-900" as const,
      /**
       * @defaultValue #2e1065 | rgb(46, 16, 101)
       */
      "950": "--color-violet-950" as const,
    },
    purple: {
      /**
       * @defaultValue #faf5ff | rgb(250, 245, 255)
       */
      "50": "--color-purple-50" as const,
      /**
       * @defaultValue #f3e8ff | rgb(243, 232, 255)
       */
      "100": "--color-purple-100" as const,
      /**
       * @defaultValue #e9d5ff | rgb(233, 213, 255)
       */
      "200": "--color-purple-200" as const,
      /**
       * @defaultValue #d8b4fe | rgb(216, 180, 254)
       */
      "300": "--color-purple-300" as const,
      /**
       * @defaultValue #c084fc | rgb(192, 132, 252)
       */
      "400": "--color-purple-400" as const,
      /**
       * @defaultValue #a855f7 | rgb(168, 85, 247)
       */
      "500": "--color-purple-500" as const,
      /**
       * @defaultValue #9333ea | rgb(147, 51, 234)
       */
      "600": "--color-purple-600" as const,
      /**
       * @defaultValue #7e22ce | rgb(126, 34, 206)
       */
      "700": "--color-purple-700" as const,
      /**
       * @defaultValue #6b21a8 | rgb(107, 33, 168)
       */
      "800": "--color-purple-800" as const,
      /**
       * @defaultValue #581c87 | rgb(88, 28, 135)
       */
      "900": "--color-purple-900" as const,
      /**
       * @defaultValue #3b0764 | rgb(59, 7, 100)
       */
      "950": "--color-purple-950" as const,
    },
    fuchsia: {
      /**
       * @defaultValue #fdf4ff | rgb(253, 244, 255)
       */
      "50": "--color-fuchsia-50" as const,
      /**
       * @defaultValue #fae8ff | rgb(250, 232, 255)
       */
      "100": "--color-fuchsia-100" as const,
      /**
       * @defaultValue #f5d0fe | rgb(245, 208, 254)
       */
      "200": "--color-fuchsia-200" as const,
      /**
       * @defaultValue #f0abfc | rgb(240, 171, 252)
       */
      "300": "--color-fuchsia-300" as const,
      /**
       * @defaultValue #e879f9 | rgb(232, 121, 249)
       */
      "400": "--color-fuchsia-400" as const,
      /**
       * @defaultValue #d946ef | rgb(217, 70, 239)
       */
      "500": "--color-fuchsia-500" as const,
      /**
       * @defaultValue #c026d3 | rgb(192, 38, 211)
       */
      "600": "--color-fuchsia-600" as const,
      /**
       * @defaultValue #a21caf | rgb(162, 28, 175)
       */
      "700": "--color-fuchsia-700" as const,
      /**
       * @defaultValue #86198f | rgb(134, 25, 143)
       */
      "800": "--color-fuchsia-800" as const,
      /**
       * @defaultValue #701a75 | rgb(112, 26, 117)
       */
      "900": "--color-fuchsia-900" as const,
      /**
       * @defaultValue #4a044e | rgb(74, 4, 78)
       */
      "950": "--color-fuchsia-950" as const,
    },
    pink: {
      /**
       * @defaultValue #fdf2f8 | rgb(253, 242, 248)
       */
      "50": "--color-pink-50" as const,
      /**
       * @defaultValue #fce7f3 | rgb(252, 231, 243)
       */
      "100": "--color-pink-100" as const,
      /**
       * @defaultValue #fbcfe8 | rgb(251, 207, 232)
       */
      "200": "--color-pink-200" as const,
      /**
       * @defaultValue #f9a8d4 | rgb(249, 168, 212)
       */
      "300": "--color-pink-300" as const,
      /**
       * @defaultValue #f472b6 | rgb(244, 114, 182)
       */
      "400": "--color-pink-400" as const,
      /**
       * @defaultValue #ec4899 | rgb(236, 72, 153)
       */
      "500": "--color-pink-500" as const,
      /**
       * @defaultValue #db2777 | rgb(219, 39, 119)
       */
      "600": "--color-pink-600" as const,
      /**
       * @defaultValue #be185d | rgb(190, 24, 93)
       */
      "700": "--color-pink-700" as const,
      /**
       * @defaultValue #9d174d | rgb(157, 23, 77)
       */
      "800": "--color-pink-800" as const,
      /**
       * @defaultValue #831843 | rgb(131, 24, 67)
       */
      "900": "--color-pink-900" as const,
      /**
       * @defaultValue #500724 | rgb(80, 7, 36)
       */
      "950": "--color-pink-950" as const,
    },
    rose: {
      /**
       * @defaultValue #fff1f2 | rgb(255, 241, 242)
       */
      "50": "--color-rose-50" as const,
      /**
       * @defaultValue #ffe4e6 | rgb(255, 228, 230)
       */
      "100": "--color-rose-100" as const,
      /**
       * @defaultValue #fecdd3 | rgb(254, 205, 211)
       */
      "200": "--color-rose-200" as const,
      /**
       * @defaultValue #fda4af | rgb(253, 164, 175)
       */
      "300": "--color-rose-300" as const,
      /**
       * @defaultValue #fb7185 | rgb(251, 113, 133)
       */
      "400": "--color-rose-400" as const,
      /**
       * @defaultValue #f43f5e | rgb(244, 63, 94)
       */
      "500": "--color-rose-500" as const,
      /**
       * @defaultValue #e11d48 | rgb(225, 29, 72)
       */
      "600": "--color-rose-600" as const,
      /**
       * @defaultValue #be123c | rgb(190, 18, 60)
       */
      "700": "--color-rose-700" as const,
      /**
       * @defaultValue #9f1239 | rgb(159, 18, 57)
       */
      "800": "--color-rose-800" as const,
      /**
       * @defaultValue #881337 | rgb(136, 19, 55)
       */
      "900": "--color-rose-900" as const,
      /**
       * @defaultValue #4c0519 | rgb(76, 5, 25)
       */
      "950": "--color-rose-950" as const,
    },
    stone: {
      /**
       * @defaultValue #fafaf9 | rgb(250, 250, 249)
       */
      "50": "--color-stone-50" as const,
      /**
       * @defaultValue #f5f5f4 | rgb(245, 245, 244)
       */
      "100": "--color-stone-100" as const,
      /**
       * @defaultValue #e7e5e4 | rgb(231, 229, 228)
       */
      "200": "--color-stone-200" as const,
      /**
       * @defaultValue #d6d3d1 | rgb(214, 211, 209)
       */
      "300": "--color-stone-300" as const,
      /**
       * @defaultValue #a8a29e | rgb(168, 162, 158)
       */
      "400": "--color-stone-400" as const,
      /**
       * @defaultValue #78716c | rgb(120, 113, 108)
       */
      "500": "--color-stone-500" as const,
      /**
       * @defaultValue #57534e | rgb(87, 83, 78)
       */
      "600": "--color-stone-600" as const,
      /**
       * @defaultValue #44403c | rgb(68, 64, 60)
       */
      "700": "--color-stone-700" as const,
      /**
       * @defaultValue #292524 | rgb(41, 37, 36)
       */
      "800": "--color-stone-800" as const,
      /**
       * @defaultValue #1c1917 | rgb(28, 25, 23)
       */
      "900": "--color-stone-900" as const,
      /**
       * @defaultValue #0c0a09 | rgb(12, 10, 9)
       */
      "950": "--color-stone-950" as const,
    },
    neutral: {
      /**
       * @defaultValue #fafafa | rgb(250, 250, 250)
       */
      "50": "--color-neutral-50" as const,
      /**
       * @defaultValue #f5f5f5 | rgb(245, 245, 245)
       */
      "100": "--color-neutral-100" as const,
      /**
       * @defaultValue #e5e5e5 | rgb(229, 229, 229)
       */
      "200": "--color-neutral-200" as const,
      /**
       * @defaultValue #d4d4d4 | rgb(212, 212, 212)
       */
      "300": "--color-neutral-300" as const,
      /**
       * @defaultValue #a3a3a3 | rgb(163, 163, 163)
       */
      "400": "--color-neutral-400" as const,
      /**
       * @defaultValue #737373 | rgb(115, 115, 115)
       */
      "500": "--color-neutral-500" as const,
      /**
       * @defaultValue #525252 | rgb(82, 82, 82)
       */
      "600": "--color-neutral-600" as const,
      /**
       * @defaultValue #404040 | rgb(64, 64, 64)
       */
      "700": "--color-neutral-700" as const,
      /**
       * @defaultValue #262626 | rgb(38, 38, 38)
       */
      "800": "--color-neutral-800" as const,
      /**
       * @defaultValue #171717 | rgb(23, 23, 23)
       */
      "900": "--color-neutral-900" as const,
      /**
       * @defaultValue #0a0a0a | rgb(10, 10, 10)
       */
      "950": "--color-neutral-950" as const,
    },
    zinc: {
      /**
       * @defaultValue #fafafa | rgb(250, 250, 250)
       */
      "50": "--color-zinc-50" as const,
      /**
       * @defaultValue #f4f4f5 | rgb(244, 244, 245)
       */
      "100": "--color-zinc-100" as const,
      /**
       * @defaultValue #e4e4e7 | rgb(228, 228, 231)
       */
      "200": "--color-zinc-200" as const,
      /**
       * @defaultValue #d4d4d8 | rgb(212, 212, 216)
       */
      "300": "--color-zinc-300" as const,
      /**
       * @defaultValue #a1a1aa | rgb(161, 161, 170)
       */
      "400": "--color-zinc-400" as const,
      /**
       * @defaultValue #71717a | rgb(113, 113, 122)
       */
      "500": "--color-zinc-500" as const,
      /**
       * @defaultValue #52525b | rgb(82, 82, 91)
       */
      "600": "--color-zinc-600" as const,
      /**
       * @defaultValue #3f3f46 | rgb(63, 63, 70)
       */
      "700": "--color-zinc-700" as const,
      /**
       * @defaultValue #27272a | rgb(39, 39, 42)
       */
      "800": "--color-zinc-800" as const,
      /**
       * @defaultValue #18181b | rgb(24, 24, 27)
       */
      "900": "--color-zinc-900" as const,
      /**
       * @defaultValue #09090b2 | rgb(9, 9, 11)
       */
      "950": "--color-zinc-950" as const,
    },
    gray: {
      /**
       * @defaultValue #f9fafb | rgb(249, 250, 251)
       */
      "50": "--color-gray-50" as const,
      /**
       * @defaultValue #f3f4f6 | rgb(243, 244, 246)
       */
      "100": "--color-gray-100" as const,
      /**
       * @defaultValue #e5e7eb | rgb(229, 231, 235)
       */
      "200": "--color-gray-200" as const,
      /**
       * @defaultValue #d1d5db | rgb(209, 213, 219)
       */
      "300": "--color-gray-300" as const,
      /**
       * @defaultValue #9ca3af | rgb(156, 163, 175)
       */
      "400": "--color-gray-400" as const,
      /**
       * @defaultValue #6b7280 | rgb(107, 114, 128)
       */
      "500": "--color-gray-500" as const,
      /**
       * @defaultValue #4b5563 | rgb(75, 85, 99)
       */
      "600": "--color-gray-600" as const,
      /**
       * @defaultValue #374151 | rgb(55, 65, 81)
       */
      "700": "--color-gray-700" as const,
      /**
       * @defaultValue #1f2937 | rgb(31, 41, 55)
       */
      "800": "--color-gray-800" as const,
      /**
       * @defaultValue #111827 | rgb(17, 24, 39)
       */
      "900": "--color-gray-900" as const,
      /**
       * @defaultValue #0307122 | rgb(3, 7, 18)
       */
      "950": "--color-gray-950" as const,
    },
    slate: {
      /**
       * @defaultValue #f8fafc | rgb(248, 250, 252)
       */
      "50": "--color-stale-50" as const,
      /**
       * @defaultValue #f1f5f9 | rgb(241, 245, 249)
       */
      "100": "--color-stale-100" as const,
      /**
       * @defaultValue #e2e8f0 | rgb(226, 232, 240)
       */
      "200": "--color-stale-200" as const,
      /**
       * @defaultValue #cbd5e1 | rgb(203, 213, 225)
       */
      "300": "--color-stale-300" as const,
      /**
       * @defaultValue #94a3b8 | rgb(148, 163, 184)
       */
      "400": "--color-stale-400" as const,
      /**
       * @defaultValue #64748b | rgb(100, 116, 139)
       */
      "500": "--color-stale-500" as const,
      /**
       * @defaultValue #475569 | rgb(71, 85, 105)
       */
      "600": "--color-stale-600" as const,
      /**
       * @defaultValue #334155 | rgb(51, 65, 85)
       */
      "700": "--color-stale-700" as const,
      /**
       * @defaultValue #1e293b | rgb(30, 41, 59)
       */
      "800": "--color-stale-800" as const,
      /**
       * @defaultValue #0f172a | rgb(15, 23, 42)
       */
      "900": "--color-stale-900" as const,
      /**
       * @defaultValue #0206172 | rgb(2, 6, 23)
       */
      "950": "--color-stale-950" as const,
    },
  },
  (value, path) => value ?? slugify(...path),
);

export const colorThemeValue: ColorThemeValue = {
  red: {
    "50": fallbackVar(colorTheme.red[50], "254 242 242"),
    "100": fallbackVar(colorTheme.red[100], "254 226 226"),
    "200": fallbackVar(colorTheme.red[200], "254 202 202"),
    "300": fallbackVar(colorTheme.red[300], "252 165 165"),
    "400": fallbackVar(colorTheme.red[400], "248 113 113"),
    "500": fallbackVar(colorTheme.red[500], "239 68 68"),
    "600": fallbackVar(colorTheme.red[600], "220 38 38"),
    "700": fallbackVar(colorTheme.red[700], "185 28 28"),
    "800": fallbackVar(colorTheme.red[800], "153 27 27"),
    "900": fallbackVar(colorTheme.red[900], "127 29 29"),
    "950": fallbackVar(colorTheme.red[950], "69 10 10"),
  },
  orange: {
    "50": fallbackVar(colorTheme.orange[50], "255 247 237"),
    "100": fallbackVar(colorTheme.orange[100], "255 237 213"),
    "200": fallbackVar(colorTheme.orange[200], "254 215 170"),
    "300": fallbackVar(colorTheme.orange[300], "253 186 116"),
    "400": fallbackVar(colorTheme.orange[400], "251 146 60"),
    "500": fallbackVar(colorTheme.orange[500], "249 115 22"),
    "600": fallbackVar(colorTheme.orange[600], "234 88 12"),
    "700": fallbackVar(colorTheme.orange[700], "194 65 12"),
    "800": fallbackVar(colorTheme.orange[800], "154 52 18"),
    "900": fallbackVar(colorTheme.orange[900], "124 45 18"),
    "950": fallbackVar(colorTheme.orange[950], "67 20 7"),
  },
  amber: {
    "50": fallbackVar(colorTheme.amber[50], "255 251 235"),
    "100": fallbackVar(colorTheme.amber[100], "254 243 199"),
    "200": fallbackVar(colorTheme.amber[200], "253 230 138"),
    "300": fallbackVar(colorTheme.amber[300], "252 211 77"),
    "400": fallbackVar(colorTheme.amber[400], "251 191 36"),
    "500": fallbackVar(colorTheme.amber[500], "245 158 11"),
    "600": fallbackVar(colorTheme.amber[600], "217 119 6"),
    "700": fallbackVar(colorTheme.amber[700], "180 83 9"),
    "800": fallbackVar(colorTheme.amber[800], "146 64 14"),
    "900": fallbackVar(colorTheme.amber[900], "120 53 15"),
    "950": fallbackVar(colorTheme.amber[950], "69 26 3"),
  },
  yellow: {
    "50": fallbackVar(colorTheme.yellow[50], "254 252 232"),
    "100": fallbackVar(colorTheme.yellow[100], "254 249 195"),
    "200": fallbackVar(colorTheme.yellow[200], "254 240 138"),
    "300": fallbackVar(colorTheme.yellow[300], "253 224 71"),
    "400": fallbackVar(colorTheme.yellow[400], "250 204 21"),
    "500": fallbackVar(colorTheme.yellow[500], "234 179 8"),
    "600": fallbackVar(colorTheme.yellow[600], "202 138 4"),
    "700": fallbackVar(colorTheme.yellow[700], "161 98 7"),
    "800": fallbackVar(colorTheme.yellow[800], "133 77 14"),
    "900": fallbackVar(colorTheme.yellow[900], "66 32 6"),
    "950": fallbackVar(colorTheme.yellow[950], "113 63 18"),
  },
  lime: {
    "50": fallbackVar(colorTheme.lime[50], "247 254 231"),
    "100": fallbackVar(colorTheme.lime[100], "236 252 203"),
    "200": fallbackVar(colorTheme.lime[200], "217 249 157"),
    "300": fallbackVar(colorTheme.lime[300], "190 242 100"),
    "400": fallbackVar(colorTheme.lime[400], "163 230 53"),
    "500": fallbackVar(colorTheme.lime[500], "132 204 22"),
    "600": fallbackVar(colorTheme.lime[600], "101 163 13"),
    "700": fallbackVar(colorTheme.lime[700], "77 124 15"),
    "800": fallbackVar(colorTheme.lime[800], "63 98 18"),
    "900": fallbackVar(colorTheme.lime[900], "54 83 20"),
    "950": fallbackVar(colorTheme.lime[950], "26 46 5"),
  },
  green: {
    "50": fallbackVar(colorTheme.green[50], "240 253 244"),
    "100": fallbackVar(colorTheme.green[100], "220 252 231"),
    "200": fallbackVar(colorTheme.green[200], "187 247 208"),
    "300": fallbackVar(colorTheme.green[300], "134 239 172"),
    "400": fallbackVar(colorTheme.green[400], "74 222 128"),
    "500": fallbackVar(colorTheme.green[500], "34 197 94"),
    "600": fallbackVar(colorTheme.green[600], "22 163 74"),
    "700": fallbackVar(colorTheme.green[700], "21 128 61"),
    "800": fallbackVar(colorTheme.green[800], "22 101 52"),
    "900": fallbackVar(colorTheme.green[900], "20 83 45"),
    "950": fallbackVar(colorTheme.green[950], "5 46 22"),
  },
  emerald: {
    "50": fallbackVar(colorTheme.emerald[50], "236 253 245"),
    "100": fallbackVar(colorTheme.emerald[100], "209 250 229"),
    "200": fallbackVar(colorTheme.emerald[200], "167 243 208"),
    "300": fallbackVar(colorTheme.emerald[300], "110 231 183"),
    "400": fallbackVar(colorTheme.emerald[400], "52 211 153"),
    "500": fallbackVar(colorTheme.emerald[500], "16 185 129"),
    "600": fallbackVar(colorTheme.emerald[600], "5 150 105"),
    "700": fallbackVar(colorTheme.emerald[700], "4 120 87"),
    "800": fallbackVar(colorTheme.emerald[800], "6 95 70"),
    "900": fallbackVar(colorTheme.emerald[900], "6 78 59"),
    "950": fallbackVar(colorTheme.emerald[950], "2 44 34"),
  },
  teal: {
    "50": fallbackVar(colorTheme.teal[50], "240 253 250"),
    "100": fallbackVar(colorTheme.teal[100], "204 251 241"),
    "200": fallbackVar(colorTheme.teal[200], "153 246 228"),
    "300": fallbackVar(colorTheme.teal[300], "94 234 212"),
    "400": fallbackVar(colorTheme.teal[400], "45 212 191"),
    "500": fallbackVar(colorTheme.teal[500], "20 184 166"),
    "600": fallbackVar(colorTheme.teal[600], "13 148 136"),
    "700": fallbackVar(colorTheme.teal[700], "15 118 110"),
    "800": fallbackVar(colorTheme.teal[800], "17 94 89"),
    "900": fallbackVar(colorTheme.teal[900], "19 78 74"),
    "950": fallbackVar(colorTheme.teal[950], "4 47 46"),
  },
  cyan: {
    "50": fallbackVar(colorTheme.cyan[50], "236 254 255"),
    "100": fallbackVar(colorTheme.cyan[100], "207 250 254"),
    "200": fallbackVar(colorTheme.cyan[200], "165 243 252"),
    "300": fallbackVar(colorTheme.cyan[300], "103 232 249"),
    "400": fallbackVar(colorTheme.cyan[400], "34 211 238"),
    "500": fallbackVar(colorTheme.cyan[500], "6 182 212"),
    "600": fallbackVar(colorTheme.cyan[600], "8 145 178"),
    "700": fallbackVar(colorTheme.cyan[700], "14 116 144"),
    "800": fallbackVar(colorTheme.cyan[800], "21 94 117"),
    "900": fallbackVar(colorTheme.cyan[900], "22 78 99"),
    "950": fallbackVar(colorTheme.cyan[950], "8 51 68"),
  },
  sky: {
    "50": fallbackVar(colorTheme.sky[50], "240 249 255"),
    "100": fallbackVar(colorTheme.sky[100], "224 242 254"),
    "200": fallbackVar(colorTheme.sky[200], "186 230 253"),
    "300": fallbackVar(colorTheme.sky[300], "125 211 252"),
    "400": fallbackVar(colorTheme.sky[400], "56 189 248"),
    "500": fallbackVar(colorTheme.sky[500], "14 165 233"),
    "600": fallbackVar(colorTheme.sky[600], "2 132 199"),
    "700": fallbackVar(colorTheme.sky[700], "3 105 161"),
    "800": fallbackVar(colorTheme.sky[800], "7 89 133"),
    "900": fallbackVar(colorTheme.sky[900], "12 74 110"),
    "950": fallbackVar(colorTheme.sky[950], "8 47 73"),
  },
  blue: {
    "50": fallbackVar(colorTheme.blue[50], "239 246 255"),
    "100": fallbackVar(colorTheme.blue[100], "219 234 254"),
    "200": fallbackVar(colorTheme.blue[200], "191 219 254"),
    "300": fallbackVar(colorTheme.blue[300], "147 197 253"),
    "400": fallbackVar(colorTheme.blue[400], "96 165 250"),
    "500": fallbackVar(colorTheme.blue[500], "59 130 246"),
    "600": fallbackVar(colorTheme.blue[600], "37 99 235"),
    "700": fallbackVar(colorTheme.blue[700], "29 78 216"),
    "800": fallbackVar(colorTheme.blue[800], "30 64 175"),
    "900": fallbackVar(colorTheme.blue[900], "30 58 138"),
    "950": fallbackVar(colorTheme.blue[950], "23 37 84"),
  },
  indigo: {
    "50": fallbackVar(colorTheme.indigo[50], "238 242 255"),
    "100": fallbackVar(colorTheme.indigo[100], "224 231 255"),
    "200": fallbackVar(colorTheme.indigo[200], "199 210 254"),
    "300": fallbackVar(colorTheme.indigo[300], "165 180 252"),
    "400": fallbackVar(colorTheme.indigo[400], "129 140 248"),
    "500": fallbackVar(colorTheme.indigo[500], "99 102 241"),
    "600": fallbackVar(colorTheme.indigo[600], "79 70 229"),
    "700": fallbackVar(colorTheme.indigo[700], "67 56 202"),
    "800": fallbackVar(colorTheme.indigo[800], "55 48 163"),
    "900": fallbackVar(colorTheme.indigo[900], "49 46 129"),
    "950": fallbackVar(colorTheme.indigo[950], "30 27 75"),
  },
  violet: {
    "50": fallbackVar(colorTheme.violet[50], "245 243 255"),
    "100": fallbackVar(colorTheme.violet[100], "237 233 254"),
    "200": fallbackVar(colorTheme.violet[200], "221 214 254"),
    "300": fallbackVar(colorTheme.violet[300], "196 181 253"),
    "400": fallbackVar(colorTheme.violet[400], "167 139 250"),
    "500": fallbackVar(colorTheme.violet[500], "139 92 246"),
    "600": fallbackVar(colorTheme.violet[600], "124 58 237"),
    "700": fallbackVar(colorTheme.violet[700], "109 40 217"),
    "800": fallbackVar(colorTheme.violet[800], "91 33 182"),
    "900": fallbackVar(colorTheme.violet[900], "76 29 149"),
    "950": fallbackVar(colorTheme.violet[950], "46 16 101"),
  },
  purple: {
    "50": fallbackVar(colorTheme.purple[50], "250 245 255"),
    "100": fallbackVar(colorTheme.purple[100], "243 232 255"),
    "200": fallbackVar(colorTheme.purple[200], "233 213 255"),
    "300": fallbackVar(colorTheme.purple[300], "216 180 254"),
    "400": fallbackVar(colorTheme.purple[400], "192 132 252"),
    "500": fallbackVar(colorTheme.purple[500], "168 85 247"),
    "600": fallbackVar(colorTheme.purple[600], "147 51 234"),
    "700": fallbackVar(colorTheme.purple[700], "126 34 206"),
    "800": fallbackVar(colorTheme.purple[800], "107 33 168"),
    "900": fallbackVar(colorTheme.purple[900], "88 28 135"),
    "950": fallbackVar(colorTheme.purple[950], "59 7 100"),
  },
  fuchsia: {
    "50": fallbackVar(colorTheme.fuchsia[50], "253 244 255"),
    "100": fallbackVar(colorTheme.fuchsia[100], "250 232 255"),
    "200": fallbackVar(colorTheme.fuchsia[200], "245 208 254"),
    "300": fallbackVar(colorTheme.fuchsia[300], "240 171 252"),
    "400": fallbackVar(colorTheme.fuchsia[400], "232 121 249"),
    "500": fallbackVar(colorTheme.fuchsia[500], "217 70 239"),
    "600": fallbackVar(colorTheme.fuchsia[600], "192 38 211"),
    "700": fallbackVar(colorTheme.fuchsia[700], "162 28 175"),
    "800": fallbackVar(colorTheme.fuchsia[800], "134 25 143"),
    "900": fallbackVar(colorTheme.fuchsia[900], "112 26 117"),
    "950": fallbackVar(colorTheme.fuchsia[950], "74 4 78"),
  },
  pink: {
    "50": fallbackVar(colorTheme.pink[50], "253 242 248"),
    "100": fallbackVar(colorTheme.pink[100], "252 231 243"),
    "200": fallbackVar(colorTheme.pink[200], "251 207 232"),
    "300": fallbackVar(colorTheme.pink[300], "249 168 212"),
    "400": fallbackVar(colorTheme.pink[400], "244 114 182"),
    "500": fallbackVar(colorTheme.pink[500], "236 72 153"),
    "600": fallbackVar(colorTheme.pink[600], "219 39 119"),
    "700": fallbackVar(colorTheme.pink[700], "190 24 93"),
    "800": fallbackVar(colorTheme.pink[800], "157 23 77"),
    "900": fallbackVar(colorTheme.pink[900], "131 24 67"),
    "950": fallbackVar(colorTheme.pink[950], "80 7 36"),
  },
  rose: {
    "50": fallbackVar(colorTheme.rose[50], "255 241 242"),
    "100": fallbackVar(colorTheme.rose[100], "255 228 230"),
    "200": fallbackVar(colorTheme.rose[200], "254 205 211"),
    "300": fallbackVar(colorTheme.rose[300], "253 164 175"),
    "400": fallbackVar(colorTheme.rose[400], "251 113 133"),
    "500": fallbackVar(colorTheme.rose[500], "244 63 94"),
    "600": fallbackVar(colorTheme.rose[600], "225 29 72"),
    "700": fallbackVar(colorTheme.rose[700], "190 18 60"),
    "800": fallbackVar(colorTheme.rose[800], "159 18 57"),
    "900": fallbackVar(colorTheme.rose[900], "136 19 55"),
    "950": fallbackVar(colorTheme.rose[950], "76 5 25"),
  },
  stone: {
    "50": fallbackVar(colorTheme.stone[50], "250 250 249"),
    "100": fallbackVar(colorTheme.stone[100], "245 245 244"),
    "200": fallbackVar(colorTheme.stone[200], "231 229 228"),
    "300": fallbackVar(colorTheme.stone[300], "214 211 209"),
    "400": fallbackVar(colorTheme.stone[400], "168 162 158"),
    "500": fallbackVar(colorTheme.stone[500], "120 113 108"),
    "600": fallbackVar(colorTheme.stone[600], "87 83 78"),
    "700": fallbackVar(colorTheme.stone[700], "68 64 60"),
    "800": fallbackVar(colorTheme.stone[800], "41 37 36"),
    "900": fallbackVar(colorTheme.stone[900], "28 25 23"),
    "950": fallbackVar(colorTheme.stone[950], "12 10 9"),
  },
  neutral: {
    "50": fallbackVar(colorTheme.neutral[50], "250 250 250"),
    "100": fallbackVar(colorTheme.neutral[100], "245 245 245"),
    "200": fallbackVar(colorTheme.neutral[200], "229 229 229"),
    "300": fallbackVar(colorTheme.neutral[300], "212 212 212"),
    "400": fallbackVar(colorTheme.neutral[400], "163 163 163"),
    "500": fallbackVar(colorTheme.neutral[500], "115 115 115"),
    "600": fallbackVar(colorTheme.neutral[600], "82 82 82"),
    "700": fallbackVar(colorTheme.neutral[700], "64 64 64"),
    "800": fallbackVar(colorTheme.neutral[800], "38 38 38"),
    "900": fallbackVar(colorTheme.neutral[900], "23 23 23"),
    "950": fallbackVar(colorTheme.neutral[950], "10 10 10"),
  },
  zinc: {
    "50": fallbackVar(colorTheme.zinc[50], "250 250 250"),
    "100": fallbackVar(colorTheme.zinc[100], "244 244 245"),
    "200": fallbackVar(colorTheme.zinc[200], "228 228 231"),
    "300": fallbackVar(colorTheme.zinc[300], "212 212 216"),
    "400": fallbackVar(colorTheme.zinc[400], "161 161 170"),
    "500": fallbackVar(colorTheme.zinc[500], "113 113 122"),
    "600": fallbackVar(colorTheme.zinc[600], "82 82 91"),
    "700": fallbackVar(colorTheme.zinc[700], "63 63 70"),
    "800": fallbackVar(colorTheme.zinc[800], "39 39 42"),
    "900": fallbackVar(colorTheme.zinc[900], "24 24 27"),
    "950": fallbackVar(colorTheme.zinc[950], "9 9 11"),
  },
  gray: {
    "50": fallbackVar(colorTheme.gray[50], "249 250 251"),
    "100": fallbackVar(colorTheme.gray[100], "243 244 246"),
    "200": fallbackVar(colorTheme.gray[200], "229 231 235"),
    "300": fallbackVar(colorTheme.gray[300], "209 213 219"),
    "400": fallbackVar(colorTheme.gray[400], "156 163 175"),
    "500": fallbackVar(colorTheme.gray[500], "107 114 128"),
    "600": fallbackVar(colorTheme.gray[600], "75 85 99"),
    "700": fallbackVar(colorTheme.gray[700], "55 65 81"),
    "800": fallbackVar(colorTheme.gray[800], "31 41 55"),
    "900": fallbackVar(colorTheme.gray[900], "17 24 39"),
    "950": fallbackVar(colorTheme.gray[950], "3 7 18"),
  },
  slate: {
    "50": fallbackVar(colorTheme.slate[50], "248 250 252"),
    "100": fallbackVar(colorTheme.slate[100], "241 245 249"),
    "200": fallbackVar(colorTheme.slate[200], "226 232 240"),
    "300": fallbackVar(colorTheme.slate[300], "203 213 225"),
    "400": fallbackVar(colorTheme.slate[400], "148 163 184"),
    "500": fallbackVar(colorTheme.slate[500], "100 116 139"),
    "600": fallbackVar(colorTheme.slate[600], "71 85 105"),
    "700": fallbackVar(colorTheme.slate[700], "51 65 85"),
    "800": fallbackVar(colorTheme.slate[800], "30 41 59"),
    "900": fallbackVar(colorTheme.slate[900], "15 23 42"),
    "950": fallbackVar(colorTheme.slate[950], "2 6 23"),
  },
};
export type ColorTheme = typeof colorTheme;
export type ColorThemeValue = Parameters<typeof createGlobalTheme<ColorTheme>>[2];

/*================== Value getter =================*/
type Palette = keyof ColorTheme;
type PaletteShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950";
export function getSolidColor(palette: Palette, shade: PaletteShade, opacity = 1): string {
  let accent = opacity;
  if (opacity > 1) accent = 1;
  if (opacity < 0) accent = 0;
  return `rgba(${colorThemeValue[palette][shade]} / ${accent})`;
}
