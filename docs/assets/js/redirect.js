(function() {
  var currentPath = window.location.pathname;
  if (currentPath !== '/' && currentPath !== '/index.html') {
    window.location.replace(window.location.origin + '/');
  }
})();
