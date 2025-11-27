"use client";

import Image from "next/image";

export default function Header() {
  // Función para hacer scroll suave al FAQ
  const scrollToFAQ = () => {
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo-davante-azul.png"
          alt="Davante Logo Azul"
          width={150}
          height={150}
          priority
        />
      </div>

      <nav className="space-x-6 text-[#003594] font-medium">
        <button
          onClick={scrollToFAQ}
          className="hover:text-[#FF5B41] transition"
        >
          Ayuda
        </button>
      </nav>
    </header>
  );
}
