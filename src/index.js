import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize 初始化部分
const app = dva({
  /*history, // 指定给路由的history
  initialState, // 初始数据
  onError, // 貌似已经废弃了，存疑
  onAction,
  onStateChange,
  onReducer,
  onEffect,
  onHmr,
  extraReducers,
  extraEnhancers*/
});

// 2. Plugins 加载第三方插件
app.use(createLoading());

// 3. Model 接收发送的action的
app.model(require('./models/users'));

// 4. Router 路由器初始化设置
app.router(require('./router'));

// 5. Start
app.start('#root');
