/**
 * DOMContentLoaded event ensures that DOM has loaded entirely and ready to be  
 * manipulated by DOM apis
 * 
 * Note that this is different than 'load' event where JS waits for entire page
 * to be loaded including DOM, images, text and in most cases we dont want that
 * if all we want is manipulate DOM
 */
window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
  <h1>This is jS induced nav</h1>
  `
});