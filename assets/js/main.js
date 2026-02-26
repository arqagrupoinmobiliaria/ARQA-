(() => {
  // Year footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header background on scroll
  const header = document.getElementById("siteHeader");
  const setHeaderState = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (!header) return;
    header.classList.toggle("is-solid", y > 40);
  };
  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  const closeNav = () => {
    if (!navList || !navToggle) return;
    navList.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const open = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navList.querySelectorAll("a").forEach(a => a.addEventListener("click", closeNav));
    document.addEventListener("click", (e) => {
      const t = e.target;
      if (!t) return;
      if (!navList.contains(t) && !navToggle.contains(t)) closeNav();
    });
  }

  // Hero slider
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dotsWrap = document.getElementById("heroDots");
  let idx = 0;
  let timer = null;
  const intervalMs = 6500;

  function renderDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.className = "dot" + (i === idx ? " is-active" : "");
      b.type = "button";
      b.setAttribute("aria-label", `Slide ${i + 1}`);
      b.addEventListener("click", () => {
        goTo(i);
        restart();
      });
      dotsWrap.appendChild(b);
    });
  }

  function goTo(nextIdx) {
    slides.forEach(s => s.classList.remove("is-active"));
    idx = nextIdx % slides.length;
    slides[idx].classList.add("is-active");
    renderDots();
  }

  function tick() {
    goTo((idx + 1) % slides.length);
  }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(tick, intervalMs);
  }

  if (slides.length) {
    goTo(0);
    restart();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        if (timer) clearInterval(timer);
      } else {
        restart();
      }
    });
  }

  // WhatsApp floating button
  // IMPORTANTE: cambia el número por tu WhatsApp en formato internacional sin "+"
  const WHATSAPP_NUMBER = "593XXXXXXXXX"; // <-- cambia esto
  const waBtn = document.getElementById("waFloat");

  // i18n dictionary
  const dict = {
    es: {
      tagline: "Visión urbana y desarrollo estratégico",
      nav_firma: "Firma",
      nav_proyectos: "Proyectos",
      nav_experiencia: "Experiencia",
      nav_invertir: "Invertir",
      nav_contacto: "Contacto",

      hero_title: "Desarrollo inmobiliario estratégico en Ecuador",
      hero_subtitle: "Quito · Guayaquil · Cuenca",
      cta_ver_proyectos: "Ver Proyectos",
      cta_invertir: "Invertir",
      cta_contacto: "Contacto",

      firma_title: "Firma",
      firma_text: "Somos una firma desarrolladora enfocada en la planificación y ejecución de proyectos inmobiliarios estratégicos en las principales ciudades del Ecuador.",
      role_arq: "Arquitecta",
      role_dev: "Desarrollador Inmobiliario",
      marcela_text: "Dirección arquitectónica y planificación técnica para asegurar coherencia urbana, eficiencia espacial y alto estándar de diseño.",
      mauricio_text: "Estructuración y viabilidad de proyectos, análisis estratégico de suelo y desarrollo integral de activos inmobiliarios con visión empresarial.",

      lineas_title: "Líneas de Desarrollo",
      lineas_text: "Cuatro verticales de desarrollo con enfoque técnico y planificación estructurada.",
      res_title: "Proyectos Residenciales",
      res_text: "Vivienda con diseño funcional, ubicación estratégica y valorización sostenida.",
      com_title: "Proyectos Comerciales",
      com_text: "Espacios comerciales concebidos para consolidación urbana y dinamismo económico.",
      ind_title: "Proyectos Industriales",
      ind_text: "Infraestructura logística e industrial orientada a eficiencia operativa.",
      pat_title: "Proyectos Patrimoniales",
      pat_text: "Puesta en valor de activos históricos con criterio técnico y urbano.",
      tile_cta: "Solicitar información →",

      exp_title: "Experiencia Técnica",
      exp_text: "Galería de proyectos de diseño, colaboración y dirección / construcción (se amplía con el tiempo).",
      exp_design_title: "Diseño Arquitectónico",
      exp_build_title: "Dirección y Construcción",

      inv_title: "Alianzas Estratégicas",
      inv_text: "Desarrollamos oportunidades inmobiliarias bajo criterios técnicos y planificación estructurada. Invitamos a aliados estratégicos a conocer nuestros proyectos.",
      inv_panel_title: "Conversemos",
      inv_panel_text: "Compártenos tu perfil de interés y te contactamos.",
      inv_panel_btn: "Solicitar información",

      contact_title: "Contacto",
      contact_text: "Completa el formulario y nos comunicaremos contigo.",
      f_name: "Nombre completo",
      f_phone: "Teléfono",
      f_email: "Correo",
      f_city: "Ciudad de interés",
      f_city_pick: "Selecciona",
      f_interest: "Tipo de interés",
      f_interest_pick: "Selecciona",
      f_interest_buy: "Compra de propiedad",
      f_interest_invest: "Inversión",
      f_interest_partner: "Asociación estratégica",
      f_category: "Línea",
      f_category_pick: "Selecciona",
      f_msg: "Mensaje",
      f_send: "Enviar",
      cities: "Ciudades",
      wa: "WhatsApp",
      wa_msg: "Hola, estoy interesado en conocer los proyectos y oportunidades de ARQA-GRUPO INMOBILIARIO."
    },
    en: {
      tagline: "Urban Vision & Strategic Development",
      nav_firma: "Firm",
      nav_proyectos: "Projects",
      nav_experiencia: "Experience",
      nav_invertir: "Invest",
      nav_contacto: "Contact",

      hero_title: "Strategic Real Estate Development in Ecuador",
      hero_subtitle: "Quito · Guayaquil · Cuenca",
      cta_ver_proyectos: "View Projects",
      cta_invertir: "Invest",
      cta_contacto: "Contact",

      firma_title: "Firm",
      firma_text: "We are a development firm focused on strategic planning and execution of real estate projects in Ecuador’s leading cities.",
      role_arq: "Architect",
      role_dev: "Real Estate Developer",
      marcela_text: "Architectural direction and technical planning to ensure urban coherence, spatial efficiency and strong design standards.",
      mauricio_text: "Project structuring and feasibility, strategic land analysis, and comprehensive asset development with a business-driven approach.",

      lineas_title: "Development Lines",
      lineas_text: "Four development verticals with technical focus and structured planning.",
      res_title: "Residential Projects",
      res_text: "Functional design, strategic location and long-term value.",
      com_title: "Commercial Projects",
      com_text: "Commercial spaces designed for urban consolidation and economic activity.",
      ind_title: "Industrial Projects",
      ind_text: "Industrial and logistics infrastructure focused on operational efficiency.",
      pat_title: "Heritage Projects",
      pat_text: "Enhancing heritage assets with technical and urban criteria.",
      tile_cta: "Request information →",

      exp_title: "Technical Experience",
      exp_text: "Gallery of design, collaboration and construction management projects (expanded over time).",
      exp_design_title: "Architectural Design",
      exp_build_title: "Direction & Construction",

      inv_title: "Strategic Partnerships",
      inv_text: "We promote real estate opportunities backed by technical criteria and structured planning. We welcome strategic partners to learn about our projects.",
      inv_panel_title: "Let’s talk",
      inv_panel_text: "Share your profile of interest and we will contact you.",
      inv_panel_btn: "Request information",

      contact_title: "Contact",
      contact_text: "Fill out the form and we will get back to you.",
      f_name: "Full name",
      f_phone: "Phone",
      f_email: "Email",
      f_city: "City of interest",
      f_city_pick: "Select",
      f_interest: "Type of interest",
      f_interest_pick: "Select",
      f_interest_buy: "Property acquisition",
      f_interest_invest: "Investment",
      f_interest_partner: "Strategic partnership",
      f_category: "Category",
      f_category_pick: "Select",
      f_msg: "Message",
      f_send: "Send",
      cities: "Cities",
      wa: "WhatsApp",
      wa_msg: "Hello, I’m interested in learning about ARQA-GRUPO INMOBILIARIO projects and opportunities."
    }
  };

  function applyLang(lang) {
    const safe = (lang === "en") ? "en" : "es";
    document.documentElement.lang = safe;

    // Buttons pressed state
    const btnEs = document.getElementById("btnEs");
    const btnEn = document.getElementById("btnEn");
    if (btnEs && btnEn) {
      btnEs.setAttribute("aria-pressed", safe === "es" ? "true" : "false");
      btnEn.setAttribute("aria-pressed", safe === "en" ? "true" : "false");
    }

    // Text replacements
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[safe][key];
      if (typeof val === "string") el.textContent = val;
    });

    // Update WhatsApp link with language message
    if (waBtn) {
      const msg = encodeURIComponent(dict[safe].wa_msg);
      waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
    }

    localStorage.setItem("arqa_lang", safe);
  }

  // Language button events
  const btnEs = document.getElementById("btnEs");
  const btnEn = document.getElementById("btnEn");
  if (btnEs) btnEs.addEventListener("click", () => applyLang("es"));
  if (btnEn) btnEn.addEventListener("click", () => applyLang("en"));

  // init language
  const stored = localStorage.getItem("arqa_lang");
  applyLang(stored || "es");

  // Optional: handle form submit feedback (Formspree default redirect can be used too)
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form && note) {
    form.addEventListener("submit", () => {
      note.textContent = (document.documentElement.lang === "en")
        ? "Sending…"
        : "Enviando…";
    });
  }
})();

