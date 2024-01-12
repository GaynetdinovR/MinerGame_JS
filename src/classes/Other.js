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
}

const other = new Other();

export default other;
