
// Número de WhatsApp atualizado
const WHATSAPP_NUMBER = "5511967500305";

// Texto padrão de CTA
const defaultText = encodeURIComponent(
  "Olá! Vim pelo site da Casa da Decoradora e gostaria de um orçamento."
);

// Gera link do WhatsApp
function whatsLink(custom) {
  const text = custom ? encodeURIComponent(custom) : defaultText;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

// Aponta todos os CTAs para o WhatsApp
["ctaHeader", "ctaHero", "ctaFooter", "ctaFloat"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.setAttribute("href", whatsLink());
});

// Formulário → enviar para WhatsApp
const form = document.getElementById("orcamentoForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = data.get("nome") || "";
    const evento = data.get("evento") || "";
    const quando = data.get("data") || "";
    const local = data.get("local") || "";
    const mensagem = data.get("mensagem") || "";

    const msg = `Olá! Sou ${nome}. Quero orçamento para *${evento}*.
Data: ${quando || "a definir"}
Local: ${local || "a definir"}
Detalhes: ${mensagem}`;

    window.open(whatsLink(msg), "_blank");
  });
}
