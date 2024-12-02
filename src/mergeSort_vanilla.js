function generateRandomArray(N, min = 0, max = 100) {
    const array = [];
    for (let i = 0; i < N; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(randomNum);
    }
    return array;
}

function generateReversedArray(n) {
    const array = [];
    // Создаем массив от 1 до n, затем реверсируем его
    for (let i = n; i >= 1; i--) {
        array.push(i);
    }
    return array;
}



function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Разделяем массив на две половины
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Рекурсивно сортируем обе половины и сливаем их
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Сравниваем элементы из двух массивов и добавляем в результирующий массив
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Добавляем оставшиеся элементы (если остались) из левой и правой частей ( [***] [] -> [#######***]
    return result.concat(left.slice(i)).concat(right.slice(j));
}


const unsortedArray = generateRandomArray(5000);

// Засекаем время сортировки
console.time("mergeSortTime");
const sortedArray = mergeSort(unsortedArray);
console.timeEnd("mergeSortTime");

console.log(sortedArray);


// function benchmarkMergeSort() {
//     // Проходим от 1000 до 500000 с шагом 1000
//     for (let n = 1000; n <= 500000; n += 1000) {
//         // Генерируем реверсивный массив с размером n
//         const unsortedArray = generateReversedArray(n);
//
//         // Засекаем время сортировки
//         console.time(`mergeSortTime_${n}`);
//         const sortedArray = mergeSort(unsortedArray);
//         console.timeEnd(`mergeSortTime_${n}`);
//     }
// }
// benchmarkMergeSort();
