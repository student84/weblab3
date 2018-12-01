
const changeVisibility = () => {
    document.getElementById('basic-info').hidden = !document.getElementById('basic-info').hidden
};

document.getElementById('about_me').addEventListener('click', changeVisibility);

function setAlerts (text, ms) {
    return setInterval(() => alert(text), ms)
}

let intervalId = setAlerts('Алерт - BOM, вызван через setInterval', 5000);

let isAlertsOn = true;

document.getElementById('alert_button').addEventListener('click', event => {
    if (isAlertsOn) {
        isAlertsOn = false;
        clearInterval(intervalId);
        event.target.innerText = 'Включить алерты'
    } else {
        isAlertsOn = true ;
        intervalId = setAlerts('Зачем вы снова их включили ? Они же раздражают', 5000);
        event.target.innerText = 'Отключить алерты'
    }
});





