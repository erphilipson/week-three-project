let buttons = document.querySelectorAll('.button');
let output = document.querySelector('#output');
let x;
let y;

for(let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', function clickButton() {
    let buttonValue = buttons[i].textContent;

    if (buttonValue === 'c') {
      output.value = '';
    } else if (!isNaN(parseInt(buttonValue))) {
      output.value += buttonValue;
    } else if (buttonValue === '+' && output.value != '') {
        if (!x) {
          x = output.value;
          output.value += ' + ';
        } else {
          y = eval(output.value);
          output.value = y;
          x = 0;
        }
    } else if (buttonValue === '*' && output.value != '') {
        if (!x) {
          x = output.value;
          output.value += ' * ';
        } else {
          y = eval(output.value);
          output.value = y;
          x = 0;
        }
    } else if (buttonValue === '-' && output.value != '') {
        if (!x) {
          x = output.value;
          output.value += ' - ';
        } else {
          y = eval(output.value);
          output.value = y;
          x = 0;
        }
    } else if (buttonValue === '/' && output.value != '') {
        if (!x) {
          x = output.value;
          output.value += ' / ';
        } else {
          y = eval(output.value);
          output.value = y;
          x = 0;
        }
    } else if (buttonValue === '=') {
        output.value = eval(output.value);
        x = 0;
      }
      else if (buttonValue === '.') {
        output.value += '.';
        x = 0;
      }


  })
}
