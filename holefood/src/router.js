import VueRouter from 'vue-router';
import Home from './pages/Home';
import StoreDetails from './pages/StoreDetails';
import DonutDetails from './pages/DonutDetails';
import Stores from './components/Stores';
import Donuts from './components/Donuts';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/storeDetails', component: StoreDetails, name: 'StoreDetails' },
  { path: '/storeDetails/:store_id', component: Stores, name: 'Stores' },
  { path: '/donutDetails', component: DonutDetails, name: 'DonutDetails' },
  { path: '/donutDetails/:donut_id', component: Donuts, name: 'Donuts' }
];

export default new VueRouter({ routes, mode: 'history' });
