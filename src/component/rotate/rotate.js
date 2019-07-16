import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Modal, Button } from 'antd';

const img = require('./../../img/error.png');

class Rotate extends PureComponent {
  static propTypes = {
    // modal是否显示
    visible: PropTypes.bool,
    // 传入的图片路径，必填
    src: PropTypes.string.isRequired,
    // 是否旋转，默认可以
    isRotate: PropTypes.bool,
    // 关闭modal的回调方法
    onCancel: PropTypes.func,
    // 图片出错时的回调方法
    onImgError: PropTypes.func
  }

  constructor(props) {
    super(props);
    autoBind(this);
    this.defaultSrc = img;
    this.state = {
      previewVisible: props.visible,
      // 当前旋转的角度
      current: 0,
      isError: false,
      src: this.configSrc(props.src),
      isRotate: 'isRotate' in props ? props.isRotate : true,
      // 记录传入的img高宽比
      imgHeightWidth: 1
    };
  }

  configSrc(props) {
    const src = props || this.defaultSrc;
    const image = new Image();
    image.src = `${src}`;
    image.onerror = () => {
      this.setState({ isError: true });
      const { onImgError } = this.props;
      onImgError && onImgError();
    };
    image.onload = () => {
      this.setState({
        isError: false,
        imgHeightWidth: image.height / image.width
      });
    };
    return src;
  }

  closeModal() {
    this.setState({
      boxWidth: 0,
      boxHeight: 0,
      current: 0,
      src: null,
      previewVisible: false
    }, () => {
      const { onCancel } = this.props;
      onCancel && onCancel();
    });
  }

  confBox(callback) {
    // 记录modal的高宽，用于重置
    const height = this.imgBox.offsetHeight;
    const width = this.imgBox.offsetWidth;
    this.setState({
      boxWidth: width,
      boxHeight: height
    }, () => {
      callback();
    });
  }

  componentDidMount() {
  }

  anticlockwise(e) {
    e.preventDefault();
    // 逆时针
    this.confBox(() => {
      this.doRotate('anticlockwise');
    });
  }

  clockwise(e) {
    e.preventDefault();
    // 顺时针
    this.confBox(() => {
      this.doRotate('clockwise');
    });
  }

  doRotate(type) {
    let { current } = this.state;
    const { boxHeight, boxWidth, imgHeightWidth } = this.state;
    this.imgBox.style.height = `${boxHeight}px`;
    current = type === 'clockwise' ? current + 90 : current - 90;
    if (imgHeightWidth < 1) {
      // 图片宽比较长
      if ((current / 90) % 2 === 0) {
        this.imgStyle.style.width = `${boxWidth}px`;
      } else {
        this.imgStyle.style.width = `${boxHeight}px`;
      }
    }
    this.setState({
      current
    });
  }

  componentWillReceiveProps(nextProps) {
    const { state } = this;
    delete state.boxWidth;
    delete state.boxHeight;
    this.setState({
      ...state,
      previewVisible: nextProps.visible,
      src: this.configSrc(nextProps.src)
    });
  }

  render() {
    const {
      previewVisible, current, src, isError, isRotate, imgHeightWidth
    } = this.state;
    // 简单的预览，点击背景关闭
    // 底脚
    const footer = (
      <div>
        <Button icon="undo" onClick={e => this.anticlockwise(e)}>逆时针旋转90°</Button>
        <Button icon="redo" onClick={e => this.clockwise(e)}>顺时针旋转90°</Button>
      </div>
    ); // 需要旋转
    const props = {
      visible: previewVisible,
      footer: isRotate ? footer : null,
      onCancel: this.closeModal,
      maskClosable: true,
      forceRender: true,
    };

    return (
      <Modal {...props}>
        <div
          ref={imgBox => this.imgBox = imgBox}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            ref={imgStyle => this.imgStyle = imgStyle}
            style={{ transform: `rotate(${current}deg)`, width: `${imgHeightWidth < 1 ? '100%' : 'auto'}` }}
            src={isError ? img : src}
            alt={isError ? img : src} />
        </div>
      </Modal>
    );
  }
}

export default Rotate;
