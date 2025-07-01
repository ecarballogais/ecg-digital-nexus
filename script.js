const translations = {};

fetch('translations.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(translations, data);
    init();
  });

function init() {
  const langSelect = document.getElementById('lang-select');
  langSelect.addEventListener('change', () => {
    changeLanguage(langSelect.value);
  });

  const themeSwitch = document.getElementById('theme-switch');
  themeSwitch.addEventListener('click', toggleTheme);

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    enviarSolicitud();
  });

  changeLanguage(langSelect.value);
}

function changeLanguage(lang) {
  const t = translations[lang];
  document.getElementById('title').innerText = t.title;
  document.getElementById('subtitle').innerText = t.subtitle;
  document.getElementById('sec1').innerText = t.section1;
  document.getElementById('sec2').innerText = t.section2;
  document.getElementById('sec3').innerText = t.section3;
  document.getElementById('sec4').innerText = t.section4;
  document.getElementById('sec5').innerText = t.section5;
  document.getElementById('sec6').innerText = t.section6;
  document.getElementById('contact-btn').innerText = t.contact;
  document.getElementById('send-request').innerText = t.send_request;
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function enviarSolicitud() {
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);
  const params = new URLSearchParams();
  formData.forEach((v, k) => params.append(k, v));

  fetch(`https://formspree.io/f/{TU_FORM_ID}`, {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: params
  }).then(res => {
    if (res.ok) alert('Formulario enviado exitosamente.');
    else alert('Error al enviar.');
  });

  // Alternativamente podrías usar un backend que envíe el correo a edu@ecarballogais.es
}