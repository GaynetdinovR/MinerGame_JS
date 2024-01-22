import React, { useState } from 'react';

import RightSide from './RightSide/RightSide.jsx';
import LeftSide from './LeftSide/LeftSide.jsx';
import Map from './Map/Map.jsx';
import CraftModal from './CraftModal/CraftModal.jsx';
import InfoModal from './InfoModal/InfoModal.jsx';
import StoreModal from './StoreModal/StoreModal.jsx';
import InventoryModal from './InventoryModal/InventoryModal.jsx';

const App = () => {
    //modals
    const [isInfoModalOpen, setInfoModal] = useState(false);
    const [isCraftModalOpen, setCraftModal] = useState(false);
    const [isStoreModalOpen, setStoreModal] = useState(false);
    const [isInventoryModalOpen, setInventoryModal] = useState(false);

    //data
    const [materialAdded, setMaterialAdded] = useState({ name: '-', count: 0 });

    const setModal = {
        infoModal: setInfoModal,
        craftModal: setCraftModal,
        inventoryModal: setInventoryModal,
        storeModal: setStoreModal
    };

    return (
        <main>
            <LeftSide />
            <Map setMaterialAdded={setMaterialAdded} />
            <RightSide set={setModal} materialAdded={materialAdded} />
            <InfoModal isOpen={isInfoModalOpen} setModal={setInfoModal} />
            <CraftModal isOpen={isCraftModalOpen} setModal={setCraftModal} />
            <InventoryModal isOpen={isInventoryModalOpen} setModal={setInventoryModal} />
            <StoreModal isOpen={isStoreModalOpen} setModal={setStoreModal} />
            {/* <ItemPreview item={itemAtPreview} /> */}
        </main>
    );
};

export default App;
