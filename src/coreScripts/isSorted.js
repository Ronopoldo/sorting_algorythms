async function isSorted(array, speed) {
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < array.length; i++) {
        bars[i].style.backgroundColor = 'green';
        await new Promise(resolve => setTimeout(resolve, speed / 5));
        if (array[i] > array[i + 1]) {
            for (let i1 = 0; i1 < i + 1; i1++) {
                bars[i1].style.backgroundColor = '#ffffff';
            }
            return false;
        }
    }
    return true;
}
