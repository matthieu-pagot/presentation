document.addEventListener('DOMContentLoaded', function () {

  /* --- Menu mobile (présent sur toutes les pages) --- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var ouvert = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
    });
  }

  /* --- Formulaire de contact : repli si Formspree n'est pas encore configuré --- */
  var form = document.getElementById('contactForm');

  if (form && form.action.indexOf('VOTRE_ID') !== -1) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var objet = encodeURIComponent(document.getElementById('objet').value);
      var corps = encodeURIComponent(
        document.getElementById('message').value +
        '\n\n— ' + document.getElementById('nom').value +
        '\n' + document.getElementById('email').value
      );

      document.getElementById('formZone').outerHTML =
        '<div class="done">' +
        '<h3>Votre message est prêt</h3>' +
        '<p>Le formulaire n\'est pas encore relié à un service d\'envoi. ' +
        'Votre logiciel de messagerie va s\'ouvrir avec le message déjà rempli. ' +
        'Sinon, écrivez directement à ' +
        '<a href="mailto:matthieu.pagot@lpo-eme.fr">matthieu.pagot@lpo-eme.fr</a>.</p>' +
        '</div>';

      window.location.href =
        'mailto:matthieu.pagot@lpo-eme.fr?subject=' + objet + '&body=' + corps;
    });
  }

});
