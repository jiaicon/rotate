import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Modal, Button} from 'antd';
import img from '../img/error.png'

//
class Rotate extends PureComponent {
    static propTypes = {
        /** 对话框是否可见*/
        visible: PropTypes.bool,
        src: PropTypes.string
    };

    constructor(props) {
        super(props);
        autoBind(this);
        this.defaultSrc = img;
        this.state = {
            previewVisible: props.visible,
            current: 0,    //当前旋转的角度
            iserror: false,
            src: this.confSrc(props.src),
        }
    }

    confSrc(props) {
        let src = props || this.defaultSrc;
        var img = document.createElement("img");
        img.src = `${src}`;
        const that = this;
        img.onerror = function () {
            that.setState({iserror: true});
        };
        img.onload = function () {
            that.setState({
                width: img.width,
                height: img.height,
                iserror: false
            })
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
        this.imgBox.style.height="100%";
        this.imgstyle.style.width="100%";
    }
    confBox(callback) {
        //记录modal的高宽，用于重置
        const height = this.imgBox.offsetHeight;
        const width = this.imgBox.offsetWidth;
        this.setState({
            boxWidth: width,
            boxHeight: height
        }, ()=>{
            callback()
        })
    }
    componentDidMount() {
    }
    undo(e) {
        //逆时针
        e.preventDefault();
        let current = this.state.current - 90;
        this.confBox(()=>{
            if((current/90)%2 === 0) {
                this.imgBox.style.height=this.state.boxHeight+'px';
                this.imgstyle.style.width=this.state.boxWidth+'px';
            }else {
                this.imgBox.style.height=this.state.boxHeight+'px';
                this.imgstyle.style.width=this.state.boxHeight+'px';
            }
        });

        this.setState({
            current: current
        })
    }

    redo(e) {
        //顺时针
        e.preventDefault();
        let current = this.state.current + 90;
        this.confBox(()=>{
            if((current/90)%2 === 0) {
                this.imgBox.style.height=this.state.boxHeight+'px';
                this.imgstyle.style.width=this.state.boxWidth+'px';
            }else {
                this.imgBox.style.height=this.state.boxHeight+'px';
                this.imgstyle.style.width=this.state.boxHeight+'px';
            }
        });
        this.setState({
            current: current
        })
    }

    componentWillReceiveProps(nextProps) {
        let state = this.state;
        delete state.boxWidth;
        delete state.boxHeight;

        this.setState({
            ...state,
            previewVisible: nextProps.visible,
            src: this.confSrc(nextProps.src)
        });
    }

    render() {
        const {previewVisible, current, src, iserror} = this.state;
        //简单的预览，点击背景关闭
        //底脚
        const footer = (
            <div>
                <Button icon="undo" onClick={(e) => this.undo(e)}>逆时针旋转90°</Button>
                <Button icon="redo" onClick={(e) => this.redo(e)}>正时针旋转90°</Button>
            </div>
        );  //需要旋转
        const props = {
            visible: previewVisible,
            footer: footer,
            onCancel: this.closeModal,
            maskClosable: true,
            forceRender: true,
        };

        return (
            <Modal {...props}>
                <div ref={imgBox=>this.imgBox=imgBox} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img ref={imgstyle=>this.imgstyle=imgstyle} style={{transform: `rotate(${current}deg)`, width: '100%', objectFit: 'cover'}} src={iserror ? img : src} alt={iserror ? img : src}/>
                </div>
            </Modal>
        )
    }
}
// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
// exports['default']=Rotate;
export default Rotate;