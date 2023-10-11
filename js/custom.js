//
$(document).ready(function () {
  const date = new Date();
  const year = date.getFullYear();
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });

  document.querySelector(
    ".copyRight"
  ).innerHTML = `&copy; Copyright ${year} All rights reserved.`;
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});
