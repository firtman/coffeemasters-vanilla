const Router = {
  init: () => {
    const navLinks = document.querySelectorAll('.navlink');
    for (const navLink of navLinks) {
      navLink.addEventListener('click', event => {
        // stop browser default navigation
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    };

    window.addEventListener('popstate', event => {
      /**
       * We listen to popstate to detect when user has clicked forward or back buttons
       * on the browser so that content of DOM also gets updated. 
       * In the first argument, we do have access to route object we passed in popstate 
       * which gets stored in event.state hence we can pass that.
       * Now we dont want to rewrite history i.e adding to history object so we pass 2nd arg
       * as false
       */
      Router.go(event.state.route, false);
    });
    // Go to initial route in case user directly goes to a particular uRL on our site
    Router.go(location.pathname);
  },
  /**
   * Use cases where addToHistory would need to be false is that when we are logged in 
   * or out, checked out from payments we dont want to be able to go back to the previous
   * page such as login/logout/payments from 
   */
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null; 

    if (route === '/') {
      pageElement = document.createElement('h1');
      pageElement.textContent = 'Menu';
    }
    else if (route === '/order') {
      pageElement = document.createElement('h1');
      pageElement.textContent = 'Your Order';
    }
    else if (route.startsWith('/product-')) {
      pageElement = document.createElement('h1');
      pageElement.textContent = "Details";
      // we expecting dynamic ids like /product-1, /product-2 and so on
      // grabbing the string after hyphen (-)
      const paramId = route.substring(route.lastIndexOf('-') + 1);
      // we are storing this as data-id in our h1 element we creating
      pageElement.dataset.id = paramId;
    }

    if(pageElement) {
      const cache = document.querySelector('main');
      // cache.innerHTML = ''; // dirty way
      
      // cleaner way
      if(cache.children.length){
        cache.children[0].remove();
      }
      cache.appendChild(pageElement);
      
      /**Since we are doing our own routing if we navigate to a page from a large 
       * document we will get to the same point as we are in previous scroll position
       */
      window.scroll(0, 0);
    }
    else { // url not found in our router
      pageElement = document.createElement('h1');
      pageElement.textContent = 'You have entered a wrong url!';
      document.querySelector('main').appendChild('pageElement');
    }
  }
};

export default Router;