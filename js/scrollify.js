$(function() {
  if(Math.min(window.screen.width, window.screen.height) > 768)
  {
    $.scrollify({
      section : ".section",
      standardScrollElements: ".standard_scroll, .navbar-collapse"
    });
  }
  });