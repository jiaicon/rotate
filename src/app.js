import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import {Rotate} from './main';

class Test extends React.Component {
    state={
        visible: false
    };
    onCancel() {
        console.log(123)
    }
    render() {
        return <div>
            <Rotate visible={this.state.visible} src="https://tpc.googlesyndication.com/daca_images/simgad/15515071172727742888" onCancel={this.onCancel}/>
            <div onClick={()=>this.setState({visible: true})}>点击</div>
        </div>
    }
}

ReactDOM.render(<Test/>, document.getElementById('app'));