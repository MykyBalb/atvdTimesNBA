document.addEventListener('DOMContentLoaded', function () {
    const teams = [
        "atlanta-hawks", "boston-celtics", "brooklyn-nets", "charlotte-hornets",
        "chicago-bulls", "cleveland-cavaliers", "dallas-mavericks", "denver-nuggets",
        "detroit-pistons", "golden-state-warriors", "houston-rockets", "indiana-pacers",
        "los-angeles-clippers", "los-angeles-lakers", "memphis-grizzlies", "miami-heat",
        "milwaukee-bucks", "minnesota-timberwolves", "new-orleans-pelicans", "new-york-knicks",
        "oklahoma-city-thunder", "orlando-magic", "philadelphia-76ers", "phoenix-suns",
        "portland-trail-blazers", "sacramento-kings", "san-antonio-spurs", "toronto-raptors",
        "utah-jazz", "washington-wizards"
    ];

    teams.forEach(team => {
        const copyBtn = document.getElementById(`${team}-copy`);
        if (copyBtn) {
            copyBtn.addEventListener("click", () => {
                clipboardCopy(team);
            });
        }
    });
});

async function clipboardCopy(team) {
    const teamElement = document.querySelector(`#${team}`);
    let text = "";
    if (teamElement) {
        text = teamElement.textContent || teamElement.innerText;
        try {
            await navigator.clipboard.writeText(text);
            showFeedback(`"${text}" copiado!`);
        } catch (err) {
            console.error('Falha ao copiar texto: ', err);
        }
    }

    const img = document.querySelector("img.jes");
    if (img) {
        img.style.transition = 'none';
        img.style.opacity = '0';

        img.offsetHeight;

        img.style.transition = 'opacity 0.4s ease-in-out';
        img.style.opacity = '1';

        clearTimeout(img.timeoutId);
        img.timeoutId = setTimeout(() => {
            img.style.opacity = '0';
        }, 1000);
    }
}

function showFeedback(message) {
    let feedback = document.querySelector('.copy-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        document.body.appendChild(feedback);
        feedback.style.position = 'fixed';
        feedback.style.bottom = '20px';
        feedback.style.left = '50%';
        feedback.style.transform = 'translateX(-50%)';
        feedback.style.background = '#ff4757';
        feedback.style.color = 'white';
        feedback.style.padding = '10px 20px';
        feedback.style.borderRadius = '8px';
        feedback.style.opacity = '0';
        feedback.style.transition = 'opacity 0.3s ease';
        feedback.style.zIndex = '1000';
    }

    feedback.textContent = message;
    feedback.style.opacity = '1';

    setTimeout(() => {
        feedback.style.opacity = '0';
    }, 2000);
}