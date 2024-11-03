async function bulkAnimateBars(indexes, speed) {
    const bars = document.querySelectorAll(".bar");
    let barsContainer = document.getElementById("bars");

    // Вычисляем максимальный сдвиг для анимации
    const distance = (25 * (bars[0].offsetWidth + 2)) - (indexes[0] + 1 * (bars[0].offsetWidth + 2));

    // alert(distance)

    // Анимация
    for (let i = 0; i < 25; i++) {
        const bar = bars[i];
        let offset = 0;
        const isIndexed = indexes.includes(i);
        if (isIndexed){
            offset = distance - ((bars[0].offsetWidth + 2) * (indexes.length -2 ));
        } else {
             offset = - ((bars[0].offsetWidth + 2) * (indexes.length));
        }
        bar.style.transform = `translateX(${offset}px)`;
    }


    // Задержка для завершения анимки
    await new Promise(resolve => setTimeout(resolve, speed));
    // Факт

    for (let i = 0; i < 25; i++) {
        let bar = bars[i];
        const isIndexed = indexes.includes(i);
        if (isIndexed) {
            barsContainer.appendChild(bar);
            // console.log(barsContainer)
            bar.style.transform = ''; // Убираем трансформацию
        } else {
            bar.style.transition = 'none';
            bar.style.transform = '';
            bar.offsetHeight;
            bar.style.transition = '';
        // Мега костыль шоб починить анимацию)))) 🤫🤫🤫🤫
        }


    }
}
