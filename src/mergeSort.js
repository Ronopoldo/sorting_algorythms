async function mergeSort(array, speed) {
    swaps = 0;
    operations = 0;
    await mergeSortRecursive(array, 0, array.length - 1);
    if (animationRunning == false) return { operations: operations, checks: checks };
    if ((array.length) > 32) { await isSorted(array, speed / 100); }
    else { await isSorted(array, speed); }
}

async function mergeSortRecursive(array, left, right) {
    if (left < right) {
        if (animationRunning == false) return { operations: operations, checks: checks };
        const mid = Math.floor((left + right) / 2);

        // Рекурсивная сортировка левой и правой частей
        await mergeSortRecursive(array, left, mid);
        await mergeSortRecursive(array, mid + 1, right);

        // Слияние двух отсортированных частей
        await merge(array, left, mid, right);
    }
}

async function merge(array, left, mid, right) {
    const leftArr = array.slice(left, mid + 1);
    const rightArr = array.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (animationRunning == false) return { operations: operations, checks: checks };
        operations++;
        opersHTML.textContent = `Выполнено операций: ${operations}`;
        checksHTML.textContent = `Выполнено перемещений: ${swaps}`;

        if (leftArr[i] <= rightArr[j]) {
            array[k] = leftArr[i];
            i++;
        } else {
            array[k] = rightArr[j];
            j++;
            swaps++; // Считаем "перемещения" как аналог работы со столбцами
        }

        // Анимация изменений
        createBars(array);
        await new Promise(resolve => setTimeout(resolve, speed));
        k++;
    }

    // Добавляем оставшиеся элементы из левой части
    while (i < leftArr.length) {
        array[k] = leftArr[i];
        i++;
        k++;
        createBars(array);
        await new Promise(resolve => setTimeout(resolve, speed));
    }

    // Добавляем оставшиеся элементы из правой части
    while (j < rightArr.length) {
        array[k] = rightArr[j];
        j++;
        k++;
        createBars(array);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}
