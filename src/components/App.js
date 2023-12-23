import React from 'react';

import RightSide from './RightSide/RightSide.jsx';
import LeftSide from './LeftSide/LeftSide.jsx';
import Map from './Map/Map.jsx';

export default class App extends React.Component {
    render() {
        return (
            <main>
                <LeftSide/>
                <Map/>
                <RightSide/>
            </main>
        );
    }
}