export default function FinalDescriptionsSection() {
  return (
    <section className="bg-white text-[#003594] py-20 px-8 font-[Manrope]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* EMPRESAS */}
        <div id="empresas-section" className="space-y-4">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-[#003594]">
            Empresas
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            La Feria Virtual Davante permite a las empresas conectar con talento
            de forma directa, programar entrevistas y presentar sus ofertas en
            un entorno innovador y accesible desde cualquier lugar.
          </p>
        </div>

        {/* CANDIDATOS */}
        <div id="candidatos-section" className="space-y-4">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-[#003594]">
            Candidatos
          </h2>
          <p className="text-lg leading-relaxed text-gray-800">
            Los candidatos pueden explorar empresas, asistir a charlas,
            presentar su perfil profesional y participar en procesos de selección
            en tiempo real dentro de un entorno digital interactivo.
          </p>
        </div>

      </div>
    </section>
  );
}
