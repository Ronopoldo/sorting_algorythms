async function insertionSort(array) {
    let pos = array.length
    let lockedpos = 1
    let operations = 0
    let tempVar = 1
    let sorted = false
    let checks = 0
    let swaps = 0
    let bars = document.querySelectorAll(".bar");
    const leng = array.length
    checksHTML.textContent = `Выполнено проверок: ${checks}`
    swapsHTML.textContent = `Выполнено свапов: ${swaps}`
    opersHTML.textContent = `Выполнено операций: ${operations}`

    while (lockedpos <= leng) {
        // console.log(array)
        // console.log(lockedpos)
        // console.log(' ')

        pos = lockedpos
        while (true) {

            operations++
            if (animationRunning == false) return { operations: operations, checks: checks };
            if (array[pos - 1] > array[pos]) {
                tempVar = array[pos - 1]
                array[pos - 1] = array[pos]
                array[pos] = tempVar
                pos = pos - 1
                swaps++
                await animateBars(pos, pos + 1, speed);
                swapsHTML.textContent = `Выполнено свапов: ${swaps}`
                
            } else {
                // operations++
                opersHTML.textContent = `Выполнено операций: ${operations}`
                break;
            }

        }

        sorted = false

        lockedpos = lockedpos + 1

        if (await isSorted(array, speed) == true) {break}
        checks++
        checksHTML.textContent = `Выполнено проверок: ${checks}`

    }
}
