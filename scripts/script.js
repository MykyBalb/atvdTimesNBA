document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputInterativo');
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'none';

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            let valor = input.value.trim().toLowerCase();
            mensagem.setAttribute('data-time', valor);
            mensagem.style.display = 'block';

            if (valor === '') {
                mensagem.textContent = 'Qual seu time?';
                mensagem.style.color = 'white';
            } else if (valor.includes('atlanta hawks') || valor.includes('atlanta') || valor.includes('hawks')) {
                mensagem.textContent = 'Uau, o melhor jogador do seu time é um calvo! 🦅😄';
                mensagem.style.color = '#e03a3e';
            } else if (valor.includes('boston celtics') || valor.includes('boston') || valor.includes('celtics')) {
                mensagem.textContent = 'Uau, seu time é o Boston Celtics, ou você é velho ou um dinossauro! 🦕🍀';
                mensagem.style.color = '#00ff00';
            } else if (valor.includes('brooklyn nets') || valor.includes('brooklyn') || valor.includes('nets')) {
                mensagem.textContent = 'Brooklyn Nets: sempre prometeram, nunca entregaram! 🏙️🕸️';
                mensagem.style.color = '#ffffff';
            } else if (valor.includes('charlotte hornets') || valor.includes('charlotte') || valor.includes('hornets')) {
                mensagem.textContent = 'Charlotte Hornets: pelo menos o uniforme é bonito! 🐝💜';
                mensagem.style.color = '#8a2be2';
            } else if (valor.includes('chicago bulls') || valor.includes('bulls') || valor.includes('chicago')) {
                mensagem.textContent = 'LETS GO BUULLS! Melhor time e com o legado do maior da história. 🐂🐂';
                mensagem.style.color = '#ff4d66';
            } else if (valor.includes('cleveland cavaliers') || valor.includes('cleveland') || valor.includes('cavaliers') || valor.includes('cavs')) {
                mensagem.textContent = 'Cleveland Cavaliers: já sentiram o gostinho do topo, agora é reconstrução! 🏰🏀';
                mensagem.style.color = '#860038';
            } else if (valor.includes('dallas mavericks') || valor.includes('dallas') || valor.includes('mavericks') || valor.includes('mavs')) {
                mensagem.textContent = 'Dallas Mavericks: Luka carregando mais que caminhão de mudança! 🏀🚚';
                mensagem.style.color = '#00538c';
            } else if (valor.includes('denver nuggets') || valor.includes('denver') || valor.includes('nuggets')) {
                mensagem.textContent = 'Denver Nuggets: altitude e Jokic, combinação mortal! 🏔️🥇';
                mensagem.style.color = '#fec524';
            } else if (valor.includes('detroit pistons') || valor.includes('detroit') || valor.includes('pistons')) {
                mensagem.textContent = 'Detroit Pistons: tradição de pancadaria e reconstrução eterna! 🚗🔧';
                mensagem.style.color = '#ce1141';
            } else if (valor.includes('golden state warriors') || valor.includes('warriors') || valor.includes('golden state') || valor.includes('state') || valor.includes('golden')) {
                mensagem.textContent = 'Uau... mais modinha que você só a Gucci! 💎👟';
                mensagem.style.color = '#00bbff';
            } else if (valor.includes('houston rockets') || valor.includes('houston') || valor.includes('rockets')) {
                mensagem.textContent = 'Houston Rockets: foguete não tem ré, mas esse parece que tem! 🚀😂';
                mensagem.style.color = '#ce1141';
            } else if (valor.includes('indiana pacers') || valor.includes('indiana') || valor.includes('pacers')) {
                mensagem.textContent = 'Indiana Pacers: sempre correndo, mas nunca chegam! 🏁💛';
                mensagem.style.color = '#fdbb30';
            } else if (valor.includes('los angeles clippers') || valor.includes('clippers')) {
                mensagem.textContent = 'Los Angeles Clippers: sempre sombra dos Lakers! 🚢😅';
                mensagem.style.color = '#1d428a';
            } else if (valor.includes('los angeles lakers') || valor.includes('lakers') || valor.includes('los angeles')) {
                mensagem.textContent = 'Se o papai LeBron (E o Luka) sair, teu time vai pro saco... 🏀👑';
                mensagem.style.color = '#fdcb41';
            } else if (valor.includes('memphis grizzlies') || valor.includes('memphis') || valor.includes('grizzlies')) {
                mensagem.textContent = 'Memphis Grizzlies: jovens e ousados, mas falta experiência! 🐻🎸';
                mensagem.style.color = '#5d76a9';
            } else if (valor.includes('miami heat') || valor.includes('miami') || valor.includes('heat')) {
                mensagem.textContent = 'Miami Heat: só pegando fogo nos playoffs mesmo! 🔥🌴';
                mensagem.style.color = '#98002e';
            } else if (valor.includes('milwaukee bucks') || valor.includes('milwaukee') || valor.includes('bucks')) {
                mensagem.textContent = 'Milwaukee Bucks: Giannis e o resto tentando acompanhar! 🦌💪';
                mensagem.style.color = '#00471b';
            } else if (valor.includes('minnesota timberwolves') || valor.includes('minnesota') || valor.includes('timberwolves') || valor.includes('wolves')) {
                mensagem.textContent = 'Minnesota Timberwolves: lobos perdidos na floresta! 🐺🌲';
                mensagem.style.color = '#9ea2a2';
            } else if (valor.includes('new orleans pelicans') || valor.includes('new orleans') || valor.includes('pelicans')) {
                mensagem.textContent = 'New Orleans Pelicans: Zion saudável é lenda urbana! 🦤⚜️';
                mensagem.style.color = '#b4975a';
            } else if (valor.includes('new york knicks') || valor.includes('knicks')) {
                mensagem.textContent = 'Torcer pros Knicks é ter esperança infinita... e paciência de monge! 🗽😂';
                mensagem.style.color = '#f58426';
            } else if (valor.includes('oklahoma city thunder') || valor.includes('oklahoma') || valor.includes('thunder')) {
                mensagem.textContent = 'Oklahoma City Thunder: trovão que assusta, mas não chove! ⚡🌩️';
                mensagem.style.color = '#ef3b24';
            } else if (valor.includes('orlando magic') || valor.includes('orlando') || valor.includes('magic')) {
                mensagem.textContent = 'Orlando Magic: mágica só no nome! ✨🔮';
                mensagem.style.color = '#0077c0';
            } else if (valor.includes('philadelphia 76ers') || valor.includes('philadelphia') || valor.includes('76ers') || valor.includes('sixers')) {
                mensagem.textContent = 'Philadelphia 76ers: confia no processo... até quando? 🏛️🔔';
                mensagem.style.color = '#ed174c';
            } else if (valor.includes('phoenix suns') || valor.includes('phoenix') || valor.includes('suns')) {
                mensagem.textContent = 'Phoenix Suns: sempre esquentando, mas na final apaga! ☀️😅';
                mensagem.style.color = '#e56020';
            } else if (valor.includes('portland trail blazers') || valor.includes('portland') || valor.includes('trail blazers') || valor.includes('blazers')) {
                mensagem.textContent = 'Portland Trail Blazers: sempre no caminho, nunca no destino! 🔥⛰️';
                mensagem.style.color = '#e03a3e';
            } else if (valor.includes('sacramento kings') || valor.includes('sacramento') || valor.includes('kings')) {
                mensagem.textContent = 'Sacramento Kings: reis do jejum de playoffs! 👑😅';
                mensagem.style.color = '#5a2d81';
            } else if (valor.includes('san antonio spurs') || valor.includes('san antonio') || valor.includes('spurs')) {
                mensagem.textContent = 'Spurs: onde até o Popovich já perdeu a conta dos títulos! 🏆🦾';
                mensagem.style.color = '#c4ced4';
            } else if (valor.includes('toronto raptors') || valor.includes('toronto') || valor.includes('raptors')) {
                mensagem.textContent = 'Toronto Raptors: já provaram que dinossauro também ganha anel! 🦖💍';
                mensagem.style.color = '#ce1141';
            } else if (valor.includes('utah jazz') || valor.includes('utah') || valor.includes('jazz')) {
                mensagem.textContent = 'Utah Jazz: jazz animado, mas título que é bom nada! 🎷🏔️';
                mensagem.style.color = '#f9a01b';
            } else if (valor.includes('washington wizards') || valor.includes('washington') || valor.includes('wizards')) {
                mensagem.textContent = 'Washington Wizards: mágica sumiu faz tempo! 🧙‍♂️✨';
                mensagem.style.color = '#002b5c';
            } else {
                mensagem.textContent = `Você digitou: "${valor}". Certeza que isso é time?`;
                mensagem.style.color = 'white';
            }
            input.value = '';
        }
    });
});