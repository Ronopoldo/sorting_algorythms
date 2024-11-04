function animateBars(index1, index2, speed) {
    const bars = document.querySelectorAll(".bar");
    const bar1 = bars[index1];
    const bar2 = bars[index2];

    // console.log(bar1)


    // ВЫЧИСЛЯЕМ СДВИГ СТОЛБИКОВ (это расстояние меж ними)
    const distance = (index2 - index1) * (bar1.offsetWidth + 2); // .offsetWidth - фактическая ширина столбика с применённым CSS


    bar1.style.transform = `translateX(${distance}px)`;
    bar2.style.transform = `translateX(${-distance}px)`;

    return new Promise((resolve) => {
        setTimeout(() => {

            if (index1 < index2) {
                barsContainer.insertBefore(bar2, bar1);
                barsContainer.insertBefore(bar1, bars[index2 + 1] );
            } else {
                barsContainer.insertBefore(bar1, bar2);
                barsContainer.insertBefore(bar2, bars[index1 + 1] );
            }


            bar1.style.transform = '';
            bar2.style.transform = '';

            resolve();
        }, speed);
    });
}
