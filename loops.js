function forLoop (arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arr[i] = "I am 1 strange loop."
    } else {
      arr[i] = `I am ${i} strange loops.`
    }
  }
  return arr
}
//var myArr = []
//yArr = forLoop(myArr)
//for (i=0; i<myArr.length; i++) {
//  console.log(myArr[i])
//}
function whileLoop (countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop (array) {
  do {
//    delete array[array.length-1]
    array.length--
  } while ( array.length > 0 && maybeTrue() );
  return array
}

//myArr = doWhileLoop(myArr)
//for (i=0; i<myArr.length; i++) {
//  console.log(myArr[i])
//}
