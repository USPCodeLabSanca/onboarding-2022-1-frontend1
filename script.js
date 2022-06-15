let posicao = 0;
const slides = document.getElementsByClassName('imagens');
const totalSlides = slides.length;

document.
  getElementById('proximo')
  .addEventListener("click", function() {
    proximo_slide();
  });
document.
  getElementById('anterior')
  .addEventListener("click", function() {
    slide_anterior();
  });

function nova_posicao() {
  for (let slide of slides) {
    slide.classList.remove('imagens_visivel');
    slide.classList.add('imagens_oculta');
  }

  slides[posicao].classList.add('imagens_visivel');
}

function proximo_slide() {
  if (posicao === totalSlides - 1) {
    posicao = 0;
  } else {
    posicao++;
  }

  nova_posicao();
}

function slide_anterior() {
  if (posicao === 0) {
    posicao = totalSlides - 1;
  } else {
    posicao--;
  }

  nova_posicao();
}