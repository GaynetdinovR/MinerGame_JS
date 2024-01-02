class Other{

    /**
     * Возвращает объект вложенный в массиве 
     * @param {*} array [{}, {}, ...]
     * @param {*} name string
     * @returns {}
     */
    find = (array, name) => {
        for(let i = 0; i < array.length; i++){
            if(array[i].name === name) return array[i];
        }
    }
    
    /**
     * Возвращает индекс вложенного объекта в массиве 
     * @param {*} array [{}, {}, ...]
     * @param {*} name string
     * @returns number
     */
    findIndexInArray = (array, name) => {
        for(let i = 0; i < array.length; i++){
            if(array[i].name === name) return i;
        }
    }

    /**
     * Объединяет два объекта, по свойству name, во вложенном массиве объектов
     * @param {*} obj1 {}
     * @param {*} obj2 {}
     * @returns {}
     */
    mergeObjects = (obj1, obj2) => {
        const res = {}
    
        const addProperties = (array, object) => {
            const index = this.findIndexInArray(array, object.name);
                        
            for(const keyInArr in object){
                if(keyInArr === 'name') continue;
    
                array[index][keyInArr] = object[keyInArr];
            }
        }
    
        for(const obj of [obj1, obj2]){
            for(const key in obj){
                const arr = obj[key];
                if(!res.hasOwnProperty(key)) res[key] = []
    
                for(const objInArr of arr){
    
                    const foundObject = this.find(res[key], objInArr.name)
    
                    if(foundObject){
                        addProperties(res[key], objInArr)
                        continue;
                    }
    
                    res[key].push({'name': objInArr.name});
    
                    addProperties(res[key], objInArr)
    
                }
            }
        }
    
        return res;
    }
} 

const other = new Other()

export default other;