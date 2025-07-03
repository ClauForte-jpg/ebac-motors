$(document).ready(function () {
  // Carrossel
  if ($('#carousel-imagens').length && $.fn.slick) {
    $('#carousel-imagens').slick({
      autoplay: true
    });
  } else {
    console.warn('Carrossel não iniciado: elemento ou plugin indisponível.');
  }

  // Menu hamburguer
  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  });

  // Máscara para telefone
  $('#telefone').mask('(00) 00000-0000');

  // Validação do formulário
  $('#formulario').validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      mensagem: { required: true }, // Aqui estava o erro: estava como string, e não objeto
      'veiculo-interesse': { required: false }
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
      email: 'Por favor, insira um e-mail válido',
      telefone: 'Por favor, insira um telefone',
      mensagem: 'Por favor, escreva uma mensagem'
    },
    submitHandler: function (form) {
      alert('Formulário enviado com sucesso!');
      form.reset();
    },
    invalidHandler: function (evento, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campo(s) incorreto(s). Por favor, verifique.`);
      }
    }
  });

  // Preenchimento automático do campo "Veículo de Interesse"
  $(document).on('click', '.botao-interesse', function (event) {
    event.preventDefault();

    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $('html, body').animate({
      scrollTop: destino.offset().top
    }, 1000);
  });
});