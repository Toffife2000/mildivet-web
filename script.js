const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name") || "";
  const email = data.get("email") || "";
  const message = data.get("message") || "";
  const body = [
    `Meno: ${name}`,
    `E-mail: ${email}`,
    "",
    String(message),
  ].join("\n");

  window.location.href = `mailto:lyndse@centrum.sk?subject=${encodeURIComponent(
    "Správa zo stránky MILDIvet",
  )}&body=${encodeURIComponent(body)}`;
});
