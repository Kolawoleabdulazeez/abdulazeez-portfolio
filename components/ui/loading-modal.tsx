"use client";

import { useEffect, useState } from "react";

const FLIGHT_S = 3.2; // one full crossing
const MIN_MS = FLIGHT_S * 1000; // always show at least one full flight
const MAX_MS = 5000; // never block the hero longer than this
const FADE_MS = 600;

const ACCENT = "linear-gradient(135deg, #a855f7, #3b82f6)";
const NAME_WORDS = ["Abdulazeez", "Kolawole"];

export function LoadingModal() {
  const [hiding, setHiding] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let done = false;
    let hideTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const hide = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_MS - (performance.now() - start));
      hideTimer = setTimeout(() => {
        setHiding(true);
        removeTimer = setTimeout(() => setRemoved(true), FADE_MS);
      }, wait);
    };

    const capTimer = setTimeout(hide, MAX_MS);

    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide, { once: true });

    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(capTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = hiding ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hiding]);

  if (removed) return null;

  let letterIndex = 0;

  return (
    <div
      role="status"
      aria-label="Loading"
      style={{ transitionDuration: `${FADE_MS}ms`, backgroundColor: "#03031a" }}
      className={`fixed inset-0 z-[100] overflow-hidden transition-opacity ease-out ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* grid echoing the hero */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at center, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />

      {/* drifting stars (right to left, for a sense of speed) */}
      <div className="ak-stars absolute inset-x-0 top-[34%] h-[22%]" aria-hidden="true" />

      {/* flight lane */}
      <div className="absolute inset-x-0 top-[45%] -translate-y-1/2" aria-hidden="true">
        <div className="ak-fly flex items-center">
          <div
            className="h-[3px] w-40 rounded-full sm:w-64"
            style={{ backgroundImage: "linear-gradient(90deg, transparent, #a855f7, #3b82f6)" }}
          />
          <svg viewBox="0 0 120 60" className="-ml-1 h-12 w-24 shrink-0 sm:h-16 sm:w-32">
            <g className="ak-flame">
              <path d="M20 30 L2 22 L10 30 L2 38 Z" fill="#fb923c" />
              <path d="M20 30 L8 26 L13 30 L8 34 Z" fill="#fde047" />
            </g>
            <path d="M30 22 L20 8 L48 17 Z" fill="#a855f7" />
            <path d="M30 38 L20 52 L48 43 Z" fill="#a855f7" />
            <path d="M18 30 C18 17 58 11 100 30 C58 49 18 43 18 30 Z" fill="#f1f5f9" />
            <path d="M70 19 C85 22 94 27 100 30 C94 33 85 38 70 41 C76 33 76 27 70 19 Z" fill="#c7d2fe" />
            <circle cx="56" cy="30" r="7.5" fill="#3b82f6" stroke="#a855f7" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* name block */}
      <div className="absolute inset-x-0 top-[58%] flex flex-col items-center gap-3 px-6 text-center">
        <h1
          className="flex flex-wrap justify-center gap-x-3 text-2xl font-bold tracking-tight sm:text-4xl"
          aria-hidden="true"
        >
          {NAME_WORDS.map((word) => (
            <span key={word} className="inline-block whitespace-nowrap">
              {word.split("").map((char) => {
                const i = letterIndex++;
                return (
                  <span
                    key={i}
                    className="ak-letter inline-block text-transparent"
                    style={{
                      animationDelay: `${i * 55}ms`,
                      backgroundImage: ACCENT,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          ))}
        </h1>

        <p className="ak-role text-xs uppercase tracking-[0.35em] text-indigo-200/70 sm:text-sm">
          Front-end Developer
        </p>

        <p className="ak-loading text-xs text-indigo-200/50">
          Loading<span className="ak-dot">.</span>
          <span className="ak-dot">.</span>
          <span className="ak-dot">.</span>
        </p>
      </div>

      <style>{`
        @keyframes ak-fly {
          0%   { transform: translateX(-110%); }
          100% { transform: translateX(100vw); }
        }
        @keyframes ak-flicker {
          0%, 100% { transform: scaleX(1); }
          50%      { transform: scaleX(0.55); }
        }
        @keyframes ak-stars {
          0%   { background-position: 0 0; }
          100% { background-position: -400px 0; }
        }
        @keyframes ak-letter-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ak-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes ak-dot {
          0%, 20%  { opacity: .2; }
          50%      { opacity: 1; }
          100%     { opacity: .2; }
        }

        .ak-fly {
          width: max-content;
          animation: ak-fly ${FLIGHT_S}s cubic-bezier(.35,.1,.25,1) infinite;
        }
        .ak-flame {
          transform-box: fill-box;
          transform-origin: right center;
          animation: ak-flicker .22s ease-in-out infinite;
        }
        .ak-stars {
          background-image:
            radial-gradient(1.5px 1.5px at 20px 30px, #fff, transparent),
            radial-gradient(1px 1px at 120px 80px, #c7d2fe, transparent),
            radial-gradient(1.5px 1.5px at 220px 20px, #fff, transparent),
            radial-gradient(1px 1px at 320px 100px, #a5b4fc, transparent);
          background-size: 400px 140px;
          opacity: .7;
          animation: ak-stars 5s linear infinite;
        }
        .ak-letter { animation: ak-letter-in .5s ease-out both; }
        .ak-role   { animation: ak-fade-in .6s ease-out 1.1s both; }
        .ak-loading { animation: ak-fade-in .6s ease-out 1.5s both; }
        .ak-dot { animation: ak-dot 1.2s ease-in-out infinite; }
        .ak-dot:nth-child(2) { animation-delay: .2s; }
        .ak-dot:nth-child(3) { animation-delay: .4s; }

        @media (prefers-reduced-motion: reduce) {
          .ak-fly, .ak-flame, .ak-stars, .ak-letter, .ak-role, .ak-loading, .ak-dot {
            animation: none;
          }
          .ak-fly { transform: translateX(calc(50vw - 50%)); }
        }
      `}</style>
    </div>
  );
}