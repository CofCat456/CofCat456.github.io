import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle';

// animate
import 'animate.css';

createApp(App).use(router).mount('#app');
