window.onload = function () {
    const teams = [
        "atlanta-hawks",
        "boston-celtics",
        "brooklyn-nets",
        "charlotte-hornets",
        "chicago-bulls",
        "cleveland-cavaliers",
        "dallas-mavericks",
        "denver-nuggets",
        "detroit-pistons",
        "golden-state-warriors",
        "houston-rockets",
        "indiana-pacers",
        "la-clippers",
        "los-angeles-lakers",
        "memphis-grizzlies",
        "miami-heat",
        "milwaukee-bucks",
        "minnesota-timberwolves",
        "new-orleans-pelicans",
        "new-york-knicks",
        "oklahoma-city-thunder",
        "orlando-magic",
        "philadelphia-76ers",
        "phoenix-suns",
        "portland-trail-blazers",
        "sacramento-kings",
        "san-antonio-spurs",
        "toronto-raptors",
        "utah-jazz",
        "washington-wizards"
    ];

    teams.forEach(team => {
        const copyBtn = document.getElementById(`${team}-copy`);
        if (copyBtn) {
            copyBtn.addEventListener("click", () => {
                console.log(`Clicou no botão de copiar para o time: ${team}`);
                clipboardCopy(team)
            });
        }
    });
};

async function clipboardCopy(team) {
    const teamElement = document.querySelector(`#${team}`);
    let text = "";
    if (teamElement) {
        text = teamElement.textContent || teamElement.innerText || teamElement.innerHTML;
        await navigator.clipboard.writeText(text);
        console.log("Texto copiado para a área de transferência: " + text);
    } else {
        console.warn(`Elemento com id "${team}" não encontrado.`);
    }
    const img = document.querySelector("img.jes");
    if (img) {
        // Desativa transição temporariamente para resetar
        img.style.transition = 'none';
        img.style.opacity = '0';

        // Força reflow para garantir que a mudança foi aplicada
        img.offsetHeight;

        // Reativa transição para opacidade
        img.style.transition = 'opacity 0.3s ease';
        img.style.opacity = '1';

        // Limpa timeout anterior para evitar sobreposição
        clearTimeout(img._timeoutId);
        img._timeoutId = setTimeout(() => {
            img.style.opacity = '0';
        }, 700);
    }
}

