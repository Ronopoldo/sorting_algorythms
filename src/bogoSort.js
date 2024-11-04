async function bogoSort(array) {
    operations = 0
    checks = 0
    const bars = document.querySelectorAll(".bar");
    let comparisons = 0;

    while (!(await isSorted(array, speed))) {
        if (animationRunning === false) return { operations: operations, checks: checks };

        let shuffledArray = array.slice().sort(() => Math.random() - 0.5);
        array = shuffledArray;
        createBars(array);
        await new Promise(resolve => setTimeout(resolve, speed / 100));
        opersHTML.textContent = `Выполнено операций: ${operations}`
        operations++
        checks++
        checksHTML.textContent = `Выполнено проверок: ${checks}`
    }
    // checks++
    checksHTML.textContent = `Выполнено проверок: ${checks}`
}
