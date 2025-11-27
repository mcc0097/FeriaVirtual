"use client";

import { FaUserCheck, FaBuilding, FaLaptop } from "react-icons/fa";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#003594] text-white py-20 px-6 font-[Manrope]">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold uppercase mb-12 tracking-wide">
          ¿Cómo funciona la feria?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Paso 1: Registro */}
          <div className="bg-[#002B70] p-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <FaUserCheck className="text-white text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Regístrate</h3>
            <p className="opacity-90 leading-relaxed">
              Crea tu cuenta como empresa o candidato para acceder a la feria.
            </p>
          </div>

          {/* Paso 2: Explora */}
          <div className="bg-[#002B70] p-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <FaBuilding className="text-white text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Explora</h3>
            <p className="opacity-90 leading-relaxed">
              Visita los stands virtuales, descubre empresas y oportunidades.
            </p>
          </div>

          {/* Paso 3: Participa */}
          <div className="bg-[#002B70] p-10 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)]">
            <FaLaptop className="text-white text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Participa</h3>
            <p className="opacity-90 leading-relaxed">
              Interactúa con empresas, envía tu CV y asiste a las actividades.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
