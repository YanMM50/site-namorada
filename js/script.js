const imagem = document.getElementById('imagem');
const motivos = document.getElementById('motivos');
const proximo = document.getElementById('proximo');

// Array com as imagens e frases
const conteudos = [
    { src: 'images/neojiba.jpeg', texto: 'Você faz meu coração sorrir todos os dias.' },
    { src: 'images/bonfim.jpeg', texto: 'Ao seu lado, cada momento vira lembrança linda.' },
    { src: 'images/lilita.jpeg', texto: 'Seu abraço é meu lugar favorito no mundo.' },
    { src: 'images/espelho.jpeg', texto: 'Te amar é a melhor parte da minha vida.' },

];

const animacoes = [
    { in: 'fade-in', out: 'fade-out' },
    { in: 'slide-in', out: 'slide-out' },
    { in: 'zoom-in', out: 'zoom-out' },
    { in: 'fade-in', out: 'fade-out' },
    { in: 'slide-in', out: 'slide-out' }
];

let indiceAtual = 0;

// Mostra o primeiro conteúdo ao carregar
imagem.src = conteudos[0].src;
motivos.innerHTML = conteudos[0].texto;

// Evento do botão
proximo.addEventListener('click', trocarimagem);

function trocarimagem() {
    // Remove todas as classes de animação
    imagem.classList.remove('fade-in', 'slide-in', 'zoom-in', 'fade-out', 'slide-out', 'zoom-out');
    motivos.classList.remove('fade-in', 'slide-in', 'zoom-in', 'fade-out', 'slide-out', 'zoom-out');

    // Animação de saída
    const anim = animacoes[(indiceAtual + 1) % animacoes.length];
    imagem.classList.add(anim.out);
    motivos.classList.add(anim.out);

    setTimeout(() => {
        // Próximo índice (volta ao início se chegar ao fim)
        indiceAtual = (indiceAtual + 1) % conteudos.length;

        // Troca imagem e frase
        imagem.src = conteudos[indiceAtual].src;
        motivos.innerHTML = conteudos[indiceAtual].texto;

        // Remove animação de saída e adiciona de entrada
        imagem.classList.remove(anim.out);
        motivos.classList.remove(anim.out);
        imagem.classList.add(anim.in);
        motivos.classList.add(anim.in);
    }, 500);
}

// Corações animados no background
const heartsBg = document.querySelector('.hearts-bg');
for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDelay = (Math.random() * 6) + 's';
    heartsBg.appendChild(heart);
}