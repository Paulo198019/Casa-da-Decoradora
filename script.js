const WHATSAPP_NUMBER = '5511922228326';
const defaultText = encodeURIComponent('Olá! Vim pelo site da Casa da Decoradora e gostaria de um orçamento.');
function whatsLink(custom){const text = custom ? encodeURIComponent(custom) : defaultText;return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`}
['ctaHeader','ctaHero','ctaFooter','ctaFloat'].forEach(id=>{const el=document.getElementById(id);if(el)el.setAttribute('href',whatsLink())});
const form=document.getElementById('orcamentoForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const nome=d.get('nome')||'';const evento=d.get('evento')||'';const quando=d.get('data')||'';const local=d.get('local')||'';const mensagem=d.get('mensagem')||'';const msg=`Olá! Sou ${nome}. Quero orçamento para *${evento}*.
Data: ${quando||'a definir'}
Local: ${local||'a definir'}
Detalhes: ${mensagem}`;window.open(whatsLink(msg),'_blank')})}
