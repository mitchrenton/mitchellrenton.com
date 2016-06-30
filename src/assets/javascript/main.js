// Page transitions init
$(function(){
  'use strict';
  var $page = $('#js-transition'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
        onStart: {
          duration: 200, // Duration of our animation
          render: function ($container) {
            $container.addClass('is-exiting');
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            $container.removeClass('is-exiting');
            $container.html($newContent);
          }
        },
        onAfter: function() {
          prep();
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');

});

// Creating a preparation function so smooth transition doesn't cache the off canvas classes.
function prep(){
  
  // sidestep the page transitions for the off canvas menu
  var nav = responsiveNav(".nav-collapse", {
    insert: 'before'
  });

}

$(document).ready(function(){
  prep();
});