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

/**
 * 
 * Below are examples of how flexible JS is
 * 
 * We are reducing verbosity of various functions by specifying aliases
 * 
 * Reference: https://firtman.github.io/vanilla/lessons/the-dom/initializing-project
 */

// Below means we could use $('nav') similar to JQuery
const $ = function(args){ return document.querySelector(args);} 
const $$ = function(args){ return document.querySelectorAll(args);}

// $.on('click') will use addEventListener syntax 
// we are allowed to tweak prototype as shown below to add our own abstractions!
HTMLElement.prototype.on = function (a, b, c) { return this.addEventListener(a, b, c); }
// $.off('click') will remove our event listener without syntax verbosity
HTMLElement.prototype.off = function (a, b) { return this.removeEventListener(a, b); }
HTMLElement.prototype.$ = function(s){ return this.querySelector(s); }
HTMLElement.prototype.$$ = function(s){ return this.querySelectorAll(s); }