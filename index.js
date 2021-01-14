function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element
}

function nestedTarget() {
  var target = document.querySelector('.target')
  return target
}

function increaseRankBy(n) {
  var mainApp = document.querySelectorAll('.ranked-list li')
  console.log(mainApp)
  for (var i =0; i < mainApp.length; i++) {
    var element = mainApp[i]
    var rankedLi = parseInt(element.innerHTML) + n
    element.innerHTML = rankedLi
  }
}

function deepestChild() {
  var currentChild = document.querySelectorAll('#grand-node')[0]
  var lastChild = []
  while (currentChild !== null) {
    lastChild = currentChild
    currentChild = currentChild.querySelector(':first-child')
  }
  return lastChild
}
