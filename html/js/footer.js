function loadComponent(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    fetch(url)
        .then(res => res.text())
        .then(html => {
            el.innerHTML = html;
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#footer", "../footer.html");
});