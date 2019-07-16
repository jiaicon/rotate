#banner-h5

#项目参考地址：https://www.jianshu.com/p/db6113c94dbc

#打包 npm run build

#增加版本号 npm version patch

#发布npm包 npm publish

#本地测试 npm run dev

#如遇到代理问题  允许  npm config set proxy null

#安装 npm i rotate

#使用PHPstorm，开启ESLint，使用ESLint快捷键

#开启ESLint快捷键方法：preference->Keymap->搜索ESLint->Fix ESLint Problems

#git commit时会检查ESLint，有问题时会出错，git push时Everything up-to-date

#npm run lint-fix    修复ESLint问题

#api

#visible    bool   是否显示

#isRotate   bool   是否旋转

#src        string 图片路径

#onCancel   func   关闭的回调

#onImgError func   图片出错是回调 

|   |
|---|
|   |

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