
// You can change these values
let total_money = 10000;
let time = 10; // time between each decreament in ms;
let currency = '$';

// better avoid changing these variables
let start_button = document.querySelector('#play');
let pause_button = document.querySelector('#pause');
let fill_bar = document.querySelector('#fill');
let full_length = 100; 
a.textContent = currency + total_money ;

function decrease() {
    // pause the interval before starting it to avoid decreasing speed if the user keeps clicking it
    pause_button.click();

    start_button.classList.add('active');
    pause_button.classList.remove('active');
    let my_interval = 
    setInterval(() => {
        if (full_length <= 0) {
            clearInterval(my_interval);
            over.classList.add('show');
        } else {
            // write the values
            a.textContent = currency + Math.trunc(((total_money * full_length) / 100))  ;
            full_length-= .1;
            fill_bar.style.height = full_length + '%';
            a.style.top = (100 - full_length) + '%';
        }
    },time);
    // Function to run and pause interval
    function pause() {
        start_button.classList.remove('active');
        pause_button.classList.add('active');
        clearInterval(my_interval);
    }
    pause_button.addEventListener('click' , pause);
}
start_button.addEventListener('click' , decrease);