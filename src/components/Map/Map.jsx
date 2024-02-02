import React from 'react';
import data from '../../classes/Data.js';
import { useSelector } from 'react-redux';
import Block from './components/Block.jsx';
import other from '../../classes/Other.js';
import block from '../../classes/Block.js';

const Map = ({ setMaterialAdded, setItemsAtPreview }) => {
    const levelState = useSelector((state) => state.level);
    const mapState = useSelector((state) => state.map);

    const { levels } = data.getMergedData();
    const background = data.find(levels, levelState.name);

    const hasMaterial = (material) => {
        return material != undefined;
    };

    const isChest = (name) => {
        return name.includes('chest');
    };

    const getFormattedMaterial = ([material, material_count]) => {
        return {
            material: material,
            material_count: other.randomInRange(material_count)
        };
    };

    /**
     * Возвращает объединенную информацию о блоке
     * @param {*} mapBlock object
     * @param {*} i number
     * @returns object
     */
    const getMergedBlockInfo = (mapBlock, i) => {
        const { name, light, breaked } = mapBlock;
        const [x, y] = [i % 10, Math.floor(i / 10)];
        const { material, durability, material_count, materials } = block.getBlockData(name);

        const blockInfo = {
            name: name,
            x: x,
            y: y,
            light: light,
            breaked: breaked,
            durability: durability
        };

        if (isChest(name)) Object.assign(blockInfo, block.getFormattedChestMaterials(materials));

        if (hasMaterial(material))
            Object.assign(blockInfo, getFormattedMaterial([material, material_count]));

        return blockInfo;
    };

    return (
        <aside className="map">
            <div className="map__bg">
                <img src={background.img} alt="bg" />
            </div>

            <div className="map__blocks">
                {mapState.flat().map((mapBlock, i) => {
                    const { img } = block.getBlockData(mapBlock.name);
                    const blockInfo = getMergedBlockInfo(mapBlock, i);

                    return (
                        <Block
                            key={i}
                            setMaterialAdded={setMaterialAdded}
                            setItemsAtPreview={setItemsAtPreview}
                            blockInfo={blockInfo}
                            img={img}
                        />
                    );
                })}
            </div>
            <div className="map__line-wrap">
                <div className="map__line"></div>
                <span className="map__depth">{levelState.depth}м</span>
            </div>
        </aside>
    );
};

export default Map;
