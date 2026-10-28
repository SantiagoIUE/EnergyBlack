/**
 * CONFIGURACIÓN GLOBAL DE ENERGY BLACK
 * Certificado de Existencia y Representación Legal - Cámara de Comercio de Cali
 * NIT: 901818059-4 | Matrícula N°: 721001-73 | Cali, Valle del Cauca
 */

const APP_CONFIG = {
  company: {
    name: "Energy Black",
    brandName: "Energy Black",
    slogan: "Innovación Energética, Soluciones Solares & Eficiencia de Alto Rendimiento",
    nit: "901818059-4",
    matricula: "721001-73",
    camaraComercio: "Cámara de Comercio de Cali",
    fundationYear: 2014,
    yearsExperience: "10+",
    phone: "+57 300 242 5455",
    phoneDisplay: "+57 (300) 242-5455",
    phoneRaw: "3002425455",
    email: "ventas@energyblack.space",
    address: "CL 36 NORTE # 56 - 533 CS 30",
    city: "Cali",
    department: "Valle del Cauca",
    country: "Colombia",
    fullAddress: "CL 36 NORTE # 56 - 533 CS 30, Cali, Valle del Cauca, Colombia",
    domain: "energyblack.space",
    schedule: "Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 8:00 AM - 2:00 PM",
    niifGroup: "Grupo III (Microempresas)",
    judicialEmail: "ventas@energyblack.space"
  },

  about: {
    badge: "Energía Sostenible & Tecnología Limpia • Registro CC-Cali",
    title: "Impulsando el Futuro con Soluciones de Energía Limpia & Alta Eficiencia",
    description: "Energy Black es una compañía colombiana registrada formalmente bajo el número de matrícula 721001-73 ante la Cámara de Comercio de Cali, con sede en Cali, Valle del Cauca. Nos especializamos en la estructuración, diseño, suministro e instalación de sistemas de energía solar fotovoltaica, almacenamiento inteligente, respaldo eléctrico ininterrumpido y consultoría de eficiencia energética para hogares, comercios e industrias en todo el territorio nacional.",
    mission: "Proveer soluciones tecnológicas de energía renovable y respaldo eléctrico de máxima confiabilidad, reduciendo la huella de carbono y optimizando la rentabilidad energética de nuestros clientes con estricto cumplimiento normativo.",
    vision: "Convertirnos en el referente líder del Valle del Cauca y a nivel nacional en transición energética, infraestructura solar avanzada y servicios de ingeniería de potencia."
  },

  stats: [
    { value: "+100 kWp", label: "Potencia Instalada", detail: "En proyectos solares fotovoltaicos" },
    { value: "100%", label: "Energía Renovable", detail: "Sistemas certificados RETIE / RETILAP" },
    { value: "24/7", label: "Respaldo Energético", detail: "Monitoreo inteligente y soporte continuo" },
    { value: "-70%", label: "Ahorro Estimado", detail: "Reducción sustancial en costos de tarifa" }
  ],

  pillars: [
    {
      title: "Ingeniería Solar Certificada RETIE",
      description: "Diseños eléctricos y montajes solares que cumplen rigurosamente el Reglamento Técnico de Instalaciones Eléctricas de Colombia.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    },
    {
      title: "Tecnología Tier-1 & Alta Durabilidad",
      description: "Paneles solares monocristalinos e inversores híbridos de máxima eficiencia con garantías de fábrica de hasta 25 años.",
      icon: `<svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
    },
    {
      title: "Almacenamiento Inteligente BESS",
      description: "Baterías de litio LiFePO4 de ciclo profundo para garantizar autonomía y respaldo eléctrico continuo durante cortes de red.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`
    },
    {
      title: "Monitoreo Remoto en Tiempo Real",
      description: "Supervisión desde tu smartphone de la generación diaria, consumo energético y nivel de carga de baterías mediante telemetría IoT.",
      icon: `<svg class="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Consultoría de Eficiencia & Ley 1715",
      description: "Asesoría para acceder a beneficios tributarios (deducción de renta y exclusión de IVA) por inversión en energías renovables (FNCE).",
      icon: `<svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"></path></svg>`
    },
    {
      title: "Mantenimiento & Soporte Técnico",
      description: "Planes preventivos y correctivos, limpieza de paneles y verificación termográfica para asegurar máxima producción energética.",
      icon: `<svg class="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`
    }
  ],

  services: [
    {
      id: "srv-1",
      title: "Sistemas Solares On-Grid & Híbridos",
      subtitle: "Ahorro directo en tu factura de energía",
      description: "Instalaciones conectadas a la red con inyección de excedentes y sistemas híbridos con respaldo de baterías para hogares, fincas y establecimientos comerciales.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,
      tags: ["Solar On-Grid", "Inyección Red", "Híbridos"]
    },
    {
      id: "srv-2",
      title: "Sistemas Autónomos Off-Grid (Aislados)",
      subtitle: "Energía 100% independiente en zonas rurales",
      description: "Dimensionamiento y montaje de plantas solares autónomas para zonas no interconectadas, cabañas y proyectos agropecuarios con almacenamiento LiFePO4.",
      icon: `<svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
      tags: ["Off-Grid", "Zonas Rurales", "Baterías Litio"]
    },
    {
      id: "srv-3",
      title: "Eficiencia Energética & Auditorías RETIE",
      subtitle: "Diagnóstico técnico de consumo",
      description: "Estudios de calidad de energía, compensación de energía reactiva, corrección de factor de potencia y optimización de cargas para grandes consumidores.",
      icon: `<svg class="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`,
      tags: ["Auditoría RETIE", "Calidad Energía", "Ahorro"]
    },
    {
      id: "srv-4",
      title: "Mantenimiento & Telemetría IoT",
      subtitle: "Máximo rendimiento operativo garantizado",
      description: "Mantenimiento preventivo especializado con cámaras termográficas, lavado técnico de módulos solares y configuración de monitoreo en la nube 24/7.",
      icon: `<svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path></svg>`,
      tags: ["Termografía", "Monitoreo 24/7", "Preventivo"]
    }
  ],

  projects: [
    {
      title: "Parque Solar Comercial & Respaldo BESS",
      category: "Energía Solar Fotovoltaica",
      image: "hero.jpg",
      location: "Cali, Valle del Cauca",
      year: "2025",
      summary: "Instalación de 45 kWp con 82 paneles monocristalinos y banco de baterías de litio para respaldo 100% autónomo."
    },
    {
      title: "Sistema Híbrido Residencial Autónomo",
      category: "Autoconsumo & Sostenibilidad",
      image: "p1.jpg",
      location: "Cali, Valle del Cauca, Colombia",
      year: "2025",
      summary: "Dotación solar de 12 kWp con inversores híbridos inteligentes y cero exportación a red para vivienda de alto estándar."
    },
    {
      title: "Infraestructura de Energía Limpia Rural",
      category: "Proyectos Off-Grid",
      image: "p2.jpg",
      location: "Valle del Cauca, Colombia",
      year: "2024",
      summary: "Planta solar aislada para operación agroindustrial continua con monitoreo satelital en tiempo real."
    },
    {
      title: "Auditoría Energética & Retrofit LED",
      category: "Eficiencia & Optimización",
      image: "p3.jpg",
      location: "Colombia",
      year: "2025",
      summary: "Optimización de red eléctrica comercial reduciendo el consumo global en un 42% anual."
    }
  ],

  legal: {
    privacyPolicy: {
      title: "Política de Tratamiento de Datos Personales y Habeas Data",
      subtitle: "Ley 1581 de 2012 / Decreto 1377 de 2013 - República de Colombia",
      lastUpdated: "27 de Agosto de 2026",
      sections: [
        {
          num: "1",
          heading: "Identificación del Responsable del Tratamiento",
          content: "ENERGY BLACK, identificada con NIT 901818059-4, con matrícula mercantil 721001-73 ante la Cámara de Comercio de Cali (registrada el 5 de noviembre de 2014, renovada en 2026), con domicilio principal en CL 36 NORTE # 56 - 533 CS 30, Cali, Valle del Cauca, Colombia; correo electrónico de notificaciones judiciales y privacidad: ventas@energyblack.space, y teléfono de atención comercial: +57 (300) 242-5455, en calidad de Responsable del Tratamiento de Datos Personales, adopta la presente política en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y normas de Meta Platforms Inc."
        },
        {
          num: "2",
          heading: "Principios Rectores del Tratamiento",
          content: "Energy Black aplicará de manera estricta e integral los principios rectores de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad en todas las operaciones que involucren recolección, almacenamiento, uso o supresión de datos personales."
        },
        {
          num: "3",
          heading: "Datos Recopilados y Finalidades del Tratamiento",
          content: "Los datos recopilados a través de nuestro sitio web oficial (energyblack.space), anuncios de Meta Ads (Facebook/Instagram), formularios de contacto, WhatsApp Business y canales telefónicos (nombre, teléfono, correo electrónico, ciudad y requerimientos energéticos) serán utilizados para: a) El dimensionamiento, cotización y propuesta técnica de sistemas solares y proyectos energéticos; b) La formalización y ejecución de contratos de suministro e instalación; c) La atención de soporte técnico, garantías y mantenimiento de plantas solares; d) La gestión de PQRS y comunicaciones comerciales previamente autorizadas."
        },
        {
          num: "4",
          heading: "Derechos de los Titulares (Derechos ARCO)",
          content: "De conformidad con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene derecho a: a) Conocer, actualizar y rectificar sus datos personales frente a Energy Black; b) Solicitar prueba de la autorización otorgada; c) Ser informado previa solicitud sobre el uso dado a sus datos; d) Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a la ley; e) Revocar la autorización y/o solicitar la supresión del dato; f) Acceder en forma gratuita a sus datos personales."
        },
        {
          num: "5",
          heading: "Procedimiento y Canales para el Ejercicio de Derechos",
          content: "Los titulares pueden ejercer sus derechos mediante comunicación escrita remitida al correo electrónico ventas@energyblack.space o entregada físicamente en la CL 36 NORTE # 56 - 533 CS 30, Cali, Valle del Cauca. Las solicitudes de supresión serán atendidas formalmente en un término máximo de diez (10) días hábiles."
        },
        {
          num: "6",
          heading: "Política de Cookies y Almacenamiento Local",
          content: "Este portal web utiliza cookies técnicas necesarias para garantizar la navegación óptima y recordar el consentimiento del usuario. No transferimos ni comercializamos datos de navegación con terceros sin autorización explícita."
        },
        {
          num: "7",
          heading: "Medidas de Seguridad e Integridad de la Información",
          content: "Energy Black ha implementado protocolos de seguridad técnica y administrativa de alto nivel (incluyendo cifrado SSL/TLS de 256 bits y acceso restringido) para evitar el acceso, modificación o pérdida no autorizada de los datos personales recopilados."
        },
        {
          num: "8",
          heading: "Vigencia y Modificaciones a la Política",
          content: "La presente política rige a partir de su publicación el 27 de Agosto de 2026. Los datos personales permanecerán en nuestras bases de datos durante el tiempo necesario para cumplir las finalidades autorizadas. Cualquier modificación será notificada oportunamente en energyblack.space."
        }
      ]
    },

    termsAndConditions: {
      title: "Términos y Condiciones Generales de Uso y Servicios Energéticos",
      subtitle: "Regido por la Legislación de la República de Colombia - Ley 23 de 1982 / Ley 527 de 1999 / Ley 1715 de 2014",
      lastUpdated: "27 de Agosto de 2026",
      sections: [
        {
          num: "1",
          heading: "Titularidad del Sitio y Aceptación de las Condiciones",
          content: "El presente portal web es propiedad exclusiva de ENERGY BLACK (NIT 901818059-4), empresa constituida conforme a las leyes colombianas con matrícula N° 721001-73 de la Cámara de Comercio de Cali. El acceso y navegación en este sitio implica la aceptación plena e incondicional de los presentes Términos y Condiciones."
        },
        {
          num: "2",
          heading: "Propiedad Intelectual e Industrial (Ley 23 de 1982)",
          content: "Todos los elementos contenidos en este sitio web, incluyendo logotipos, esquemas de diseño solar, memorias técnicas, fotografías, marcas comerciales y código fuente, son propiedad exclusiva de Energy Black. Queda prohibida su reproducción sin autorización previa y por escrito."
        },
        {
          num: "3",
          heading: "Propuestas Técnicas y Dimensionamientos Solares",
          content: "Los cálculos de ahorro y dimensionamientos solares preliminares mostrados en el sitio web tienen carácter informativo y referencial. La propuesta final estará sujeta a visita técnica y análisis in situ de radiación y curvas de carga."
        },
        {
          num: "4",
          heading: "Garantías Técnicas & Normatividad RETIE",
          content: "Todos los componentes instalados cuentan con garantía del fabricante de hasta 25 años en paneles solares y 5 a 10 años en inversores y baterías, con estricto apego al Reglamento Técnico de Instalaciones Eléctricas (RETIE)."
        },
        {
          num: "5",
          heading: "Tratamiento de Datos Personales",
          content: "La información recolectada se tratará bajo la Política de Privacidad de Energy Black. Al solicitar un estudio solar o contactar a nuestros asesores, el usuario autoriza dicho tratamiento."
        },
        {
          num: "6",
          heading: "Legislación Aplicable y Jurisdicción",
          content: "Los presentes Términos se rigen por la legislación colombiana. Cualquier controversia será dirimida ante los Jueces Ordinarios de la ciudad de Cali, Valle del Cauca, Colombia."
        }
      ]
    }
  }
};

/**
 * DOM INJECTION & INTERACTIVE LOGIC
 */
document.addEventListener("DOMContentLoaded", () => {
  injectCompanyData();
  renderStats();
  renderPillars();
  renderServices();
  renderProjects();
  initCookieBanner();
  initContactForm();
  initMobileMenu();
});

function injectCompanyData() {
  const comp = APP_CONFIG.company;
  const abt = APP_CONFIG.about;

  setElementText("company-name", comp.name);
  setElementText("company-brand", comp.brandName);
  setElementText("company-slogan", comp.slogan);
  setElementText("company-nit", comp.nit);
  setElementText("company-nit-full", `NIT: ${comp.nit} | ${comp.camaraComercio}`);
  setElementText("company-address", comp.address);
  setElementText("company-city", `${comp.city}, ${comp.department}, ${comp.country}`);
  setElementText("company-phone", comp.phoneDisplay);
  setElementText("company-email", comp.email);
  setElementText("company-schedule", comp.schedule);
  setElementText("company-years", comp.yearsExperience);
  setElementText("company-foundation", `${comp.fundationYear}`);
  setElementText("current-year", new Date().getFullYear().toString());

  setElementHref("phone-cta-link", `tel:${comp.phoneRaw}`);
  setElementHref("nav-phone-link", `tel:${comp.phoneRaw}`);
  setElementHref("email-link", `mailto:${comp.email}`);

  setElementText("about-badge", abt.badge);
  setElementText("about-title", abt.title);
  setElementText("about-description", abt.description);
}

function setElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setElementHref(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

function renderStats() {
  const container = document.getElementById("stats-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.stats.map(s => `
    <div class="glass-card p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
      <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
      <div class="font-outfit text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mb-2">
        ${s.value}
      </div>
      <h3 class="text-slate-100 font-semibold text-base mb-1">${s.label}</h3>
      <p class="text-slate-400 text-xs">${s.detail}</p>
    </div>
  `).join("");
}

function renderPillars() {
  const container = document.getElementById("pillars-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.pillars.map(p => `
    <div class="glass-card p-8 rounded-2xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group">
      <div class="w-14 h-14 rounded-xl bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
        ${p.icon}
      </div>
      <h3 class="font-outfit text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">${p.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${p.description}</p>
    </div>
  `).join("");
}

function renderServices() {
  const container = document.getElementById("services-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.services.map(srv => `
    <div class="glass-card rounded-2xl border border-white/10 p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1">
      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="w-14 h-14 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 transition-all">
            ${srv.icon}
          </div>
          <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ${srv.tags[0]}
          </span>
        </div>
        <h3 class="font-outfit text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">${srv.title}</h3>
        <p class="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">${srv.subtitle}</p>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">${srv.description}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-2 mb-6">
          ${srv.tags.map(t => `<span class="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10">${t}</span>`).join("")}
        </div>
        <button onclick="selectServiceForQuote('${srv.title}')" class="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10">
          <span>Solicitar Estudio Solar</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;
  container.innerHTML = APP_CONFIG.projects.map(proj => `
    <div class="glass-card rounded-2xl overflow-hidden border border-white/10 group hover:border-emerald-500/40 transition-all duration-300">
      <div class="relative h-64 overflow-hidden">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            ${proj.category}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4">
          <p class="text-xs text-slate-300 font-mono mb-1">📍 ${proj.location} • ${proj.year}</p>
          <h3 class="font-outfit text-xl font-bold text-white">${proj.title}</h3>
        </div>
      </div>
      <div class="p-6">
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${proj.summary}</p>
        <button onclick="selectServiceForQuote('${proj.title}')" class="text-emerald-400 hover:text-emerald-300 font-semibold text-xs flex items-center gap-1 group/btn">
          <span>Ver Dimensionamiento</span>
          <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  `).join("");
}

function selectServiceForQuote(serviceName) {
  const select = document.getElementById("form-service");
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(serviceName) || select.options[i].value.includes(serviceName)) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      select.value = "Estudio Solar General";
    }
  }
  const contactSec = document.getElementById("contacto");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
}

function initCookieBanner() {
  const consent = localStorage.getItem("cookie_consent");
  const banner = document.getElementById("cookie-banner");
  if (!consent && banner) {
    setTimeout(() => {
      banner.classList.remove("translate-y-full", "opacity-0");
    }, 1000);
  }
}

function acceptCookies() {
  localStorage.setItem("cookie_consent", "accepted");
  const banner = document.getElementById("cookie-banner");
  if (banner) {
    banner.classList.add("translate-y-full", "opacity-0");
  }
}

function initContactForm() {
  const form = document.getElementById("quote-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const phone = document.getElementById("form-phone").value.trim();
    const service = document.getElementById("form-service").value;
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Por favor complete todos los campos obligatorios.");
      return;
    }

    showToastSuccess(name, service);
    form.reset();
  });
}

function showToastSuccess(name, service) {
  const modal = document.getElementById("success-toast-modal");
  const userSpan = document.getElementById("toast-user-name");
  if (userSpan) userSpan.textContent = name;
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeToastModal() {
  const modal = document.getElementById("success-toast-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.add("hidden");
}

function openLegalModal(type) {
  const modal = document.getElementById("legal-modal");
  const titleEl = document.getElementById("legal-modal-title");
  const subtitleEl = document.getElementById("legal-modal-subtitle");
  const contentEl = document.getElementById("legal-modal-content");

  if (!modal || !contentEl) return;

  let doc = null;
  if (type === 'privacy') {
    doc = APP_CONFIG.legal.privacyPolicy;
  } else if (type === 'terms') {
    doc = APP_CONFIG.legal.termsAndConditions;
  }

  if (!doc) return;

  titleEl.textContent = doc.title;
  subtitleEl.textContent = `${doc.subtitle} • ÚLTIMA ACTUALIZACIÓN: ${doc.lastUpdated}`;

  contentEl.innerHTML = doc.sections.map(sec => `
    <div class="mb-6 bg-slate-900/60 p-5 rounded-xl border border-white/5">
      <h4 class="text-emerald-400 font-outfit font-bold text-lg mb-2">
        ${sec.num}. ${sec.heading}
      </h4>
      <p class="text-slate-300 text-base leading-relaxed">${sec.content}</p>
    </div>
  `).join("");

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeLegalModal() {
  const modal = document.getElementById("legal-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}
