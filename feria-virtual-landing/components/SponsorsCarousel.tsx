"use client";

import Image from "next/image";

export default function SponsorsCarousel() {
  const logos = [
    "/logos/empresa1.png",
    "/logos/empresa2.png",
    "/logos/empresa3.png",
    "/logos/empresa4.png",
    "/logos/empresa5.png",
    "/logos/empresa6.png",
    "/logos/empresa7.png",
  ];

  // Duplicamos el array para crear un efecto infinito
  const infiniteLogos = [...logos, ...logos];

  return (
    <section className="bg-[#003594] py-12 overflow-hidden">
      <h2 className="text-center text-white text-3xl font-bold mb-8 font-[Manrope]">
        Empresas participantes
      </h2>

      <div className="relative w-full flex overflow-hidden">
        <div className="animate-scroll flex gap-12">
          {infiniteLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index}`}
                width={140}
                height={70}
                className="opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
