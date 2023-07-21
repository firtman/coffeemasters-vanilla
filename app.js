import Store from './services/Store.js'
import API from './services/API.js' 
import { loadData } from './services/Menu.js'
import Router from './services/Router.js';

window.app = {}
app.store = Store;
app.router = Router;

// it's better to wait for the element for manipulation
window.addEventListener("DOMContentLoaded", async () => {
    loadData();
    app.router.init();
})