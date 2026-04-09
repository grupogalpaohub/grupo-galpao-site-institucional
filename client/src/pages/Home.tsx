/**
 * Grupo Galpão - Site Institucional
 * Design System:
 * - Fonts: Ubuntu (headings, buttons), Manrope (body, descriptions)
 * - Colors: #001a29 (dark bg), #003f61 (primary blue), #0d6ca0 (medium blue), #1a95d8 (light blue), #45bdfe (accent)
 *           #e6c364 (gold accent), #fdfdfd (light text), #e2e3e4 (muted text), #fffaf3 (warm white)
 * - Layout: Mobile-first, single column, max-width 390px centered
 */

import { useState } from "react";

// OffRio Logo Component (SVG parts assembled)
function OffRioLogo() {
  return (
    <div className="relative" style={{ width: "114px", height: "28px" }}>
      <img src="/I1013-2953;574-2812.svg" alt="" className="absolute" style={{ width: "24px", height: "27px", left: "0px", top: "0.85px" }} />
      <img src="/I1013-2953;574-2816.svg" alt="" className="absolute" style={{ width: "14px", height: "26px", left: "27px", top: "1.24px" }} />
      <img src="/I1013-2953;574-2817.svg" alt="" className="absolute" style={{ width: "14px", height: "26px", left: "43.53px", top: "1.24px" }} />
      <img src="/I1013-2953;574-2813.svg" alt="" className="absolute" style={{ width: "22px", height: "26px", left: "60.63px", top: "1.07px" }} />
      <img src="/I1013-2953;574-2815.svg" alt="" className="absolute" style={{ width: "6px", height: "18px", left: "85.37px", top: "8.63px" }} />
      <img src="/I1013-2953;574-2814.svg" alt="" className="absolute" style={{ width: "20px", height: "19px", left: "94.19px", top: "8.21px" }} />
      <img src="/I1013-2953;574-2818.svg" alt="" className="absolute" style={{ width: "7px", height: "6px", left: "84.79px", top: "0px" }} />
    </div>
  );
}

// Performance+ Logo Component
function PerformancePlusLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width: "306px", height: "56px" }}>
      {/* Icon part (P+ symbol) */}
      <img src="/I1014-2982;485-328.svg" alt="" className="absolute" style={{ width: "58px", height: "56px", left: "0px", top: "0px" }} />
      <img src="/I1014-2982;485-330.svg" alt="" className="absolute" style={{ width: "17px", height: "13px", left: "49px", top: "10px" }} />
      {/* Text letters */}
      <img src="/I1014-2982;485-314.svg" alt="" className="absolute" style={{ width: "18px", height: "24px", left: "80px", top: "22px" }} />
      <img src="/I1014-2982;485-315.svg" alt="" className="absolute" style={{ width: "17px", height: "19px", left: "101px", top: "28px" }} />
      <img src="/I1014-2982;485-316.svg" alt="" className="absolute" style={{ width: "12px", height: "19px", left: "121px", top: "28px" }} />
      <img src="/I1014-2982;485-317.svg" alt="" className="absolute" style={{ width: "12px", height: "27px", left: "136px", top: "20px" }} />
      <img src="/I1014-2982;485-318.svg" alt="" className="absolute" style={{ width: "18px", height: "19px", left: "149px", top: "28px" }} />
      <img src="/I1014-2982;485-319.svg" alt="" className="absolute" style={{ width: "12px", height: "19px", left: "171px", top: "28px" }} />
      <img src="/I1014-2982;485-320.svg" alt="" className="absolute" style={{ width: "25px", height: "19px", left: "186px", top: "28px" }} />
      <img src="/I1014-2982;485-321.svg" alt="" className="absolute" style={{ width: "16px", height: "19px", left: "214px", top: "28px" }} />
      <img src="/I1014-2982;485-322.svg" alt="" className="absolute" style={{ width: "16px", height: "19px", left: "234px", top: "28px" }} />
      <img src="/I1014-2982;485-323.svg" alt="" className="absolute" style={{ width: "15px", height: "19px", left: "254px", top: "28px" }} />
      <img src="/I1014-2982;485-324.svg" alt="" className="absolute" style={{ width: "17px", height: "19px", left: "270px", top: "28px" }} />
      <img src="/I1014-2982;485-325.svg" alt="" className="absolute" style={{ width: "16px", height: "17px", left: "290px", top: "28px" }} />
    </div>
  );
}

// Performance+ Ecomm Logo
function PerformanceEcommLogo() {
  return (
    <div className="relative overflow-hidden" style={{ width: "239px", height: "59px" }}>
      {/* Icon */}
      <img src="/I1014-4046;485-541.svg" alt="" className="absolute" style={{ width: "62px", height: "59px", left: "0px", top: "0px" }} />
      <img src="/I1014-4046;485-543.svg" alt="" className="absolute" style={{ width: "18px", height: "13px", left: "52px", top: "10px" }} />
      {/* Text letters - Performance */}
      <img src="/I1014-4046;485-522.svg" alt="" className="absolute" style={{ width: "13px", height: "17px", left: "78px", top: "2px" }} />
      <img src="/I1014-4046;485-523.svg" alt="" className="absolute" style={{ width: "12px", height: "13px", left: "93px", top: "6px" }} />
      <img src="/I1014-4046;485-524.svg" alt="" className="absolute" style={{ width: "8px", height: "13px", left: "107px", top: "6px" }} />
      <img src="/I1014-4046;485-525.svg" alt="" className="absolute" style={{ width: "9px", height: "19px", left: "117px", top: "0px" }} />
      <img src="/I1014-4046;485-526.svg" alt="" className="absolute" style={{ width: "13px", height: "13px", left: "127px", top: "6px" }} />
      <img src="/I1014-4046;485-527.svg" alt="" className="absolute" style={{ width: "8px", height: "13px", left: "143px", top: "6px" }} />
      <img src="/I1014-4046;485-528.svg" alt="" className="absolute" style={{ width: "18px", height: "13px", left: "153px", top: "6px" }} />
      <img src="/I1014-4046;485-529.svg" alt="" className="absolute" style={{ width: "11px", height: "13px", left: "173px", top: "6px" }} />
      <img src="/I1014-4046;485-530.svg" alt="" className="absolute" style={{ width: "11px", height: "13px", left: "187px", top: "6px" }} />
      <img src="/I1014-4046;485-531.svg" alt="" className="absolute" style={{ width: "10px", height: "13px", left: "201px", top: "6px" }} />
      <img src="/I1014-4046;485-532.svg" alt="" className="absolute" style={{ width: "12px", height: "13px", left: "213px", top: "6px" }} />
      <img src="/I1014-4046;485-533.svg" alt="" className="absolute" style={{ width: "12px", height: "12px", left: "227px", top: "6px" }} />
      {/* Text letters - Ecomm */}
      <img src="/I1014-4046;485-534.svg" alt="" className="absolute" style={{ width: "12px", height: "17px", left: "78px", top: "24px" }} />
      <img src="/I1014-4046;485-535.svg" alt="" className="absolute" style={{ width: "10px", height: "13px", left: "92px", top: "28px" }} />
      <img src="/I1014-4046;485-536.svg" alt="" className="absolute" style={{ width: "13px", height: "13px", left: "104px", top: "28px" }} />
      <img src="/I1014-4046;485-537.svg" alt="" className="absolute" style={{ width: "18px", height: "13px", left: "119px", top: "28px" }} />
      <img src="/I1014-4046;485-538.svg" alt="" className="absolute" style={{ width: "18px", height: "13px", left: "140px", top: "28px" }} />
    </div>
  );
}

// Performance+ Leads Logo
function PerformanceLeadsLogo() {
  return (
    <div className="relative overflow-hidden" style={{ width: "237px", height: "60px" }}>
      {/* Icon */}
      <img src="/I1014-4130;485-514.svg" alt="" className="absolute" style={{ width: "62px", height: "60px", left: "0px", top: "0px" }} />
      <img src="/I1014-4130;485-516.svg" alt="" className="absolute" style={{ width: "18px", height: "14px", left: "52px", top: "11px" }} />
      {/* Text letters - Performance */}
      <img src="/I1014-4130;485-495.svg" alt="" className="absolute" style={{ width: "13px", height: "17px", left: "77px", top: "2px" }} />
      <img src="/I1014-4130;485-496.svg" alt="" className="absolute" style={{ width: "12px", height: "14px", left: "92px", top: "6px" }} />
      <img src="/I1014-4130;485-497.svg" alt="" className="absolute" style={{ width: "8px", height: "13px", left: "107px", top: "6px" }} />
      <img src="/I1014-4130;485-498.svg" alt="" className="absolute" style={{ width: "9px", height: "19px", left: "117px", top: "0px" }} />
      <img src="/I1014-4130;485-499.svg" alt="" className="absolute" style={{ width: "13px", height: "14px", left: "127px", top: "6px" }} />
      <img src="/I1014-4130;485-500.svg" alt="" className="absolute" style={{ width: "8px", height: "13px", left: "143px", top: "6px" }} />
      <img src="/I1014-4130;485-501.svg" alt="" className="absolute" style={{ width: "18px", height: "13px", left: "153px", top: "6px" }} />
      <img src="/I1014-4130;485-502.svg" alt="" className="absolute" style={{ width: "11px", height: "14px", left: "173px", top: "6px" }} />
      <img src="/I1014-4130;485-503.svg" alt="" className="absolute" style={{ width: "11px", height: "13px", left: "187px", top: "6px" }} />
      <img src="/I1014-4130;485-504.svg" alt="" className="absolute" style={{ width: "10px", height: "14px", left: "201px", top: "6px" }} />
      <img src="/I1014-4130;485-505.svg" alt="" className="absolute" style={{ width: "12px", height: "14px", left: "213px", top: "6px" }} />
      <img src="/I1014-4130;485-506.svg" alt="" className="absolute" style={{ width: "11px", height: "12px", left: "227px", top: "6px" }} />
      {/* Text letters - Leads */}
      <img src="/I1014-4130;485-507.svg" alt="" className="absolute" style={{ width: "11px", height: "17px", left: "77px", top: "24px" }} />
      <img src="/I1014-4130;485-508.svg" alt="" className="absolute" style={{ width: "12px", height: "14px", left: "91px", top: "28px" }} />
      <img src="/I1014-4130;485-509.svg" alt="" className="absolute" style={{ width: "11px", height: "14px", left: "105px", top: "28px" }} />
      <img src="/I1014-4130;485-510.svg" alt="" className="absolute" style={{ width: "12px", height: "19px", left: "118px", top: "22px" }} />
      <img src="/I1014-4130;485-511.svg" alt="" className="absolute" style={{ width: "10px", height: "14px", left: "132px", top: "28px" }} />
    </div>
  );
}

// GG Logo Component
function GGLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: "93px", height: "34px" }}>
      {/* Main G icon */}
      <img src="/I1029-6074;7-57.svg" alt="G" className="absolute" style={{ width: "30px", height: "34px", left: "0px", top: "0px" }} />
      {/* "rupo" letters */}
      <img src="/I1029-6074;7-59.svg" alt="r" className="absolute" style={{ width: "9px", height: "11px", left: "36px", top: "4px" }} />
      <img src="/I1029-6074;7-61.svg" alt="u" className="absolute" style={{ width: "9px", height: "11px", left: "47px", top: "4px" }} />
      <img src="/I1029-6074;7-63.svg" alt="p" className="absolute" style={{ width: "9px", height: "11px", left: "56px", top: "4px" }} />
      <img src="/I1029-6074;7-65.svg" alt="o" className="absolute" style={{ width: "8px", height: "11px", left: "66px", top: "4px" }} />
      <img src="/I1029-6074;7-67.svg" alt="G" className="absolute" style={{ width: "10px", height: "11px", left: "75px", top: "4px" }} />
      {/* "alpão" letters */}
      <img src="/I1029-6074;7-69.svg" alt="a" className="absolute" style={{ width: "9px", height: "11px", left: "36px", top: "19px" }} />
      <img src="/I1029-6074;7-71.svg" alt="l" className="absolute" style={{ width: "5px", height: "10px", left: "46px", top: "20px" }} />
      <img src="/I1029-6074;7-73.svg" alt="p" className="absolute" style={{ width: "9px", height: "10px", left: "57px", top: "20px" }} />
      <img src="/I1029-6074;7-75.svg" alt="ã" className="absolute" style={{ width: "9px", height: "10px", left: "65px", top: "19px" }} />
      <img src="/I1029-6074;7-77.svg" alt="o" className="absolute" style={{ width: "9px", height: "14px", left: "72px", top: "16px" }} />
      <img src="/I1029-6074;7-79.svg" alt="." className="absolute" style={{ width: "4px", height: "11px", left: "83px", top: "19px" }} />
    </div>
  );
}

// GG Logo Footer Component
function GGLogoFooter() {
  return (
    <div className="relative" style={{ width: "111px", height: "51px" }}>
      <img src="/I1023-5754;7-84.svg" alt="" className="absolute" style={{ left: "0px", top: "0px", height: "51px", width: "auto" }} />
      <img src="/I1023-5754;7-86.svg" alt="" className="absolute" style={{ left: "38px", top: "6px", height: "16px", width: "auto" }} />
      <img src="/I1023-5754;7-88.svg" alt="" className="absolute" style={{ left: "47px", top: "6px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-90.svg" alt="" className="absolute" style={{ left: "56px", top: "6px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-92.svg" alt="" className="absolute" style={{ left: "65px", top: "6px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-94.svg" alt="" className="absolute" style={{ left: "74px", top: "6px", height: "16px", width: "auto" }} />
      <img src="/I1023-5754;7-96.svg" alt="" className="absolute" style={{ left: "38px", top: "29px", height: "16px", width: "auto" }} />
      <img src="/I1023-5754;7-98.svg" alt="" className="absolute" style={{ left: "46px", top: "29px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-100.svg" alt="" className="absolute" style={{ left: "57px", top: "29px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-102.svg" alt="" className="absolute" style={{ left: "65px", top: "29px", height: "15px", width: "auto" }} />
      <img src="/I1023-5754;7-104.svg" alt="" className="absolute" style={{ left: "72px", top: "25px", height: "20px", width: "auto" }} />
    </div>
  );
}

// Hamburger Menu Icon
function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[5px] w-9 cursor-pointer">
      <img src="/I1021-5500;531-1634.svg" alt="" className="w-full" />
      <img src="/I1021-5500;531-1636.svg" alt="" className="w-full" />
      <img src="/I1021-5500;531-1638.svg" alt="" className="w-full" />
    </div>
  );
}

// CTA Button Gold
function CTAButtonGold({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`w-[264px] px-2.5 py-[5px] flex flex-col justify-center items-center ${className}`}>
      <div className="self-stretch px-[15px] py-1 bg-[#e2e3e4]/20 rounded-[40px] border border-[#e6c364] backdrop-blur-sm flex justify-center items-center">
        <span className="w-[237px] text-center text-[#fdfdfd] text-base font-normal font-['Manrope']">{children}</span>
      </div>
    </button>
  );
}

// CTA Button Blue Outline
function CTAButtonBlue({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`w-[264px] px-2.5 py-[5px] flex flex-col justify-center items-center ${className}`}>
      <div className="self-stretch px-[15px] py-1 bg-[#003f61]/20 rounded-[48px] border border-[#fffdfa] backdrop-blur-sm flex justify-center items-center">
        <span className="w-[237px] text-center text-[#fffaf3] text-base font-normal font-['Ubuntu']">{children}</span>
      </div>
    </button>
  );
}

// CTA Button Gradient
function CTAButtonGradient({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`w-[314px] px-2.5 py-[5px] flex flex-col justify-center items-center ${className}`}>
      <div className="self-stretch px-[15px] py-1 bg-gradient-to-r from-[#003f61] to-[#1a95d8] rounded-[40px] flex justify-center items-center">
        <span className="text-center text-[#fffaf3] text-base font-normal font-['Ubuntu']">{children}</span>
      </div>
    </button>
  );
}

export default function Home() {
  const [_menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#001a29] flex flex-col items-center">
      <div className="w-full max-w-[390px] mx-auto overflow-hidden">

        {/* ===== HEADER / HERO SECTION ===== */}
        <section className="w-full bg-[#001a29] relative">
          {/* Navbar */}
          <div className="w-full px-[10px] pt-[14px]">
            <div className="w-[370px] h-[55px] bg-neutral-50/25 rounded-[5px] border border-[#fdfdfd]/60 flex items-center justify-between px-3">
              <GGLogo />
              <div onClick={() => setMenuOpen(prev => !prev)}>
                <HamburgerIcon />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-[19px] mt-[18px] rounded-[11px] overflow-hidden" style={{ width: "352px", height: "291px" }}>
            <img
              src="/1021-5537.webp"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover rounded-[11px]"
            />
            <div className="absolute inset-0 bg-[#003f61]/80 rounded-[11px]" />
          </div>

          {/* Hero Text */}
          <div className="px-7 mt-4">
            <h1 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
              Clareza para decidir. Segurança para crescer.
            </h1>
            <p className="text-neutral-50 text-[19px] font-medium font-['Manrope'] mt-3 leading-snug">
              A maioria das empresas tenta anunciar sem estrutura. Nós organizamos dados, criativos, canais e ofertas para crescer de forma sustentável.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-3 mt-5 pb-8">
            <CTAButtonGold>Quero agendar uma reunião</CTAButtonGold>
            <CTAButtonBlue>Quero conhecer o Método</CTAButtonBlue>
          </div>
        </section>

        {/* ===== QUEM JÁ CRESCEU ===== */}
        <section className="w-full bg-[#001a29] pt-4 pb-0">
          <div className="px-7 pb-4">
            <h2 className="text-[#fdfdfd] text-[28px] font-bold font-['Ubuntu']">
              Quem já cresceu com o Grupo Galpão
            </h2>
          </div>

          {/* Client Logos */}
          <div className="flex items-center justify-between px-5 py-2 gap-2">
            <OffRioLogo />
            <img src="/I1013-2955;574-2849.webp" alt="Vitacon" className="h-[30px] w-auto object-contain" />
            <img src="/I1013-2954;574-2845.webp" alt="Recrie" className="h-[67px] w-auto object-contain" />
          </div>

          {/* Stats Banner */}
          <div className="w-full mt-4 bg-gradient-to-l from-[#001a29] via-[#003f61] to-[#001a29] py-4">
            <div className="px-7 flex items-center gap-4">
              <span className="text-[#fdfdfd] text-[40px] font-bold font-['Ubuntu'] leading-none">+R$2mi</span>
              <span className="text-[#fdfdfd] text-base font-normal font-['Manrope']">
                Investidos em anúncios no Meta Ads
              </span>
            </div>
          </div>
        </section>

        {/* ===== METODOLOGIA ===== */}
        <section className="w-full bg-[#001a29] py-10 px-7">
          <h2 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Metodologia construída na prática. Decisões baseadas em dados.
          </h2>
          <p className="text-[#e2e3e4] text-[19px] font-medium font-['Manrope'] mt-4 leading-snug">
            Não são apenas anúncios. Entregamos um método que entende quem é o seu cliente, como ele compra e como fazê-lo comprar novamente.
          </p>
        </section>

        {/* ===== PERFORMANCE+ INTRO ===== */}
        <section className="relative w-full bg-[#001a29] py-10 overflow-hidden">
          {/* Background decorative circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute" style={{ left: "-252px", top: "376px", width: "738px", height: "302px", background: "#45bdfe" }} />
            <div className="absolute rounded-full" style={{ left: "-110px", top: "475px", width: "596px", height: "450px", background: "#45bdfe" }} />
            <div className="absolute rounded-full" style={{ left: "-110px", top: "0px", width: "596px", height: "450px", background: "#45bdfe" }} />
            <img src="/I1013-1551;7-23.svg" alt="" className="absolute opacity-20" style={{ left: "-252px", top: "129px", width: "506px", height: "578px" }} />
          </div>

          <div className="relative z-10 px-[42px]">
            <PerformancePlusLogo />
            <p className="text-[#fdfdfd] text-[19px] font-medium font-['Manrope'] leading-snug mt-4">
              O Performance+ estrutura cada etapa do seu negócio. São cinco pilares que conecta dados, criativos, canais, estratégias e metas em uma única direção: o seu sucesso.
            </p>
          </div>
        </section>

        {/* ===== FLUXOGRAMA PERFORMANCE+ ===== */}
        <section className="w-full bg-[#001a29] py-10 px-5">
          <div className="relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#fdfdfd]/30 rounded transform -translate-x-1/2" />

            <div className="flex flex-col gap-8">
              {[
                { num: "1", title: "Infraestrutura\nde Dados", desc: "Nossa base, sem mensuração de dados real, não há espaço para otimização.", side: "left" },
                { num: "2", title: "Estruturação\nde Criativos", desc: "Tenha certeza que seu anúncio está conversando com seu público.", side: "right" },
                { num: "3", title: "Otimização de\nCanais e CRO", desc: "Análise técnica de funil, e otimizações nas taxas de conversão.", side: "left" },
                { num: "4", title: "Retenção e\nRecorrência", desc: "Mais lucro a partir da base de clientes existente.", side: "right" },
                { num: "5", title: "Metas S.M.A.R.T.", desc: "Transformar dados em Metas ambiciosas e realistas.", side: "left" },
              ].map((pillar, i) => (
                <div key={i} className={`flex items-start gap-4 ${pillar.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="relative z-10 flex-shrink-0 w-8 flex items-center justify-center">
                    <span className="text-[#e6c364] text-2xl font-bold font-['Ubuntu']">{pillar.num}</span>
                  </div>
                  <div className={`flex-1 ${pillar.side === "right" ? "text-left pl-2" : "text-right pr-2"}`}>
                    <h3 className="text-[#fdfdfd] text-[19px] font-bold font-['Ubuntu'] whitespace-pre-line leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-black text-sm font-normal font-['Manrope'] mt-1 bg-white/90 rounded p-1.5">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center px-2">
            <p className="text-[#fdfdfd] text-[19px] font-normal font-['Manrope'] leading-snug">
              Entregamos estrutura e mensuração real da sua empresa, evidenciando os impactos do marketing na sua margem de lucro, onde investir e quais os próximos passos a seguir.
            </p>
          </div>
        </section>

        {/* ===== DADOS SEM ESTRATÉGIA ===== */}
        <section className="w-full bg-white py-10 px-7">
          <h2 className="text-[#003f61] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Dados sem estratégia são só números.<br />
            Estratégia sem dados é palpite.
          </h2>
          <p className="text-[#1f8cc6] text-[19px] font-medium font-['Manrope'] mt-4 leading-snug">
            É nesse encontro que crescimento deixa de ser acidente e vira processo.
          </p>
          <h3 className="text-[#0d6ca0] text-[28px] font-bold font-['Ubuntu'] mt-4">Alguns Resultados</h3>

          <div className="flex justify-center mt-6">
            <CTAButtonGradient>Quero saber mais detalhes</CTAButtonGradient>
          </div>
        </section>

        {/* ===== CASES 01 ===== */}
        <section className="w-full bg-[#001a29]">
          <div className="relative w-full overflow-hidden" style={{ height: "378px" }}>
            {/* Background image */}
            <img
              src="/1014-4040.webp"
              alt="E-Commerce de Moda"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Top colored tabs */}
            <div className="absolute top-0 left-0 flex">
              <div className="w-[60px] h-[38px] bg-[#003f61] flex items-center justify-center">
                <span className="text-white text-[28px] font-bold font-['Ubuntu']">01</span>
              </div>
              <div className="w-[60px] h-[38px] bg-[#0d6ca0] flex items-center justify-center">
                <span className="text-white text-[28px] font-bold font-['Ubuntu']">02</span>
              </div>
              <div className="w-[60px] h-[38px] bg-[#1f8cc6] flex items-center justify-center">
                <span className="text-white text-[28px] font-bold font-['Ubuntu']">03</span>
              </div>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-0 bg-[#003f61]/70 top-[38px]" />
            <div className="absolute px-7 flex flex-col justify-start" style={{ top: "49px", left: 0, right: 0 }}>
              <h3 className="text-[#e6c364] text-2xl font-bold font-['Ubuntu']">E-Commerce de Moda</h3>
              <p className="text-[#ffeebf] text-[19px] font-normal font-['Ubuntu'] mt-2 leading-snug">
                Do E-commerce de enfeite à uma máquina de vendas diárias.
              </p>
              <p className="text-[#fdfdfd] text-base font-medium font-['Manrope'] mt-3 leading-snug">
                Aplicamos estratégias de conteúdos e anúncios, validamos nossos criativos e canais de conversão, o resultado: +R$3.000 de vendas diárias.
              </p>

              {/* Tags */}
              <div className="flex items-center gap-2 mt-4">
                <div className="border border-white px-2 py-0.5">
                  <span className="text-[#fdfdfd] text-sm font-normal font-['Manrope']">Meta Ads</span>
                </div>
                <div className="border border-white px-2 py-0.5">
                  <span className="text-[#fdfdfd] text-sm font-normal font-['Manrope']">Google Ads</span>
                </div>
                <div className="border border-white px-2 py-0.5">
                  <span className="text-[#fdfdfd] text-sm font-normal font-['Manrope']">Estratégia</span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-4 flex flex-col gap-1">
                <p className="text-[#fdfdfd] text-base font-medium font-['Manrope']">ROAS médio: 6,5x</p>
                <p className="text-[#fdfdfd] text-base font-medium font-['Manrope']">Investimento Total: R$55.528,73</p>
                <p className="text-[#fdfdfd] text-base font-medium font-['Manrope']">Faturamento Total: R$365.201,92</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PERFORMANCE+ PARA CADA TIPO ===== */}
        <section className="w-full bg-white py-10 px-7">
          <h2 className="text-[#003f61] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Performance+ para cada tipo de negócio
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {/* Performance+ Ecomm */}
            <div className="w-full bg-[#001a29] rounded-xl p-6 flex flex-col items-center">
              <PerformanceEcommLogo />
              <p className="text-white text-base font-normal font-['Manrope'] text-center mt-3">
                Seu E-Commerce lucrando 24h,<br />7 dias por semana.
              </p>
              <CTAButtonGold className="mt-4">Ver detalhes</CTAButtonGold>
            </div>

            {/* Performance+ Leads */}
            <div className="w-full bg-[#001a29] rounded-xl p-6 flex flex-col items-center">
              <PerformanceLeadsLogo />
              <p className="text-white text-base font-normal font-['Manrope'] text-center mt-3">
                Mais contratos fechados, menos coleção de Leads aleatórios.
              </p>
              <CTAButtonGold className="mt-4">Ver detalhes</CTAButtonGold>
            </div>
          </div>
        </section>

        {/* ===== ROADMAP PERFORMANCE+ ===== */}
        <section className="relative w-full bg-[#001a29] py-10 px-7 overflow-hidden">
          {/* Background Logo watermark */}
          <div className="absolute pointer-events-none opacity-10" style={{ left: "-99px", top: "0px", width: "722px", height: "1620px" }}>
            <img src="/I1024-6042;7-23.svg" alt="" className="absolute" style={{ left: "216px", top: "161px", width: "506px", height: "578px" }} />
          </div>

          <div className="relative z-10">
            <h2 className="text-[#fdfdfd] text-[28px] font-bold font-['Ubuntu'] leading-tight">
              Fluxo de Trabalho: RoadMap Performance+
            </h2>

            <div className="mt-8 flex flex-col gap-6">
              {[
                { icon: "/I1014-3210;1012-723.svg", title: "Setup Inicial", desc: "Tracking Web + Server-side, CRM e organização de dados. Objetivo: confiança nos dados." },
                { icon: "/I1022-5675;1022-5568.svg", title: "Análise de Funil", desc: "Identificar taxas de conversão e principais gargalos. Objetivo: Otimização dos pontos de melhoria." },
                { icon: null, title: "Estruturação de Criativos", desc: "Ângulos, conceitos e hooks + testes A/B. Objetivo: validar criativos." },
                { icon: "/I1022-5686;1022-5599.svg", title: "Otimização de Canais", desc: "CRO e testes A/B de UI/UX. Objetivo: maximizar taxas de conversão." },
                { icon: "/I1032-6177;1032-6154.svg", title: "Fidelização", desc: "Pós-venda e aumento de LTV. Objetivo: extrair o máximo de valor." },
                { icon: "/I1022-5656;1022-5580.svg", title: "Expansão", desc: "Metas S.M.A.R.T. e projeções. Objetivo: planejar o futuro." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-[50px] h-[50px] bg-[#0d6ca0] rounded-full flex items-center justify-center">
                      {step.icon ? (
                        <img src={step.icon} alt="" className="w-7 h-7 object-contain" />
                      ) : (
                        <span className="text-white text-sm font-bold font-['Ubuntu']">{i + 1}</span>
                      )}
                    </div>
                    {i < 5 && (
                      <div className="absolute left-1/2 top-full w-0.5 h-6 bg-[#003f61] transform -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-[#fdfdfd] text-[19px] font-bold font-['Ubuntu']">{step.title}</h3>
                    <p className="text-[#e2e3e4] text-base font-normal font-['Manrope'] mt-1 leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ESTRATÉGIAS ===== */}
        <section className="w-full bg-[#001a29] py-10 px-3">
          <div className="flex justify-center mb-6">
            <CTAButtonGold>Quero agendar uma reunião</CTAButtonGold>
          </div>

          <div className="w-full border border-[#003f61] rounded-xl p-6 mb-4 mx-2">
            <h3 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
              Estratégias de ponta a ponta
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "Direção estratégica digital e offline.",
                "Análise de Funis e Identificação de Gargalos",
                "Decisões tomadas a partir de análise de dados.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#45bdfe] mt-1 flex-shrink-0">•</span>
                  <span className="text-[#fdfdfd] text-sm font-medium font-['Manrope']">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full border border-[#003f61] rounded-xl p-6 mb-6 mx-2">
            <h3 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
              Soluções Personalizadas
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "Estruturação conforme seu tamanho.",
                "Para iniciantes, empresas em crescimento ou em alta escala.",
                "Imersão completa no seu negócio.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#45bdfe] mt-1 flex-shrink-0">•</span>
                  <span className="text-[#fdfdfd] text-sm font-medium font-['Manrope']">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className="w-full px-3">
            <h3 className="text-[#fdfdfd] text-[28px] font-bold font-['Ubuntu'] text-center leading-tight mb-4">
              Experiência com as maiores ferramentas e plataformas do mercado.
            </h3>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="relative overflow-hidden" style={{ width: "152px", height: "65px" }}>
                {["I1024-5869;1024-5833.svg", "I1024-5869;1024-5834.svg", "I1024-5869;1024-5835.svg", "I1024-5869;1024-5836.svg", "I1024-5869;1024-5838.svg"].map((src, i) => (
                  <img key={i} src={`/${src}`} alt="" className="absolute" style={{ height: "65px", width: "auto", left: `${i * 30}px`, top: "0px" }} />
                ))}
              </div>
              <img src="/I1032-6148;1032-6146.webp" alt="Google Ads" className="h-11 w-auto object-contain" />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <CTAButtonGradient>Quero estruturar minha empresa</CTAButtonGradient>
          </div>
        </section>

        {/* ===== NÃO SOMOS UMA AGÊNCIA ===== */}
        <section className="w-full bg-white py-10 px-7">
          <h2 className="text-[#003f61] text-[34px] font-bold font-['Ubuntu'] text-center leading-tight">
            Não somos uma agência. Somos o parceiro que você deveria ter contratado antes.
          </h2>
          <p className="text-[#0d6ca0] text-[19px] font-medium font-['Manrope'] text-center mt-4 leading-snug">
            Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
          </p>

          <div className="mt-8 flex justify-around items-start">
            <div className="flex flex-col items-center gap-2 w-[160px]">
              <div className="relative overflow-hidden" style={{ width: "117px", height: "68px" }}>
                {["I1024-5993;1013-1131.svg", "I1024-5993;1013-1133.svg", "I1024-5993;1013-1135.svg", "I1024-5993;1013-1137.svg", "I1024-5993;1013-1139.svg", "I1024-5993;1013-1141.svg"].map((src, i) => (
                  <img key={i} src={`/${src}`} alt="" className="absolute" style={{ height: "68px", width: "auto", left: `${i * 20}px`, top: "0px" }} />
                ))}
              </div>
              <p className="text-[#003f61] text-[19px] font-bold font-['Ubuntu'] text-center leading-tight">
                Estrutura antes de Escala
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-[100px]">
              <div className="relative overflow-hidden" style={{ width: "87px", height: "73px" }}>
                {["I1024-5942;1012-790.svg", "I1024-5942;1012-792.svg", "I1024-5942;1012-794.svg", "I1024-5942;1012-796.svg"].map((src, i) => (
                  <img key={i} src={`/${src}`} alt="" className="absolute" style={{ height: "73px", width: "auto", left: `${i * 22}px`, top: "0px" }} />
                ))}
              </div>
              <p className="text-[#003f61] text-[19px] font-bold font-['Ubuntu'] text-center leading-tight">
                Foco em Resultado
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <CTAButtonGradient>Agendar reunião com Galpão</CTAButtonGradient>
          </div>
        </section>

        {/* ===== QUEM FAZ ===== */}
        <section className="w-full bg-white py-10 px-7">
          <h2 className="text-[#003f61] text-[34px] font-bold font-['Ubuntu'] text-center leading-tight">
            Quem faz o Grupo Galpão
          </h2>

          <div className="mt-8 flex flex-col gap-10">
            {/* Vinícius Cruz */}
            <div className="relative">
              <div className="bg-[#001a29] rounded-[9px] p-4 ml-14 min-h-[76px] flex items-center">
                <p className="text-[#fdfdfd] text-base font-normal font-['Manrope']">
                  Especialista em Mídia Paga, Performance e Branding.
                </p>
              </div>
              <img
                src="/1014-3487.webp"
                alt="Vinícius Cruz"
                className="absolute -left-2 top-0 w-[120px] h-[120px] rounded-full object-cover"
              />
              <div className="mt-3 ml-14">
                <h3 className="text-[#003f61] text-2xl font-bold font-['Ubuntu']">Vinícius Cruz</h3>
                <p className="text-[#0d6ca0] text-sm font-normal font-['Manrope'] mt-1 leading-snug">
                  Atua no mercado publicitário desde 2012, mesclando conhecimentos em design e marketing estratégico.
                </p>
              </div>
            </div>

            {/* Rodrigo Gomes */}
            <div className="relative">
              <div className="bg-[#096699] rounded-[9px] p-4 mr-14 min-h-[76px] flex items-center">
                <p className="text-[#fdfdfd] text-base font-normal font-['Manrope']">
                  Especialista em Soluções Operacionais, Dados e Tecnologias
                </p>
              </div>
              <img
                src="/1014-3486.webp"
                alt="Rodrigo Gomes"
                className="absolute -right-2 top-0 w-[120px] h-[120px] rounded-full object-cover"
              />
              <div className="mt-3 mr-14 text-right">
                <h3 className="text-[#003f61] text-2xl font-bold font-['Ubuntu']">Rodrigo Gomes</h3>
                <p className="text-[#0d6ca0] text-sm font-normal font-['Manrope'] mt-1 leading-snug">
                  Atua no mercado desde 2011, construindo sua trajetória com foco em tecnologia, processos e eficiência operacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NOSSOS PARCEIROS ===== */}
        <section className="w-full bg-[#001a29] py-10 px-7">
          <h2 className="text-[#003f61] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Nossos Parceiros
          </h2>
          <p className="text-[#fdfdfd] text-[19px] font-medium font-['Manrope'] mt-3 leading-snug">
            Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
          </p>

          <div className="mt-8 flex flex-col gap-8">
            {/* Vendatech - Automação */}
            <div>
              <div className="relative overflow-hidden mb-2" style={{ width: "159px", height: "24px" }}>
                {["I1014-3538;944-839.svg", "I1014-3538;944-840.svg", "I1014-3538;944-841.svg", "I1014-3538;944-842.svg", "I1014-3538;944-843.svg", "I1014-3538;944-844.svg", "I1014-3538;944-845.svg", "I1014-3538;944-846.svg", "I1014-3538;944-847.svg", "I1014-3538;944-848.svg", "I1014-3538;944-849.svg", "I1014-3538;944-850.svg", "I1014-3538;944-851.svg"].map((src, i) => (
                  <img key={i} src={`/${src}`} alt="" className="absolute" style={{ height: "24px", width: "auto", left: `${i * 12}px`, top: "0px" }} />
                ))}
              </div>
              <h3 className="text-[#003f61] text-2xl font-bold font-['Ubuntu']">Soluções em Automação</h3>
              <p className="text-[#fdfdfd] text-sm font-medium font-['Manrope'] mt-2 leading-snug">
                Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
              </p>
            </div>

            {/* Leões - Produção de Conteúdo */}
            <div>
              <img src="/I1014-3537;944-853.webp" alt="Leões" className="w-[109px] h-auto mb-2" />
              <h3 className="text-[#003f61] text-2xl font-bold font-['Ubuntu']">Soluções em Produção de Conteúdo</h3>
              <p className="text-[#fdfdfd] text-sm font-medium font-['Manrope'] mt-2 leading-snug">
                Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
              </p>
            </div>

            {/* UXP - Recursos Web */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="relative overflow-hidden flex-shrink-0" style={{ width: "150px", height: "90px" }}>
                  {["I1031-6102;945-874.svg", "I1031-6102;945-875.svg", "I1031-6102;945-876.svg", "I1031-6102;945-877.svg", "I1031-6102;945-878.svg", "I1031-6102;945-879.svg", "I1031-6102;945-880.svg"].map((src, i) => (
                    <img key={i} src={`/${src}`} alt="" className="absolute" style={{ height: "90px", width: "auto", left: `${i * 22}px`, top: "0px" }} />
                  ))}
                </div>
                <div>
                  <h3 className="text-black text-2xl font-bold font-['Ubuntu']">Soluções em Recursos Web</h3>
                  <p className="text-[#00131d] text-sm font-medium font-['Manrope'] mt-1 leading-snug">
                    Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== O QUE FALTA PARA DESTRAVAR ===== */}
        <section className="w-full bg-[#001a29] py-10 px-7">
          <h2 className="text-[#e6c364] text-[34px] font-bold font-['Ubuntu'] text-center leading-tight">
            O que falta para você destravar?
          </h2>
          <p className="text-[#f4f5f5] text-[19px] font-medium font-['Manrope'] text-center mt-4 leading-snug">
            A reunião é gratuita e sem obrigação de contratação. Em menos de 90 minutos, você terá um diagnóstico claro sobre onde sua operação de marketing pode evoluir.
          </p>
          <div className="flex justify-center mt-8">
            <CTAButtonGold>Agendar reunião com Galpão</CTAButtonGold>
          </div>
        </section>

        {/* ===== BLOG ===== */}
        <section className="w-full bg-[#001a29] py-10 px-7">
          <h2 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Nossas últimas postagens
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            {[
              "A Nova Era dos Criativos: Como Estruturar seus Anúncios em 2026",
              "Do Caos à Clareza: Como Transformar Dados em Decisões Estratégicas",
              "Server-side Tracking: Como Garantir Qualidade de Dados e Otimizar Resultados.",
            ].map((title, i) => (
              <div key={i} className="bg-[#d9d9d9]/10 rounded-[7px] p-3 flex items-center gap-3">
                <div className="w-[92px] h-[83px] bg-[#45bdfe] flex-shrink-0 rounded" />
                <div className="flex-1">
                  <h3 className="text-[#fdfdfd] text-base font-bold font-['Ubuntu'] leading-snug">{title}</h3>
                  <button className="mt-2 px-3 py-1 bg-[#003f61] rounded-md">
                    <span className="text-white text-xs font-normal font-['Manrope']">Ver mais</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== NEWSLETTER ===== */}
        <section className="w-full bg-[#001a29] py-10 px-7">
          <h2 className="text-[#fdfdfd] text-[34px] font-bold font-['Ubuntu'] leading-tight">
            Assine nossa Newsletter
          </h2>
          <div className="mt-4 w-full h-24 bg-[#d9d9d9]/20 rounded-[7px] flex items-center px-4 gap-3">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 bg-transparent text-[#fdfdfd] font-['Manrope'] text-base outline-none placeholder-[#e2e3e4]/60"
            />
            <button className="px-4 py-2 bg-[#003f61] rounded-lg flex-shrink-0">
              <span className="text-white text-sm font-['Ubuntu']">Assinar</span>
            </button>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="w-full bg-[#00131d] py-8 px-7 overflow-hidden">
          <div className="flex items-start justify-between mb-6">
            <GGLogoFooter />

            {/* Social Media */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-white text-sm font-['Ubuntu']">Nossas Redes Sociais</span>
              <div className="flex items-center gap-3">
                <img src="/I1023-5759;531-1778.svg" alt="YouTube" className="w-7 h-[19px]" />
                <img src="/I1023-5757;531-1785.svg" alt="Instagram" className="w-[19px] h-[19px]" />
                <img src="/I1023-5758;531-1781.svg" alt="Facebook" className="w-[19px] h-[19px]" />
                <img src="/I1023-5756;531-1790.svg" alt="WhatsApp" className="w-[18px] h-[18px]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-white text-base font-normal font-['Ubuntu'] mb-2">Grupo Galpão</h4>
              <ul className="flex flex-col gap-1">
                {["Performance+ Ecomm", "Performance+ Leads", "Blog", "Nossos Parceiros", "E-book Ecomm System 2026", "E-book Lead Quality", "Checklist E-Commerce"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white text-sm font-normal font-['Manrope'] hover:text-[#45bdfe] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-base font-normal font-['Ubuntu'] mb-2">Contato</h4>
              <ul className="flex flex-col gap-1 mb-4">
                <li><span className="text-white text-sm font-normal font-['Manrope']">(32) 9999-0000</span></li>
                <li><span className="text-white text-sm font-normal font-['Manrope'] break-all">contato@grupogalpaohub.com.br</span></li>
              </ul>
              <h4 className="text-white text-base font-normal font-['Ubuntu'] mb-2">Privacidade</h4>
              <ul className="flex flex-col gap-1">
                {["Política de Privacidade", "Termos de Serviços", "Política de Uso"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white text-sm font-normal font-['Manrope'] hover:text-[#45bdfe] transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4">
            <p className="text-white text-xs font-normal font-['Manrope'] text-center">
              © 2026 Grupo Galpão. Todos os direitos reservados.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
