async function bubbleSort(array) {

    let operations = 0;
    let checks = 0;
    let tmp = 0;
    let sorted = false;
    checksHTML.textContent = `Выполнено проверок: ${checks}`
    opersHTML.textContent = `Выполнено операций: ${operations}`

    while (sorted == false) {
        let sorted = isSorted(array);
        checks++;
        checksHTML.textContent = `Выполнено проверок: ${checks}`
        if (sorted) break;

        for (let i = 0; i < array.length - 1; i++) {
            if (animationRunning == false) return { operations: operations, checks: checks };
            if (array[i] > array[i + 1]) {
                tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                operations++;
                console.log(operations)
                opersHTML.textContent = `Выполнено операций: ${operations}`
                await animateBars(i, i + 1, speed);
            }
        }
    }
}