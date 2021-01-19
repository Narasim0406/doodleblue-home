import Vue from 'vue'
$.fn.isInViewport = function() {
  var delta = $(this).outerHeight() / 2
  var elementTop = $(this).offset().top + delta + 50
  var elementBottom = elementTop + $(this).outerHeight() - delta

  var viewportTop = $(window).scrollTop()
  var viewportBottom = viewportTop + $(window).height()

  return elementBottom > viewportTop && elementTop < viewportBottom
}
Vue.directive('scroll', {
  inserted: function(el, binding) {
    //get the class we gave to the directive,  {animation :'classname'}
    let animationIn = binding.value.animationIn
    let animationOut = binding.value.animationOut
    //pixels calculated from top of element when animation should start
    let offsetPixels = 200
    //run and check position
    let f = function(evt) {
      if (window.screen.width <= 768) {
        // console.log('check viewport', elementIsInViewport(el))

        if (elementIsInViewport(el)) {
          el.classList.add(animationIn)
        } else {
          el.classList.remove(animationIn)
        }
      }
    }
    //add event listener
    window.addEventListener('scroll', f)

    // check if element is in viewport
    function elementIsInViewport(el) {
      return $(el).isInViewport()
    }
  }
})
