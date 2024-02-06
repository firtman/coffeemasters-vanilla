/**
 * DOMContentLoaded event ensures that DOM has loaded entirely and ready to be  
 * manipulated by DOM apis
 * 
 * Note that this is different than 'load' event where JS waits for entire page
 * to be loaded including DOM, images, text and in most cases we dont want that
 * if all we want is manipulate DOM
 */

import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js"; // put .js if import doesnt work

/**Since Store is imported as a module below is a workaround to have access
 * to Store via window object
 * 
 * We are attaching myapp (could be any name) to the window object
 * and through that we are attaching store field and pointing it to our Store service
 */
window.myapp = {};
myapp.store = Store;
myapp.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  myapp.router.init();
});
