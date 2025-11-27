"use client";

import Image from "next/image";

export default function DescriptionSection() {
  return (
    <section className="bg-[#003594] text-white py-16 px-6 text-center font-[Manrope]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Botón Acceder ahora */}
        <button
          className="bg-[#FF5B41] text-white font-bold py-3 px-10 rounded-full text-lg
          transition-transform duration-300 transform hover:scale-105
          hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:bg-[#e04c34]"
        >
          Acceder ahora
        </button>

        {/* Bloques Empresas y Candidatos */}
        <div className="flex flex-col md:flex-row justify-center gap-12 mt-8">

          {/* Empresas */}
          <div
            className="text-center cursor-pointer"
            onClick={() =>
              document
                .getElementById("empresas-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide transition duration-300 hover:text-[#FF5B41]">
              EMPRESAS
            </h3>
            <Image
              src="/empresas.png"
              alt="Empresas"
              width={350}
              height={230}
              className="mx-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:ring-4 hover:ring-[#003594]"
            />
          </div>

          {/* Candidatos */}
          <div
            className="text-center cursor-pointer"
            onClick={() =>
              document
                .getElementById("candidatos-section")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide transition duration-300 hover:text-[#FF5B41]">
              CANDIDATOS
            </h3>
            <Image
              src="/candidatos.png"
              alt="Candidatos"
              width={350}
              height={230}
              className="mx-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:ring-4 hover:ring-[#003594]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

