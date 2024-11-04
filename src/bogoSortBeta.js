async function bogoSortBeta(array) {
    const bars = document.querySelectorAll(".bar");
    const speed = 200; // Установите желаемую скорость анимации
    let comparisons = 0;
    let checks = 0;


    // Функция для анимации перемещения всех баров
    async function bogoAnimate(shuffledArray, speed) {
        return new Promise((resolve) => {
            const positions = [];
            let currentPosition = 0;
            for (let i = 0; i < bars.length; i++) {
                positions.push(bars[i].offsetLeft); // offsetLeft - сдвиг от края слева
            }

            bars.forEach((bar, index) => {
                let targetPosition = positions[array.indexOf(shuffledArray[index])];
                let distance = targetPosition - positions[index];

                bar.style.transition = `transform ${speed}ms`;
                bar.style.transform = `translateX(${distance}px)`;

            });

            setTimeout(() => {
                shuffledArray.forEach(value => {
                    let barToMove = bars[Array.from(bars).indexOf(value)];
                    if (barToMove) {
                        barToMove.style.transform = '';
                        barToMove.style.transition = '';
                        barsContainer.appendChild(barToMove);
                    }

                });
                resolve();
            }, speed);
        });
    }

    while (!(await isSorted(array))) {
        if (animationRunning == false) return { operations: operations, checks: checks };

        let shuffledArray = array.slice().sort(() => Math.random() - 0.5);
        await bogoAnimate(shuffledArray, speed);
        console.log(array)
        array = shuffledArray;
    }
}
