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
    }
    // Go to initial route in case user directly goes to a particular uRL on our site
    Router.go(location.pathname);
  },
  /**
   * Use cases where addToHistory would need to be false is that when we are logged in 
   * or out, checked out from payments we dont want to be able to go back to the previous
   * page such as login/logout/payments from 
   */
  go: (route, addToHistory = true) => {
    console.log('Going to: ', route);
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
  }
};

export default Router;