import './style.scss';

// 1)Vocabulary
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

    review4_text: "Absolutely loved the atmosphere and professionalism. Will definitely return for my next piece!",
    review4_author: "— Anna Becker",

    review5_text: "The artist captured my idea perfectly. Clean lines, smooth shading — pure talent.",
    review5_author: "— Lukas Hoffmann",

    review6_text: "Super friendly staff and a very clean studio. I felt safe and comfortable the whole time.",
    review6_author: "— Emily Schneider",

    review7_text: "Amazing detail and precision. The artist truly brought my vision to life.",
    review7_author: "— Daniel Weber",

    review8_text: "Professional approach and great communication. Highly satisfied with the result!",
    review8_author: "— Sofia Klein",

    review9_text: "One of the best tattoo experiences I've ever had. Will definitely come back!",
    review9_author: "— Markus Vogel",

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
    contact_consultation: "Consultation",
    contact_design_creation: "Design Creation",
    contact_tattooing: "Tattooing",
    contact_textarea_description: "Description of desired tattoo",
    contact_button: "Send Request",

    // FORM ERRORS — EN
    error_name_required: "Please enter your name.",
    error_name_invalid: "Name contains invalid characters.",

    error_phone_required: "Please enter your phone number.",
    error_phone_invalid: "Phone must contain only digits (7–15).",

    error_email_required: "Please enter your email.",
    error_email_invalid: "Please enter a valid email.",

    error_service_required: "Please select a service.",

    error_message_required: "Please describe your idea.",

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

    review4_text: "Ich habe die Atmosphäre und Professionalität absolut geliebt. Ich komme definitiv für mein nächstes Tattoo zurück!",
    review4_author: "— Anna Becker",

    review5_text: "Der Künstler hat meine Idee perfekt umgesetzt. Saubere Linien, sanfte Schattierung — pure Kunst.",
    review5_author: "— Lukas Hoffmann",

    review6_text: "Super freundliches Team und ein sehr sauberes Studio. Ich habe mich die ganze Zeit sicher und wohl gefühlt.",
    review6_author: "— Emily Schneider",

    review7_text: "Unglaubliche Detailgenauigkeit und Präzision. Der Künstler hat meine Vision wirklich zum Leben erweckt.",
    review7_author: "— Daniel Weber",

    review8_text: "Professioneller Ansatz und großartige Kommunikation. Ich bin mit dem Ergebnis sehr zufrieden!",
    review8_author: "— Sofia Klein",

    review9_text: "Eine der besten Tattoo-Erfahrungen, die ich je hatte. Ich komme definitiv wieder!",
    review9_author: "— Markus Vogel",

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
    contact_consultation:"Beratung",
    contact_design_creation: "Designentwicklung",
    contact_tattooing: "Tätowierung",
    contact_textarea_description: "Beschreibung des gewünschten Tattoos",
    contact_button: "Anfrage senden",

    // FORM ERRORS — DE
    error_name_required: "Bitte geben Sie Ihren Namen ein.",
    error_name_invalid: "Der Name enthält ungültige Zeichen.",

    error_phone_required: "Bitte geben Sie Ihre Telefonnummer ein.",
    error_phone_invalid: "Die Telefonnummer darf nur Ziffern enthalten (7–15).",

    error_email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
    error_email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",

    error_service_required: "Bitte wählen Sie eine Dienstleistung aus.",

    error_message_required: "Bitte beschreiben Sie Ihre Idee.",

    /* FOOTER */
    footer_rights: "© 2026 INK STUDIO. Alle Rechte vorbehalten."
  }
};

// 2) Burger
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile_menu');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

// 3) Smooth Scroll
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
    document.body.style.overflow = 'auto';
  });
});


// 3) Translation
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
let currentLang = 'en';

// *one, unified translation function
function applyTranslations(lang) {
  // *regular texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // *placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

// *change language using the toggle switch
langToggle.addEventListener('change', () => {
  currentLang = langToggle.checked ? 'de' : 'en';
  applyTranslations(currentLang);
});

langToggleMobile.addEventListener('change', ()=> {
  currentLang = langToggleMobile.checked ? 'de' : 'en';
  applyTranslations(currentLang);
})

// 4) Gallery Filter
applyTranslations(currentLang);

const filterButtons = document.querySelectorAll('.gallery_filter_btn');
const galleryImages = document.querySelectorAll('.gallery_wrapper_img_box img');
const galleryBox = document.querySelector('.gallery_wrapper_img_box');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    let visibleImages = [];

    // *smooth hiding
    galleryImages.forEach(img => {
      const category = img.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        visibleImages.push(img);
      }

      img.classList.remove('gallery_img-visible');
      img.classList.add('gallery_img-hidden');

      // *display-hiding (only after the animation ends)
      setTimeout(() => {
        if (img.classList.contains('gallery_img-hidden')) {
          img.style.display = 'none';
        }
      }, 350);
    });

    // *dynamic grid
    const count = visibleImages.length;

    if (count === 1) {
      galleryBox.style.gridTemplateColumns = '1fr';
      galleryBox.style.justifyItems = 'center';
    } else if (count === 2) {
      galleryBox.style.gridTemplateColumns = 'repeat(2, 1fr)';
      galleryBox.style.justifyItems = 'center';
    } else {
      galleryBox.style.gridTemplateColumns = 'repeat(3, 1fr)';
      galleryBox.style.justifyItems = 'center';
    }

    // *smooth appearance (stagger)
    visibleImages.forEach((img, index) => {
      setTimeout(() => {
        img.style.display = 'block';

        // a small delay to allow CSS to apply display
        requestAnimationFrame(() => {
          img.classList.remove('gallery_img-hidden');
          img.classList.add('gallery_img-visible');
        });

      }, index * 120);
    });

  });
});

// *COUNTER ANIMATION FOR ABOUT SECTION
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

        // *add a class for fade-in
        counter.classList.add('visible');

        // *indicate here whether there was a plus
        if (counter.textContent.includes('+')) {
          counter.dataset.plus = true;
        }

        animateCounter(counter, target);
      });
    }
  });
}, { threshold: 0.4 });

observer.observe(document.querySelector('#about'));

// 5) Modal Window
const modal = document.getElementById('modalBooking');
const overlay = document.getElementById('modalOverlay');
const openBtn = document.querySelector('.header_btn');
const closeBtn = document.getElementById('modalClose');

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const reviewsSwiper = new Swiper('.reviews_swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.reviews_next',
    prevEl: '.reviews_prev',
  },
  breakpoints: {
    1025: { slidesPerView: 3 },
    769: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});

// 6) Validation
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.contact_form');

  forms.forEach(form => {
    const nameInput   = form.querySelector('.contact_input_name');
    const phoneInput  = form.querySelector('.contact_input_phone');
    const emailInput  = form.querySelector('.contact_input_email');
    const select      = form.querySelector('.contact_select');
    const textarea    = form.querySelector('.contact_textarea');
    const button      = form.querySelector('.contact_button');

    const showError = (input, message) => {
  clearError(input);

  input.classList.add('input-error');

  const error = document.createElement('div');
  error.className = 'contact_error-message';
  error.textContent = message;

  // *INSERTING INSIDE THE WRAPPER
  input.parentElement.appendChild(error);
};

    const clearError = (input) => {
  input.classList.remove('input-error');
  const wrapper = input.parentElement;
  const error = wrapper.querySelector('.contact_error-message');
  if (error) error.remove();
};

    const clearAllErrors = () => {
      const inputs = [nameInput, phoneInput, emailInput, select, textarea];
      inputs.forEach(el => {
        if (!el) return;
        clearError(el);
      });
    };

    const validateName = (value) => {
      // *only letters (Latin/Cyrillic), space, hyphen, apostrophe, minimum 2 characters
      const re = /^[A-Za-zА-Яа-яЁёІіЇїЄє' -]{2,}$/;
      return re.test(value.trim());
    };

    const validatePhone = (value) => {
      // numbers only, minimum 7 characters
      const re = /^\d{7,15}$/;
      return re.test(value.trim());
    };

    const validateEmail = (value) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(value.trim());
    };

    button.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllErrors();

      let isValid = true;

      const nameValue  = nameInput.value;
      const phoneValue = phoneInput.value;
      const emailValue = emailInput.value;
      const serviceVal = select.value;
      const textValue  = textarea.value.trim();

// Name
if (!nameValue.trim()) {
  showError(nameInput, translations[currentLang].error_name_required);
  isValid = false;
} else if (!validateName(nameValue)) {
  showError(nameInput, translations[currentLang].error_name_invalid);
  isValid = false;
}

// Phone
if (!phoneValue.trim()) {
  showError(phoneInput, translations[currentLang].error_phone_required);
  isValid = false;
} else if (!validatePhone(phoneValue)) {
  showError(phoneInput, translations[currentLang].error_phone_invalid);
  isValid = false;
}

// Email
if (!emailValue.trim()) {
  showError(emailInput, translations[currentLang].error_email_required);
  isValid = false;
} else if (!validateEmail(emailValue)) {
  showError(emailInput, translations[currentLang].error_email_invalid);
  isValid = false;
}

// Select
if (!serviceVal) {
  showError(select, translations[currentLang].error_service_required);
  isValid = false;
}

// Textarea
if (!textValue) {
  showError(textarea, translations[currentLang].error_message_required);
  isValid = false;
}

      if (!isValid) return;

      // *submit the form here (fetch / AJAX / submit)
      console.log('Form is valid, send data...');
      // example:
      // form.submit();
    });
  });
});