"use client"

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FiGlobe } from "react-icons/fi";
import Image from "next/image";

export default function FooterANA() {
  return (
    <footer className="mt-8 sm:mt-12">
      {/* Franja roja con dirección y redes */}
      <div className="bg-[#C2002F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-40 flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-6 py-3 sm:py-4">
          <p className="text-center lg:text-left text-xs sm:text-sm lg:text-base font-bariol leading-relaxed px-2 lg:px-0 flex-shrink-0">
            Tecoyotitla 412 Col. Exhacienda de Guadalupe Chimalistac, Álvaro
            Obregón C.P. 01050, Ciudad de México
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
            <p className="text-xs sm:text-sm whitespace-nowrap font-bariol">
              SÍGUENOS
            </p>
            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
              {[
                {
                  href: "https://www.facebook.com/ANASegurosMexico",
                  icon: <FaFacebookF className="text-sm sm:text-base lg:text-lg" />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/ANASeguros",
                  icon: <FaXTwitter className="text-sm sm:text-base lg:text-lg" />,
                  label: "Twitter",
                },
                {
                  href: "https://www.youtube.com/channel/UC_OT5N8LtDMJ3CZ6ZwhyR7g",
                  icon: <FaYoutube className="text-sm sm:text-base lg:text-lg" />,
                  label: "YouTube",
                },
                {
                  href: "https://promo.anaseguros.com.mx/ana-asistente-virtual.html",
                  icon: <FaWhatsapp className="text-sm sm:text-base lg:text-lg" />,
                  label: "WhatsApp",
                },
                {
                  href: "https://www.instagram.com/anasegurosmx",
                  icon: <FaInstagram className="text-sm sm:text-base lg:text-lg" />,
                  label: "Instagram",
                },
                {
                  href: "https://mx.linkedin.com/company/ana-compa-ia-de-seguros-s-a-de-c-v-",
                  icon: <FaLinkedinIn className="text-sm sm:text-base lg:text-lg" />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.tiktok.com/@anasegurosmx",
                  icon: <FaTiktok className="text-sm sm:text-base lg:text-lg" />,
                  label: "TikTok",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white flex items-center justify-center text-white hover:opacity-80 transition-all duration-200 hover:scale-105"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Franja gris con slogan y logos */}
      <div className="bg-gradient-to-b from-white to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-40 xl:pr-24 py-4 sm:py-6">
          <div className="flex flex-col xl:flex-row items-center xl:items-center gap-4 sm:gap-6 xl:gap-8">
            {/* Logo arrows_slogan */}
            <div className="flex-shrink-0 order-1 xl:order-1">
              <div className="relative w-[100px] sm:w-[120px] h-[40px] sm:h-[48px]">
                <Image
                  src="/logos/arrows_slogan.webp"
                  alt="Arrows Slogan"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Slogan y enlaces */}
            <div className="flex-1 text-center xl:text-left order-2 xl:order-2">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C2002F] mb-2 font-bariol leading-tight">
                #EstasEnBuenasManos
              </p>
              <div className="flex flex-col sm:flex-row items-center xl:items-start gap-1 sm:gap-2 xl:gap-3 text-xs sm:text-sm font-aktiv">
                <FiGlobe className="text-[#C2002F] w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <a
                  href="https://www.anaseguros.com.mx"
                  className="text-gray-600 no-underline hover:text-[#C2002F] transition-colors break-all sm:break-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.anaseguros.com.mx
                </a>
                <span className="hidden sm:inline text-[#C2002F] mx-1">|</span>
                <a
                  href="mailto:contacto@anaseguros.com.mx"
                  className="text-gray-600 no-underline hover:text-[#C2002F] transition-colors break-all sm:break-normal"
                >
                  contactoana@anaseguros.com.mx
                </a>
              </div>
            </div>

            {/* Logos institucionales */}
            <div className="flex items-center justify-center xl:justify-end gap-2 sm:gap-4 xl:gap-6 order-3 xl:order-3 flex-wrap">
              <a href="empresa_socialmente_responsable.html" className="hover:opacity-80 transition-all duration-200">
                <Image
                  src="/logos/esr.webp"
                  alt="Empresa Socialmente Responsable"
                  width={80}
                  height={32}
                  className="max-h-8 sm:max-h-10 lg:max-h-12 w-auto"
                  style={{ height: "auto", width: "auto" }}
                  loading="lazy"
                />
              </a>
              <a
                href="https://sellosdeconfianza.org.mx/MuestraCertificado.php?NUMERO_SERIE=MD_u035"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-200"
              >
                <Image
                  src="/logos/sello.webp"
                  alt="Sello Datos Personales"
                  width={80}
                  height={32}
                  className="max-h-8 sm:max-h-10 lg:max-h-12 w-auto"
                  style={{ height: "auto", width: "auto" }}
                  loading="lazy"
                />
              </a>
              <div className="hover:opacity-80 transition-all duration-200">
                <Image
                  src="/logos/valore.webp"
                  alt="Grupo Valore"
                  width={80}
                  height={32}
                  className="max-h-8 sm:max-h-10 lg:max-h-12 w-auto"
                  style={{ height: "auto", width: "auto" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white text-gray-600 text-center py-3 sm:py-4 text-xs sm:text-sm font-bariol px-4">
        © ANA SEGUROS, Derechos Reservados 2025.
      </div>
    </footer>
  );
}
