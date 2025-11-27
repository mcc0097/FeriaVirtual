import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-[#003594] text-white py-6 mt-10">
      <Image
        src="/logo-davante.png"
        alt="Davante Logo"
        width={150}
        height={150}
        className="mb-3"
      />
      
    </footer>
  );
}
