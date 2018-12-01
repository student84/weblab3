
for (let element of document.getElementsByTagName('tr')) {
    element.addEventListener('mouseover', event => {
        event.target.parentElement.style.background = 'red'
    });
    element.addEventListener('mouseout', event => {
        event.target.parentElement.style.background = ''
    })
}
