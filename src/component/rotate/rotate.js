import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Modal, Button } from 'antd';

const img = require('./../../img/error.png');

class Rotate extends PureComponent {
    static propTypes = {
        /** 对话框是否可见 */
        visible: PropTypes.bool,
        src: PropTypes.string.isRequired,
        isRotate: PropTypes.bool,
        onCancel: PropTypes.func,
        onImgError: PropTypes.func
    };

    constructor(props) {
        super(props);
        autoBind(this);
        this.defaultSrc = img;
        this.state = {
            previewVisible: props.visible,
            current: 0, // 当前旋转的角度
            isError: false,
            src: this.configSrc(props.src),
            isRotate: props.isRotate || false
        };
    }

    componentWillReceiveProps(nextProps) {
        const { state } = this.state;
        delete state.boxWidth;
        delete state.boxHeight;

        this.setState({
            ...state,
            previewVisible: nextProps.visible,
            src: this.configSrc(nextProps.src)
        });
    }

    configSrc(props) {
        const src = props || this.defaultSrc;
        const image = new Image();
        image.src = `${src}`;
        image.onerror = () => {
            this.setState({ isError: true });
            const { onImgError } = this.props;
            onImgError && typeof onImgError === 'function' && onImgError();
        };
        image.onload = () => {
            this.setState({
                isError: false
            });
        };
        return src;
    }

    closeModal() {
        this.setState({
            previewVisible: false,
            boxWidth: 0,
            boxHeight: 0,
            current: 0
        });
        this.imgBox.style.height = '100%';
        this.imgstyle.style.width = '100%';
        const { onCancel } = this.props;
        onCancel && typeof onCancel === 'function' && onCancel();
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

    undo(e) {
        // 逆时针
      const { current, boxHeight, boxWidth } = this.state;
        e.preventDefault();
        this.confBox(() => {
            if ((current / 90) % 2 === 0) {
                this.imgBox.style.height = `${boxHeight}px`;
                this.imgstyle.style.width = `${boxWidth}px`;
            } else {
                this.imgBox.style.height = `${boxHeight}px`;
                this.imgstyle.style.width = `${boxHeight}px`;
            }
        });

        this.setState({
            current
        });
    }

    redo(e) {
        // 顺时针
        e.preventDefault();
      const { current, boxHeight, boxWidth } = this.state;
        this.confBox(() => {
            if ((current / 90) % 2 === 0) {
                this.imgBox.style.height = `${boxHeight}px`;
                this.imgstyle.style.width = `${boxWidth}px`;
            } else {
                this.imgBox.style.height = `${boxHeight}px`;
                this.imgstyle.style.width = `${boxHeight}px`;
            }
        });
        this.setState({
            current
        });
    }

    render() {
        const {
 previewVisible, current, src, isError, isRotate
} = this.state;
        // 简单的预览，点击背景关闭
        // 底脚
        const footer = (
          <div>
            <Button icon="undo" onClick={e => this.undo(e)}>逆时针旋转90°</Button>
            <Button icon="redo" onClick={e => this.redo(e)}>正时针旋转90°</Button>
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
                ref={imgstyle => this.imgstyle = imgstyle}
                style={{ transform: `rotate(${current}deg)`, width: '100%', objectFit: 'cover' }}
                src={isError ? img : src}
                alt={isError ? img : src} />
            </div>
          </Modal>
        );
    }
}

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
// exports['default']=Rotate;
export default Rotate;
