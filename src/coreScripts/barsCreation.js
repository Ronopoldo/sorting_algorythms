function createBars(array) {
    barsContainer.innerHTML = ""; // УДАЛЯЕМ СТАРЫЕ СТОЛБИКИ ПРИ СОЗДАНИИ НОВЫХ (шоб не дублировалось)
    array.forEach((value, index) => {
        const bar = document.createElement("div"); // Создаём div контейнер столбиков
        bar.classList.add("bar"); // Класс bar чтобы с css он законнектился
        bar.style.height = `${value / 5}px`;
        barsContainer.appendChild(bar); // Добавляем созданный блок в контейнер bars
    });
}

function createBars1(array) {
    barsContainer1.innerHTML = ""; // УДАЛЯЕМ СТАРЫЕ СТОЛБИКИ ПРИ СОЗДАНИИ НОВЫХ (шоб не дублировалось)
    array.forEach((value, index) => {
        const bar = document.createElement("div"); // Создаём div контейнер столбиков
        bar.classList.add("bar"); // Класс bar чтобы с css он законнектился
        bar.style.height = `${value / 5}px`;
        barsContainer1.appendChild(bar); // Добавляем созданный блок в контейнер bars
    });
}