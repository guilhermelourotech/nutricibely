/*
 * WhatsApp unificado — TROQUE O NÚMERO APENAS AQUI.
 * Formato: código do país + DDD + número, só dígitos.
 * Ex.: 5511977242242 (online) ou 5511998489235 (presencial).
 */
var WHATSAPP_NUMBER = '5511977242242';

var DEFAULT_MSG = 'Olá! Vim pelo site e gostaria de agendar uma consulta.';

document.querySelectorAll('[data-wa]').forEach(function (a) {
  var msg = a.getAttribute('data-wa') || DEFAULT_MSG;
  a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  a.target = '_blank';
  a.rel = 'noopener';
});

var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
}
