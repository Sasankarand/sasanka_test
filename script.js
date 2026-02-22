// ── Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((r) => observer.observe(r));

// ── Counter animation (guard against missing element)
function animateCounters() {
  document.querySelectorAll(".stat-num[data-target]").forEach((el) => {
    const target = +el.dataset.target;
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + (target > 99 ? "+" : "");
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}
const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  let counted = false;
  const statsObs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        animateCounters();
      }
    },
    { threshold: 0.4 }
  );
  statsObs.observe(statsSection);
}

// ── News dots (visual only)
document.querySelectorAll(".news-dot").forEach((dot) => {
  dot.addEventListener("click", () => {
    document.querySelectorAll(".news-dot").forEach((d) => {
      d.style.background = "#c8d5f0";
      d.style.width = "20px";
    });
    dot.style.background = "var(--blue)";
    dot.style.width = "30px";
  });
});

// ── Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.textContent = "Sending...";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "Send Message ✓";
    btn.style.background = "#059669";
    const success = document.getElementById("formSuccess");
    if (success) success.classList.remove("d-none");
    e.target.reset();
    setTimeout(() => {
      btn.textContent = "Send Message";
      btn.style.background = "";
      btn.disabled = false;
      if (success) success.classList.add("d-none");
    }, 4000);
  }, 1200);
}

// ────────────────────────────────────────────────
// TRANSLATIONS
// ────────────────────────────────────────────────
const translations = {
  en: {
    tagline: "Your trusted partner",
    nav_about: "About Us",
    nav_features: "Features",
    nav_contact: "Contact",
    hero_title: "Welcome to our company...",
    hero_sub: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    about_text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.",
    news_title: "Latest News",
    news_text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    read_more: "Read",
    testimonials_title: "Testimonials",
    testimonials_sub: "What our clients say about us",
    contact_title: "Contact Us",
    stay_connected: "Stay connected with",
    footer_copy: "© 2020 Reserved by Company Name Limited.",
  },
  si: {
    tagline: "ඔබේ විශ්වාසවන්ත හවුල්කරු",
    nav_about: "අප ගැන",
    nav_features: "විශේෂාංග",
    nav_contact: "සම්බන්ධ වන්න",
    hero_title: "අපගේ සමාගමට සාදරයෙන් පිළිගනිමු",
    hero_sub: "ලෝරම් ඉප්සම් ඩොලර් සිට් ඇමේට්, ශ්‍රී ලංකාවේ සම්ප්‍රදායික ව්‍යාපාරික ජාලය.",
    about_text: "අප ගැන: ලෝරම් ඉප්සම් ඩොලර් සිට් ඇමේට් කොන්සෙටේටර් සාඩිප්ස්සිං ඊලිටෝ, ශ්‍රී ලංකාවේ ව්‍යාපාරික ජාලය.",
    news_title: "අලුත්ම පුවත්",
    news_text: "ලෝරම් ඉප්සම් ඩොලර් සිට් ඇමේට් කොන්සෙටේටර් සාඩිප්ස්සිං.",
    read_more: "වැඩිදුර කියවන්න",
    testimonials_title: "සාක්‍ෂි",
    testimonials_sub: "අපේ ගනුදෙනුකරුවන් කියන දේ",
    contact_title: "අප අමතන්න",
    stay_connected: "සම්බන්ධව සිටින්න",
    footer_copy: "© 2020 සියලු හිමිකම් ඇවිරිණි.",
  },
  ta: {
    tagline: "உங்கள் நம்பகமான பங்காளி",
    nav_about: "எங்களை பற்றி",
    nav_features: "அம்சங்கள்",
    nav_contact: "தொடர்பு கொள்ள",
    hero_title: "எங்கள் நிறுவனத்திற்கு வரவேற்கிறோம்",
    hero_sub: "லோரம் இப்சம் டோலர் சிட் அமெட், வணிக சேவைகளில் நாங்கள் உங்களுக்கு உதவுகிறோம்.",
    about_text: "எங்களை பற்றி: லோரம் இப்சம் டோலர் சிட் அமெட் கான்செட்டூர் சாடிப்ஸ்கிங் எலிட்ரோ, வணிக சேவை.",
    news_title: "சமீபத்திய செய்திகள்",
    news_text: "லோரம் இப்சம் டோலர் சிட் அமெட் கான்செட்டூர் சாடிப்ஸ்கிங்.",
    read_more: "மேலும் படிக்க",
    testimonials_title: "சான்றுகள்",
    testimonials_sub: "எங்கள் வாடிக்கையாளர்கள் கூறுவது",
    contact_title: "எங்களை தொடர்பு கொள்ளுங்கள்",
    stay_connected: "இணைந்திருங்கள்",
    footer_copy: "© 2020 அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};

// ── Apply language
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key] !== undefined) {
      // Preserve child elements (icons etc.) by only updating text nodes
      const hasOnlyText = [...el.childNodes].every(
        (n) => n.nodeType === Node.TEXT_NODE
      );
      if (hasOnlyText) {
        el.textContent = translations[lang][key];
      } else {
        // Find first text node and update it
        const textNode = [...el.childNodes].find(
          (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
        );
        if (textNode) textNode.textContent = translations[lang][key];
        else el.textContent = translations[lang][key];
      }
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
}

// ── Custom Language Switcher
document.addEventListener("DOMContentLoaded", () => {

  // ── Swiper Testimonials
  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 700,
    effect: "slide",
    pagination: {
      el: ".testimonialSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#tNext",
      prevEl: "#tPrev",
    },
  });

  // ── Language Switcher Logic
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");
  const langChevron = document.getElementById("langChevron");
  const langFlag = document.getElementById("langFlag");
  const langLabel = document.getElementById("langLabel");
  const langSwitcher = document.getElementById("langSwitcher");

  function openDropdown() {
    langDropdown.classList.add("open");
    langChevron.style.transform = "rotate(180deg)";
    langBtn.setAttribute("aria-expanded", "true");
  }

  function closeDropdown() {
    langDropdown.classList.remove("open");
    langChevron.style.transform = "rotate(0deg)";
    langBtn.setAttribute("aria-expanded", "false");
  }

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.contains("open") ? closeDropdown() : openDropdown();
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!langSwitcher.contains(e.target)) closeDropdown();
  });

  // Option selection
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", () => {
      const lang = option.dataset.lang;
      const flag = option.dataset.flag;
      const label = option.dataset.label;

      // Update button display
      langFlag.textContent = flag;
      langLabel.textContent = label;

      // Update active state
      document.querySelectorAll(".lang-option").forEach((o) =>
        o.classList.remove("active")
      );
      option.classList.add("active");

      // Apply translations
      setLanguage(lang);
      closeDropdown();
    });

    // Keyboard support
    option.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        option.click();
      }
    });
  });

  // Load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  const savedOption = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
  if (savedOption) {
    langFlag.textContent = savedOption.dataset.flag;
    langLabel.textContent = savedOption.dataset.label;
    document.querySelectorAll(".lang-option").forEach((o) => o.classList.remove("active"));
    savedOption.classList.add("active");
  }
  setLanguage(savedLang);

});
