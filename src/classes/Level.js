class Level {
    /**
     * Проверка на изменение уровня глубины
     * Если изменяется возвращает название нового уровня
     * @param {*} depth
     * @returns
     */
    checkToLevelChange = (depth) => {
        const changesOn = {
            200: 'cave_2',
            600: 'cave_3',
            1000: 'cave_4',
            1700: 'cave_5'
        };

        if (Object.keys(changesOn).includes(String(depth))) return changesOn[depth];

        return false;
    };
}

const level = new Level();

export default level;
