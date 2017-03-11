function countES6 (limit) {
  for (let i = 1; i <= limit; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000)
  }
}

function countES5 (limit) {
  for (var i = 1; i <= limit; i++) {
    (function (int) {
      setTimeout(function () {
        console.log(int);
      }, int * 1000)
    }(i))
  }
}

countES5(11);