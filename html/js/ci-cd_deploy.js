const nodes = document.querySelectorAll('.node');
const terminal = document.querySelector('.terminal');
const btn = document.querySelector('.deploy-btn');
const progress = document.querySelector('.flow-progress');

const logs = [
    "💻 git push",
    "📤 отправка кода...",
    "📦 код загружен в GitHub",
    "⚙️ запуск CI/CD pipeline...",
    "🔐 подключение к серверу...",
    "🐳 сборка Docker image...",
    "🚀 запуск контейнера...",
    "✅ deploy завершен успешно!"
];

btn.addEventListener('click', async () => {

    terminal.innerHTML = "";
    nodes.forEach(n => n.classList.remove('active'));
    progress.style.width = "0%";

    for (let i = 0; i < logs.length; i++) {

        // Активируем ноды только если есть
        if (i < nodes.length) {
            nodes[i].classList.add('active');
            progress.style.width = ((i + 1) / nodes.length) * 100 + "%";
        }

        terminal.innerHTML += logs[i] + "<br>";

        // авто-скролл вниз
        terminal.scrollTop = terminal.scrollHeight;

        await new Promise(res => setTimeout(res, 700));
    }

});
