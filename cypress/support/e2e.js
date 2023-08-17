import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('style')) {
      return false
    }
});

Cypress.on('window:before:load', function (window) {
    const original = window.EventTarget.prototype.addEventListener
  
    window.EventTarget.prototype.addEventListener = function () {
      if (arguments && arguments[0] === 'beforeunload') {
        return
      }
      return original.apply(this, arguments)
    }
  
    Object.defineProperty(window, 'onbeforeunload', {
      get: function () { },
      set: function () { }
    })
  });
  
if (Cypress.config('hideXHRInCommandLog')) {
    const app = window.top;
  
    if (
      app &&
      !app.document.head.querySelector('[data-hide-command-log-request]')
    ) {
      const style = app.document.createElement('style');
      style.innerHTML =
        '.command-name-request, .command-name-xhr { display: none }';
      style.setAttribute('data-hide-command-log-request', '');
  
      app.document.head.appendChild(style);
    }
  }
