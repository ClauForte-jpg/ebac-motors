$(document).ready(function () {
  // Carrossel
if ($('#carousel-imagens').length && $.fn.slick) {
  $('#carousel-imagens').slick({
    autoplay: true
  });
    } else {
  console.warn('Carrossel não iniciado: elemento ou plugin indisponível.');
}

  // Menu
  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  });

  // Máscara telefone
  $('#telefone').mask('(00) 00000-0000');

  // Validação do formulário
  $('form').validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      mensagem: { required: true },
      'veiculo-interesse': { required: false }
    },
    messages: {
      nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    }
  });

  // Clique em "Tenho interesse"
$(document).on('click', '.botao-interesse', function (event) {
  event.preventDefault();

  const destino = $('#contato');
  const nomeVeiculo = $(this).parent().find('h3').text();

  alert(`Você clicou em: ${nomeVeiculo}`); // ALERTA voltando com tudo 💥

  $('#veiculo-interesse').val(nomeVeiculo);

  $('html, body').animate({
    scrollTop: destino.offset().top
  }, 1000);
});

});
