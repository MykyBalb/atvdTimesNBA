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
        } else if (valor.includes('boston celtics') || valor.includes('boston') || valor.includes('celtics')) {
      mensagem.textContent = 'Uau, seu time é o Boston Celtics, ou você é velho ou um dinossauro! 🦕🍀';
      mensagem.style.color = '#00ff00';
        } else if (valor.includes('lakers') || valor.includes('los angeles lakers') || valor.includes('los angeles')) {
      mensagem.textContent = 'Se o papai LeBron sair, teu time vai pro saco... 🏀👑';
      mensagem.style.color = 'yellow';
        } else if (valor.includes('warriors') || valor.includes('golden state warriors') || valor.includes('golden state') || valor.includes('state') || valor.includes('golden')) {
      mensagem.textContent = 'Uau... mais modinha que você só a Gucci! 💎👟';
      mensagem.style.color = 'rgb(0, 234, 255)';
        } else if (valor.includes('bulls') || valor.includes('chicago bulls') || valor.includes('chicago')) {
      mensagem.textContent = 'LETS GO BUULLS! Melhor time e com o legado do maior da história. 🐂🐂';
      mensagem.style.color = 'red';
        } else if (valor.includes('knicks') || valor.includes('new york knicks') || valor.includes('new york')) {
      mensagem.textContent = 'Torcer pros Knicks é ter esperança infinita... e paciência de monge! 🗽😂';
      mensagem.style.color = 'orange';
        } else if (valor.includes('spurs') || valor.includes('san antonio spurs') || valor.includes('san antonio')) {
      mensagem.textContent = 'Spurs: onde até o Popovich já perdeu a conta dos títulos! 🏆🦾';
      mensagem.style.color = 'gray';
        } else if (valor.includes('heat') || valor.includes('miami heat') || valor.includes('miami')) {
      mensagem.textContent = 'Miami Heat: só pegando fogo nos playoffs mesmo! 🔥🌴';
      mensagem.style.color = 'crimson';
        } else if (valor.includes('mavericks') || valor.includes('dallas mavericks') || valor.includes('dallas')) {
      mensagem.textContent = 'Dallas Mavericks: Luka carregando mais que caminhão de mudança! 🏀🚚';
      mensagem.style.color = 'blue';
        } else if (valor.includes('suns') || valor.includes('phoenix suns') || valor.includes('phoenix')) {
      mensagem.textContent = 'Phoenix Suns: sempre esquentando, mas na final apaga! ☀️😅';
      mensagem.style.color = 'orange';
        } else if (valor.includes('bucks') || valor.includes('milwaukee bucks') || valor.includes('milwaukee')) {
      mensagem.textContent = 'Milwaukee Bucks: Giannis e o resto tentando acompanhar! 🦌💪';
      mensagem.style.color = 'green';
        } else {
      mensagem.textContent = `Você digitou: "${valor}". Certeza que isso é time?`;
      mensagem.style.color = 'black';
        }

    input.value = '';
  }
});
