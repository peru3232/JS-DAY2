const sum = document.getElementById('cashInput')
const restT = document.getElementById('rest')
const note5 = document.getElementById('note5');
const note10 = document.getElementById('note10');
const note20 = document.getElementById('note20');
const note50 = document.getElementById('note50');
const note100 = document.getElementById('note100');
const note200 = document.getElementById('note200');

const btn = document.getElementById('cashOut');

function clearAll() {
    note5.innerHTML = note10.innerHTML = note20.innerHTML = note50.innerHTML = note100.innerHTML = note200.innerHTML = restT.innerHTML = '';
}

function calculate() {
    clearAll();
    let rest = sum.valueAsNumber
    note200.innerHTML = Math.floor(rest/200) + ' x 200 note(s)';
    rest = rest % 200;
    note100.innerHTML = Math.floor(rest/100) + ' x 100 note(s)';
    rest = rest % 100;
    note50.innerHTML = Math.floor(rest/50) + ' x 50 note(s)';
    rest = rest % 50;
    note20.innerHTML = Math.floor(rest/20) + ' x 20 note(s)';
    rest = rest % 20;
    note10.innerHTML = Math.floor(rest/10) + ' x 10 note(s)';
    rest = rest % 10;
    note5.innerHTML = Math.floor(rest/5) + ' x 5 note(s)';
    if (rest % 5) { restT.innerHTML = `Attention: No cashout for the rest of ${rest % 5}€ possible` }
}



btn.addEventListener('click', calculate);