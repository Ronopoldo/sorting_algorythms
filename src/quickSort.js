async function quickSort(array, speed) {
    swaps = 0;
    operations = 0;
    await quickSortRecursive(array, 0, array.length - 1);
    if (animationRunning == false) return { operations: operations, checks: checks };
    if ((array.length) > 32) { await isSorted(array, speed / 100); }
    else {await isSorted(array, speed); }
}

async function quickSortRecursive(array, low, high) {
    if (low < high) {
        if (animationRunning == false) return { operations: operations, checks: checks };
        let keyInd = await partition(array, low, high);
        await quickSortRecursive(array, low, keyInd - 1);
        await quickSortRecursive(array, keyInd + 1, high);
    }
}

async function partition(array, low, high) { // low, high - нач. и кон. индексы подмассива
    let key = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (animationRunning == false) return { operations: operations, checks: checks };
        operations++;
        opersHTML.textContent = `Выполнено операций: ${operations}`;
        checksHTML.textContent = `Выполнено перемещений: ${swaps}`;
        if (array[j] < key) {
            i++;
            await change(array, i, j);
        }
    }
    await change(array, i + 1, high);
    return i + 1;
}

async function change(array, i, j) {
    if (i !== j) {
        if (animationRunning == false) return { operations: operations, checks: checks };
        // Свапаем
        [array[i], array[j]] = [array[j], array[i]];
        swaps++;
        opersHTML.textContent = `Выполнено операций: ${operations}`;
        checksHTML.textContent = `Выполнено перемещений: ${swaps}`;

        // Перезагружаем столбцы
        createBars(array);

        // Ну тип длина анимации, но анимации нет, поэтому длина афкшнья
        // if ((array.length) > 32) { await new Promise(resolve => setTimeout(resolve, speed / 100)); }
        // else {await new Promise(resolve => setTimeout(resolve, speed));}
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}