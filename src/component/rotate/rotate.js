import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Modal, Button } from 'antd';

const img = 'data:image/png;base64,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';

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
      this.imgStyle.style.width = 'auto';
      this.imgStyle.style.height = 'auto';
      this.imgBox.style.height = 'auto';
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
    } else if (imgHeightWidth === 1) {
      this.imgStyle.style.width = `${boxHeight}px`;
    } else {
      // 图片高比较长
      if ((current / 90) % 2 === 0) {
        this.imgStyle.style.height = `${boxHeight}px`;
      } else {
        this.imgStyle.style.height = `${boxWidth}px`;
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
console.log(imgHeightWidth);
    return (
      <Modal {...props}>
        <div
          ref={imgBox => this.imgBox = imgBox}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            ref={imgStyle => this.imgStyle = imgStyle}
            style={{ transform: `rotate(${current}deg)`, width: `${imgHeightWidth >= 1 ? 'auto' : '100%'}`, maxWidth: '100%' }}
            src={isError ? img : src}
            alt={isError ? img : src} />
        </div>
      </Modal>
    );
  }
}

export default Rotate;
