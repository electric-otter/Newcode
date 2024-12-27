// site.js

function hideLoader() {
  $('#loading').hide();
}

$(document).ready(hideLoader); // Use $(document).ready() instead of $(window).ready()

// Strongly recommended: Hide loader after 20 seconds, even if the page hasn't finished loading
setTimeout(hideLoader, 20 * 1000);
