import React, {PureComponent} from 'react';
import {Modal, Upload, Icon, message} from 'antd';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class UploadModal extends PureComponent {
    constructor(props) {
        super(props);
        let photo = {};
        if(props.photo) {
            photo=props.photo;
        }
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: photo,
        };
    }
    componentWillReceiveProps(props) {
        let photo = [];
        if(props.photo) {
            photo=props.photo;
        }
        this.setState({
            fileList: photo
        });
    }
    handleCancel = () => {
        this.setState({previewVisible: false});
    };
    handlePreview = file => {
        if (!file.url && !file.thumbUrl) {
            file.preview = getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };
    handleBeforeUpload = file => {
        //限制图片 格式、size、分辨率
        const isJPG = file.type === 'image/jpeg';
        const isJPEG = file.type === 'image/jpeg';
        const isGIF = file.type === 'image/gif';
        const isPNG = file.type === 'image/png';
        if (!(isJPG || isJPEG || isGIF || isPNG)) {
            Modal.error({
                title: '只能上传JPG 、JPEG 、GIF、 PNG格式的图片~',
            });
            return;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            Modal.error({
                title: '超过2M限制，不允许上传~',
            });
            return;
        }
        return (isJPG || isJPEG || isGIF || isPNG) && isLt2M && this.checkImageWH(file);
    };
    checkImageWH(file) {
        return new Promise(function(resolve, reject) {
            let filereader = new FileReader();
            filereader.onload = e => {
                let src = e.target.result;
                const image = new Image();
                image.onload = function() {
                    // 获取图片的宽高，并存放到file对象中
                    console.log('file width :' + this.width);
                    console.log('file height :' + this.height);
                    file.width = this.width;
                    file.height = this.height;
                    resolve();
                };
                image.onerror = reject;
                image.src = src;
            };
            filereader.readAsDataURL(file);
        });
    }
    handleChange = ({ file, fileList }) => {
        console.log('fileList::::sdas:::', fileList)
        if(fileList.length) fileList[0].status = 1
        this.setState({ fileList })
    };

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        console.log('fileList', fileList)
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const props = {
            showUploadList: true,
            listType: 'picture-card',
            action: `${window.apiHost || 'http://localhost:9527'}/api/image`,
            accept: 'image/*',
            name: 'file',
            multiple: false,
            beforeUpload: this.handleBeforeUpload,
            onChange: this.handleChange,
            onPreview: this.handlePreview,
            fileList: fileList || []
        };
        return (<div>
            <Upload
                {...props}
            >
                {fileList&&fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </div>)
    }
}