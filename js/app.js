function ageInDays() {
    let birthYear = prompt("Which year were you born... Good Friend?");
    let ageInDayss = (2022 - birthYear) * 365 ;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('Your age is ' + ageInDayss + ' day old.');
    h1.setAttribute('id' , 'ageInDays')
    h1.appendChild(textAnswer);
    document.getElementById('flex-result').appendChild(h1);
}


function reset() {
    document.getElementById('ageInDays').remove();
}


