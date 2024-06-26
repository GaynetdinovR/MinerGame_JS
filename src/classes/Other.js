class Other {
    /**
     * Функция линейной интерполяции
     * @param {*} min number
     * @param {*} max number
     * @param {*} value number
     * @returns number
     */
    lerp = (min, max, value) => (1 - value) * min + value * max;

    /**
     * Получает элемент из массива по шансу
     * @param {*} array []
     * @returns object
     */
    drop = (array) => {
        const total = array.reduce((accumulator, item) => accumulator + item.chance, 0);
        const chance = this.lerp(0, total, Math.random());

        let current = 0;

        for (const item of array) {
            if (current <= chance && chance < current + item.chance) {
                return item;
            }

            current += item.chance;
        }
    };

    /**
     * Получает случайное число в диапазоне
     * @param {*} range [number, number]
     * @returns object
     */
    randomInRange = (range) => {
        const [min, max] = range;

        return Math.round(Math.random() * (max - min) + min);
    };

    /**
     * Исскуствунная задержка
     */
    delay = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    /**
     * Устанавливает интервал
     * @param {*} ms number
     * @param {*} fn function
     * @returns intervalId
     */
    interval = (ms, fn) => {
        return setInterval(fn, ms);
    };

    /**
     * Переводит секунды в миллисекунды
     * @param {*} sec number
     * @returns number
     */
    toms = (sec) => {
        return sec * 1000;
    };
}

const other = new Other();

export default other;
