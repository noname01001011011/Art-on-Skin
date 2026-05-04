import './style.scss';

// 1) СНАЧАЛА словарь
const translations = {
  en: {
    header_logo: "INK STUDIO",

    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_about: "About",
    nav_contact: "Contact",
    nav_book: "Book Now",

    /* HERO */
    hero_title: "Art on Skin",
    hero_subtitle: "Professional tattoos from experienced artists",
    hero_btn_book: "Book a Session",
    hero_btn_view: "View Our Work",

    /* SERVICES */
    services_title: "Our Services",
    services_subtitle: "Wide range of services to bring your ideas to life",

    services_item1_title: "Traditional Tattoos",
    services_item1_text: "Classic and traditional tattoo styles",
    services_item1_price: "from €80",

    services_item2_title: "Realism",
    services_item2_text: "Realistic portraits and images",
    services_item2_price: "from €120",

    services_item3_title: "Graphics",
    services_item3_text: "Graphic and geometric designs",
    services_item3_price: "from €60",

    services_item4_title: "Color Tattoos",
    services_item4_text: "Vibrant color tattoos of any complexity",
    services_item4_price: "from €100",

    services_item5_title: "Cover-ups",
    services_item5_text: "Cover-up of old tattoos",
    services_item5_price: "from €90",

    services_item6_title: "Custom Designs",
    services_item6_text: "Individual design development",
    services_item6_price: "from €40",

    /* GALLERY */
    gallery_title: "Gallery",
    gallery_subtitle: "Our best work and happy clients",

    gallery_filter_all: "All",
    gallery_filter_realism: "Realism",
    gallery_filter_bw: "Black & White",
    gallery_filter_sketch: "Sketch",
    gallery_filter_minimalism: "Minimalism",

    /* ABOUT */
    about_title: "About Our Studio",
    about_text1: "INK STUDIO is a team of professional tattoo artists with many years of experience.",
    about_text2: "We specialize in various tattoo styles and guarantee safety, sterility and high quality work.",

    about_stat1_value: "10+",
    about_stat1_label: "years experience",

    about_stat2_value: "5",
    about_stat2_label: "artists",

    about_stat3_value: "2000+",
    about_stat3_label: "clients",

    about_stat4_value: "100%",
    about_stat4_label: "sterile",

    /* PROCESS */
    process_title: "Our Process",
    process_subtitle: "How we work with you",

    process_step1_title: "Consultation",
    process_step1_text: "We discuss your idea, style preferences, and placement",

    process_step2_title: "Design",
    process_step2_text: "Our artist creates a custom design based on your vision",

    process_step3_title: "Approval",
    process_step3_text: "Review and approve the final design before the session",

    process_step4_title: "Tattooing",
    process_step4_text: "Professional execution in a sterile environment",

    process_step5_title: "Aftercare",
    process_step5_text: "Detailed instructions for proper healing and care",

    /* ARTISTS */
    artists_title: "Our Artists",
    artists_subtitle: "Meet our talented team",

    artist1_name: "Alex Schmidt",
    artist1_style: "Realism & Portraits",
    artist1_experience: "12 years",

    artist2_name: "Maria Weber",
    artist2_style: "Traditional & Neo-Traditional",
    artist2_experience: "8 years",

    artist3_name: "Tom Fischer",
    artist3_style: "Blackwork & Graphics",
    artist3_experience: "10 years",

    artist4_name: "Sarah Klein",
    artist4_style: "Color & Watercolor",
    artist4_experience: "7 years",

    /* REVIEWS */
    reviews_title: "Client Reviews",
    reviews_subtitle: "What our clients say about us",

    review1_text: "Amazing experience! The artist was professional, the studio was clean, and my tattoo turned out even better than I imagined.",
    review1_author: "— Michael Brown",

    review2_text: "I got my first tattoo here and the team made me feel so comfortable. The design process was collaborative and the result is stunning!",
    review2_author: "— Jessica Miller",

    review3_text: "Best tattoo studio in Berlin! Great atmosphere, talented artists, and reasonable prices. Highly recommend!",
    review3_author: "— David Wilson",

    /* FAQ */
    faq_title: "FAQ",
    faq_subtitle: "Frequently asked questions",

    faq_q1: "Does it hurt?",
    faq_a1: "Pain levels vary depending on placement and individual tolerance. Most clients describe it as manageable discomfort rather than severe pain.",

    faq_q2: "How long does healing take?",
    faq_a2: "Typically 2–4 weeks for surface healing. Complete healing can take 2–3 months. We provide detailed aftercare instructions.",

    faq_q3: "Can I bring my own design?",
    faq_a3: "Absolutely! We can work with your design or create something custom. Our artists will help refine it for the best tattoo result.",

    faq_q4: "What is the minimum age?",
    faq_a4: "You must be 18 years or older. Valid ID is required for all clients.",

    faq_q5: "How do I prepare for my session?",
    faq_a5: "Get a good night's sleep, eat a proper meal, stay hydrated, and avoid alcohol 24 hours before. Wear comfortable clothing.",

    /* CONTACT */
    contact_form_title: "Book a Session",

    contact_address_title: "Address",
    contact_address_value: "Berlin, Friedrichstraße 123",

    contact_phone_title: "Phone",
    contact_phone_value: "+49 30 1234567",

    contact_email_title: "Email",
    contact_email_value: "info@inkstudio.de",

    contact_hours_title: "Opening Hours",
    contact_hours_value: "Mon–Sun: 10:00 – 22:00",

    contact_input_name: "Your Name",
    contact_input_phone: "Phone",
    contact_input_email: "Email",
    contact_select_service: "Select Service",
    contact_textarea_description: "Description of desired tattoo",
    contact_button: "Send Request",

    /* FOOTER */
    footer_rights: "© 2026 INK STUDIO. All rights reserved."
  },

  de: {
    nav_services: "Dienstleistungen",
    nav_gallery: "Galerie",
    nav_about: "Über uns",
    nav_contact: "Kontakt",
    nav_book: "Jetzt buchen",

    /* HERO */
    hero_title: "Kunst auf der Haut",
    hero_subtitle: "Professionelle Tattoos von erfahrenen Künstlern",
    hero_btn_book: "Termin buchen",
    hero_btn_view: "Unsere Arbeiten ansehen",

    /* SERVICES */
    services_title: "Unsere Dienstleistungen",
    services_subtitle: "Breites Angebot, um Ihre Ideen zum Leben zu erwecken",

    services_item1_title: "Traditionelle Tattoos",
    services_item1_text: "Klassische und traditionelle Tattoo-Stile",
    services_item1_price: "ab 80 €",

    services_item2_title: "Realismus",
    services_item2_text: "Realistische Porträts und Motive",
    services_item2_price: "ab 120 €",

    services_item3_title: "Grafik",
    services_item3_text: "Grafische und geometrische Designs",
    services_item3_price: "ab 60 €",

    services_item4_title: "Farbtattoos",
    services_item4_text: "Lebendige Farbtattoos jeder Komplexität",
    services_item4_price: "ab 100 €",

    services_item5_title: "Cover-ups",
    services_item5_text: "Überdeckung alter Tattoos",
    services_item5_price: "ab 90 €",

    services_item6_title: "Individuelle Designs",
    services_item6_text: "Entwicklung eines individuellen Designs",
    services_item6_price: "ab 40 €",

    /* GALLERY */
    gallery_title: "Galerie",
    gallery_subtitle: "Unsere besten Arbeiten und zufriedene Kunden",

    gallery_filter_all: "Alle",
    gallery_filter_realism: "Realismus",
    gallery_filter_bw: "Schwarz & Weiß",
    gallery_filter_sketch: "Skizze",
    gallery_filter_minimalism: "Minimalismus",

    /* ABOUT */
    about_title: "Über unser Studio",
    about_text1: "INK STUDIO ist ein Team professioneller Tätowierer mit langjähriger Erfahrung.",
    about_text2: "Wir spezialisieren uns auf verschiedene Tattoo-Stile und garantieren Sicherheit, Sterilität und höchste Qualität.",

    about_stat1_value: "10+",
    about_stat1_label: "Jahre Erfahrung",

    about_stat2_value: "5",
    about_stat2_label: "Künstler",

    about_stat3_value: "2000+",
    about_stat3_label: "Kunden",

    about_stat4_value: "100%",
    about_stat4_label: "steril",

    /* PROCESS */
    process_title: "Unser Prozess",
    process_subtitle: "So arbeiten wir mit Ihnen",

    process_step1_title: "Beratung",
    process_step1_text: "Wir besprechen Ihre Idee, Stilvorlieben und Platzierung",

    process_step2_title: "Design",
    process_step2_text: "Unser Künstler erstellt ein individuelles Design basierend auf Ihrer Vision",

    process_step3_title: "Freigabe",
    process_step3_text: "Überprüfen und genehmigen Sie das endgültige Design vor der Sitzung",

    process_step4_title: "Tätowieren",
    process_step4_text: "Professionelle Ausführung in einer sterilen Umgebung",

    process_step5_title: "Nachsorge",
    process_step5_text: "Detaillierte Anweisungen für richtige Heilung und Pflege",

    /* ARTISTS */
    artists_title: "Unsere Künstler",
    artists_subtitle: "Lernen Sie unser talentiertes Team kennen",

    artist1_name: "Alex Schmidt",
    artist1_style: "Realismus & Porträts",
    artist1_experience: "12 Jahre",

    artist2_name: "Maria Weber",
    artist2_style: "Traditionell & Neo-Traditionell",
    artist2_experience: "8 Jahre",

    artist3_name: "Tom Fischer",
    artist3_style: "Blackwork & Grafik",
    artist3_experience: "10 Jahre",

    artist4_name: "Sarah Klein",
    artist4_style: "Farbe & Aquarell",
    artist4_experience: "7 Jahre",

    /* REVIEWS */
    reviews_title: "Kundenbewertungen",
    reviews_subtitle: "Was unsere Kunden über uns sagen",

    review1_text: "Unglaubliche Erfahrung! Der Künstler war professionell, das Studio sauber und das Tattoo wurde besser als erwartet.",
    review1_author: "— Michael Brown",

    review2_text: "Mein erstes Tattoo! Das Team war sehr einfühlsam. Der Designprozess war kollaborativ und das Ergebnis ist beeindruckend.",
    review2_author: "— Jessica Miller",

    review3_text: "Bestes Tattoo-Studio in Berlin! Tolle Atmosphäre, talentierte Künstler und faire Preise. Sehr empfehlenswert!",
    review3_author: "— David Wilson",

    /* FAQ */
    faq_title: "FAQ",
    faq_subtitle: "Häufig gestellte Fragen",

    faq_q1: "Tut es weh?",
    faq_a1: "Der Schmerz hängt vom Bereich und der individuellen Toleranz ab. Die meisten Kunden beschreiben es als gut aushaltbar.",

    faq_q2: "Wie lange dauert die Heilung?",
    faq_a2: "Die oberflächliche Heilung dauert 2–4 Wochen. Die vollständige Heilung kann 2–3 Monate dauern. Wir geben detaillierte Pflegehinweise.",

    faq_q3: "Kann ich mein eigenes Design mitbringen?",
    faq_a3: "Natürlich! Wir können mit Ihrem Design arbeiten oder etwas Individuelles erstellen. Unsere Künstler helfen bei der Optimierung.",

    faq_q4: "Wie alt muss ich sein?",
    faq_a4: "Sie müssen mindestens 18 Jahre alt sein. Ein gültiger Ausweis ist erforderlich.",

    faq_q5: "Wie bereite ich mich vor?",
    faq_a5: "Schlafen Sie gut, essen Sie ausreichend, trinken Sie genug Wasser und vermeiden Sie Alkohol 24 Stunden vorher. Tragen Sie bequeme Kleidung.",

    /* CONTACT */
    contact_form_title: "Termin buchen",

    contact_address_title: "Adresse",
    contact_address_value: "Berlin, Friedrichstraße 123",

    contact_phone_title: "Telefon",
    contact_phone_value: "+49 30 1234567",

    contact_email_title: "E-Mail",
    contact_email_value: "info@inkstudio.de",

    contact_hours_title: "Öffnungszeiten",
    contact_hours_value: "Mo–So: 10:00 – 22:00",

    contact_input_name: "Ihr Name",
    contact_input_phone: "Telefon",
    contact_input_email: "E-Mail",
    contact_select_service: "Dienst auswählen",
    contact_textarea_description: "Beschreibung des gewünschten Tattoos",
    contact_button: "Anfrage senden",

    /* FOOTER */
    footer_rights: "© 2026 INK STUDIO. Alle Rechte vorbehalten."
  }
};

// 2) Потом бургер
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile_menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// 3) Потом плавный скролл
const header = document.querySelector('.header');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const headerHeight = header.offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// 4) Потом логика перевода
// 2) переключатель языка
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
let currentLang = 'en';

// 3) одна, единая функция перевода
function applyTranslations(lang) {
  // обычные тексты
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // placeholder'ы
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// 4) смена языка по тумблеру
langToggle.addEventListener('change', () => {
  currentLang = langToggle.checked ? 'de' : 'en';
  applyTranslations(currentLang);
});

langToggleMobile.addEventListener('change', ()=> {
  currentLang = langToggleMobile.checked ? 'de' : 'en';
  applyTranslations(currentLang);
})

// 5) начальная инициализация
applyTranslations(currentLang);

//document.body.classList.toggle('no-scroll');
//.no-scroll {
    //overflow: hidden;
  //} //
  


const filterButtons = document.querySelectorAll('.gallery_filter_btn');
const galleryImages = document.querySelectorAll('.gallery_wrapper_img_box img');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // active button
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryImages.forEach(img => {
      const category = img.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
        img.style.pointerEvents = 'auto';
      } else {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        img.style.pointerEvents = 'none';
      }
    });
  });
});

// COUNTER ANIMATION FOR ABOUT SECTION
const counters = document.querySelectorAll('.stats_block_value');
let counterStarted = false;

function animateCounter(el, target) {
  let current = 0;
  const duration = 2000; // 2s
  const step = target / (duration / 16); // 60fps

  function update() {
    current += step;
    if (current < target) {
      el.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target + (el.dataset.plus ? '+' : '');
    }
  }

  update();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterStarted) {
      counterStarted = true;

      counters.forEach(counter => {
        const rawValue = counter.textContent.replace('+', '').replace('%', '');
        const target = parseInt(rawValue);

        // додаємо клас для fade-in
        counter.classList.add('visible');

        // позначаємо, чи був плюс
        if (counter.textContent.includes('+')) {
          counter.dataset.plus = true;
        }

        animateCounter(counter, target);
      });
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector('#about'));
