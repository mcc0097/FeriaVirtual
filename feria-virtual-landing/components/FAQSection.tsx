"use client";
import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es la Feria Virtual Davante?",
      answer:
        "Es un espacio digital donde empresas y candidatos pueden conectar e interactuar dentro de un entorno innovador y accesible.",
    },
    {
      question: "¿Necesito instalar algo para acceder?",
      answer:
        "No. Solo necesitas un navegador y conexión a internet. La feria funciona directamente desde la web.",
    },
    {
      question: "¿Cómo pueden las empresas participar?",
      answer:
        "Las empresas pueden registrarse, crear su stand virtual, publicar ofertas y gestionar entrevistas.",
    },
    {
      question: "¿Los candidatos pueden hablar con empresas en directo?",
      answer:
        "Sí, la feria permite chats, videollamadas y reuniones virtuales en tiempo real.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"   
      className="py-20 px-8 bg-[#003594] text-white font-[Manrope]"
    >
      {/* Título */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold uppercase tracking-wide text-white">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-200 mt-4">
          Encuentra respuestas rápidas a las dudas más comunes sobre la Feria Virtual Davante.
        </p>
      </div>

      {/* Lista FAQ */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg shadow-md rounded-xl p-6 cursor-pointer border border-white/20 hover:shadow-2xl transition"
              onClick={() => toggleFAQ(index)}
            >
              {/* Pregunta */}
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <span className="text-2xl text-[#FF5B41]">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              {/* Respuesta con fade-in */}
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                }`}
              >
                <p className="text-gray-200">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
