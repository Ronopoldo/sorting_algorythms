async function selectionSort(array) {
    let swaps = 0;
    let comparisons = 0;
    checksHTML.textContent = `Выполнено сравнений: ${comparisons}`;
    checksHTML.textContent = `Выполнено сравнений: ${swaps}`;

    const pos = array.length;

    for (let lockedpos = 0; lockedpos < pos - 1; lockedpos++) {
        let minIndex = lockedpos;
        let bars = document.querySelectorAll(".bar");



        for (let current = lockedpos + 1; current < pos; current++) {
            bars[minIndex].style.backgroundColor = 'blue';
            bars[current].style.backgroundColor = 'red';
            comparisons++;
            checksHTML.textContent = `Выполнено сравнений: ${comparisons}`;
            if (animationRunning == false) return { operations: operations, checks: checks };
            if (array[current] < array[minIndex]) {

                bars[minIndex].style.backgroundColor = '#ffffff';
                minIndex = current;
            }

            await new Promise(resolve => setTimeout(resolve, speed));
            bars[current].style.backgroundColor = '#ffffff';
        }


        if (minIndex !== lockedpos) {
            [array[lockedpos], array[minIndex]] = [array[minIndex], array[lockedpos]];
            swaps++;
            opersHTML.textContent = `Выполнено замен: ${swaps}`;
            await animateBars(lockedpos, minIndex, speed);

        }
        bars[minIndex].style.backgroundColor = '#ffff00';

    }

    await isSorted(array, speed)
}
