import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "./routes"; // Importar las rutas

// Componente para íconos de redes sociales
function SocialIcon({ label, path, iconPath }) {
  return (
    <Link to={path} className="hover:opacity-80">
      <span className="sr-only">{label}</span>
      <div className="p-2 border border-white/20 rounded-full">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d={iconPath} />
        </svg>
      </div>
    </Link>
  );
}

// Componente para listas de enlaces
function LinkList({ title, links }) {
  return (
    <div>
      <h3 className="text-[18px] font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-white">°</span>
            <Link
              to={link.path}
              className="text-gray-300 hover:text-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente Footer Principal
export function Footer() {
  return (
    <footer className="bg-[#19354A] px-6 md:px-20 text-white">
      <div className="container mx-auto">
        {/* Layout general */}
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4 py-10">
          {/* Columna de información */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img width={120} src="logo.svg" alt="Logo" />
            </Link>
            <address className="not-italic text-sm space-y-2">
              <p>Av. Gaona 3707 - Piso 7</p>
              <p>Ciudad Autónoma de Buenos Aires</p>
              <a href="mailto:info@baekyco.com" className="block hover:underline">
                info@baekyco.com
              </a>
              <a href="https://wa.me/5491145822972" target="_blank" className="block hover:underline">
                +54 11 4582-2972
              </a>
              <p>Lunes a Viernes de 9:00 a 18:00</p>
              <p>Sab, Dom y Feriados cerrado</p>
            </address>
          </div>
    <div className="flex justify-center mx-auto gap-40 md:gap-32">

          {/* Columna de enlaces */}
          <div className="space-y-6">
            <LinkList title="Desarrollos" links={footerLinks.desarrollo} />
          </div>

          <div className="space-y-6">
            <LinkList title="Mapa de sitio" links={footerLinks.mapaSitio} />
          </div>

    </div>
          {/* Columna del eslogan */}
          <div className="hidden md:flex items-center justify-end lg:col-span-1">
            <p className="text-xl md:text-2xl font-bold text-right leading-tight">
              EDIFICAMOS CONCEPTOS,
              <br />
              CONSTRUIMOS LEGADO.
            </p>
          </div>
        </div>

        {/* Sección inferior */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Íconos sociales */}
          <div className="flex space-x-4">
            {footerLinks.socialLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </div>

          {/* Copyright y diseño */}
          <p className="text-sm text-white/60 text-center">
            © 2024 BAEK & CO. Todos los derechos reservados.
          </p>
          <p className="text-sm text-white/60 text-center">
            Diseñada por Big Sur Branding
          </p>
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <Link
        to="https://wa.me/5491145822972"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-200"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"
          width={35}
          alt="WhatsApp"
        />
        <span className="sr-only">Contactar en WhatsApp</span>
      </Link>
    </footer>
  );
}
