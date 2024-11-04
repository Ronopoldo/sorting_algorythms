// Управление анимацией
function startAnimation(sortingMethod) {
    if (!animationRunning) {
        animationRunning = true;
        sortingMethod(array, speed).then((prom) => {
            animationRunning = false;
            // alert("DONE")
            console.log(prom)
        });
    }
}

// Остановка анимации
function stopAnimation() {
    animationRunning = false;
}

// Перемешивание данных
function shuffleData() {
    if (animationRunning == false) {
        array = array.sort(() => Math.random() - 0.5);
        createBars(array);
        opersHTML.textContent = `Выполнено операций: 0`
        checksHTML.textContent = `Выполнено проверок: 0`
        if (document.getElementById('swapsHTML')) {
            swapsHTML.textContent = `Выполнено свапов: 0`;
        }
    }
}