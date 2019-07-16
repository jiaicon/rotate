import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import autoBind from 'react-autobind';
import { Rotate } from './main';

const img1 = require('./img/123.png');
const img2 = require('./img/timg.jpeg');

class Test extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      visible: false,
      src: ''
    };
  }

  onCancel() {
    this.setState({
      visible: false
    });
  }

  render() {
    const { visible, src } = this.state;
    // src="https://tpc.googlesyndication.com/daca_images/simgad/15515071172727742888"
    return (
      <div>

        <Rotate
          visible={visible}
          src={src}
          onCancel={this.onCancel} />
        <div onClick={() => this.setState({ visible: true, src: img2 })}>图片宽大于高</div>
        <div onClick={() => this.setState({ visible: true, src: img1 })}>图片宽小于高</div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('app'));
