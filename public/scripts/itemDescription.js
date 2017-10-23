(function (window) {
  'use strict'
  // Parse the URL parameter
  var urlParams = new URLSearchParams(window.location.search);

  $('#itemImage').load("items.txt .image" + urlParams.get('item'));
  $('#itemDesc').load("items.txt ." + urlParams.get('item'));
})(window);
