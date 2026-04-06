
function openGame(url) {
    const modal = document.getElementById("gameModal");
    const frame = document.getElementById("gameFrame");

    frame.src = url;
    modal.style.display = "flex";
}

function closeGame() {
    const modal = document.getElementById("gameModal");
    const frame = document.getElementById("gameFrame");

    modal.style.display = "none";
    frame.src = "";
}

// закрытие по клику вне окна
window.onclick = function(e) {
    const modal = document.getElementById("gameModal");
    if (e.target === modal) {
        closeGame();
    }
}