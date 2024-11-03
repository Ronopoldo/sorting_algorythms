async function insertionSort(array) {
    let pos = array.length
    let lockedpos = 1
    let operations = 0
    let tempVar = 1
    let sorted = false
    let checks = 0
    const leng = array.length
    checksHTML.textContent = `Выполнено проверок: ${checks}`
    opersHTML.textContent = `Выполнено операций: ${operations}`

    while (lockedpos <= leng) {
        // console.log(array)
        // console.log(lockedpos)
        // console.log(' ')

        pos = lockedpos
        while (true) {
            if (array[pos - 1] > array[pos]) {
                tempVar = array[pos - 1]
                array[pos - 1] = array[pos]
                array[pos] = tempVar
                pos = pos - 1
                operations++
                await animateBars(pos, pos + 1, speed);

                opersHTML.textContent = `Выполнено операций: ${operations}`
                
            } else {
                break;
            }
        }

        sorted = false
        operations++
        lockedpos = lockedpos + 1

        if (isSorted(array) == true) {break}
        checks++
        checksHTML.textContent = `Выполнено проверок: ${checks}`

    }
}
