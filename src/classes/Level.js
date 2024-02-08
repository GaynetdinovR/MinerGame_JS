class Level {
    /**
     * Проверка на изменение уровня глубины
     * Если изменяется возвращает название нового уровня
     * @param {*} depth
     * @returns
     */
    checkToLevelChange = (depth) => {
        const changesOn = {
            500: 'cave_2',
            900: 'cave_3',
            1300: 'cave_4',
            2000: 'cave_5'
        };

        if (Object.keys(changesOn).includes(String(depth))) return changesOn[depth];

        return false;
    };
}

const level = new Level();

export default level;
