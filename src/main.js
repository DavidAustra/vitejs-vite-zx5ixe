import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createVuestic } from 'vuestic-ui';
import 'vuestic-ui/css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

var app = createApp(App);
app.use(createVuestic());
app.mount('#app');
