const iconDice = document.querySelector('#icon-dice')!;
const advice = document.querySelector('#advice')!;
const adviceID = document.querySelector('#advice-id')!;

function adviceGenerator(url: string, callback: Function) {
    advice.innerHTML = '“Loading...”';
    let response = fetch(url, {
        cache: 'reload',
    });
    response.then((res) => {
        return res.json();
    }).then((data) => {
        callback(data);
    });
}
iconDice.addEventListener('click', () => {
    adviceGenerator('https://api.adviceslip.com/advice', function (data: any) {
        advice.innerHTML = '“' + data.slip.advice + '”';
        adviceID.innerHTML = '#' + data.slip.id;
    });
});

adviceGenerator('https://api.adviceslip.com/advice', function (data: any) {
    advice.innerHTML = '“' + data.slip.advice + '”';
    adviceID.innerHTML = '#' + data.slip.id;
});