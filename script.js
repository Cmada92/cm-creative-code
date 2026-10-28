/* =========================================
   CM CREATIVE CODE — CONTACT WHATSAPP
========================================= */
const contactForm = document.querySelector(".contact-form");


/* =========================================
   WHATSAPP — TEXTE MULTILINGVE
========================================= */

const whatsappText = {

    ro: {
        intro: "Bună! Doresc să discut despre un proiect CM Creative Code.",
        name: "Nume",
        business: "Afacere",
        email: "Email",
        phone: "Telefon",
        project: "Tip proiect",
        budget: "Buget",
        details: "Detalii"
    },

    en: {
        intro: "Hello! I’d like to discuss a CM Creative Code project.",
        name: "Name",
        business: "Business",
        email: "Email",
        phone: "Phone",
        project: "Project type",
        budget: "Budget",
        details: "Details"
    },

    de: {
        intro: "Hallo! Ich möchte ein Projekt mit CM Creative Code besprechen.",
        name: "Name",
        business: "Unternehmen",
        email: "E-Mail",
        phone: "Telefon",
        project: "Projekttyp",
        budget: "Budget",
        details: "Details"
    },

    it: {
        intro: "Ciao! Vorrei parlare di un progetto con CM Creative Code.",
        name: "Nome",
        business: "Attività",
        email: "Email",
        phone: "Telefono",
        project: "Tipo di progetto",
        budget: "Budget",
        details: "Dettagli"
    }

};


/* =========================================
   WHATSAPP — TIP PROIECT
========================================= */

const projectLabels = {

    ro: {
        Website: "Website",
        "E-commerce": "E-commerce",
        Redesign: "Redesign",
        "Alt proiect": "Alt proiect"
    },

    en: {
        Website: "Website",
        "E-commerce": "E-commerce",
        Redesign: "Redesign",
        "Alt proiect": "Other project"
    },

    de: {
        Website: "Website",
        "E-commerce": "E-Commerce",
        Redesign: "Redesign",
        "Alt proiect": "Anderes Projekt"
    },

    it: {
        Website: "Sito web",
        "E-commerce": "E-commerce",
        Redesign: "Redesign",
        "Alt proiect": "Altro progetto"
    }

};


/* =========================================
   CONTACT FORM → WHATSAPP
========================================= */

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const name =
            contactForm.querySelector('[name="name"]')?.value.trim() || "";

        const business =
            contactForm.querySelector('[name="business"]')?.value.trim() || "";

        const email =
            contactForm.querySelector('[name="email"]')?.value.trim() || "";

        const phone =
            contactForm.querySelector('[name="phone"]')?.value.trim() || "";

        const project =
            contactForm.querySelector('input[name="project"]:checked')?.value ||
            contactForm.querySelector('[name="project"]')?.value ||
            "";

        const budget =
            contactForm.querySelector('[name="budget"]')?.value || "";

        const details =
            contactForm.querySelector('[name="message"]')?.value.trim() || "";


        /* LIMBA ACTIVĂ */

        const currentLang =
            document.documentElement.lang || "ro";

        const w =
            whatsappText[currentLang] || whatsappText.ro;

        const localizedProject =
            projectLabels[currentLang]?.[project] || project;


        /* MESAJ WHATSAPP */

        const message = `${w.intro}

👤 ${w.name}: ${name}
🏢 ${w.business}: ${business || "—"}
📧 ${w.email}: ${email}
📞 ${w.phone}: ${phone || "—"}

💻 ${w.project}: ${localizedProject || "—"}
💰 ${w.budget}: ${budget || "—"}

📝 ${w.details}:
${details || "—"}`;


        /* NUMĂR WHATSAPP */

        const whatsappNumber = "40758205453";


        /* DESCHIDE WHATSAPP */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}


/* =========================================
   PREMIUM SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
}


/* =========================================
   MOBILE MENU
========================================= */

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav a");

if (mobileMenuBtn && mobileMenu) {

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        mobileMenuBtn.classList.toggle("active");

        document.body.style.overflow =
            mobileMenu.classList.contains("active") ? "hidden" : "";
    });

    mobileMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            mobileMenuBtn.classList.remove("active");
            document.body.style.overflow = "";
        });
    });
}


/* =========================================
   PROCESS — ACCORDION MOBILE
========================================= */

document.querySelectorAll(".process-step").forEach((step) => {

    const arrow = step.querySelector(".process-arrow");

    if (!arrow) return;

    arrow.addEventListener("click", (e) => {

        if (window.innerWidth > 768) return;

        e.preventDefault();

        const isOpen = step.classList.contains("mobile-open");

        document.querySelectorAll(".process-step").forEach((item) => {
            item.classList.remove("mobile-open");
        });

        if (!isOpen) {
            step.classList.add("mobile-open");
        }
    });
});


/* =========================================
   CM CREATIVE CODE — MULTILANGUAGE
========================================= */

const translations = {

    /* =====================================
       ROMÂNĂ
    ===================================== */

    ro: {

        /* HEADER */

        nav_home: "Acasă",
        nav_services: "Servicii",
        nav_pricing: "Prețuri",
        nav_portfolio: "Portofoliu",
        nav_about: "Despre",
        nav_contact: "Contact",
        header_cta: "Începe un proiect",


        /* HERO */

        hero_eyebrow: "STRATEGIE • DESIGN • DEZVOLTARE • CREȘTERE",

        hero_title:
            'Mai mult decât<br>site-uri.<span>Experiențe digitale.</span>',

        hero_description:
            "Creăm website-uri premium, magazine online și soluții digitale personalizate care ajută afacerile să se diferențieze și să crească.",

        hero_cta: "Începe proiectul",
        hero_projects: "Vezi proiectele",

        hero_service_2: "Magazine Online",
        hero_service_3: "Dezvoltare",
        hero_service_4: "SEO & Creștere",
        hero_service_5: "Suport",


        /* SERVICII */

        services_label: "SERVICII",

        services_eyebrow:
            "DE LA IDEE LA EXPERIENȚĂ DIGITALĂ",

        services_title:
            'Tot ce are nevoie afacerea ta <em>pentru a crește online.</em>',

        services_description:
            "Nu construim doar pagini web. Construim experiențe digitale gândite să inspire încredere, să diferențieze brandul și să transforme vizitatorii în clienți.",

        service_1_title:
            "Website-uri de prezentare",

        service_1_description:
            "Website-uri moderne, rapide și premium, construite în jurul identității și obiectivelor afacerii tale.",

        service_2_title:
            "Magazine Online",

        service_2_description:
            "Experiențe e-commerce intuitive, dezvoltate pentru prezentarea produselor, o cumpărare simplă și mai multe conversii.",

        service_3_title:
            "Dezvoltare Personalizată",

        service_3_description:
            "Funcționalități, platforme și soluții digitale dezvoltate special pentru nevoile și procesele afacerii tale.",

        service_4_title:
            "SEO & Performanță",

        service_4_description:
            "Optimizare tehnică, structură și performanță pentru un website rapid, bine construit și mai ușor de găsit online.",

        service_5_title:
            "Mentenanță & Suport",

        service_5_description:
            "Actualizări, monitorizare și îmbunătățiri continue pentru ca website-ul tău să rămână sigur, modern și performant.",


        /* PRICING */

        pricing_label: "PACHETE & PREȚURI",

        pricing_eyebrow:
            "ALEGE PUNCTUL DE PORNIRE",

        pricing_title:
            'Un website bun nu este<br>doar o prezență online. <em>Este începutul creșterii.</em>',

        pricing_description:
            "Soluții digitale construite pentru diferite etape ale afacerii tale. Fiecare proiect include design personalizat, logo și atenție la fiecare detaliu care îți reprezintă brandul.",

        price_from: "de la",
        price_from_upper: "DE LA",
        price_project: "PROIECT",
        delivery_label: "LIVRARE ESTIMATĂ",
        recommended: "RECOMANDAT",


        /* START */

        start_title:
            'Intră online.<br><em>Fă-te remarcat.</em>',

        start_subtitle:
            "Pentru afaceri care vor o prezență online modernă, profesionistă și convingătoare.",

        start_feature_1: "Logo personalizat",
        start_feature_2: "Design adaptat brandului",
        start_feature_3: "Prezentarea afacerii & serviciilor",
        start_feature_4: "Experiență optimizată pe orice dispozitiv",
        start_feature_5: "Galerie & conținut vizual",
        start_feature_6: "Contact rapid & Google Maps",
        start_feature_7: "Integrare social media",
        start_feature_8: "SEO de bază & performanță",
        start_feature_9: "Lansare și configurare completă",

        start_delivery: "3–7 zile",
        start_button: "Începe proiectul",


        /* BUSINESS */

        business_title:
            'Transformă prezența online <em>într-un avantaj.</em>',

        business_subtitle:
            "Pentru afaceri care vor mai mult decât un website: o experiență digitală construită pentru imagine, încredere și creștere.",

        business_feature_1: "Logo & direcție vizuală personalizată",
        business_feature_2: "Design premium creat pentru afacerea ta",
        business_feature_3: "Experiență digitală complet personalizată",
        business_feature_4: "Conținut ușor de actualizat",
        business_feature_5: "Servicii, produse sau oferte dinamice",
        business_feature_6: "Animații & interacțiuni premium",
        business_feature_7: "Formulare inteligente",
        business_feature_8: "SEO & optimizare performanță",
        business_feature_9: "Analytics & măsurarea rezultatelor",
        business_feature_10: "Experiență optimizată pentru conversii",
        business_feature_11: "Suport prioritar după lansare",

        business_delivery: "7–14 zile",
        business_button: "Construiește-ți brandul",


        /* E-COMMERCE */

        ecommerce_title:
            'Transformă produsele<br><em>în vânzări.</em>',

        ecommerce_subtitle:
            "Pentru branduri și afaceri pregătite să vândă online printr-o experiență simplă și profesionistă.",

        ecommerce_feature_1: "Logo & identitate vizuală",
        ecommerce_feature_2: "Magazin online personalizat",
        ecommerce_feature_3: "Experiență de cumpărare premium",
        ecommerce_feature_4: "Produse & categorii ușor de gestionat",
        ecommerce_feature_5: "Promoții & prețuri speciale",
        ecommerce_feature_6: "Coș de cumpărături & checkout",
        ecommerce_feature_7: "Plăți online securizate",
        ecommerce_feature_8: "Gestionarea comenzilor",
        ecommerce_feature_9: "Stoc & disponibilitate",
        ecommerce_feature_10: "Notificări automate",
        ecommerce_feature_11: "SEO, Analytics & performanță",
        ecommerce_feature_12: "Suport după lansare",

        ecommerce_delivery: "10–21 zile",
        ecommerce_button: "Începe să vinzi online",


        /* CUSTOM */

        custom_small:
            "AI NEVOIE DE MAI MULT?",

        custom_title:
            'Nicio afacere nu este la fel. <em>Nici website-ul tău nu ar trebui să fie.</em>',

        custom_description:
            "Pentru platforme, rezervări, programări, automatizări, integrări sau funcționalități speciale, construim o soluție adaptată proiectului tău.",

        custom_button:
            "Solicită o ofertă",


        /* CM CARE */

care_subscription:
    "ABONAMENT",

        care_after:
            "DUPĂ LANSARE",

        care_title:
            'Website-ul tău continuă <em>să evolueze.</em>',

        care_description:
            "Actualizări, backup, monitorizare, mici modificări și suport tehnic pentru ca website-ul tău să rămână performant și actualizat.",

        care_month:
            "/ lună",


        /* LOCAL */

        local_discount:
            "REDUCERE",

        local_label:
            "PENTRU ZĂRNEȘTI",

        local_title:
            'Un oraș de poveste merită afaceri <em>care se fac remarcate.</em>',

        local_description:
            "Cred în potențialul afacerilor din Zărnești și în oportunitățile pe care mediul online le poate deschide pentru ele. De aceea, ofer 30% reducere proiectelor locale.",

        local_highlight:
            "30% reducere pentru afacerile din Zărnești.",

        local_small:
            "Din Zărnești. Pentru Zărnești. Pentru un oraș de poveste.",

        local_button:
            "Creștem împreună",

        pricing_note:
    "Prețurile afișate sunt orientative și reprezintă valoarea de pornire. Oferta finală este stabilită în funcție de complexitatea și funcționalitățile proiectului.",


/* PORTOFOLIU */

portfolio_label: "PORTOFOLIU",

portfolio_title:
    'Idei devenite <em>realitate.</em>',

portfolio_description:
    "Proiecte create cu strategie, design și atenție la fiecare detaliu.",

portfolio_selected_project:
    "PROIECT SELECTAT",

portfolio_restaurant:
    "RESTAURANT",

portfolio_development:
    "DEZVOLTARE",

portfolio_project:
    "PROIECT",

mizini_label:
    "EXPERIENȚĂ DIGITALĂ",

mizini_title:
    'Creat pentru a <em>deschide apetitul.</em>',

mizini_description:
    "O experiență digitală premium creată pentru Café Bistro Mizini, combinând designul elegant, navigarea intuitivă și un meniu online construit în jurul identității restaurantului.",

trout_category:
    "AFACERE LOCALĂ · WEB DESIGN · DEZVOLTARE",

trout_title:
    'Păstrăvăria<br><em>din inima muntelui.</em>',

portfolio_live_project:
    "PROIECT LIVE",

trout_project_label:
    "PROIECTUL",

trout_project_title:
    'Proaspăt prin natură.<br><em>Construit pentru digital.</em>',

trout_description:
    "O identitate digitală creată pentru o păstrăvărie locală din Zărnești, transformând o afacere tradițională într-o experiență online modernă și memorabilă.",

trout_industry_label:
    "INDUSTRIE",

trout_industry:
    "Afacere locală",

trout_services_label:
    "SERVICII",

trout_services:
    "Design & Dezvoltare",

trout_goal_label:
    "OBIECTIV",

trout_goal:
    "Experiență de brand",

trout_view_website:
    "Vezi website-ul",


/* PROCESS — CUM LUCRĂM */

process_label:
    "CUM LUCRĂM",

process_eyebrow:
    "UN PROCES CLAR. UN REZULTAT CARE CONTEAZĂ.",

process_title:
    'De la prima idee <em>până la lansare.</em>',

process_description:
    "Tu vii cu ideea. Noi îi dăm direcție, identitate și o transformăm într-o experiență digitală.",


/* PASUL 01 */

process_1_mini:
    "DESCOPERIM",

process_1_title:
    'Începem cu <em>afacerea ta.</em>',

process_1_description:
    "Înțelegem povestea brandului, obiectivele, publicul și ceea ce te diferențiază. Fiecare proiect începe cu o direcție clară.",


/* PASUL 02 */

process_2_mini:
    "CREĂM",

process_2_title:
    'Dăm ideii <em>o identitate.</em>',

process_2_description:
    "Construim direcția vizuală, logo-ul și experiența website-ului astfel încât fiecare element să transmită profesionalism și personalitate.",


/* PASUL 03 */

process_3_mini:
    "DEZVOLTĂM",

process_3_title:
    'Transformăm designul <em>în experiență.</em>',

process_3_description:
    "Construim website-ul, adăugăm interacțiile și funcționalitățile necesare și optimizăm fiecare detaliu pentru viteză și orice dispozitiv.",


/* PASUL 04 */

process_4_mini:
    "LANSĂM & CREȘTEM",

process_4_title:
    'Din proiect, <em>în business.</em>',

process_4_description:
    "Testăm, optimizăm și lansăm proiectul. Iar după publicare, putem continua să dezvoltăm website-ul pe măsură ce afacerea ta crește.",


/* CTA */

process_cta_small:
    "AI O IDEE?",

process_cta_title:
    'Hai să construim <em>ceva memorabil.</em>',

process_cta_button:
    "Povestește-ne despre proiect",


/* ABOUT — DESPRE */

about_label:
    "DESPRE",

about_title:
    'Mai mult decât website-uri. <em>Construim identitate digitală.</em>',

about_small:
    "IDEI · DESIGN · CODE",

about_p1:
    "CM Creative Code a pornit din dorința de a crea experiențe digitale care nu doar arată bine, ci au un scop.",

about_p2:
    "Fiecare proiect este construit în jurul afacerii, identității și obiectivelor clientului — de la primul concept până la lansare.",

about_philosophy:
    "FILOZOFIA NOASTRĂ",

about_quote:
    '„De la primul logo <em>până la primul client online.”</em>',


/* VALUE 01 */

about_value_1_label:
    "PERSONALIZAT",

about_value_1_title:
    'Fără proiecte <em>trase la indigo.</em>',

about_value_1_text:
    "Fiecare afacere are propria poveste. Website-ul trebuie să o reflecte.",


/* VALUE 02 */

about_value_2_label:
    "DESIGN + TEHNOLOGIE",

about_value_2_title:
    'Frumos este bine. <em>Funcțional este esențial.</em>',

about_value_2_text:
    "Îmbinăm identitatea vizuală cu tehnologia pentru experiențe rapide și intuitive.",


/* VALUE 03 */

about_value_3_label:
    "PARTENERIAT",

about_value_3_title:
    'Lansarea este doar <em>începutul.</em>',

about_value_3_text:
    "Proiectul poate continua să evolueze odată cu afacerea ta.",


/* CONTACT */

contact_label:
    "CONTACT",

contact_title:
    'Totul începe cu o <span>idee.</span>',

contact_intro_small:
    "ÎNCEPEM DE AICI",

contact_intro_title:
    'Spune-ne ce vrei <em>să construim.</em>',

contact_intro_description:
    "Fie că pornești de la zero, vrei să îți modernizezi website-ul sau ai o idee mai complexă, primul pas este o conversație.",

contact_email_label:
    "EMAIL",

contact_whatsapp_label:
    "WHATSAPP",

contact_whatsapp_text:
    "Scrie-ne pe WhatsApp",

contact_available:
    "Disponibil pentru proiecte noi",


/* FORMULAR */

form_name_label:
    "NUMELE TĂU",

form_name_placeholder:
    "Cum te numești?",

form_business_label:
    "AFACERE / BRAND",

form_business_placeholder:
    "Numele afacerii tale",

form_email_label:
    "EMAIL",

form_email_placeholder:
    "email@exemplu.ro",

form_phone_label:
    "TELEFON",

form_phone_placeholder:
    "+40...",

form_project_label:
    "CE VREI SĂ CONSTRUIM?",

form_project_website:
    "Website",

form_project_ecommerce:
    "E-commerce",

form_project_redesign:
    "Redesign",

form_project_other:
    "Alt proiect",

form_message_label:
    "DESPRE PROIECT",

form_message_placeholder:
    "Povestește-ne puțin despre ideea ta...",

form_submit:
    "Trimite proiectul",

form_note:
    "Prin trimiterea formularului ești de acord să folosim informațiile furnizate pentru a răspunde solicitării tale.",


/* FOOTER */

footer_navigation:
    "NAVIGARE",

footer_services:
    "SERVICII",

footer_web_design:
    "Web Design",

footer_ecommerce:
    "E-commerce",

footer_development:
    "Dezvoltare",

footer_seo:
    "SEO",

footer_maintenance:
    "Mentenanță",

footer_language:
    "LIMBĂ",

footer_description:
    "Website-uri construite pentru afaceri care vor să fie remarcate.",

footer_rights:
    "© 2026 CM Creative Code. Toate drepturile rezervate.",

footer_privacy:
    "Politica de confidențialitate",

footer_top:
    "SUS"

},

/* =====================================
   ENGLISH
===================================== */


    en: {

        nav_home: "Home",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_portfolio: "Portfolio",
        nav_about: "About",
        nav_contact: "Contact",
        header_cta: "Start a project",

        hero_eyebrow:
            "STRATEGY • DESIGN • DEVELOPMENT • GROWTH",

        hero_title:
            'More than<br>websites.<span>Digital experiences.</span>',

        hero_description:
            "We create premium websites, online stores and tailored digital solutions that help businesses stand out and grow.",

        hero_cta: "Start your project",
        hero_projects: "View projects",

        hero_service_2: "Online Stores",
        hero_service_3: "Development",
        hero_service_4: "SEO & Growth",
        hero_service_5: "Support",


        /* SERVICES */

        services_label: "SERVICES",
        services_eyebrow: "FROM IDEA TO DIGITAL EXPERIENCE",

        services_title:
            'Everything your business needs <em>to grow online.</em>',

        services_description:
            "We don't just build websites. We create digital experiences designed to inspire trust, differentiate your brand and turn visitors into customers.",

        service_1_title: "Business Websites",

        service_1_description:
            "Modern, fast and premium websites built around your brand identity and business goals.",

        service_2_title: "Online Stores",

        service_2_description:
            "Intuitive e-commerce experiences designed to showcase your products, simplify the buying process and increase conversions.",

        service_3_title: "Custom Development",

        service_3_description:
            "Custom features, platforms and digital solutions developed specifically around your business needs and processes.",

        service_4_title: "SEO & Performance",

        service_4_description:
            "Technical optimization, structure and performance for a fast, well-built website that's easier to discover online.",

        service_5_title: "Maintenance & Support",

        service_5_description:
            "Updates, monitoring and continuous improvements to keep your website secure, modern and performing at its best.",


        /* PRICING */

        pricing_label: "PACKAGES & PRICING",
        pricing_eyebrow: "CHOOSE YOUR STARTING POINT",

        pricing_title:
            'A great website is more than<br>an online presence. <em>It is the beginning of growth.</em>',

        pricing_description:
            "Digital solutions built for different stages of your business. Every project includes custom design, a logo and attention to every detail that represents your brand.",

        price_from: "from",
        price_from_upper: "FROM",
        price_project: "PROJECT",
        delivery_label: "ESTIMATED DELIVERY",
        recommended: "RECOMMENDED",

        start_title:
            'Get online.<br><em>Stand out.</em>',

        start_subtitle:
            "For businesses looking for a modern, professional and compelling online presence.",

        start_feature_1: "Custom logo",
        start_feature_2: "Design tailored to your brand",
        start_feature_3: "Business & services presentation",
        start_feature_4: "Optimized experience on every device",
        start_feature_5: "Gallery & visual content",
        start_feature_6: "Quick contact & Google Maps",
        start_feature_7: "Social media integration",
        start_feature_8: "Basic SEO & performance",
        start_feature_9: "Complete launch & setup",

        start_delivery: "3–7 days",
        start_button: "Start your project",

        business_title:
            'Turn your online presence <em>into an advantage.</em>',

        business_subtitle:
            "For businesses that want more than a website: a digital experience built for image, trust and growth.",

        business_feature_1: "Custom logo & visual direction",
        business_feature_2: "Premium design created for your business",
        business_feature_3: "Fully customized digital experience",
        business_feature_4: "Easy-to-update content",
        business_feature_5: "Dynamic services, products or offers",
        business_feature_6: "Premium animations & interactions",
        business_feature_7: "Smart forms",
        business_feature_8: "SEO & performance optimization",
        business_feature_9: "Analytics & results tracking",
        business_feature_10: "Conversion-optimized experience",
        business_feature_11: "Priority support after launch",

        business_delivery: "7–14 days",
        business_button: "Build your brand",

        ecommerce_title:
            'Turn your products<br><em>into sales.</em>',

        ecommerce_subtitle:
            "For brands and businesses ready to sell online through a simple and professional shopping experience.",

        ecommerce_feature_1: "Logo & visual identity",
        ecommerce_feature_2: "Custom online store",
        ecommerce_feature_3: "Premium shopping experience",
        ecommerce_feature_4: "Easy-to-manage products & categories",
        ecommerce_feature_5: "Promotions & special pricing",
        ecommerce_feature_6: "Shopping cart & checkout",
        ecommerce_feature_7: "Secure online payments",
        ecommerce_feature_8: "Order management",
        ecommerce_feature_9: "Stock & availability",
        ecommerce_feature_10: "Automated notifications",
        ecommerce_feature_11: "SEO, Analytics & performance",
        ecommerce_feature_12: "Post-launch support",

        ecommerce_delivery: "10–21 days",
        ecommerce_button: "Start selling online",

        custom_small:
            "NEED SOMETHING MORE?",

        custom_title:
            'No two businesses are the same. <em>Your website shouldn’t be either.</em>',

        custom_description:
            "For platforms, reservations, appointments, automations, integrations or special features, we build a solution tailored to your project.",

        custom_button:
            "Request a quote",

            care_subscription:
    "SUBSCRIPTION",
    
        care_after:
            "AFTER LAUNCH",

        care_title:
            'Your website continues <em>to evolve.</em>',

        care_description:
            "Updates, backups, monitoring, small changes and technical support to keep your website performing and up to date.",

        care_month:
            "/ month",

        local_discount:
            "DISCOUNT",

        local_label:
            "FOR ZĂRNEȘTI",

        local_title:
            'A remarkable town deserves businesses <em>that stand out.</em>',

        local_description:
            "I believe in the potential of businesses in Zărnești and the opportunities the online world can create for them. That is why I offer a 30% discount for local projects.",

        local_highlight:
            "30% discount for businesses in Zărnești.",

        local_small:
            "From Zărnești. For Zărnești. For a remarkable town.",

        local_button:
            "Let's grow together",

       pricing_note:
    "The prices shown are indicative starting prices. The final quote is determined by the complexity and functionality required for the project.",


/* PORTFOLIO */

portfolio_label: "PORTFOLIO",

portfolio_title:
    'Ideas turned into <em>reality.</em>',

portfolio_description:
    "Projects created with strategy, design and attention to every detail.",

portfolio_selected_project:
    "SELECTED PROJECT",

portfolio_restaurant:
    "RESTAURANT",

portfolio_development:
    "DEVELOPMENT",

portfolio_project:
    "PROJECT",

mizini_label:
    "DIGITAL EXPERIENCE",

mizini_title:
    'Designed to <em>whet the appetite.</em>',

mizini_description:
    "A premium digital experience created for Café Bistro Mizini, combining elegant design, intuitive navigation and an online menu built around the restaurant’s identity.",

trout_category:
    "LOCAL BUSINESS · WEB DESIGN · DEVELOPMENT",

trout_title:
    'Păstrăvăria<br><em>din inima muntelui.</em>',

portfolio_live_project:
    "LIVE PROJECT",

trout_project_label:
    "THE PROJECT",

trout_project_title:
    'Fresh by nature.<br><em>Built for digital.</em>',

trout_description:
    "A digital identity created for a local trout farm in Zărnești, transforming a traditional business into a modern and memorable online experience.",

trout_industry_label:
    "INDUSTRY",

trout_industry:
    "Local business",

trout_services_label:
    "SERVICES",

trout_services:
    "Design & Development",

trout_goal_label:
    "GOAL",

trout_goal:
    "Brand experience",

trout_view_website:
    "View website",


/* PROCESS — HOW WE WORK */

process_label:
    "HOW WE WORK",

process_eyebrow:
    "A CLEAR PROCESS. A RESULT THAT MATTERS.",

process_title:
    'From the first idea <em>to launch.</em>',

process_description:
    "You bring the idea. We give it direction and identity, and turn it into a digital experience.",


/* STEP 01 */

process_1_mini:
    "DISCOVER",

process_1_title:
    'We start with <em>your business.</em>',

process_1_description:
    "We get to know your brand story, goals, audience and what makes you different. Every project starts with a clear direction.",


/* STEP 02 */

process_2_mini:
    "CREATE",

process_2_title:
    'We give the idea <em>an identity.</em>',

process_2_description:
    "We shape the visual direction, logo and website experience so every element communicates professionalism and personality.",


/* STEP 03 */

process_3_mini:
    "DEVELOP",

process_3_title:
    'We turn design <em>into experience.</em>',

process_3_description:
    "We build the website, add the right interactions and functionality, and optimize every detail for speed and every device.",


/* STEP 04 */

process_4_mini:
    "LAUNCH & GROW",

process_4_title:
    'From project <em>to business.</em>',

process_4_description:
    "We test, optimize and launch the project. After publication, we can continue developing the website as your business grows.",


/* CTA */

process_cta_small:
    "HAVE AN IDEA?",

process_cta_title:
    'Let’s build <em>something memorable.</em>',

process_cta_button:
    "Tell us about your project",


/* ABOUT */

about_label:
    "ABOUT",

about_title:
    'More than websites. <em>We build digital identity.</em>',

about_small:
    "IDEAS · DESIGN · CODE",

about_p1:
    "CM Creative Code was born from the desire to create digital experiences that do more than look good — they have a purpose.",

about_p2:
    "Every project is built around the client’s business, identity and goals — from the first concept to launch.",

about_philosophy:
    "OUR PHILOSOPHY",

about_quote:
    '“From the first logo <em>to the first online customer.”</em>',


/* VALUE 01 */

about_value_1_label:
    "CUSTOM",

about_value_1_title:
    'No <em>copy-and-paste projects.</em>',

about_value_1_text:
    "Every business has its own story. The website should reflect it.",


/* VALUE 02 */

about_value_2_label:
    "DESIGN + TECHNOLOGY",

about_value_2_title:
    'Beautiful is good. <em>Functional is essential.</em>',

about_value_2_text:
    "We combine visual identity with technology to create fast and intuitive experiences.",


/* VALUE 03 */

about_value_3_label:
    "PARTNERSHIP",

about_value_3_title:
    'Launch is only <em>the beginning.</em>',

about_value_3_text:
    "The project can continue to evolve as your business grows.",


/* CONTACT */

contact_label:
    "CONTACT",

contact_title:
    'Everything starts with an <span>idea.</span>',

contact_intro_small:
    "LET’S START HERE",

contact_intro_title:
    'Tell us what you want <em>to build.</em>',

contact_intro_description:
    "Whether you’re starting from scratch, want to modernize your website or have a more complex idea, the first step is a conversation.",

contact_email_label:
    "EMAIL",

contact_whatsapp_label:
    "WHATSAPP",

contact_whatsapp_text:
    "Message us on WhatsApp",

contact_available:
    "Available for new projects",


/* FORM */

form_name_label:
    "YOUR NAME",

form_name_placeholder:
    "What’s your name?",

form_business_label:
    "BUSINESS / BRAND",

form_business_placeholder:
    "Your business name",

form_email_label:
    "EMAIL",

form_email_placeholder:
    "email@example.com",

form_phone_label:
    "PHONE",

form_phone_placeholder:
    "+40...",

form_project_label:
    "WHAT DO YOU WANT TO BUILD?",

form_project_website:
    "Website",

form_project_ecommerce:
    "E-commerce",

form_project_redesign:
    "Redesign",

form_project_other:
    "Other project",

form_message_label:
    "ABOUT THE PROJECT",

form_message_placeholder:
    "Tell us a little about your idea...",

form_submit:
    "Send project",

form_note:
    "By submitting this form, you agree that we may use the information provided to respond to your request.",


/* FOOTER */

footer_navigation:
    "NAVIGATION",

footer_services:
    "SERVICES",

footer_web_design:
    "Web Design",

footer_ecommerce:
    "E-commerce",

footer_development:
    "Development",

footer_seo:
    "SEO",

footer_maintenance:
    "Maintenance",

footer_language:
    "LANGUAGE",

footer_description:
    "Websites built for businesses that want to stand out.",

footer_rights:
    "© 2026 CM Creative Code. All rights reserved.",

footer_privacy:
    "Privacy Policy",

footer_top:
    "TOP"

},

    /* =====================================
       DEUTSCH
    ===================================== */

    de: {

        nav_home: "Startseite",
        nav_services: "Leistungen",
        nav_pricing: "Preise",
        nav_portfolio: "Projekte",
        nav_about: "Über uns",
        nav_contact: "Kontakt",
        header_cta: "Projekt starten",

        hero_eyebrow:
            "STRATEGIE • DESIGN • ENTWICKLUNG • WACHSTUM",

        hero_title:
            'Mehr als<br>Websites.<span>Digitale Erlebnisse.</span>',

        hero_description:
            "Wir entwickeln hochwertige Websites, Onlineshops und individuelle digitale Lösungen, die Unternehmen dabei helfen, sich abzuheben und zu wachsen.",

        hero_cta: "Projekt starten",
        hero_projects: "Projekte ansehen",

        hero_service_2: "Onlineshops",
        hero_service_3: "Entwicklung",
        hero_service_4: "SEO & Wachstum",
        hero_service_5: "Support",


        /* SERVICES */

        services_label: "LEISTUNGEN",
        services_eyebrow: "VON DER IDEE ZUM DIGITALEN ERLEBNIS",

        services_title:
            'Alles, was Ihr Unternehmen braucht, <em>um online zu wachsen.</em>',

        services_description:
            "Wir erstellen nicht einfach nur Websites. Wir entwickeln digitale Erlebnisse, die Vertrauen schaffen, Ihre Marke differenzieren und Besucher in Kunden verwandeln.",

        service_1_title: "Unternehmenswebsites",

        service_1_description:
            "Moderne, schnelle und hochwertige Websites, die auf die Identität und Ziele Ihres Unternehmens abgestimmt sind.",

        service_2_title: "Onlineshops",

        service_2_description:
            "Intuitive E-Commerce-Erlebnisse, die Ihre Produkte optimal präsentieren, den Kaufprozess vereinfachen und die Conversion-Rate steigern.",

        service_3_title: "Individuelle Entwicklung",

        service_3_description:
            "Individuelle Funktionen, Plattformen und digitale Lösungen, die speziell für die Anforderungen und Prozesse Ihres Unternehmens entwickelt werden.",

        service_4_title: "SEO & Performance",

        service_4_description:
            "Technische Optimierung, Struktur und Performance für eine schnelle, professionell entwickelte und online besser auffindbare Website.",

        service_5_title: "Wartung & Support",

        service_5_description:
            "Updates, Monitoring und kontinuierliche Verbesserungen, damit Ihre Website sicher, modern und leistungsfähig bleibt.",


        /* PRICING */

        pricing_label: "PAKETE & PREISE",
        pricing_eyebrow: "WÄHLEN SIE IHREN STARTPUNKT",

        pricing_title:
            'Eine gute Website ist mehr als<br>nur eine Online-Präsenz. <em>Sie ist der Beginn von Wachstum.</em>',

        pricing_description:
            "Digitale Lösungen für unterschiedliche Phasen Ihres Unternehmens. Jedes Projekt umfasst individuelles Design, ein Logo und viel Liebe zum Detail.",

        price_from: "ab",
        price_from_upper: "AB",
        price_project: "PROJEKT",
        delivery_label: "VORAUSSICHTLICHE LIEFERZEIT",
        recommended: "EMPFOHLEN",

        start_title:
            'Online gehen.<br><em>Auffallen.</em>',

        start_subtitle:
            "Für Unternehmen, die eine moderne, professionelle und überzeugende Online-Präsenz möchten.",

        start_feature_1: "Individuelles Logo",
        start_feature_2: "An die Marke angepasstes Design",
        start_feature_3: "Präsentation des Unternehmens & der Leistungen",
        start_feature_4: "Optimierte Darstellung auf allen Geräten",
        start_feature_5: "Galerie & visuelle Inhalte",
        start_feature_6: "Schneller Kontakt & Google Maps",
        start_feature_7: "Social-Media-Integration",
        start_feature_8: "Basis-SEO & Performance",
        start_feature_9: "Vollständiger Launch & Einrichtung",

        start_delivery: "3–7 Tage",
        start_button: "Projekt starten",

        business_title:
            'Machen Sie Ihre Online-Präsenz <em>zum Vorteil.</em>',

        business_subtitle:
            "Für Unternehmen, die mehr als nur eine Website möchten: ein digitales Erlebnis für Image, Vertrauen und Wachstum.",

        business_feature_1: "Individuelles Logo & visuelle Ausrichtung",
        business_feature_2: "Premium-Design für Ihr Unternehmen",
        business_feature_3: "Vollständig individuelles digitales Erlebnis",
        business_feature_4: "Einfach aktualisierbare Inhalte",
        business_feature_5: "Dynamische Leistungen, Produkte oder Angebote",
        business_feature_6: "Premium-Animationen & Interaktionen",
        business_feature_7: "Intelligente Formulare",
        business_feature_8: "SEO & Performance-Optimierung",
        business_feature_9: "Analytics & Erfolgsmessung",
        business_feature_10: "Für Conversions optimierte Nutzererfahrung",
        business_feature_11: "Priorisierter Support nach dem Launch",

        business_delivery: "7–14 Tage",
        business_button: "Marke aufbauen",

        ecommerce_title:
            'Verwandeln Sie Produkte<br><em>in Verkäufe.</em>',

        ecommerce_subtitle:
            "Für Marken und Unternehmen, die mit einem professionellen Einkaufserlebnis online verkaufen möchten.",

        ecommerce_feature_1: "Logo & visuelle Identität",
        ecommerce_feature_2: "Individueller Onlineshop",
        ecommerce_feature_3: "Premium-Einkaufserlebnis",
        ecommerce_feature_4: "Einfach verwaltbare Produkte & Kategorien",
        ecommerce_feature_5: "Aktionen & Sonderpreise",
        ecommerce_feature_6: "Warenkorb & Checkout",
        ecommerce_feature_7: "Sichere Online-Zahlungen",
        ecommerce_feature_8: "Bestellverwaltung",
        ecommerce_feature_9: "Lagerbestand & Verfügbarkeit",
        ecommerce_feature_10: "Automatische Benachrichtigungen",
        ecommerce_feature_11: "SEO, Analytics & Performance",
        ecommerce_feature_12: "Support nach dem Launch",

        ecommerce_delivery: "10–21 Tage",
        ecommerce_button: "Online verkaufen",

        custom_small:
            "BRAUCHEN SIE MEHR?",

        custom_title:
            'Kein Unternehmen ist gleich. <em>Ihre Website sollte es auch nicht sein.</em>',

        custom_description:
            "Für Plattformen, Reservierungen, Terminbuchungen, Automatisierungen, Integrationen oder besondere Funktionen entwickeln wir eine individuelle Lösung.",

        custom_button:
            "Angebot anfordern",

care_subscription:
    "ABONNEMENT",

        care_after:
            "NACH DEM LAUNCH",

        care_title:
            'Ihre Website entwickelt sich <em>kontinuierlich weiter.</em>',

        care_description:
            "Updates, Backups, Monitoring, kleinere Änderungen und technischer Support, damit Ihre Website leistungsfähig und aktuell bleibt.",

        care_month:
            "/ Monat",

        local_discount:
            "RABATT",

        local_label:
            "FÜR ZĂRNEȘTI",

        local_title:
            'Eine besondere Stadt verdient Unternehmen, <em>die auffallen.</em>',

        local_description:
            "Ich glaube an das Potenzial der Unternehmen in Zărnești und an die Möglichkeiten der digitalen Welt. Deshalb erhalten lokale Projekte 30% Rabatt.",

        local_highlight:
            "30% Rabatt für Unternehmen aus Zărnești.",

        local_small:
            "Aus Zărnești. Für Zărnești. Für eine besondere Stadt.",

        local_button:
            "Gemeinsam wachsen",

        pricing_note:
    "Die angegebenen Preise sind Richtwerte und Einstiegspreise. Das endgültige Angebot richtet sich nach der Komplexität und den benötigten Funktionen des Projekts.",


/* PORTFOLIO */

portfolio_label: "PROJEKTE",

portfolio_title:
    'Ideen werden <em>Realität.</em>',

portfolio_description:
    "Projekte, die mit Strategie, Design und Liebe zum Detail entstehen.",

portfolio_selected_project:
    "AUSGEWÄHLTES PROJEKT",

portfolio_restaurant:
    "RESTAURANT",

portfolio_development:
    "ENTWICKLUNG",

portfolio_project:
    "PROJEKT",

mizini_label:
    "DIGITALES ERLEBNIS",

mizini_title:
    'Geschaffen, um <em>Appetit zu machen.</em>',

mizini_description:
    "Ein hochwertiges digitales Erlebnis für Café Bistro Mizini, das elegantes Design, intuitive Navigation und eine Online-Speisekarte rund um die Identität des Restaurants verbindet.",

trout_category:
    "LOKALES UNTERNEHMEN · WEB DESIGN · ENTWICKLUNG",

trout_title:
    'Păstrăvăria<br><em>din inima muntelui.</em>',

portfolio_live_project:
    "LIVE-PROJEKT",

trout_project_label:
    "DAS PROJEKT",

trout_project_title:
    'Frisch von Natur aus.<br><em>Für die digitale Welt entwickelt.</em>',

trout_description:
    "Eine digitale Identität für eine lokale Forellenzucht in Zărnești, die ein traditionelles Unternehmen in ein modernes und einprägsames Online-Erlebnis verwandelt.",

trout_industry_label:
    "BRANCHE",

trout_industry:
    "Lokales Unternehmen",

trout_services_label:
    "LEISTUNGEN",

trout_services:
    "Design & Entwicklung",

trout_goal_label:
    "ZIEL",

trout_goal:
    "Markenerlebnis",

trout_view_website:
    "Website ansehen",


/* PROCESS — SO ARBEITEN WIR */

process_label:
    "SO ARBEITEN WIR",

process_eyebrow:
    "EIN KLARER PROZESS. EIN ERGEBNIS, DAS ZÄHLT.",

process_title:
    'Von der ersten Idee <em>bis zum Launch.</em>',

process_description:
    "Sie bringen die Idee. Wir geben ihr Richtung und Identität und machen daraus ein digitales Erlebnis.",


/* SCHRITT 01 */

process_1_mini:
    "ENTDECKEN",

process_1_title:
    'Wir beginnen mit <em>Ihrem Unternehmen.</em>',

process_1_description:
    "Wir lernen Ihre Markengeschichte, Ziele, Zielgruppe und Besonderheiten kennen. Jedes Projekt beginnt mit einer klaren Richtung.",


/* SCHRITT 02 */

process_2_mini:
    "GESTALTEN",

process_2_title:
    'Wir geben der Idee <em>eine Identität.</em>',

process_2_description:
    "Wir entwickeln die visuelle Richtung, das Logo und das Website-Erlebnis so, dass jedes Element Professionalität und Persönlichkeit vermittelt.",


/* SCHRITT 03 */

process_3_mini:
    "ENTWICKELN",

process_3_title:
    'Wir machen aus Design <em>ein Erlebnis.</em>',

process_3_description:
    "Wir entwickeln die Website, ergänzen passende Interaktionen und Funktionen und optimieren jedes Detail für Geschwindigkeit und alle Geräte.",


/* SCHRITT 04 */

process_4_mini:
    "LAUNCHEN & WACHSEN",

process_4_title:
    'Vom Projekt <em>zum Business.</em>',

process_4_description:
    "Wir testen, optimieren und launchen das Projekt. Danach können wir die Website weiterentwickeln, während Ihr Unternehmen wächst.",


/* CTA */

process_cta_small:
    "HABEN SIE EINE IDEE?",

process_cta_title:
    'Lassen Sie uns <em>etwas Unvergessliches schaffen.</em>',

process_cta_button:
    "Erzählen Sie uns von Ihrem Projekt",


/* ABOUT — ÜBER UNS */

about_label:
    "ÜBER UNS",

about_title:
    'Mehr als Websites. <em>Wir schaffen digitale Identität.</em>',

about_small:
    "IDEEN · DESIGN · CODE",

about_p1:
    "CM Creative Code entstand aus dem Wunsch, digitale Erlebnisse zu schaffen, die nicht nur gut aussehen, sondern einen klaren Zweck erfüllen.",

about_p2:
    "Jedes Projekt wird rund um das Unternehmen, seine Identität und seine Ziele entwickelt — vom ersten Konzept bis zum Launch.",

about_philosophy:
    "UNSERE PHILOSOPHIE",

about_quote:
    '„Vom ersten Logo <em>bis zum ersten Online-Kunden.“</em>',


/* VALUE 01 */

about_value_1_label:
    "INDIVIDUELL",

about_value_1_title:
    'Keine Projekte <em>von der Stange.</em>',

about_value_1_text:
    "Jedes Unternehmen hat seine eigene Geschichte. Die Website sollte sie widerspiegeln.",


/* VALUE 02 */

about_value_2_label:
    "DESIGN + TECHNOLOGIE",

about_value_2_title:
    'Schön ist gut. <em>Funktional ist entscheidend.</em>',

about_value_2_text:
    "Wir verbinden visuelle Identität mit Technologie und schaffen schnelle, intuitive digitale Erlebnisse.",


/* VALUE 03 */

about_value_3_label:
    "PARTNERSCHAFT",

about_value_3_title:
    'Der Launch ist nur <em>der Anfang.</em>',

about_value_3_text:
    "Das Projekt kann sich gemeinsam mit Ihrem Unternehmen weiterentwickeln.",


/* CONTACT */

contact_label:
    "KONTAKT",

contact_title:
    'Alles beginnt mit einer <span>Idee.</span>',

contact_intro_small:
    "STARTEN WIR HIER",

contact_intro_title:
    'Erzählen Sie uns, was Sie <em>realisieren möchten.</em>',

contact_intro_description:
    "Ob Sie bei null anfangen, Ihre Website modernisieren möchten oder eine komplexere Idee haben — der erste Schritt ist ein Gespräch.",

contact_email_label:
    "E-MAIL",

contact_whatsapp_label:
    "WHATSAPP",

contact_whatsapp_text:
    "Schreiben Sie uns auf WhatsApp",

contact_available:
    "Verfügbar für neue Projekte",


/* FORMULAR */

form_name_label:
    "IHR NAME",

form_name_placeholder:
    "Wie heißen Sie?",

form_business_label:
    "UNTERNEHMEN / MARKE",

form_business_placeholder:
    "Name Ihres Unternehmens",

form_email_label:
    "E-MAIL",

form_email_placeholder:
    "email@beispiel.de",

form_phone_label:
    "TELEFON",

form_phone_placeholder:
    "+49...",

form_project_label:
    "WAS MÖCHTEN SIE REALISIEREN?",

form_project_website:
    "Website",

form_project_ecommerce:
    "E-Commerce",

form_project_redesign:
    "Redesign",

form_project_other:
    "Anderes Projekt",

form_message_label:
    "ÜBER DAS PROJEKT",

form_message_placeholder:
    "Erzählen Sie uns ein wenig über Ihre Idee...",

form_submit:
    "Projekt senden",

form_note:
    "Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass wir die angegebenen Informationen verwenden, um auf Ihre Anfrage zu antworten.",


/* FOOTER */

footer_navigation:
    "NAVIGATION",

footer_services:
    "LEISTUNGEN",

footer_web_design:
    "Web Design",

footer_ecommerce:
    "E-Commerce",

footer_development:
    "Entwicklung",

footer_seo:
    "SEO",

footer_maintenance:
    "Wartung",

footer_language:
    "SPRACHE",

footer_description:
    "Websites für Unternehmen, die auffallen wollen.",

footer_rights:
    "© 2026 CM Creative Code. Alle Rechte vorbehalten.",

footer_privacy:
    "Datenschutzerklärung",

footer_top:
    "NACH OBEN"

},


    /* =====================================
       ITALIANO
    ===================================== */

    it: {

        nav_home: "Home",
        nav_services: "Servizi",
        nav_pricing: "Prezzi",
        nav_portfolio: "Portfolio",
        nav_about: "Chi siamo",
        nav_contact: "Contatti",
        header_cta: "Avvia un progetto",

        hero_eyebrow:
            "STRATEGIA • DESIGN • SVILUPPO • CRESCITA",

        hero_title:
            'Più di semplici<br>siti web.<span>Esperienze digitali.</span>',

        hero_description:
            "Creiamo siti web premium, e-commerce e soluzioni digitali su misura che aiutano le aziende a distinguersi e a crescere.",

        hero_cta: "Avvia il progetto",
        hero_projects: "Scopri i progetti",

        hero_service_2: "E-commerce",
        hero_service_3: "Sviluppo",
        hero_service_4: "SEO & Crescita",
        hero_service_5: "Supporto",


        /* SERVICES */

        services_label: "SERVIZI",
        services_eyebrow: "DALL'IDEA ALL'ESPERIENZA DIGITALE",

        services_title:
            'Tutto ciò di cui la tua azienda ha bisogno <em>per crescere online.</em>',

        services_description:
            "Non realizziamo semplicemente siti web. Creiamo esperienze digitali pensate per trasmettere fiducia, distinguere il tuo brand e trasformare i visitatori in clienti.",

        service_1_title: "Siti web aziendali",

        service_1_description:
            "Siti web moderni, veloci e premium, progettati attorno all'identità e agli obiettivi della tua azienda.",

        service_2_title: "E-commerce",

        service_2_description:
            "Esperienze e-commerce intuitive, progettate per valorizzare i prodotti, semplificare il processo di acquisto e aumentare le conversioni.",

        service_3_title: "Sviluppo Personalizzato",

        service_3_description:
            "Funzionalità, piattaforme e soluzioni digitali sviluppate su misura per le esigenze e i processi della tua azienda.",

        service_4_title: "SEO & Performance",

        service_4_description:
            "Ottimizzazione tecnica, struttura e performance per un sito veloce, ben sviluppato e più facile da trovare online.",

        service_5_title: "Manutenzione & Supporto",

        service_5_description:
            "Aggiornamenti, monitoraggio e miglioramenti continui per mantenere il tuo sito sicuro, moderno e performante.",


        /* PRICING */

        pricing_label: "PACCHETTI & PREZZI",
        pricing_eyebrow: "SCEGLI IL TUO PUNTO DI PARTENZA",

        pricing_title:
            'Un buon sito web non è soltanto<br>una presenza online. <em>È l’inizio della crescita.</em>',

        pricing_description:
            "Soluzioni digitali create per le diverse fasi della tua attività. Ogni progetto include design personalizzato, logo e attenzione a ogni dettaglio che rappresenta il tuo brand.",

        price_from: "da",
        price_from_upper: "DA",
        price_project: "PROGETTO",
        delivery_label: "CONSEGNA STIMATA",
        recommended: "CONSIGLIATO",

        start_title:
            'Vai online.<br><em>Fatti notare.</em>',

        start_subtitle:
            "Per attività che desiderano una presenza online moderna, professionale e convincente.",

        start_feature_1: "Logo personalizzato",
        start_feature_2: "Design adattato al brand",
        start_feature_3: "Presentazione dell'attività & dei servizi",
        start_feature_4: "Esperienza ottimizzata su ogni dispositivo",
        start_feature_5: "Galleria & contenuti visivi",
        start_feature_6: "Contatto rapido & Google Maps",
        start_feature_7: "Integrazione social media",
        start_feature_8: "SEO di base & performance",
        start_feature_9: "Lancio & configurazione completa",

        start_delivery: "3–7 giorni",
        start_button: "Avvia il progetto",

        business_title:
            'Trasforma la tua presenza online <em>in un vantaggio.</em>',

        business_subtitle:
            "Per attività che vogliono più di un semplice sito web: un'esperienza digitale costruita per immagine, fiducia e crescita.",

        business_feature_1: "Logo & direzione visiva personalizzata",
        business_feature_2: "Design premium creato per la tua attività",
        business_feature_3: "Esperienza digitale completamente personalizzata",
        business_feature_4: "Contenuti facili da aggiornare",
        business_feature_5: "Servizi, prodotti o offerte dinamiche",
        business_feature_6: "Animazioni & interazioni premium",
        business_feature_7: "Moduli intelligenti",
        business_feature_8: "SEO & ottimizzazione delle performance",
        business_feature_9: "Analytics & misurazione dei risultati",
        business_feature_10: "Esperienza ottimizzata per le conversioni",
        business_feature_11: "Supporto prioritario dopo il lancio",

        business_delivery: "7–14 giorni",
        business_button: "Costruisci il tuo brand",

        ecommerce_title:
            'Trasforma i prodotti<br><em>in vendite.</em>',

        ecommerce_subtitle:
            "Per brand e attività pronti a vendere online attraverso un'esperienza semplice e professionale.",

        ecommerce_feature_1: "Logo & identità visiva",
        ecommerce_feature_2: "Negozio online personalizzato",
        ecommerce_feature_3: "Esperienza di acquisto premium",
        ecommerce_feature_4: "Prodotti & categorie facili da gestire",
        ecommerce_feature_5: "Promozioni & prezzi speciali",
        ecommerce_feature_6: "Carrello & checkout",
        ecommerce_feature_7: "Pagamenti online sicuri",
        ecommerce_feature_8: "Gestione degli ordini",
        ecommerce_feature_9: "Scorte & disponibilità",
        ecommerce_feature_10: "Notifiche automatiche",
        ecommerce_feature_11: "SEO, Analytics & performance",
        ecommerce_feature_12: "Supporto dopo il lancio",

        ecommerce_delivery: "10–21 giorni",
        ecommerce_button: "Inizia a vendere online",

        custom_small:
            "HAI BISOGNO DI QUALCOSA IN PIÙ?",

        custom_title:
            'Ogni attività è diversa. <em>Anche il tuo sito dovrebbe esserlo.</em>',

        custom_description:
            "Per piattaforme, prenotazioni, appuntamenti, automazioni, integrazioni o funzionalità speciali, realizziamo una soluzione su misura.",

        custom_button:
            "Richiedi un preventivo",

care_subscription:
    "ABBONAMENTO",

        care_after:
            "DOPO IL LANCIO",

        care_title:
            'Il tuo sito continua <em>a evolversi.</em>',

        care_description:
            "Aggiornamenti, backup, monitoraggio, piccole modifiche e supporto tecnico per mantenere il tuo sito performante e aggiornato.",

        care_month:
            "/ mese",

        local_discount:
            "SCONTO",

        local_label:
            "PER ZĂRNEȘTI",

        local_title:
            'Una città speciale merita attività <em>che si fanno notare.</em>',

        local_description:
            "Credo nel potenziale delle attività di Zărnești e nelle opportunità che il mondo online può offrire loro. Per questo offro uno sconto del 30% ai progetti locali.",

        local_highlight:
            "30% di sconto per le attività di Zărnești.",

        local_small:
            "Da Zărnești. Per Zărnești. Per una città speciale.",

        local_button:
            "Cresciamo insieme",

       pricing_note:
    "I prezzi indicati sono orientativi e rappresentano il valore di partenza. Il preventivo finale viene definito in base alla complessità e alle funzionalità richieste dal progetto.",


/* PORTFOLIO */

portfolio_label: "PORTFOLIO",

portfolio_title:
    'Idee diventate <em>realtà.</em>',

portfolio_description:
    "Progetti creati con strategia, design e attenzione a ogni dettaglio.",

portfolio_selected_project:
    "PROGETTO SELEZIONATO",

portfolio_restaurant:
    "RISTORANTE",

portfolio_development:
    "SVILUPPO",

portfolio_project:
    "PROGETTO",

mizini_label:
    "ESPERIENZA DIGITALE",

mizini_title:
    'Creato per <em>stuzzicare l’appetito.</em>',

mizini_description:
    "Un’esperienza digitale premium creata per Café Bistro Mizini, che combina design elegante, navigazione intuitiva e un menu online costruito attorno all’identità del ristorante.",

trout_category:
    "ATTIVITÀ LOCALE · WEB DESIGN · SVILUPPO",

trout_title:
    'Păstrăvăria<br><em>din inima muntelui.</em>',

portfolio_live_project:
    "PROGETTO LIVE",

trout_project_label:
    "IL PROGETTO",

trout_project_title:
    'Fresco per natura.<br><em>Creato per il digitale.</em>',

trout_description:
    "Un’identità digitale creata per un allevamento locale di trote a Zărnești, trasformando un’attività tradizionale in un’esperienza online moderna e memorabile.",

trout_industry_label:
    "SETTORE",

trout_industry:
    "Attività locale",

trout_services_label:
    "SERVIZI",

trout_services:
    "Design & Sviluppo",

trout_goal_label:
    "OBIETTIVO",

trout_goal:
    "Esperienza di brand",

trout_view_website:
    "Visita il sito",


/* PROCESS — COME LAVORIAMO */

process_label:
    "COME LAVORIAMO",

process_eyebrow:
    "UN PROCESSO CHIARO. UN RISULTATO CHE CONTA.",

process_title:
    'Dalla prima idea <em>al lancio.</em>',

process_description:
    "Tu porti l’idea. Noi le diamo direzione e identità e la trasformiamo in un’esperienza digitale.",


/* FASE 01 */

process_1_mini:
    "SCOPRIAMO",

process_1_title:
    'Partiamo dalla <em>tua attività.</em>',

process_1_description:
    "Conosciamo la storia del brand, gli obiettivi, il pubblico e ciò che ti distingue. Ogni progetto parte da una direzione chiara.",


/* FASE 02 */

process_2_mini:
    "CREIAMO",

process_2_title:
    'Diamo all’idea <em>un’identità.</em>',

process_2_description:
    "Costruiamo la direzione visiva, il logo e l’esperienza del sito affinché ogni elemento comunichi professionalità e personalità.",


/* FASE 03 */

process_3_mini:
    "SVILUPPIAMO",

process_3_title:
    'Trasformiamo il design <em>in esperienza.</em>',

process_3_description:
    "Sviluppiamo il sito, aggiungiamo le interazioni e le funzionalità necessarie e ottimizziamo ogni dettaglio per velocità e qualsiasi dispositivo.",


/* FASE 04 */

process_4_mini:
    "LANCIAMO & CRESCIAMO",

process_4_title:
    'Dal progetto <em>al business.</em>',

process_4_description:
    "Testiamo, ottimizziamo e lanciamo il progetto. Dopo la pubblicazione, possiamo continuare a sviluppare il sito mentre la tua attività cresce.",


/* CTA */

process_cta_small:
    "HAI UN’IDEA?",

process_cta_title:
    'Costruiamo <em>qualcosa di memorabile.</em>',

process_cta_button:
    "Raccontaci il tuo progetto",


/* ABOUT — CHI SIAMO */

about_label:
    "CHI SIAMO",

about_title:
    'Più di semplici siti web. <em>Costruiamo identità digitale.</em>',

about_small:
    "IDEE · DESIGN · CODE",

about_p1:
    "CM Creative Code nasce dal desiderio di creare esperienze digitali che non siano solo belle da vedere, ma che abbiano uno scopo.",

about_p2:
    "Ogni progetto è costruito attorno all’attività, all’identità e agli obiettivi del cliente — dal primo concept fino al lancio.",

about_philosophy:
    "LA NOSTRA FILOSOFIA",

about_quote:
    '“Dal primo logo <em>al primo cliente online.”</em>',


/* VALUE 01 */

about_value_1_label:
    "PERSONALIZZATO",

about_value_1_title:
    'Nessun progetto <em>fatto con lo stampino.</em>',

about_value_1_text:
    "Ogni attività ha la propria storia. Il sito web deve rispecchiarla.",


/* VALUE 02 */

about_value_2_label:
    "DESIGN + TECNOLOGIA",

about_value_2_title:
    'Bello è importante. <em>Funzionale è essenziale.</em>',

about_value_2_text:
    "Uniamo identità visiva e tecnologia per creare esperienze digitali veloci e intuitive.",


/* VALUE 03 */

about_value_3_label:
    "PARTNERSHIP",

about_value_3_title:
    'Il lancio è solo <em>l’inizio.</em>',

about_value_3_text:
    "Il progetto può continuare a evolversi insieme alla tua attività.",


/* CONTACT */

contact_label:
    "CONTATTI",

contact_title:
    'Tutto inizia da un’<span>idea.</span>',

contact_intro_small:
    "INIZIAMO DA QUI",

contact_intro_title:
    'Raccontaci cosa vuoi <em>realizzare.</em>',

contact_intro_description:
    "Che tu parta da zero, voglia modernizzare il tuo sito web o abbia un’idea più complessa, il primo passo è una conversazione.",

contact_email_label:
    "EMAIL",

contact_whatsapp_label:
    "WHATSAPP",

contact_whatsapp_text:
    "Scrivici su WhatsApp",

contact_available:
    "Disponibile per nuovi progetti",


/* MODULO */

form_name_label:
    "IL TUO NOME",

form_name_placeholder:
    "Come ti chiami?",

form_business_label:
    "ATTIVITÀ / BRAND",

form_business_placeholder:
    "Nome della tua attività",

form_email_label:
    "EMAIL",

form_email_placeholder:
    "email@esempio.it",

form_phone_label:
    "TELEFONO",

form_phone_placeholder:
    "+39...",

form_project_label:
    "COSA VUOI REALIZZARE?",

form_project_website:
    "Sito web",

form_project_ecommerce:
    "E-commerce",

form_project_redesign:
    "Redesign",

form_project_other:
    "Altro progetto",

form_message_label:
    "IL PROGETTO",

form_message_placeholder:
    "Raccontaci qualcosa della tua idea...",

form_submit:
    "Invia il progetto",

form_note:
    "Inviando questo modulo, accetti che possiamo utilizzare le informazioni fornite per rispondere alla tua richiesta.",


/* FOOTER */

footer_navigation:
    "NAVIGAZIONE",

footer_services:
    "SERVIZI",

footer_web_design:
    "Web Design",

footer_ecommerce:
    "E-commerce",

footer_development:
    "Sviluppo",

footer_seo:
    "SEO",

footer_maintenance:
    "Manutenzione",

footer_language:
    "LINGUA",

footer_description:
    "Siti web creati per attività che vogliono distinguersi.",

footer_rights:
    "© 2026 CM Creative Code. Tutti i diritti riservati.",

footer_privacy:
    "Informativa sulla privacy",

footer_top:
    "SU"

}
};


/* =========================================
   LANGUAGE BUTTONS
========================================= */

const languageButtons = document.querySelectorAll(
    ".language-option, .footer-language button"
);

const languageSelector =
    document.querySelector(".language-selector");

const languageCurrent =
    document.querySelector(".language-current");

const languageCurrentCode =
    document.querySelector(".language-current-code");

/* =========================================
   SET LANGUAGE
========================================= */

function setLanguage(lang) {

    if (!translations[lang]) {
        lang = "ro";
    }

    document.documentElement.lang = lang;


    /* ACTIVE LANGUAGE BUTTON */

languageButtons.forEach((button) => {

    const buttonLanguage =
        button.dataset.lang ||
        button.textContent.trim().toLowerCase();

    button.classList.toggle(
        "active",
        buttonLanguage === lang
    );
});


/* CURRENT LANGUAGE IN HEADER */

if (languageCurrentCode) {
    languageCurrentCode.textContent =
        lang.toUpperCase();
}


    /* NORMAL TEXT / HTML */

    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key =
            element.getAttribute("data-i18n");

        const translation =
            translations[lang][key];

        if (translation !== undefined) {
            element.innerHTML = translation;
        }
    });


    /* PLACEHOLDERS */

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.getAttribute("data-i18n-placeholder");

            const translation =
                translations[lang][key];

            if (translation !== undefined) {
                element.placeholder = translation;
            }
        });


    /* SAVE LANGUAGE */

    localStorage.setItem(
        "cm-language",
        lang
    );
}


/* =========================================
   LANGUAGE DROPDOWN
========================================= */

if (languageCurrent && languageSelector) {

    languageCurrent.addEventListener("click", function (e) {

        e.stopPropagation();

        const isOpen =
            languageSelector.classList.toggle("open");

        languageCurrent.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
}


/* =========================================
   LANGUAGE CLICK
========================================= */

languageButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const lang =
            this.dataset.lang ||
            this.textContent.trim().toLowerCase();

        setLanguage(lang);


        /* CLOSE HEADER DROPDOWN */

        if (languageSelector) {
            languageSelector.classList.remove("open");
        }

        if (languageCurrent) {
            languageCurrent.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});


/* =========================================
   CLOSE DROPDOWN OUTSIDE
========================================= */

document.addEventListener("click", function (e) {

    if (
        languageSelector &&
        !languageSelector.contains(e.target)
    ) {

        languageSelector.classList.remove("open");

        if (languageCurrent) {
            languageCurrent.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    }
});


/* =========================================
   SAVED LANGUAGE
========================================= */

const savedLanguage =
    localStorage.getItem("cm-language");

setLanguage(
    translations[savedLanguage]
        ? savedLanguage
        : "ro"
);