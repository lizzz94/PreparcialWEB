"use client"

import { useTransition } from "react"
import { setLanguage } from "../actions"

interface LanguageSwitcherProps {
  currentLang: "en" | "es"
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition()

  const handleChange = (lang: string) => {
    startTransition(async () => {
      await setLanguage(lang)
    })
  }

  return (
    <div className="lang-switcher">
      <button
        onClick={() => handleChange("en")}
        disabled={currentLang === "en" || isPending}
        className={currentLang === "en" ? "active" : ""}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>
      <span className="divider">|</span>
      <button
        onClick={() => handleChange("es")}
        disabled={currentLang === "es" || isPending}
        className={currentLang === "es" ? "active" : ""}
        aria-label="Cambiar a Español"
      >
        🇪🇸 ES
      </button>

      <style jsx>{`
        .lang-switcher {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 6px 12px;
          font-family: 'Courier New', monospace;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          color: #94a3b8;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s ease;
          letter-spacing: 0.05em;
        }

        button:hover:not(:disabled) {
          color: #1e293b;
          background: #e2e8f0;
        }

        button.active {
          color: #1e293b;
          background: #ffffff;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          cursor: default;
        }

        button:disabled:not(.active) {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .divider {
          color: #cbd5e1;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  )
}
