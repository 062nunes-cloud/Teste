// CONFIGURE AQUI o WhatsApp da WebsiteShop.br.
// Use somente números, incluindo o código do país.
// Exemplo: 5562999999999
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const message = encodeURIComponent(
  "Olá! Vim pelo site da WebsiteShop.br e gostaria de solicitar um orçamento para um site."
);

const whatsappBtn = document.getElementById("whatsappBtn");
if (WHATSAPP_NUMBER.includes("X")) {
  whatsappBtn.href = "#";
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Configure o número do WhatsApp no arquivo script.js.");
  });
} else {
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".hosting-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (WHATSAPP_NUMBER.includes("X")) {
      alert("Configure o número do WhatsApp no arquivo script.js.");
      return;
    }
    const plan = btn.dataset.plan || "um plano de hospedagem";
    const text = encodeURIComponent(
      `Olá! Vim pelo site da WebsiteShop.br e quero contratar o ${plan}. Gostaria de saber como funciona a contratação.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  });
});
