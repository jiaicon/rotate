import React from 'react';
import autoBind from 'react-autobind';
import { Table, Spin, Tag, Button, message, Modal } from 'antd';
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import fetch from './../util/request';
import UpdateModel from './model';
import { getBanner, putBanner, postBanner, delBanner } from  './../util/util';

import Rotate from './rotate';

let dragingIndex = -1;

class BodyRow extends React.Component {
    render() {
        const { isOver, connectDragSource, connectDropTarget, moveRow, ...restProps } = this.props;
        const style = { ...restProps.style, cursor: 'move' };

        let { className } = restProps;
        if (isOver) {
            if (restProps.index > dragingIndex) {
                className += ' drop-over-downward';
            }
            if (restProps.index < dragingIndex) {
                className += ' drop-over-upward';
            }
        }

        return connectDragSource(
            connectDropTarget(<tr {...restProps} className={className} style={style} />),
        );
    }
}


const rowSource = {
    beginDrag(props) {
        dragingIndex = props.index;
        return {
            index: props.index,
        };
    },
};
const rowTarget = {
    drop(props, monitor) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Time to actually perform the action
        props.moveRow(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};
const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))(
    DragSource('row', rowSource, connect => ({
        connectDragSource: connect.dragSource(),
    }))(BodyRow),
);
function createComparisonFunction(propertyName) {
    return function (object1, object2) {
        let value1 = object1[propertyName];
        let value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
class Banner extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state= {
            banners: [],
            spinning: false,   //加载
            update: false,   //编辑的model
            previewVisible: false
        }
    }
    componentDidMount() {
        this.getBanner();
    };
    getBanner() {
        this.setState({
            spinning: true
        });
        getBanner({
            success: (res)=>{
                this.setState({
                    spinning: false,
                    banners: res.data.length ? Array.from(res.data).sort(createComparisonFunction('sort')) : []
                })
            },
            failed: ()=>{
                this.setState({
                    spinning: false
                });
            }
        });
    }
    sortBanner(drag, hover, callback) {
        this.setState({
            spinning: true
        });
        //drag为移动的id,hover为移动的序号
        fetch(`/api/banner/${drag}`, {method: 'PUT', data: {sort: hover}})
            .then(res=>{
                console.log('请求结果', res);
                if(typeof res ==='object' && 'status' in res && res.status === 0) {
                    this.setState({
                        spinning: false,
                        banners: res.data.length ? Array.from(res.data).sort(createComparisonFunction('sort')) : []
                    })
                }else {
                    this.setState({
                        spinning: false
                    });
                    message.error('请求失败，请配置url或检查网络');
                    console.warn('The request failed. Configure the URL or check the network');
                }
            });
    }
    putBanner(id, data) {
        this.setState({
            spinning: true
        });
        putBanner(id, data, {
            success: (res)=>{
                this.setState({
                    spinning: false,
                    update: false,
                    banners: res.data.length ? Array.from(res.data).sort(createComparisonFunction('sort')) : []
                })
            },
            failed: ()=>{
                this.setState({
                    update: false,
                    spinning: false
                });
            }
        });
    }
    delBanner(e, id) {
        e.preventDefault();
        this.setState({
            spinning: true
        });
        delBanner(id, {
            success: (res)=>{
                this.setState({
                    spinning: false,
                    banners: res.data.length ? Array.from(res.data).sort(createComparisonFunction('sort')) : []
                })
            },
            failed: ()=>{
                this.setState({
                    spinning: false
                });
            }
        });
    }
    components = {
        body: {
            row: DragableBodyRow,
        },
    };
    postBanner=(data)=>{
        this.setState({
            spinning: true
        });
        postBanner(data, {
            success: (res)=>{
                this.setState({
                    spinning: false,
                    update: false,
                    banners: res.data.length ? Array.from(res.data).sort(createComparisonFunction('sort')) : []
                })
            },
            failed: ()=>{
                this.setState({
                    update: false,
                    spinning: false
                });
            }
        });
    };
    moveRow = (dragIndex, hoverIndex) => {
        const { banners } = this.state;
        const dragRow = banners[dragIndex];
        const hoverRow = banners[hoverIndex];
        console.log(banners)
        this.sortBanner(dragRow.id, hoverRow.sort)
    };
    handleOk() {
        const value = this.formProValue.getFormData();
        if(!value) {
            return;
        }
        console.log(value);
        let data = {
            photo: value.photo[0].url ? value.photo[0].url : value.photo[0].response.data[0],
            href: value.href
        };
        if(this.state.type==='update') {
            this.putBanner(this.state.putSource.id, data);
        }else {
            this.postBanner(data);
        }
    }
    handleCancel() {
        this.setState({
            update: false
        });
    }
    updateThis(e, record) {
        e.preventDefault();
        console.log('record:::', record);
        this.formProValue.handleOnSet(record);
        this.setState({
            putSource: record || {},
            update: true,
            type: 'update'
        });
    }
    createBanner(e) {
        e.preventDefault();
        this.setState({
            putSource: {},
            update: true,
            type: 'create'
        });
    }
    previewImg(url) {
        this.setState({
            previewVisible: true,
            previewImage: url
        })
    }
    closeModal() {
        this.setState({
            previewVisible: false,
        })
    }
    render() {
        const { previewImage, putSource, update, banners, spinning, previewVisible } = this.state;
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                align: 'center'
            },
            {
                title: 'title',
                dataIndex: 'title',
                key: 'title',
                align: 'center',
                render: (v)=>(v ? <a href={v}>{v}</a> : '-')
            },
            {
                title: '图片',
                dataIndex: 'photo',
                key: 'photo',
                align: 'center',
                render: (text, record)=>(<img onClick={()=>this.previewImg(record.photo)} style={{maxWidth: '200px', maxHeight: '60px'}} src={text} alt=""/>),
                width: '20%'
            },
            {
                title: '是否跳转',
                dataIndex: 'href',
                align: 'center',
                key: 'href',
                render: (v)=>(v ? <a href={v}>{v}</a> : '-')
            },
            {
                title: '启用',
                dataIndex: 'status',
                align: 'center',
                key: 'status',
                render: v=>(v==1 ? <Tag color="#87d068">启用</Tag> : <Tag color="red">禁用</Tag>)
            },
            {
                title: '操作',
                align: 'center',
                render: (text, record)=>{
                    return (<div><Tag style={{cursor: 'pointer'}} color="#108ee9" onClick={(e)=>this.updateThis(e, record)}>编辑</Tag>{record.status==0?<Tag onClick={(e)=>this.putBanner(record.id, {status: 1})} style={{cursor: 'pointer'}} color="#87d068">恢复</Tag>:<Tag onClick={(e)=>this.putBanner(record.id, {status: 0})} style={{cursor: 'pointer'}} color="red">禁用</Tag>}<Tag style={{cursor: 'pointer'}} color="red" onClick={(e)=>this.delBanner(e, record.id)}>删除</Tag></div>)
                }
            },
        ];
        return (
            <div>
                <Button onClick={this.createBanner}>新建</Button>
                <Spin spinning={spinning} delay="50">
                    <DndProvider backend={HTML5Backend}>
                        <Table
                            columns={columns}
                            dataSource={banners}
                            components={this.components}
                            rowKey='id'
                            onRow={(record, index) => ({
                                index,
                                moveRow: this.moveRow,
                            })}
                            pagination={false}
                        />
                        <UpdateModel
                            maskClosable={true}
                            update={update}
                            handleOk={this.handleOk}
                            handleCancel={this.handleCancel}
                            putSource={putSource}
                            wrappedComponentRef={(value)=>this.formProValue=value}
                        />
                    </DndProvider>
                </Spin>
                <Rotate visible={previewVisible} src={previewImage}/>
            </div>
        );
    }
}

Banner['getBanner']=getBanner;
Banner['putBanner']=putBanner;
Banner['delBanner']=delBanner;
Banner['postBanner']=postBanner;

// Object.defineProperty(exports, "__esModule", {
//     value: true
// });
// exports['default']=Banner;

export default Banner;