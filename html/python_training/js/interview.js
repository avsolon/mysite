class InterviewApp {

    constructor() {
        this.questions = QUESTIONS;
        this.container = document.getElementById('qa-container');
        this.counter = document.getElementById('counter');
        this.search = document.getElementById('search-input');
    }

    init() {
        this.render([]);
    }

    shuffle(arr) {
        return [...arr].sort(() => Math.random() - 0.5);
    }

    showRandom(count) {
        const result = this.shuffle(this.questions)
            .slice(0, count);

        this.render(result);

        this.counter.textContent =
            `Показано ${result.length} вопросов`;
    }

    showAll() {

        this.render(this.questions);

        this.counter.textContent =
            `Всего вопросов: ${this.questions.length}`;
    }

    filter(text) {

        text = text.toLowerCase();

        const result = this.questions.filter(q =>
            q.question.toLowerCase().includes(text) ||
            q.category.toLowerCase().includes(text)
        );

        this.render(result);

        this.counter.textContent =
            `Найдено: ${result.length}`;
    }

    render(data) {

        if (!data.length) {

            this.container.innerHTML = `
                <div class="empty-state">
                    Выберите режим отображения
                </div>
            `;

            return;
        }

        this.container.innerHTML = data.map((q, index) => `
            <div class="py-question-card">

                <div class="py-question-header"
                    onclick="this.nextElementSibling.classList.toggle('open')">

                    <span>${index + 1}. ${q.question}</span>

                    <span>▼</span>

                </div>

                <div class="py-question-content">

                    <div class="py-question-category">
                        ${q.category}
                    </div>

                    <div class="py-short-answer">
                        <strong>Кратко:</strong>
                        ${q.short}
                    </div>

                    <div class="py-full-answer">
                        ${q.full}
                    </div>

                </div>

            </div>
        `).join('');
    }
}

window.app = new InterviewApp();

window.addEventListener('DOMContentLoaded', () => {
    window.app.init();
});