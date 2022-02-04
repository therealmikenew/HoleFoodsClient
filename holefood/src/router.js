import VueRouter from "vue-router";
import Home from "./pages/Home";
import StoreDetails from "./pages/StoreDetails";
// import DonutDetails from './pages/DonutDetails';
// import Stores from './components/Stores';
// import Donuts from './components/Donuts';

const routes = [
  { path: "/", component: Home, name: "Home" },
  {
    path: "/storeDetails/:store_id",
    component: StoreDetails,
    name: "StoreDetails",
  },
];

export default new VueRouter({ routes, mode: "history" });
