import React from 'react';
import autoBind from 'react-autobind';
import { DragDropContext } from 'react-dnd';
import HTMLBackend from 'react-dnd-html5-backend';


import Dustbin from './dustbin';
import BannerBox from './bannerBox';

@DragDropContext(HTMLBackend)
class Banner extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
    }

    render() {
        return (
            <div style={{ paddingLeft: 200, paddingTop: 50 }}>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <BannerBox name="Glass" />
                    <BannerBox name="Banana" />
                    <BannerBox name="Paper" />
                </div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Dustbin />
                </div>
            </div>
        );
    }
}

export default Banner;