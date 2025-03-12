const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lampada = document.getElementById('lamp');

const lampQuebrada = () => lampada.src.includes('quebrada');

const trocarImagem = (imagem) => {
    if (!lampQuebrada()) lampada.src = imagem;
};

ligar.addEventListener('click', () => trocarImagem('lampada-acesa.jpg'));
desligar.addEventListener('click', () => trocarImagem('lampada-apagada.jpg'));
lampada.addEventListener('mouseover', () => trocarImagem('lampada-acesa.jpg'));
lampada.addEventListener('mouseleave', () => trocarImagem('lampada-apagada.jpg'));
lampada.addEventListener('dblclick', () => lampada.src = 'lampada-quebrada.jpg');
