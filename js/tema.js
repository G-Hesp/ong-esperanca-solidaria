(() => {
  'use strict';
  const chave = 'ong.tema.v1';
  const raiz = document.documentElement;
  const valido = valor => valor === 'padrao' || valor === 'alto-contraste';
  let tema = 'padrao';
  try {
    const salvo = localStorage.getItem(chave);
    if (valido(salvo)) tema = salvo;
  } catch { /* O tema continua funcionando sem armazenamento. */ }

  function aplicar(valor) {
    tema = valido(valor) ? valor : 'padrao';
    raiz.dataset.tema = tema;
    document.querySelectorAll('[data-alternar-contraste]').forEach(botao => {
      botao.setAttribute('aria-pressed', String(tema === 'alto-contraste'));
    });
  }
  aplicar(tema);

  function iniciar() {
    aplicar(tema);
    document.querySelectorAll('[data-alternar-contraste]').forEach(botao => {
      botao.hidden = false;
      botao.addEventListener('click', () => {
        aplicar(tema === 'alto-contraste' ? 'padrao' : 'alto-contraste');
        const status = document.getElementById('estado-tema');
        try {
          localStorage.setItem(chave, tema);
          if (status) status.textContent = tema === 'alto-contraste'
            ? 'Alto contraste ativado.' : 'Tema padrão ativado.';
        } catch {
          if (status) status.textContent = 'Tema alterado nesta página. Não foi possível salvar a preferência.';
        }
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else iniciar();

  window.addEventListener('storage', evento => {
    if (evento.key === chave || evento.key === null) {
      aplicar(valido(evento.newValue) ? evento.newValue : 'padrao');
    }
  });
})();
