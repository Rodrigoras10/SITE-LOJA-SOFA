document.addEventListener("DOMContentLoaded", function () {
  const botoesCompra = document.querySelectorAll(".btn-comprar");

  botoesCompra.forEach(botao => {
    botao.addEventListener("click", function () {
      alert("Produto adicionado ao carrinho!");
    });
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  const menuLinks = document.querySelectorAll("nav ul li a");
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  });
});

// Função trocarImagem com efeito fade suave
function trocarImagem(idImagemPrincipal, novaImagem) {
  const imagemPrincipal = document.getElementById(idImagemPrincipal);

  if (!imagemPrincipal) {
    console.error("Imagem não encontrada: " + idImagemPrincipal);
    return;
  }

  // Aplica a transição de opacidade
  imagemPrincipal.style.transition = 'opacity 0.4s ease';

  // Começa o fade out
  imagemPrincipal.style.opacity = 0;

  setTimeout(() => {
    // Troca a imagem quando opacidade está 0
    imagemPrincipal.src = novaImagem;

    // Volta com o fade in
    imagemPrincipal.style.opacity = 1;
  }, 400);
}

function abrirModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'block';
  } else {
    console.error("Modal não encontrado: " + id);
  }
}

function fecharModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = 'none';
  } else {
    console.error("Modal não encontrado: " + id);
  }
}
function trocarImagem(idImagemPrincipal, novaSrc) {
  const imagemPrincipal = document.getElementById(idImagemPrincipal);
  if (!imagemPrincipal) {
    console.error(`Imagem com ID "${idImagemPrincipal}" não encontrada!`);
    return;
  }
  
  imagemPrincipal.style.transition = "opacity 0.4s ease";
  imagemPrincipal.style.opacity = 0;

  setTimeout(() => {
    imagemPrincipal.src = novaSrc;
    imagemPrincipal.style.opacity = 1;
  }, 400);
}

  // Quando clica na imagem principal
  document.querySelectorAll('.imagem-principal').forEach(img => {
    img.addEventListener('click', function () {
      const modal = document.getElementById('imagemModal');
      const modalImg = document.getElementById('imagemAmpliada');
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Fechar o modal
  document.querySelector('.fechar-modal').onclick = function () {
    document.getElementById('imagemModal').style.display = "none";
  };

  // Fechar ao clicar fora da imagem
  window.onclick = function(event) {
    const modal = document.getElementById('imagemModal');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('nav ul');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });