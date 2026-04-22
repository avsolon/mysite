document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = `
      <div class="footer">
        © <span id="year"></span> Andrey Solontsov
      </div>
    `;

    document.getElementById("year").textContent =
      new Date().getFullYear();
  }
});