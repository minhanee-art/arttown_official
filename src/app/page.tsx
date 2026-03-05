"use client";

import { useState, useEffect, useRef } from "react";

/* ───────────────────────────────────────────
   Navigation
   ─────────────────────────────────────────── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#philosophy", label: "교육철학" },
    { href: "#curriculum", label: "커리큘럼" },
    { href: "#gallery", label: "갤러리" },
    { href: "#sns", label: "SNS" },
    { href: "#contact", label: "오시는 길" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">미</span>
          </div>
          <span className="heading-section text-lg tracking-tight">
            미술마을
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2.5 bg-foreground text-white text-sm font-medium rounded-full hover:bg-foreground/85 transition-colors"
          >
            상담 문의
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-transform ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium py-2"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 px-5 py-3 bg-foreground text-white text-center font-medium rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              상담 문의
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────────────────────────────────────────
   Hero Section
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-accent-soft opacity-60" />
        <div className="absolute bottom-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent-warm/20" />
        <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-accent/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-6">
            Art Village Academy
          </p>
          <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-8">
            아이들의
            <br />
            <span className="text-accent">창의력</span>이
            <br />
            자라는 곳
          </h1>
          <p className="text-text-secondary text-lg lg:text-xl leading-relaxed max-w-lg mb-10">
            5세부터 중등까지, 미술마을에서 아이들은 자신만의 시선으로 세상을
            바라보고 표현하는 법을 배웁니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#philosophy"
              className="px-8 py-4 bg-foreground text-white font-medium rounded-full hover:bg-foreground/85 transition-colors"
            >
              교육철학 알아보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-white transition-colors"
            >
              상담 예약
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-2 hidden lg:block">
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl overflow-hidden border border-border">
              <div className="h-full flex flex-col items-center justify-center p-10 text-center">
                <div className="w-24 h-24 rounded-full bg-accent-warm/30 flex items-center justify-center mb-6">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 30c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm8-16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="heading-section text-2xl mb-2">미술마을</p>
                <p className="text-text-secondary text-sm">
                  모든 아이는 예술가입니다
                </p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-accent rounded-2xl rotate-12 flex items-center justify-center text-white text-2xl shadow-lg">
              🎨
            </div>
            <div className="absolute bottom-4 right-0 w-16 h-16 bg-accent-warm rounded-full flex items-center justify-center text-white text-xl shadow-lg">
              ✏️
            </div>
            <div className="absolute top-1/2 -left-4 w-14 h-14 bg-foreground rounded-xl -rotate-6 flex items-center justify-center text-white text-lg shadow-lg">
              🖌️
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-text-secondary/40 animate-pulse" />
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Stats Bar
   ─────────────────────────────────────────── */
function Stats() {
  const stats = [
    { number: "15+", label: "년 교육 경력" },
    { number: "500+", label: "명 졸업생" },
    { number: "50+", label: "회 전시 참여" },
    { number: "98%", label: "학부모 만족도" },
  ];
  return (
    <section className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="heading-display text-4xl lg:text-5xl text-accent-warm mb-2">
              {s.number}
            </p>
            <p className="text-white/70 text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Philosophy Section
   ─────────────────────────────────────────── */
function Philosophy() {
  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
          <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "과정 중심 교육",
      desc: "결과보다 과정을 중시합니다. 아이가 그림을 그리며 느끼고 생각하는 모든 순간이 교육입니다.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4l3.09 9.51H29l-8.01 5.82L24.09 29 16 23.18 7.91 29l3.01-9.67L3 13.51h9.91L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      title: "개성 존중",
      desc: "모든 아이에게는 고유한 시선이 있습니다. 획일적 정답이 아닌, 각자의 표현을 존중하고 격려합니다.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "창의적 사고력",
      desc: "미술을 통해 관찰력, 상상력, 문제해결력을 키웁니다. 미술은 생각하는 힘을 기르는 최고의 도구입니다.",
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Philosophy
          </p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            원장선생님의
            <br />
            교육 철학
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            미술마을은 &ldquo;모든 아이는 예술가이다&rdquo;라는 믿음에서
            출발합니다. 아이들이 자유롭게 상상하고, 실험하며, 자신만의 세계를
            만들어갈 수 있도록 안내합니다.
          </p>
        </div>

        <div className="bg-foreground text-white rounded-3xl p-10 lg:p-16 mb-20">
          <blockquote className="max-w-3xl">
            <p className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
              &ldquo;아이들에게 그림을 &lsquo;잘&rsquo; 그리게 하는 것이 아니라,
              그림을 통해 세상을 &lsquo;깊이&rsquo; 바라보게 하는 것.
              그것이 미술마을의 교육입니다.&rdquo;
            </p>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                원
              </div>
              <div>
                <p className="font-bold">원장 선생님</p>
                <p className="text-white/60 text-sm">미술마을 미술학원 대표</p>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-8 rounded-2xl border border-border hover:border-accent/30 hover:bg-accent-soft/30 transition-all duration-300"
            >
              <div className="text-accent mb-6">{v.icon}</div>
              <h3 className="heading-section text-xl mb-3">{v.title}</h3>
              <p className="text-text-secondary leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Curriculum Section
   ─────────────────────────────────────────── */
function Curriculum() {
  const programs = [
    {
      age: "5 - 7세",
      title: "꼬마 예술가",
      subtitle: "감각 탐색 미술",
      desc: "다양한 재료와 감각 놀이를 통해 미술에 대한 흥미와 표현력의 기초를 형성합니다.",
      topics: ["감각 탐색 놀이", "색채 실험", "자유 드로잉", "입체 조형"],
      color: "bg-accent-warm/20 text-accent-warm",
      accent: "border-accent-warm/40",
    },
    {
      age: "초등 1 - 3학년",
      title: "상상 화가",
      subtitle: "창의 표현 미술",
      desc: "관찰력과 상상력을 바탕으로 자신만의 작품 세계를 구축하기 시작합니다.",
      topics: ["관찰 드로잉", "수채화 기초", "판화 / 콜라주", "스토리텔링 미술"],
      color: "bg-accent/15 text-accent",
      accent: "border-accent/40",
    },
    {
      age: "초등 4 - 6학년",
      title: "주니어 아티스트",
      subtitle: "기법 심화 미술",
      desc: "미술의 기본 원리를 이해하고, 다양한 기법을 실험하며 작품의 완성도를 높여갑니다.",
      topics: ["소묘 / 정밀묘사", "아크릴 / 유화", "디자인 기초", "미술사 탐구"],
      color: "bg-foreground/10 text-foreground",
      accent: "border-foreground/30",
    },
    {
      age: "중등",
      title: "영 크리에이터",
      subtitle: "심화 & 포트폴리오",
      desc: "미술 입시를 포함한 심화 교육과 개인 포트폴리오 제작을 진행합니다.",
      topics: ["인체 드로잉", "포트폴리오 구성", "입시 실기", "현대미술 분석"],
      color: "bg-accent-warm/20 text-accent-warm",
      accent: "border-accent-warm/40",
    },
  ];

  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Curriculum
          </p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            연령별
            <br />
            맞춤 커리큘럼
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            아이의 발달 단계에 맞춘 체계적인 커리큘럼으로, 자연스러운 성장을
            이끌어냅니다. 각 단계는 유기적으로 연결되어 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl border ${p.accent} p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300`}
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${p.color}`}
              >
                {p.age}
              </span>
              <h3 className="heading-section text-2xl mb-1">{p.title}</h3>
              <p className="text-accent text-sm font-medium mb-4">
                {p.subtitle}
              </p>
              <p className="text-text-secondary leading-relaxed mb-6">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.topics.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-background rounded-lg text-xs font-medium text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Gallery Section
   ─────────────────────────────────────────── */
function Gallery() {
  const works = [
    { color: "bg-rose-200", label: "수채화 — 봄의 정원", age: "초등 3학년" },
    { color: "bg-blue-200", label: "아크릴 — 바닷속 세계", age: "초등 5학년" },
    { color: "bg-amber-200", label: "콜라주 — 나의 우주", age: "7세" },
    { color: "bg-emerald-200", label: "소묘 — 정물화", age: "중등 1학년" },
    { color: "bg-purple-200", label: "판화 — 동물 친구들", age: "초등 2학년" },
    { color: "bg-orange-200", label: "입체조형 — 상상의 집", age: "6세" },
  ];

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Gallery
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
              학생 작품
            </h2>
          </div>
          <p className="text-text-secondary mt-4 md:mt-0 max-w-md">
            아이들의 진지하고도 즐거운 시선이 담긴 작품들입니다. 각 작품에는
            아이만의 이야기가 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {works.map((w, i) => (
            <div
              key={i}
              className={`gallery-item ${w.color} rounded-2xl aspect-[4/5] flex flex-col items-center justify-center p-6 cursor-pointer relative overflow-hidden group`}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="text-foreground/20 mb-4"
              >
                <rect
                  x="8"
                  y="8"
                  width="48"
                  height="48"
                  rx="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M8 44l12-16 8 10 6-8 22 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-foreground/50 text-sm font-medium text-center">
                작품 이미지 영역
              </p>
              <div className="absolute inset-0 bg-foreground/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-6">
                <p className="text-white font-bold text-lg text-center mb-2">
                  {w.label}
                </p>
                <p className="text-white/70 text-sm">{w.age}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-secondary text-sm mt-8">
          * 실제 학생 작품 이미지로 교체 예정
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   SNS & Blog Section
   ─────────────────────────────────────────── */
function SNS() {
  return (
    <section id="sns" className="py-24 lg:py-32 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-warm font-bold text-sm tracking-widest uppercase mb-4">
            Follow Us
          </p>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            미술마을의
            <br />
            이야기를 만나보세요
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            인스타그램과 블로그에서 수업 현장, 학생 작품, 교육 이야기를
            생생하게 전합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/10 hover:bg-white/15 rounded-3xl p-10 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <h3 className="heading-section text-xl">Instagram</h3>
                <p className="text-white/50 text-sm">@misulmaul_art</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              수업 현장의 생생한 순간들과 아이들의 작품을 매일 업데이트합니다.
              미술마을의 일상을 만나보세요.
            </p>
            <span className="inline-flex items-center gap-2 text-accent-warm font-medium text-sm group-hover:gap-3 transition-all">
              인스타그램 바로가기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          <a
            href="https://blog.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/10 hover:bg-white/15 rounded-3xl p-10 transition-colors duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <h3 className="heading-section text-xl">Blog</h3>
                <p className="text-white/50 text-sm">미술마을 공식 블로그</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              교육 칼럼, 미술 교육 팁, 전시 후기 등 깊이 있는 콘텐츠를
              블로그에서 만나보실 수 있습니다.
            </p>
            <span className="inline-flex items-center gap-2 text-accent-warm font-medium text-sm group-hover:gap-3 transition-all">
              블로그 바로가기
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Testimonials
   ─────────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    {
      text: "아이가 미술마을에 다니면서 표현력이 눈에 띄게 좋아졌어요. 자기 생각을 그림으로 자유롭게 표현하는 모습이 정말 뿌듯합니다.",
      name: "김OO 학부모님",
      child: "초등 2학년",
    },
    {
      text: "원장선생님의 철학이 느껴지는 수업이에요. 아이를 존중해주시고, 아이 스스로 생각할 수 있도록 이끌어주십니다.",
      name: "이OO 학부모님",
      child: "7세",
    },
    {
      text: "다른 학원에서는 따라 그리기만 했는데, 여기서는 아이가 직접 생각하고 만들어요. 매일 학원 가고 싶다고 합니다.",
      name: "박OO 학부모님",
      child: "초등 4학년",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-accent-soft/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Reviews
          </p>
          <h2 className="heading-display text-4xl sm:text-5xl mb-6">
            학부모님 후기
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4 text-accent-warm">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 1l2.06 4.17 4.6.67-3.33 3.25.79 4.58L8 11.49l-4.12 2.18.79-4.58L1.34 5.84l4.6-.67L8 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-text-secondary text-xs">{r.child}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Contact / Map Section
   ─────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Contact
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-8">
              오시는 길
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="heading-section text-lg mb-2">주소</h3>
                <p className="text-text-secondary">
                  서울특별시 OO구 OO로 123, 2층
                </p>
              </div>
              <div>
                <h3 className="heading-section text-lg mb-2">연락처</h3>
                <p className="text-text-secondary">
                  전화: 02-1234-5678
                  <br />
                  카카오톡: 미술마을
                </p>
              </div>
              <div>
                <h3 className="heading-section text-lg mb-2">운영시간</h3>
                <p className="text-text-secondary">
                  평일: 14:00 - 20:00
                  <br />
                  토요일: 10:00 - 17:00
                  <br />
                  일요일 및 공휴일 휴무
                </p>
              </div>

              <a
                href="https://map.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-green-500 text-white font-medium rounded-2xl hover:bg-green-600 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    fill="currentColor"
                  />
                </svg>
                네이버 지도에서 찾기
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-border rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-text-secondary">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mx-auto mb-3 text-text-secondary/50"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                </svg>
                <p className="text-sm">네이버 지도 영역</p>
                <p className="text-xs mt-1">
                  (네이버 지도 API 또는 iframe 삽입 예정)
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-8">
              <h3 className="heading-section text-xl mb-6">상담 문의</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    학부모님 성함
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent transition-colors"
                    placeholder="이름을 입력해주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    연락처
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    자녀 나이
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent transition-colors"
                    placeholder="예: 7세, 초등 3학년"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    문의 내용
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="궁금한 점을 남겨주세요"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-foreground text-white font-medium rounded-xl hover:bg-foreground/85 transition-colors"
                >
                  상담 신청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Footer
   ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">미</span>
              </div>
              <span className="heading-section text-lg">미술마을</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              아이들의 창의력이 자라는 곳,
              <br />
              미술마을 미술학원
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white/80">바로가기</h4>
            <div className="space-y-2.5">
              <a href="#philosophy" className="block text-white/50 text-sm hover:text-white transition-colors">교육철학</a>
              <a href="#curriculum" className="block text-white/50 text-sm hover:text-white transition-colors">커리큘럼</a>
              <a href="#gallery" className="block text-white/50 text-sm hover:text-white transition-colors">갤러리</a>
              <a href="#contact" className="block text-white/50 text-sm hover:text-white transition-colors">오시는 길</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white/80">SNS</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="인스타그램"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="블로그"
              >
                <span className="text-white font-bold text-sm">N</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs">
            &copy; 2025 미술마을 미술학원. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────
   Intersection Observer for Animations
   ─────────────────────────────────────────── */
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ───────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <AnimatedSection>
          <Philosophy />
        </AnimatedSection>
        <AnimatedSection>
          <Curriculum />
        </AnimatedSection>
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
        <SNS />
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
