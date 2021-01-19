function countDown(start: number = 5, end = start - 5) : void {
  while(start > end) {
    start --

    console.log(start, end)
    if(start === 0 && end) break;

  }
}

countDown(10)
