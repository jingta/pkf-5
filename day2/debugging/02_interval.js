var i = 0;
setTimeout(function tick() {
  i++;
  console.log(i);

  if (i === 10) {
    debugger;
  }

  if (i < 100) {
    setTimeout(tick , 1000);
  }
}, 1000);