// =============================
// Header: transparent -> solid on scroll
// =============================
const header = document.getElementById("siteHeader");
const yearEl = document.getElementById("year");
yearEl.textContent = String(new Date().getFullYear());

function onScrollHeader(){
  const y = window.scrollY || 0;
  if (y > 20){
    header.classList.remove("header--transparent");
    header.classList.add("header--solid");
  } else {
    header.classList.add("header--transparent");
    header.classList.remove("header--solid");
  }
}
window.addEventListener("scroll", onScrollHeader);
onScrollHeader();

// =============================
// Mobile nav toggle
// =============================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close nav on click (mobile)
navLinks?.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
});

// =============================
// Hero slider
// =============================
/*
const slidesEl = document.getElementById("heroSlides");
const dotsEl = document.getElementById("heroDots");

const SLIDES = [
  { cityKey: "city_quito", img: "assets/img/slider-quito.jpg" },
  { cityKey: "city_gye", img: "assets/img/slider-guayaquil.jpg" },
  { cityKey: "city_cuenca", img: "assets/img/slider-cuenca.jpg" }
];

let sliderIndex = 0;
let sliderTimer = null;

function renderSlides(){
  slidesEl.innerHTML = "";
  dotsEl.innerHTML = "";

  SLIDES.forEach((s, idx) => {
    const d = document.createElement("div");
    d.className = "hero__slide" + (idx === 0 ? " is-active" : "");
    d.style.backgroundImage = `url('${s.img}')`;
    d.dataset.cityKey = s.cityKey;
    slidesEl.appendChild(d);

    const dot = document.createElement("button");
    dot.className = "dot" + (idx === 0 ? " is-active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `Slide ${idx + 1}`);
    dot.addEventListener("click", () => goToSlide(idx, true));
    dotsEl.appendChild(dot);
  });
}

function goToSlide(idx, restart){
  sliderIndex = idx;
  const all = [...document.querySelectorAll(".hero__slide")];
  const dots = [...document.querySelectorAll(".dot")];
  all.forEach((el, i) => el.classList.toggle("is-active", i === sliderIndex));
  dots.forEach((el, i) => el.classList.toggle("is-active", i === sliderIndex));

  if (restart){
    stopAuto();
    startAuto();
  }
}

function startAuto(){
  sliderTimer = setInterval(() => {
    const next = (sliderIndex + 1) % SLIDES.length;
    goToSlide(next, false);
  }, 6500);
}
function stopAuto(){
  if (sliderTimer) clearInterval(sliderTimer);
  sliderTimer = null;
}

renderSlides();
startAuto();
*/

// =============================
// i18n (ES/EN) - practical bilingual
// =============================
const I18N = {
  es: {
    tagline: "Visión urbana y desarrollo estratégico",

    nav_firma: "Firma",
    nav_proyectos: "Proyectos",
    nav_experiencia: "Experiencia",
    nav_alianzas: "Alianzas",
    nav_contacto: "Contacto",

    hero_title: "Desarrollo inmobiliario estratégico en Ecuador",
    hero_subtitle: "Quito · Guayaquil · Cuenca",
    hero_btn_projects: "Ver Proyectos",
    hero_btn_invest: "Invertir",
    hero_btn_contact: "Contacto",

    firma_title: "Firma",
    firma_lead: "Somos una firma desarrolladora enfocada en planificación y ejecución de proyectos inmobiliarios estratégicos en Ecuador.",
    firma_marcela_role: "Arquitecta – Dirección Arquitectónica",
    firma_marcela_text: "Lidera el diseño y la planificación técnica de los proyectos, asegurando coherencia urbana, eficiencia espacial y alto estándar arquitectónico.",
    firma_mauricio_role: "Desarrollador Inmobiliario",
    firma_mauricio_text: "Especializado en estructuración de proyectos, análisis estratégico de suelo y desarrollo integral de activos inmobiliarios con visión de largo plazo.",

    lines_title: "Líneas de Desarrollo",
    lines_lead: "Cuatro verticales claras para atender oportunidades inmobiliarias con criterio técnico y visión estratégica.",
    line_res_title: "Proyectos Residenciales",
    line_res_text: "Vivienda con enfoque en funcionalidad, ubicación y valorización sostenible.",
    line_com_title: "Proyectos Comerciales",
    line_com_text: "Espacios comerciales estratégicos diseñados para dinamizar zonas y consolidar presencia empresarial.",
    line_ind_title: "Proyectos Industriales",
    line_ind_text: "Infraestructura logística e industrial enfocada en eficiencia operativa y expansión.",
    line_pat_title: "Proyectos Patrimoniales",
    line_pat_text: "Puesta en valor de activos históricos con criterio técnico y coherencia urbana.",
    line_cta: "Solicitar información",

    exp_title: "Experiencia Técnica",
    exp_lead: "Sección práctica para subir proyectos de diseño y construcción progresivamente.",
    exp_design_title: "Diseño Arquitectónico",
    exp_design_text: "Proyectos de diseño y colaboración con otros arquitectos.",
    exp_build_title: "Dirección y Construcción",
    exp_build_text: "Proyectos ejecutados o dirigidos técnicamente.",

    all_title: "Alianzas Estratégicas",
    all_lead: "Invitación profesional a inversionistas y socios para conocer oportunidades y proyectos.",
    all_box_title: "Conversemos sobre oportunidades",
    all_box_text: "Promovemos proyectos bajo criterios técnicos y planificación estructurada. Si busca invertir o asociarse, contáctenos para recibir información.",
    all_btn: "Solicitar información",

    contact_title: "Contacto",
    contact_lead: "Complete el formulario y nos comunicaremos con usted.",
    f_name: "Nombre completo",
    f_phone: "Teléfono",
    f_email: "Correo",
    f_city: "Ciudad de interés",
    city_quito: "Quito",
    city_gye: "Guayaquil",
    city_cuenca: "Cuenca",
    city_other: "Otra",
    f_interest: "Tipo de interés",
    i_buy: "Compra de propiedad",
    i_invest: "Inversión",
    i_partner: "Asociación estratégica",
    f_msg: "Mensaje",
    f_submit: "Enviar",

    contact_box_title: "Canales directos",
    contact_box_city: "Ciudades:",
    contact_box_email: "Email:",
    contact_box_phone: "Teléfono:",
    contact_box_note: "*Actualice el número de WhatsApp y el teléfono en el código antes de publicar."
  },

  en: {
    tagline: "Urban Vision & Strategic Development",

    nav_firma: "Firm",
    nav_proyectos: "Projects",
    nav_experiencia: "Experience",
    nav_alianzas: "Partnerships",
    nav_contacto: "Contact",

    hero_title: "Strategic Real Estate Development in Ecuador",
    hero_subtitle: "Quito · Guayaquil · Cuenca",
    hero_btn_projects: "View Projects",
    hero_btn_invest: "Invest",
    hero_btn_contact: "Contact",

    firma_title: "Firm",
    firma_lead: "We are a development firm focused on planning and delivering strategic real estate projects in Ecuador.",
    firma_marcela_role: "Architect – Architectural Director",
    firma_marcela_text: "Leads architectural design and technical planning, ensuring urban coherence, spatial efficiency and high standards.",
    firma_mauricio_role: "Real Estate Developer",
    firma_mauricio_text: "Specialized in project structuring, strategic land analysis and comprehensive development with a long-term vision.",

    lines_title: "Development Lines",
    lines_lead: "Four clear verticals to address opportunities with technical criteria and strategic vision.",
    line_res_title: "Residential Projects",
    line_res_text: "Housing focused on functionality, location and sustainable value growth.",
    line_com_title: "Commercial Projects",
    line_com_text: "Strategic commercial spaces designed to energize areas and strengthen business presence.",
    line_ind_title: "Industrial Projects",
    line_ind_text: "Logistics and industrial infrastructure focused on operational efficiency and growth.",
    line_pat_title: "Heritage Projects",
    line_pat_text: "Enhancing historic assets with technical criteria and urban coherence.",
    line_cta: "Request information",

    exp_title: "Technical Experience",
    exp_lead: "A practical section to upload design and construction projects progressively.",
    exp_design_title: "Architectural Design",
    exp_design_text: "Design projects and collaborations with other architects.",
    exp_build_title: "Construction & Technical Direction",
    exp_build_text: "Executed projects or technically directed works.",

    all_title: "Strategic Partnerships",
    all_lead: "A professional invitation for investors and partners to learn about opportunities and projects.",
    all_box_title: "Let’s discuss opportunities",
    all_box_text: "We promote projects backed by technical planning and structured execution. If you want to invest or partner, contact us to receive information.",
    all_btn: "Request information",

    contact_title: "Contact",
    contact_lead: "Complete the form and we will reach out to you.",
    f_name: "Full name",
    f_phone: "Phone",
    f_email: "Email",
    f_city: "City of interest",
    city_quito: "Quito",
    city_gye: "Guayaquil",
    city_cuenca: "Cuenca",
    city_other: "Other",
    f_interest: "Interest type",
    i_buy: "Property acquisition",
    i_invest: "Investment",
    i_partner: "Strategic partnership",
    f_msg: "Message",
    f_submit: "Send",

    contact_box_title: "Direct channels",
    contact_box_city: "Cities:",
    contact_box_email: "Email:",
    contact_box_phone: "Phone:",
    contact_box_note: "*Update WhatsApp number and phone in the code before publishing."
  }
};

let currentLang = "es";
const langES = document.getElementById("langES");
const langEN = document.getElementById("langEN");

function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;

  langES?.setAttribute("aria-pressed", String(lang === "es"));
  langEN?.setAttribute("aria-pressed", String(lang === "en"));

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

langES?.addEventListener("click", () => applyLang("es"));
langEN?.addEventListener("click", () => applyLang("en"));
applyLang("es");

// =============================
// Contact form behavior (practical)
// - Default: uses mailto fallback (no backend)
// - If you want: Formspree / Netlify Forms (instructions below)
// =============================
const contactForm = document.getElementById("contactForm");
const formHint = document.getElementById("formHint");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(contactForm);
  const name = encodeURIComponent(data.get("name") || "");
  const phone = encodeURIComponent(data.get("phone") || "");
  const email = encodeURIComponent(data.get("email") || "");
  const city = encodeURIComponent(data.get("city") || "");
  const interest = encodeURIComponent(data.get("interest") || "");
  const message = encodeURIComponent(data.get("message") || "");

  const subject = encodeURIComponent("Contacto desde ARQA-GRUPO INMOBILIARIO");
  const body = encodeURIComponent(
    `Nombre: ${decodeURIComponent(name)}\n` +
    `Teléfono: ${decodeURIComponent(phone)}\n` +
    `Correo: ${decodeURIComponent(email)}\n` +
    `Ciudad: ${decodeURIComponent(city)}\n` +
    `Interés: ${decodeURIComponent(interest)}\n\n` +
    `Mensaje:\n${decodeURIComponent(message)}\n`
  );

  // Mailto fallback (simple and works on most devices)
  const to = "contacto@arqagrupoinmobiliario.com.ec";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  formHint.textContent = (currentLang === "es")
    ? "Se abrió su correo para enviar el mensaje. Si no se abre, escríbanos por WhatsApp."
    : "Your email client was opened to send the message. If it doesn’t open, message us on WhatsApp.";
});
alert("js funcionando")
