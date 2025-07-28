const input = document.getElementById('inputInterativo');
const mensagem = document.getElementById('mensagem');

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();

    //valor
    let valor = input.value.trim().toLowerCase();

    mensagem.setAttribute('data-time', valor);

    if (valor === '') {
      mensagem.textContent = 'Qual seu time?';
      mensagem.style.color = 'black';
    } else if (valor.includes('boston celltics') || valor.includes('boston') || valor.includes('celltics')) {
      mensagem.textContent = 'Uau, seu time é uma boston, ou você é velho ou um dinossauro';
      mensagem.style.color = '#00ff00';
    } else if (valor.includes('lakers')) {
      mensagem.textContent = 'se o papai LeBron sair, teu time vai pro saco...';
      mensagem.style.color = 'Yellow';
    } else if (valor.includes('warriors') || valor.includes('golden state warriors') || valor.includes('golden state') || valor.includes('state') || valor.includes('golden')) {
      mensagem.textContent = 'Uau.. mais modinha que você só a Gucci';
      mensagem.style.color = 'rgb(0, 234, 255)';
    } else if (valor.includes('bulls') || valor.includes('chicago bulls') || valor.includes('chicago')) {
      mensagem.textContent =
        'LETS GO BUULLS, melhor time e com o legado do maior da história. 🐂🐂';
    } else {
      mensagem.textContent = `Você digitou: "${valor}". Certeza que isso é time?`;
      mensagem.style.color = 'black';
    }

    input.value = '';
  }
});
