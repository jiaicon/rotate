import { message } from 'antd';
import fetch from './request';

const getBanner = (options)=> {
    fetch('/api/banner', {method: 'GET'})
        .then(res=>{
            console.log('请求结果', res);
            if(typeof res ==='object' && 'status' in res && res.status === 0) {
                options.success&&typeof options.success === 'function'&&options.success(res);
            }else {
                options.failed&&options.failed();
                message.error('请求失败，请配置url或检查网络');
                console.warn('The request failed. Configure the URL or check the network');
            }
        });
};

module.exports={
    getBanner
};