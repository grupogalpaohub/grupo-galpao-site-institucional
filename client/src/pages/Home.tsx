/**
 * Grupo Galpão - Site Institucional
 * Design System: Figma [M]-WireframeGGLayoutSiteInstitucional
 *
 * Colors:
 *   - Background dark: #001a29 (navy very dark)
 *   - Background medium: #003f61 (dark blue)
 *   * Performance+ blue: #45BDFE (bright cyan-blue — exact Figma value)
 *   - Gold accent: #e6c364
 *   - Text white: #fdfdfd
 *   - Text light blue: #4fc3f7
 *
 * Fonts:
 *   - Headings: Ubuntu Bold (700)
 *   - Body: Manrope Regular/Medium (400/500)
 */

import { useState, useEffect, Fragment } from "react";

// CDN URLs for images
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/1021-5537_34d86ff1.webp",
  caseEcomm: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/1014-4098_63a22853.webp",
  caseLeads: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/1014-4040_b14d0942.webp",
  founderVinicius: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/1014-3486_22e9991a.webp",
  founderRodrigo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/1014-3487_81ccbb85.webp",
  logoRecrie: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/I1013-2954;574-2845_24bfbf09.webp",
  logoVitacon: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/I1013-2955;574-2849_725cd6dc.webp",
  logoLeoes: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/I1014-3537;944-853_edf43537.webp",
  blogImg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663074476868/Hw5nuhLsA9RmVm9VCJJsJW/I1032-6148;1032-6146_cff0c63c.webp",
};

// GG Logo SVG - exact Figma asset (diamond/losango shape in gold)
const GGLogoIcon = () => (
  <svg width="31" height="35" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2933 32.7225L17.5887 26.7799L21.0523 21.206H28.1664L21.2933 32.7225ZM16.4151 24.8973L14.1081 21.1966H18.7147L16.4151 24.8973ZM11.542 32.7393L2.09072 17.3383C1.95106 17.1104 1.9556 16.8191 2.10239 16.5958L11.5437 2.23347L15.1368 7.62626L10.064 15.5888C9.51218 16.4553 9.50662 17.5781 10.0499 18.4496L10.5256 19.2129H7.12346C6.68943 19.2129 6.42153 19.7523 6.64504 20.176L7.0209 20.8884C7.12181 21.0796 7.30336 21.1966 7.49924 21.1966H11.7624L15.2442 26.7815L11.542 32.7393ZM20.9305 2.23645L28.0334 12.6263H20.925C20.884 12.6263 20.8462 12.6061 20.8234 12.5719L17.5121 7.60207L20.9305 2.23645ZM30.4535 19.9073C30.2113 19.4806 29.7559 19.2155 29.2651 19.2155H27.492V19.2129H12.8714L11.739 17.3966C11.5989 17.1718 11.6003 16.882 11.7429 16.6585L16.3432 9.43721L19.1666 13.6752C19.5592 14.2646 20.2165 14.6167 20.925 14.6167H29.2155C29.7241 14.6167 30.1872 14.3373 30.4244 13.8876C30.6615 13.4378 30.6306 12.8979 30.3437 12.4788L22.3177 0.738959C21.9963 0.268527 21.4605 -0.00845514 20.8944 0.0022703C20.3246 0.0115083 19.8015 0.303757 19.4953 0.784366L16.3058 5.79111L12.9496 0.753521C12.6339 0.279957 12.0958 0.00344467 11.5369 0C10.9679 0.00180062 10.4415 0.286534 10.1289 0.762054L0.439004 15.5024C-0.1296 16.3676 -0.147292 17.4968 0.394303 18.3792L10.0989 34.1935C10.4083 34.697 10.9452 34.9984 11.5359 35H11.5405C12.1293 35 12.666 34.7018 12.9767 34.2015L16.4178 28.6641L19.8636 34.1918C20.1751 34.6913 20.7104 34.9883 21.2982 34.9883C21.3038 34.9883 21.3094 34.9883 21.3149 34.988C21.9093 34.9825 22.446 34.6744 22.751 34.1639L30.4387 21.2826C30.6901 20.861 30.696 20.3342 30.4535 19.9073Z" fill="#E6C364"/>
  </svg>
);

// Performance+ Logo — exact Figma SVGs: triangle (485-328) + plus (485-330), both #003F61
const PerfPlusLogo = ({ height = 56 }: { height?: number }) => {
  const scale = height / 55.9;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {/* Icon group: triangle + plus mark */}
      <div style={{ position: 'relative', width: 65 * scale, height: 55.9 * scale, flexShrink: 0 }}>
        {/* Triangle (485-328) */}
        <svg
          width={57.54 * scale}
          height={55.9 * scale}
          viewBox="0 0 58 56"
          fill="none"
          style={{ position: 'absolute', left: 0, top: 0 }}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M2.73303 56C1.09729 55.0235 0 53.2301 0 51.1813C0 50.2173 0.242842 49.3101 0.670381 48.5176L29.0037 2.2839C29.407 1.73386 29.9078 1.26046 30.4806 0.889583C31.3498 0.326707 32.3844 0 33.4944 0C34.6039 0 35.6379 0.32635 36.5069 0.888656C37.0743 1.25589 37.5713 1.72373 37.9727 2.26706L56.8849 33.1275L56.8567 33.1275C56.9047 33.1857 56.9507 33.2456 56.9948 33.3069L57.262 33.7428C57.5074 34.219 57.6462 34.7595 57.6462 35.3324C57.6462 37.244 56.1016 38.796 54.1992 38.796C54.0253 38.796 53.8544 38.783 53.6874 38.7579L53.7176 38.8073L26.7064 38.7363C23.7913 38.5561 21.4792 36.1202 21.4792 33.146C21.4792 33.1088 21.4796 33.0715 21.4803 33.0344L50.2261 33.11L33.4934 5.80593L2.73303 56Z" fill="#fdfdfd"/>
        </svg>
        {/* Plus mark (485-330) */}
        <svg
          width={16.64 * scale}
          height={12.63 * scale}
          viewBox="0 0 17 13"
          fill="none"
          style={{ position: 'absolute', left: 48.66 * scale, top: 9.88 * scale }}
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M2.9249 0L6.83875 0.0133859C7.00041 0.0261884 7.14173 0.112241 7.22976 0.238447L9.70878 4.28358L14.7787 4.30264L16.9365 7.82382C16.977 7.89897 17.0001 7.98495 17.0001 8.07631C17.0001 8.36269 16.774 8.59641 16.4916 8.60695L12.3487 8.59132L14.5094 12.1173C14.549 12.1917 14.5715 12.2767 14.5715 12.3669C14.5715 12.6554 14.3421 12.8905 14.0567 12.8977L10.1667 12.8831C9.99139 12.8734 9.83871 12.7778 9.74981 12.6375C9.74706 12.633 9.74433 12.6285 9.74165 12.624L7.25857 8.57219L2.22377 8.5532L0.0532166 5.01143C0.0191919 4.94123 0 4.86239 0 4.77903C0 4.49599 0.220881 4.26438 0.498798 4.24889L4.61861 4.26438L2.48185 0.77775C2.44304 0.703845 2.42105 0.619683 2.42105 0.530357C2.42105 0.245648 2.64467 0.0129479 2.9249 0Z" fill="#fdfdfd"/>
        </svg>
      </div>
      {/* Text: "Performance+" — BRANCO conforme Figma (sobre fundo azul claro) */}
      <span style={{
        fontFamily: "'Ubuntu', sans-serif",
        fontWeight: 700,
        fontSize: height * 0.6,
        color: '#fdfdfd',
        letterSpacing: '-0.01em',
        lineHeight: 1,
      }}>Performance+</span>
    </div>
  );
};

// Roadmap icons
const RoadmapIcon = ({ children }: { children: React.ReactNode }) => (
  <div style={{
    width: 50,
    height: 50,
    borderRadius: '50%',
    background: '#0d6ca0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  }}>
    {children}
  </div>
);

// Social icons
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Home() {
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStat, setActiveStat] = useState(0);

  const stats = [
    { value: "+R$2mi", label: "Investidos em an\u00fancios no Meta Ads" },
    { value: "+75", label: "Contas de an\u00fancios gerenciadas" },
    { value: "+7,5x", label: "ROAS m\u00e9dio de nossos clientes." },
  ];

  const cases = [
    {
      label: "01",
      title: "E-Commerce de Moda",
      subtitle: "Do E-commerce de enfeite à uma máquina de vendas diárias.",
      description: "Aplicamos estratégias de conteúdos e anúncios, validamos nossos criativos e canais de conversão, o resultado: +R$3.000 de vendas diárias.",
      tags: ["Meta Ads", "Google Ads", "Estratégia"],
      stats: [
        { label: "ROAS médio:", value: "6,5x" },
        { label: "Investimento Total:", value: "R$55.528,73" },
        { label: "Faturamento Total:", value: "R$365.201,92" },
      ],
    },
    {
      label: "02",
      title: "Empresa de Serviços",
      subtitle: "De leads frios para contratos fechados com consistência.",
      description: "Estruturamos o funil de aquisição e implementamos automações de qualificação, transformando o processo de vendas.",
      tags: ["Meta Ads", "CRM", "Automação"],
      stats: [
        { label: "Leads qualificados:", value: "+320%" },
        { label: "Custo por lead:", value: "-45%" },
        { label: "Taxa de fechamento:", value: "38%" },
      ],
    },
    {
      label: "03",
      title: "E-Commerce de Saúde",
      subtitle: "Crescimento sustentável com margens saudáveis.",
      description: "Implementamos rastreamento server-side e otimizamos campanhas com dados precisos, resultando em crescimento consistente.",
      tags: ["Google Ads", "Analytics", "CRO"],
      stats: [
        { label: "ROAS médio:", value: "4,8x" },
        { label: "Investimento Total:", value: "R$28.000,00" },
        { label: "Faturamento Total:", value: "R$134.400,00" },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", background: "#001a29", color: "#fdfdfd", overflowX: "hidden" }}>

      {/* ===== NAVBAR ===== */}
      <header style={{
        background: "#001a29",
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "14px 16px",
      }}>
        {/* Mobile header: frame with white translucent border (as in Figma) */}
        <div style={{
          background: "rgba(255,255,255,0.25)",
          border: "0.6px solid #fdfdfd",
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          maxWidth: 1280,
          margin: "0 auto",
        }}>
          {/* Logo: GG diamond + GRUPO GALPÃO text */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <GGLogoIcon />
            <div>
              <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", color: "#fdfdfd", lineHeight: 1.15 }}>GRUPO</div>
              <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: "0.06em", color: "#fdfdfd", lineHeight: 1.15 }}>GALPÃO</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }} className="hidden-mobile">
            <a href="#metodologia" style={{ color: "#fdfdfd", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}>Metodologia</a>
            <a href="#cases" style={{ color: "#fdfdfd", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}>Cases</a>
            <a href="#roadmap" style={{ color: "#fdfdfd", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}>RoadMap</a>
            <a href="#quem-faz" style={{ color: "#fdfdfd", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}>Quem Somos</a>
            <a href="#blog" style={{ color: "#fdfdfd", textDecoration: "none", fontFamily: "'Manrope', sans-serif", fontSize: 14, fontWeight: 500, opacity: 0.9 }}>Blog</a>
            <button className="btn-pill" style={{ fontFamily: "'Ubuntu', sans-serif", fontSize: 14, padding: "8px 20px" }}>Agendar Reunião</button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5, padding: 4 }}
            className="show-mobile"
          >
            <span style={{ display: "block", width: 28, height: 2, background: "#fdfdfd", borderRadius: 2 }}></span>
            <span style={{ display: "block", width: 28, height: 2, background: "#fdfdfd", borderRadius: 2 }}></span>
            <span style={{ display: "block", width: 28, height: 2, background: "#fdfdfd", borderRadius: 2 }}></span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#001d33", padding: "16px 24px", borderTop: "1px solid rgba(255,255,255,0.1)", borderRadius: "0 0 5px 5px", maxWidth: 1280, margin: "0 auto" }}>
            {["Metodologia", "Cases", "RoadMap", "Quem Somos", "Blog"].map((item) => (
              <a key={item} href="#" onClick={() => setMenuOpen(false)} style={{ display: "block", color: "#fdfdfd", textDecoration: "none", padding: "10px 0", fontFamily: "'Manrope', sans-serif", fontSize: 16, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{item}</a>
            ))}
            <button className="btn-pill" style={{ marginTop: 16, width: "100%" }}>Agendar Reunião</button>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      {/* Figma: texto e botões ficam sobre a imagem de fundo com overlay azul escuro */}
      <section style={{ background: "#001a29", padding: "20px 16px 40px", position: "relative" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>

          {/* Hero card: imagem com texto sobreposto (mobile-first como Figma) */}
          <div style={{ position: "relative", borderRadius: 11, overflow: "hidden", marginBottom: 20 }}>
            {/* Background image */}
            <img
              src={IMAGES.hero}
              alt="Hero background"
              style={{ width: "100%", height: "clamp(280px, 45vw, 520px)", objectFit: "cover", display: "block" }}
            />
            {/* Blue overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 63, 97, 0.80)",
            }} />
            {/* Text content over image */}
            <div style={{
              position: "absolute",
              inset: 0,
              padding: "clamp(24px, 4vw, 48px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
              <h1 style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(34px, 5vw, 64px)",
                lineHeight: 1.1,
                color: "#fdfdfd",
                margin: "0 0 20px",
                maxWidth: 640,
              }}>
                Clareza para decidir. Segurança para crescer.
              </h1>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(16px, 1.6vw, 20px)",
                fontWeight: 400,
                color: "#fdfdfd",
                lineHeight: 1.6,
                margin: "0 0 32px",
                maxWidth: 540,
                opacity: 0.92,
              }}>
                A maioria das empresas tenta anunciar sem estrutura. Nós organizamos dados, criativos, canais e ofertas para crescer de forma sustentável.
              </p>
            </div>
          </div>

          {/* CTA Buttons below the hero card — side by side on desktop, stacked on mobile */}
          <div className="hero-cta-buttons" style={{ width: "100%" }}>
            <button className="btn-pill" style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 16 }}>Quero agendar uma reunião</button>
            <button className="btn-pill" style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 16, borderColor: "rgba(255,253,250,0.8)", background: "rgba(0,63,97,0.15)" }}>Quero conhecer o Método</button>
          </div>
        </div>
      </section>

      {/* ===== CLIENTS SECTION ===== */}
      <section style={{ background: "#001a29", padding: "56px 0 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Title — large bold, centered */}
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 3.5vw, 42px)",
            color: "#fdfdfd",
            textAlign: "center",
            marginBottom: 40,
            lineHeight: 1.2,
          }}>
            Quem já cresceu com o Grupo Galpão
          </h2>

          {/* ===== LOGO CAROUSEL ===== */}
          <div style={{ overflow: "hidden", marginBottom: 56, position: "relative" }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: 80,
              background: "linear-gradient(to right, #001a29, transparent)",
              zIndex: 2, pointerEvents: "none"
            }} />
            <div style={{
              position: "absolute", right: 0, top: 0, bottom: 0, width: 80,
              background: "linear-gradient(to left, #001a29, transparent)",
              zIndex: 2, pointerEvents: "none"
            }} />
            <div className="logo-carousel-track">
              {[0, 1].map((set) => (
                <Fragment key={set}>
                  {/* OFFRio */}
                  <div className="logo-carousel-item">
                    <div style={{ position: "relative", width: 114, height: 28 }}>
                      <img src="/I1013-2953;574-2812.svg" alt="" style={{ position: "absolute", left: 0, top: 0.85, width: 23.64, height: 26.71, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2816.svg" alt="" style={{ position: "absolute", left: 27, top: 1.24, width: 14.21, height: 25.9, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2817.svg" alt="" style={{ position: "absolute", left: 43.53, top: 1.24, width: 14.2, height: 25.9, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2813.svg" alt="" style={{ position: "absolute", left: 60.63, top: 1.07, width: 22.09, height: 25.74, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2815.svg" alt="" style={{ position: "absolute", left: 85.37, top: 8.63, width: 5.88, height: 18.18, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2818.svg" alt="" style={{ position: "absolute", left: 84.79, top: 0, width: 7.03, height: 6.28, filter: "brightness(0) invert(1)" }} />
                      <img src="/I1013-2953;574-2814.svg" alt="" style={{ position: "absolute", left: 94.19, top: 8.21, width: 19.79, height: 19.03, filter: "brightness(0) invert(1)" }} />
                    </div>
                  </div>
                  {/* Vitacon */}
                  <div className="logo-carousel-item">
                    <img src={IMAGES.logoVitacon} alt="Vitacon" style={{ height: 28, maxWidth: 120, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }} />
                  </div>
                  {/* Re.crie */}
                  <div className="logo-carousel-item">
                    <img src={IMAGES.logoRecrie} alt="Re.crie" style={{ height: 40, maxWidth: 120, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }} />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          {/* H2 Metodologia — fonte grande, alinhado à esquerda no mobile, centralizado no desktop */}
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 4vw, 48px)",
            color: "#fdfdfd",
            lineHeight: 1.15,
            marginBottom: 20,
            textAlign: "center",
          }}>
            Metodologia construída na prática. Decisões baseadas em dados.
          </h2>

          {/* Paragraph */}
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(16px, 1.2vw, 18px)",
            fontWeight: 400,
            color: "#c8cdd3",
            lineHeight: 1.65,
            marginBottom: 48,
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 48px",
          }}>
            Não são apenas anúncios. Entregamos um método que entende quem é o seu cliente, como ele compra e como fazê-lo comprar novamente.
          </p>

        </div>

        {/* ===== STATS — Desktop: 3 colunas fundo branco | Mobile: apenas +R$2mi em linha ===== */}

        {/* Desktop: 3 stats em linha — fundo rgba(0,63,97,0.78) conforme Rectangle135 do Figma */}
        <div className="stats-desktop" style={{
          justifyContent: "center",
          alignItems: "stretch",
          background: "rgba(0,63,97,0.78)",
          margin: "0 24px",
          borderRadius: 12,
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "32px 48px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              flex: 1,
            }}>
              <span style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 3vw, 44px)",
                color: "#fdfdfd",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}>{stat.value}</span>
              <span style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.45,
              }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile: 3 stats em scroll horizontal — fundo branco transparente conforme Figma */}
        <div className="stats-mobile" style={{ padding: "0 0 48px" }}>
          <div style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "0 24px",
            gap: 0,
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexShrink: 0,
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                borderRadius: 12,
                padding: "16px 20px",
                marginRight: i < stats.length - 1 ? 12 : 0,
                minWidth: 220,
              }}>
                <span style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 700,
                  fontSize: 36,
                  color: "#fdfdfd",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>{stat.value}</span>
                <span style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.4,
                  marginLeft: 10,
                }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ===== PERFORMANCE+ SECTION (blue bg) ===== */}
      {/* Figma: #45BDFE, rounded top 60px, with large ellipse decorative element */}
      <section id="metodologia" style={{ background: "#45BDFE", borderRadius: "60px 60px 0 0", padding: "60px 0 80px", position: "relative", overflow: "hidden" }}>
        {/* Decorative ellipse — Figma: Ellipse 36/37 */}
        <div style={{
          position: "absolute",
          width: "596px",
          height: "450px",
          borderRadius: "50%",
          background: "rgba(0,63,97,0.08)",
          top: "-200px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }} />
        {/* GG Logo decorativo ao fundo — grande, baixa opacidade, posicionado à direita */}
        <div style={{
          position: "absolute",
          right: "-40px",
          bottom: "-20px",
          opacity: 0.08,
          pointerEvents: "none",
          transform: "scale(1)",
        }}>
          <svg width="320" height="360" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2933 32.7225L17.5887 26.7799L21.0523 21.206H28.1664L21.2933 32.7225ZM16.4151 24.8973L14.1081 21.1966H18.7147L16.4151 24.8973ZM11.542 32.7393L2.09072 17.3383C1.95106 17.1104 1.9556 16.8191 2.10239 16.5958L11.5437 2.23347L15.1368 7.62626L10.064 15.5888C9.51218 16.4553 9.50662 17.5781 10.0499 18.4496L10.5256 19.2129H7.12346C6.68943 19.2129 6.42153 19.7523 6.64504 20.176L7.0209 20.8884C7.12181 21.0796 7.30336 21.1966 7.49924 21.1966H11.7624L15.2442 26.7815L11.542 32.7393ZM20.9305 2.23645L28.0334 12.6263H20.925C20.884 12.6263 20.8462 12.6061 20.8234 12.5719L17.5121 7.60207L20.9305 2.23645ZM30.4535 19.9073C30.2113 19.4806 29.7559 19.2155 29.2651 19.2155H27.492V19.2129H12.8714L11.739 17.3966C11.5989 17.1718 11.6003 16.882 11.7429 16.6585L16.3432 9.43721L19.1666 13.6752C19.5592 14.2646 20.2165 14.6167 20.925 14.6167H29.2155C29.7241 14.6167 30.1872 14.3373 30.4244 13.8876C30.6615 13.4378 30.6306 12.8979 30.3437 12.4788L22.3177 0.738959C21.9963 0.268527 21.4605 -0.00845514 20.8944 0.0022703C20.3246 0.0115083 19.8015 0.303757 19.4953 0.784366L16.3058 5.79111L12.9496 0.753521C12.6339 0.279957 12.0958 0.00344467 11.5369 0C10.9679 0.00180062 10.4415 0.286534 10.1289 0.762054L0.439004 15.5024C-0.1296 16.3676 -0.147292 17.4968 0.394303 18.3792L10.0989 34.1935C10.4083 34.697 10.9452 34.9984 11.5359 35H11.5405C12.1293 35 12.666 34.7018 12.9767 34.2015L16.4178 28.6641L19.8636 34.1918C20.1751 34.6913 20.7104 34.9883 21.2982 34.9883C21.3038 34.9883 21.3094 34.9883 21.3149 34.988C21.9093 34.9825 22.446 34.6744 22.751 34.1639L30.4387 21.2826C30.6901 20.861 30.696 20.3342 30.4535 19.9073Z" fill="#003F61"/>
          </svg>
        </div>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Logo Performance+ — exact Figma SVGs: triangle + plus, both #003F61 */}
          <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
            <PerfPlusLogo height={56} />
          </div>

          {/* Intro paragraph — shown on mobile above timeline */}
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#003F61", lineHeight: 1.65, marginBottom: 32, fontWeight: 500, textAlign: "center" }}>
            O Performance+ estrutura cada etapa do seu negócio. São cinco pilares que conecta dados, criativos, canais, estratégias e metas em uma única direção: o seu sucesso.
          </p>

          {/* 5 pillars — vertical timeline, mobile-first */}
          <div style={{ position: "relative", maxWidth: 480, margin: "0 auto 32px" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "rgba(0,63,97,0.25)",
              transform: "translateX(-50%)",
            }} />

            {[
              { num: "1", title: "Infraestrutura de Dados", desc: "Nossa base, sem mensuração de dados real, não há espaço para otimização.", side: "left" },
              { num: "2", title: "Estruturação de Criativos", desc: "Tenha certeza que seu anúncio está conversando com seu público.", side: "right" },
              { num: "3", title: "Otimização de Canais e CRO", desc: "Análise técnica de funil, e otimizações nas taxas de conversão.", side: "left" },
              { num: "4", title: "Retenção e Recorrência", desc: "Mais lucro a partir da base de clientes existente.", side: "right" },
              { num: "5", title: "Metas S.M.A.R.T.", desc: "Transformar dados em Metas ambiciosas e realistas.", side: "left" },
            ].map((pillar, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "center",
                gap: 0,
                marginBottom: i < 4 ? 28 : 0,
                flexDirection: pillar.side === "left" ? "row" : "row-reverse",
              }}>
                {/* Text */}
                <div style={{ flex: 1, textAlign: pillar.side === "left" ? "right" : "left", padding: pillar.side === "left" ? "0 16px 0 0" : "0 0 0 16px" }}>
                  <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 15, color: "#003F61", marginBottom: 3 }}>{pillar.title}</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 12, color: "#003F61", opacity: 0.85, lineHeight: 1.5 }}>{pillar.desc}</div>
                </div>
                {/* Number circle */}
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#e6c364",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Ubuntu', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#001a29",
                  flexShrink: 0,
                  zIndex: 1,
                  position: "relative",
                }}>
                  {pillar.num}
                </div>
                {/* Empty space */}
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>

          {/* Second paragraph + CTA */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#003F61", lineHeight: 1.65, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              Entregamos estrutura e mensuração real da sua empresa, evidenciando os impactos do marketing na sua margem de lucro, onde investir e quais os próximos passos a seguir.
            </p>
            <button className="btn-pill" style={{ borderColor: "#001a29", color: "#001a29", background: "rgba(0,26,41,0.1)" }}>
              Quero saber mais detalhes
            </button>
          </div>
        </div>
      </section>

      {/* ===== DADOS SEM ESTRATÉGIA ===== */}
      <section id="cases" style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            {/* Left */}
            <div>
              <h2 style={{
                fontFamily: "'Ubuntu', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 52px)",
                color: "#001a29",
                lineHeight: 1.15,
                marginBottom: 24,
              }}>
                Dados sem estratégia são só números.<br />
                Estratégia sem dados é palpite.
              </h2>
              <p style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: 18,
                color: "#1b9ce3",
                lineHeight: 1.6,
                marginBottom: 40,
              }}>
                É nesse encontro que crescimento deixa de ser acidente e vira processo.
              </p>

              <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 24, color: "#001a29", marginBottom: 24 }}>
                Alguns Resultados
              </h3>

              {/* Case tabs */}
              <div style={{ display: "flex", gap: 0, marginBottom: 0 }}>
                {cases.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCase(i)}
                    style={{
                      padding: "8px 20px",
                      fontFamily: "'Ubuntu', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: "pointer",
                      border: "none",
                      background: i === activeCase ? "#001a29" : i === 1 ? "#003f61" : "#1b9ce3",
                      color: "#fdfdfd",
                      transition: "all 0.2s",
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active case */}
            <div style={{
              background: "#001a29",
              borderRadius: 8,
              padding: 32,
              color: "#fdfdfd",
            }}>
              <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 22, color: "#e6c364", marginBottom: 8 }}>
                {cases[activeCase].title}
              </h3>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#fdfdfd", marginBottom: 16, lineHeight: 1.5 }}>
                {cases[activeCase].subtitle}
              </p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd", opacity: 0.85, marginBottom: 24, lineHeight: 1.6 }}>
                {cases[activeCase].description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                {cases[activeCase].tags.map((tag, i) => (
                  <span key={i} style={{
                    padding: "4px 12px",
                    border: "1px solid rgba(253,253,253,0.3)",
                    borderRadius: 4,
                    fontSize: 13,
                    fontFamily: "'Manrope', sans-serif",
                    color: "#fdfdfd",
                  }}>{tag}</span>
                ))}
              </div>

              {/* Stats */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {cases[activeCase].stats.map((stat, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#e6c364", fontSize: 16 }}>▶</span>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd" }}>
                      {stat.label} <strong>{stat.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PERFORMANCE+ PARA CADA TIPO ===== */}
      <section style={{ background: "#ffffff", padding: "0 0 80px" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#001a29",
            textAlign: "center",
            marginBottom: 48,
          }}>
            Performance+ para cada tipo de negócio
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Ecomm card */}
            <div style={{
              background: "#001a29",
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
            }}>
              <img src={IMAGES.caseEcomm} alt="Performance+ Ecomm" style={{ width: "100%", height: 200, objectFit: "cover", opacity: 0.4 }} />
              <div style={{ padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <path d="M24 6L42 38H6L24 6Z" fill="white" opacity="0.9"/>
                    <text x="30" y="28" fill="white" fontSize="14" fontWeight="900" fontFamily="Ubuntu">+</text>
                  </svg>
                  <div>
                    <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 20, color: "#fdfdfd" }}>Performance+</div>
                    <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 20, color: "#fdfdfd" }}>Ecomm</div>
                  </div>
                </div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#fdfdfd", marginBottom: 24, lineHeight: 1.5, textAlign: "center" }}>
                  Seu E-Commerce lucrando 24h,<br />7 dias por semana.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="btn-pill">Ver detalhes</button>
                </div>
              </div>
            </div>

            {/* Leads card */}
            <div style={{
              background: "#001a29",
              borderRadius: 8,
              overflow: "hidden",
              position: "relative",
            }}>
              <img src={IMAGES.caseLeads} alt="Performance+ Leads" style={{ width: "100%", height: 200, objectFit: "cover", opacity: 0.4 }} />
              <div style={{ padding: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                    <path d="M24 6L42 38H6L24 6Z" fill="white" opacity="0.9"/>
                    <text x="30" y="28" fill="white" fontSize="14" fontWeight="900" fontFamily="Ubuntu">+</text>
                  </svg>
                  <div>
                    <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 20, color: "#fdfdfd" }}>Performance+</div>
                    <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 20, color: "#fdfdfd" }}>Leads</div>
                  </div>
                </div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, color: "#fdfdfd", marginBottom: 24, lineHeight: 1.5, textAlign: "center" }}>
                  Mais contratos fechados, menos<br />coleção de Leads aleatórios.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="btn-pill">Ver detalhes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROADMAP SECTION ===== */}
      <section id="roadmap" style={{ background: "#001a29", padding: "80px 0", borderRadius: "60px 60px 0 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#fdfdfd",
            textAlign: "center",
            marginBottom: 56,
          }}>
            Fluxo de Trabalho:<br />RoadMap Performance+
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              {
                icon: "⚙️",
                title: "Setup Inicial",
                desc: "Tracking Web + Server-side, CRM e organização de dados. Objetivo: confiança nos dados.",
              },
              {
                icon: "🔍",
                title: "Análise de Funil",
                desc: "Identificar taxas de conversão e principais gargalos. Objetivo: Otimização dos pontos de melhoria.",
              },
              {
                icon: "📢",
                title: "Estruturação de Criativos",
                desc: "Ângulos, conceitos e hooks + testes A/B. Objetivo: validar criativos.",
              },
              {
                icon: "💰",
                title: "Otimização de Canais",
                desc: "CRO e testes A/B de UI/UX. Objetivo: maximizar taxas de conversão.",
              },
              {
                icon: "👍",
                title: "Fidelização",
                desc: "Pós-venda e aumento de LTV. Objetivo: extrair o máximo de valor.",
              },
              {
                icon: "🎯",
                title: "Expansão",
                desc: "Metas S.M.A.R.T. e projeções. Objetivo: planejar o futuro.",
              },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "#0d6ca0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 16, color: "#fdfdfd", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.8, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-pill">Quero agendar uma reunião</button>
          </div>
        </div>
      </section>

      {/* ===== ESTRATÉGIAS E FERRAMENTAS ===== */}
      <section style={{ background: "#001a29", padding: "0 0 80px" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>

            {/* Estratégias de ponta a ponta */}
            <div style={{ background: "#001d33", borderRadius: 8, padding: 32 }}>
              <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 22, color: "#fdfdfd", marginBottom: 24 }}>
                Estratégias de ponta a ponta
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Direção estratégica digital e offline.",
                  "Análise de Funis e Identificação de Gargalos",
                  "Decisões tomadas a partir de análise de dados.",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1b9ce3", marginTop: 6, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd", opacity: 0.85, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soluções Personalizadas */}
            <div style={{ background: "#001d33", borderRadius: 8, padding: 32 }}>
              <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 22, color: "#fdfdfd", marginBottom: 24 }}>
                Soluções Personalizadas
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Estruturação conforme seu tamanho.",
                  "Para iniciantes, empresas em crescimento ou em alta escala.",
                  "Imersão completa no seu negócio.",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#1b9ce3", marginTop: 6, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd", opacity: 0.85, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ferramentas */}
            <div style={{ background: "#001d33", borderRadius: 8, padding: 32 }}>
              <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 20, color: "#fdfdfd", marginBottom: 24, textAlign: "center" }}>
                Experiência com as maiores ferramentas e plataformas do mercado.
              </h3>
              <div style={{ display: "flex", justifyContent: "center", gap: 24, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, color: "#fdfdfd", fontWeight: 600 }}>∞ Meta</span>
                </div>
                {/* Google Ads */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                  </svg>
                  <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, color: "#fdfdfd", fontWeight: 600 }}>Google Ads</span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="btn-pill">Quero estruturar minha empresa</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NÃO SOMOS UMA AGÊNCIA ===== */}
      <section style={{ background: "#ffffff", padding: "80px 0", borderRadius: "60px 60px 0 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#001a29",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Não somos uma agência. Somos o parceiro que você deveria ter contratado antes.
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 18,
            color: "#001a29",
            textAlign: "center",
            marginBottom: 48,
            opacity: 0.8,
          }}>
            Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }}>
            {[
              {
                title: "Estrutura antes de Escala",
                desc: "Organizamos seus dados, processos e canais antes de investir em escala. Crescimento sem base é desperdício.",
              },
              {
                title: "Foco em Resultado",
                desc: "Cada decisão é orientada por métricas reais. Sem vaidade de métricas, apenas o que impacta seu negócio.",
              },
              {
                title: "Transparência Total",
                desc: "Relatórios claros, linguagem acessível e acesso completo aos dados da sua operação.",
              },
              {
                title: "Parceria de longo prazo",
                desc: "Não somos fornecedores. Somos parte do seu time, comprometidos com o crescimento sustentável.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f8f9fa", borderRadius: 8, padding: 28, display: "flex", gap: 16, alignItems: "flex-start", border: "1px solid #e8e8e8" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#1b9ce3", marginTop: 8, flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 18, color: "#001a29", marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#001a29", opacity: 0.7, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <button className="btn-pill-dark">Agendar reunião com Galpão</button>
          </div>
        </div>
      </section>

      {/* ===== QUEM FAZ O GRUPO GALPÃO ===== */}
      <section id="quem-faz" style={{ background: "#001a29", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#fdfdfd",
            textAlign: "center",
            marginBottom: 56,
          }}>
            Quem faz o Grupo Galpão
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            {/* Vinicius */}
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <img
                src={IMAGES.founderVinicius}
                alt="Vinícius Cruz"
                style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#1b9ce3", marginBottom: 4, fontWeight: 500 }}>
                  Especialista em Mídia Paga, Performance e Branding.
                </div>
                <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 24, color: "#fdfdfd", marginBottom: 12 }}>
                  Vinícius Cruz
                </h3>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd", opacity: 0.8, lineHeight: 1.6 }}>
                  Atua no mercado publicitário desde 2012, mesclando conhecimentos em design e marketing estratégico.
                </p>
              </div>
            </div>

            {/* Rodrigo */}
            <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
              <img
                src={IMAGES.founderRodrigo}
                alt="Rodrigo Gomes"
                style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#1b9ce3", marginBottom: 4, fontWeight: 500 }}>
                  Especialista em Soluções Operacionais, Dados e Tecnologias
                </div>
                <h3 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 24, color: "#fdfdfd", marginBottom: 12 }}>
                  Rodrigo Gomes
                </h3>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 15, color: "#fdfdfd", opacity: 0.8, lineHeight: 1.6 }}>
                  Atua no mercado desde 2011, construindo sua trajetória com foco em tecnologia, processos e eficiência operacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NOSSOS PARCEIROS ===== */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#001a29",
            textAlign: "center",
            marginBottom: 16,
          }}>
            Nossos Parceiros
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 16,
            color: "#001a29",
            textAlign: "center",
            marginBottom: 48,
            opacity: 0.7,
          }}>
            Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                logo: IMAGES.logoLeoes,
                title: "Soluções em Automação",
                desc: "Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.",
              },
              {
                logo: null,
                logoText: "LEO\nOES",
                title: "Soluções em Produção de Conteúdo",
                desc: "Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.",
              },
              {
                logo: null,
                logoText: "U\nxp",
                title: "Soluções em Recursos Web",
                desc: "Sem promessas motivacionais. Sem fórmulas genéricas. Mas com método, responsabilidade e foco no seu crescimento real.",
              },
            ].map((partner, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ width: 60, height: 60, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.title} style={{ width: 60, height: 60, objectFit: "contain" }} />
                  ) : (
                    <div style={{
                      width: 60,
                      height: 60,
                      background: "#001a29",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Ubuntu', sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      color: "#fdfdfd",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}>
                      {partner.logoText}
                    </div>
                  )}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 16, color: "#001a29", marginBottom: 8 }}>{partner.title}</h4>
                  <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#001a29", opacity: 0.7, lineHeight: 1.6 }}>{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== O QUE FALTA PARA DESTRAVAR ===== */}
      <section style={{
        background: "linear-gradient(180deg, #001a29 0%, #003f61 100%)",
        padding: "80px 0",
      }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#e6c364",
            lineHeight: 1.2,
            marginBottom: 24,
          }}>
            O que falta para você destravar?
          </h2>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 18,
            color: "#fdfdfd",
            lineHeight: 1.7,
            marginBottom: 40,
            opacity: 0.9,
          }}>
            A reunião é gratuita e sem obrigação de contratação. Em menos de 90 minutos, você terá um diagnóstico claro sobre onde sua operação de marketing pode evoluir.
          </p>
          <button className="btn-pill">Agendar reunião com Galpão</button>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section id="blog" style={{ background: "#001a29", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{
            fontFamily: "'Ubuntu', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 40px)",
            color: "#fdfdfd",
            marginBottom: 40,
          }}>
            Nossas últimas postagens
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                title: "A Nova Era dos Criativos: Como Estruturar seus Anúncios em 2026",
              },
              {
                title: "Do Caos à Clareza: Como Transformar Dados em Decisões Estratégicas",
              },
              {
                title: "Server-side Tracking: Como Garantir Qualidade de Dados e Otimizar Resultados.",
              },
            ].map((post, i) => (
              <div key={i} style={{ background: "#001d33", borderRadius: 8, overflow: "hidden", display: "flex", gap: 0 }}>
                {/* Blue rectangle placeholder as in Figma */}
                <div style={{ width: 92, minWidth: 92, background: "#45bdfe", alignSelf: "stretch" }} />
                <div style={{ padding: 20, flex: 1 }}>
                  <h4 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 15, color: "#fdfdfd", marginBottom: 16, lineHeight: 1.4 }}>
                    {post.title}
                  </h4>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button style={{
                      background: "#003f61",
                      border: "none",
                      color: "#fdfdfd",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 12,
                      fontWeight: 400,
                      cursor: "pointer",
                      padding: "4px 12px",
                      borderRadius: 6,
                    }}>
                      Ver mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section style={{ background: "#001a29", padding: "0 0 80px" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#001d33", borderRadius: 8, padding: "48px 40px" }}>
            <h2 style={{
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 36px)",
              color: "#fdfdfd",
              marginBottom: 32,
            }}>
              Assine nossa Newsletter
            </h2>
            <div style={{ display: "flex", gap: 12, maxWidth: 500 }}>
              <input
                type="email"
                placeholder="Seu e-mail"
                style={{
                  flex: 1,
                  padding: "12px 20px",
                  borderRadius: 9999,
                  border: "1px solid rgba(253,253,253,0.2)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#fdfdfd",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <button className="btn-pill" style={{ flexShrink: 0 }}>Assinar</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: "#001a29", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "60px 0 32px" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

          {/* Top: Logo + Social */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
            {/* Logo */}
            <div>
              <div style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 48px)", color: "#fdfdfd", letterSpacing: "0.05em", lineHeight: 1.1 }}>
                GRUPO<br />GALPÃO
              </div>
            </div>

            {/* Social */}
            <div>
              <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.7, marginBottom: 12 }}>Nossas Redes Sociais</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[InstagramIcon, FacebookIcon, LinkedInIcon, WhatsAppIcon].map((Icon, i) => (
                  <a key={i} href="#" style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#003f61",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fdfdfd",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, marginBottom: 48 }}>
            {/* Col 1 */}
            <div>
              <h5 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, color: "#fdfdfd", marginBottom: 16, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>Grupo Galpão</h5>
              {["Performance+ Ecomm", "Performance+ Leads", "Blog", "Nossos Parceiros"].map((link) => (
                <a key={link} href="#" style={{ display: "block", fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.7, textDecoration: "none", marginBottom: 8, transition: "opacity 0.2s" }}>{link}</a>
              ))}
            </div>

            {/* Col 2 */}
            <div>
              <h5 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, color: "#fdfdfd", marginBottom: 16, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>Materiais</h5>
              {["E-book Ecomm System 2026", "E-book Lead Quality", "Checklist E-Commerce"].map((link) => (
                <a key={link} href="#" style={{ display: "block", fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.7, textDecoration: "none", marginBottom: 8 }}>{link}</a>
              ))}
            </div>

            {/* Col 3 */}
            <div>
              <h5 style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: 700, fontSize: 14, color: "#fdfdfd", marginBottom: 16, opacity: 0.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>Contato</h5>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.7, marginBottom: 8 }}>(32) 9999-0000</p>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: "#fdfdfd", opacity: 0.7, marginBottom: 16 }}>contato@grupogalpaohub.com.br</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {["Política de Privacidade", "Termos de Serviços", "Política de Uso"].map((link) => (
                  <a key={link} href="#" style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#fdfdfd", opacity: 0.5, textDecoration: "none" }}>{link}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, textAlign: "center" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: "#fdfdfd", opacity: 0.4 }}>
              © 2026 Grupo Galpão. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
