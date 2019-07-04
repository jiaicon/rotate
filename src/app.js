import React from 'react';
import ReactDOM from 'react-dom';

import {Rotate} from './banner/index';

let visible=false;
class Test extends React.Component {
    state={
        visible: false
    };
    render() {
        return <div>
            <Rotate visible={this.state.visible} src="https://tpc.googlesyndication.com/daca_images/simgad/15515071172727742888"/>
            <div onClick={()=>this.setState({visible: true})}>点击</div>
        </div>
    }
}

ReactDOM.render(<Test/>, document.getElementById('app'));