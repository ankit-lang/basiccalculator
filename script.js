let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = " ";
      document.querySelector('input').value = string;


    }
    else if (e.target.innerHTML == 'X') {
      string = string.slice(0, -1);
      document.queryselector('input').innerHTML = string;
    }
    else {

      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }

  })
})