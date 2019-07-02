#banner-h5
#项目参考地址：https://www.jianshu.com/p/db6113c94dbc
#打包 npm run build
#增加版本号 npm version patch
#发布npm包 npm publish

#本地测试 npm run dev

#如遇到代理问题  允许  npm config set proxy null

#安装 npm i banner-h5


#api

#apiHost: 传入的服务器地址  配置window   eg:http://localhost:9527'
已有方法
options支持success,failed方法
#getBanner()     获取banner
#putBanner(id, data, options)     修改banner  data为修改的数据(photo, href)
#postBanner(data, options)     新增banner  data为修改的数据(photo, href)
#delBanner(id, options)     删除banner  

目前只支持拖动排序
添加替换排序
