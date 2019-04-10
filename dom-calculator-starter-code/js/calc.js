var sum = ""

var buttons = document.getElementsByClassName("buttonNum")
  console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  button.addEventListener("click", function (event) {
    var screen = document.getElementById('screen');
    sum += this.innerHTML;
    screen.innerHTML = sum;
}
)
}


//operators

var operators = document.getElementsByClassName("operator")

for (var i = 0; i < operators.length; i++) {
  var operator = operators[i];

  operator.addEventListener("click", function (event) {
    var screen = document.getElementById('screen');
    sum += this.innerHTML;
    screen.innerHTML = sum;
}
)
}

// AC
var ac = document.getElementsByClassName("buttonClear")[0];

ac.addEventListener("click", function (event) {
  var screen = document.getElementById('screen');
  screen.innerHTML = " ";
})


// equals

var equals = document.getElementsByClassName("equals")[0];

equals.addEventListener("click", function (event) {
  var screen = document.getElementById('screen');
  screen.innerHTML = eval(sum);
  sum = ""
})
