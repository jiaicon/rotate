import React from 'react';
import autoBind from 'react-autobind';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import fetch from './../util/request';

class Banner extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state= {
            banners: []
        }
    }
    componentDidMount() {
        this.getBanner();
    };
    getBanner() {
        fetch('/api/banner', {method: 'GET'})
            .then(res=>{
                console.log('请求结果', res);
                if(typeof res ==='object' && 'status' in res && res.status === 0) {
                    this.setState({
                        banners: res.data
                    })
                }else {
                    alert('请求失败，请配置url或检查网络');
                    console.warn('The request failed. Configure the URL or check the network');
                }
            });
    }
    onDragStart = () => {
    };
    onDragUpdate = () => {
    };
    onDragEnd = () => {
    };
    render() {
        return (
            <DragDropContext
                onDragStart={this.onDragStart}
                onDragUpdate={this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="droppable-1" type="PERSON" isDropDisabled={true}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                this.state.banners.length > 0 ?
                                    this.state.banners.map((item, index)=>(
                                        <Draggable
                                            key={index}
                                            draggableId={`banner-${item.id}`}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <h4>My draggable1</h4>
                                                </div>
                                            )}
                                        </Draggable>
                                    )) : null
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

export default Banner;