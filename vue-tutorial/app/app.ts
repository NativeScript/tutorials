import { createApp, h } from 'nativescript-vue';
import Home from './components/Home.vue';

createApp({
	render: () => h('frame', [h(Home)]),
}).start();
