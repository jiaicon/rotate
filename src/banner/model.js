import React, {PureComponent} from 'react';
import {Modal, Form, Switch, Input, Upload, Icon, message} from 'antd';
import UploadModal from './upload';

const FormItem = Form.Item;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

@Form.create()
export default class UpdateModel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewPhoto: false,
            previewImage: '',
            fileList: [

            ],
        };
    }

    componentDidMount() {

    }
    // handleOnChange = ({ fileList }) => {
    //     // console.log('fileList:::ssss::', fileList)
    //     // return fileList&&fileList.map(file => ({
    //     //     status: file.status,
    //     //     uid: file.uid,
    //     //     url: file.response?file.response.data.url:file.url,
    //     // }));
    // };
    handleOnSet = (fileList)=>{
        console.log('fileList:::', fileList);
        let file = {};
        if(fileList) {
            file.status = fileList.status;
            file.uid = 0;
            file.name = 'photo';
            file.url = fileList.photo;
        }
        this.setState({
            jump: fileList&&fileList.href ? true : false,
            photo: fileList ? [file] : [],
        }, ()=>{
            this.props.form.setFieldsValue({
                photo: fileList ? [file] : [],
                href: fileList&&fileList.href
            });
        });
    };
    onSwitchChange=(checked)=>{
        this.setState({
            jump: checked
        })
    };
    onHandleCancel=()=>{
        const {handleCancel, form} = this.props;
        form.resetFields();
        handleCancel();
    };
    getFormData=()=>{
        let values;
        this.props.form.validateFields((err, value)=>{
            if(err) {
                let keys = Object.keys(err);
                message.error(err[keys[0]].errors[0].message);
                value='false';
            }
            values=value;
        });
        return values;
    };
    handleChange=({file,fileList})=>{
        var arr = [];
        if (fileList.length >= 1) {
            arr = [
                {
                    uid: file.uid,
                    name: file.name,
                    status: file.status,
                    url: file.response ? file.response.data[0] : '',
                },
            ];
        }
        console.log(arr)
        this.setState({
            photo: arr
        }, ()=>{
            this.props.form.setFieldsValue({
                photo: arr,
            });
        });
    };
    normFile = (info, single) => {
        const { file } = info;
        if (file.size > 3 * 1024 * 1024) {
            message.error(`${info.file.name} 请上传小于3M的图片.`);
            this.setState({photo: []});
            return [];
        }
        if (file.status === 'done') {
            const {
                response: { errno },
            } = info.file;
            if (errno === 0) {
                message.success(`${info.file.name} 上传成功`);
            } else {
                message.success(`${info.file.name} 删除失败`);
            }
        } else if (file.status === 'error') {
            message.error(`${info.file.name} 上传失败`);
        }
        if (single && info && info.fileList.length > 0) {
            // 单张图片就取最新的
            return info.fileList.slice(-1);
        }
        return info && info.fileList;
    };
    handlePreview = file => {
        if (!file.url && !file.thumbUrl) {
            file.preview = getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewPhoto: true,
        });
    };
    closeModal=()=> {
        this.setState({
            previewPhoto: false
        })
    };
    render() {
        const {update, handleOk, maskClosable, form: {getFieldDecorator}} = this.props;
        const { photo, previewPhoto, previewImage } = this.state;
        const formLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const props = {
            showUploadList: true,
            listType: 'picture-card',
            action: `${window.apiHost || 'http://localhost:9527'}/api/image`,
            accept: 'image/*',
            name: 'file',
            beforeUpload: this.handleBeforeUpload,
            onChange: this.handleChange,
            onPreview: this.handlePreview,
        };
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (<Modal
            title="编辑"
            visible={update}
            onOk={handleOk}
            onCancel={this.onHandleCancel}
            maskClosable={maskClosable}
        >
            <Form>
                <FormItem label="选择图片" {...formLayout}>
                    {getFieldDecorator('photo', {
                        valuePropName: 'fileList',
                        getValueFromEvent: file => this.normFile(file, true),
                        rules: [
                            {
                                required: true,
                                message: '请选择图片'
                            }
                        ],
                    })(
                        <Upload
                            {...props}
                        >
                            {photo&&photo.length >= 1 ? null : uploadButton}
                        </Upload>
                    )}
                </FormItem>
                <FormItem label="是否跳转" {...formLayout}>
                    <Switch
                        defaultChecked={this.state.jump}
                        checked={this.state.jump}
                        onChange={this.onSwitchChange}
                    />
                </FormItem>
                <FormItem label="跳转地址" {...formLayout} style={{display: this.state.jump ? 'block' : 'none'}}>
                    {getFieldDecorator('href', {
                    })(
                        <Input />
                    )}
                </FormItem>
            </Form>
            <Modal visible={previewPhoto} footer={null} onCancel={this.closeModal}>
                <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
        </Modal>)
    }
}