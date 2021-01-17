(function () {
  var script = document.createElement('script');
  script.src = "../../../eruda";
  document.body.appendChild(script);
  script.onload = function () {
    eruda.init();
  };
})();

