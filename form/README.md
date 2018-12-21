# install
yarn add https://github.com/HQ6968/antd

# update
yarn upgrade https://github.com/HQ6968/antd

# antd form 封装
# css 全局调整demo


## .umirc.js 配置
```
const path = require('path');
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'front-pay1',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
  extraBabelIncludes:[path.join(__dirname, 'node_modules/antdlib')],
};

```

```
.ant-form-item-label{
  text-align: left;
  vertical-align: middle;
  line-height: 39.9999px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}


.ant-form-explain{
  font-size: .7em;
}
.ant-form-horizontal .ant-form-explain{
  text-align: right;
}

.ant-form-vertical .ant-form-explain{
  text-align: right;
}

.ant-form-inline .ant-form-explain{
  text-align: left;
}

.ant-card-body{
  padding: 10px;
}

.ant-form-item{
  margin-bottom: 0;
}
```
