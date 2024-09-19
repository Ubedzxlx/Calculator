const display = document.querySelector('.display');
const buttons = document.querySelectorAll ('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC'){
            display.value = '';
        }else if (value ==='DEL'){
            display.value = display.value.slice(0, -1);
        }else if (value === '=') {
            display.value = eval(display.value);
        }else if (value === '%'){
            display.value = parseFloat(display.value) / 100;
        }else if (value === '='){
            if (display.value !== ''){
                display.value = eval(display.value);
            }
        }else{
            display.value += value;
        }
    });
});


