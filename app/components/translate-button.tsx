"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaLanguage } from "react-icons/fa";

export default function TranslateButton() {
  const [show, setShow] = useState(false);
  const router = useRouter()

  const handleLanguageChange = (language: string) => {
    router.push(`/${language}/resume`)
  }
  return (
    <div className="relative w-8 h-8">
      <button
        className="btn btn-sm btn-ghost"
        popoverTarget="translate-menu"
        style={{
          anchorName: "--anchor-translate"
        } as React.CSSProperties}
        onClick={() => setShow(!show)}
      >
        <FaLanguage size={24} />
      </button>

      <ul
        className="dropdown dropdown-end menu rounded-box bg-base-100 shadow-md"
        id="translate-menu"
        popover="auto"
        style={{
          positionAnchor: "--anchor-translate"
        } as React.CSSProperties}
      >
        <li>
          <a onClick={() => handleLanguageChange("zh-TW")}>中文</a>
        </li>
        <li>
          <a onClick={() => handleLanguageChange("en")}>English</a>
        </li>
      </ul>
    </div>
  );
}