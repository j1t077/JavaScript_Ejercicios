const title = 'Jorge P.'
const title2 = 'HELLO PEOPLE'

function getElemnet() {
    let sectionEx1 = document.getElementById('ex1')
    return sectionEx1;
    
}

function render(text) {
    let section = getElemnet();
    section.innerHTML = `<h1>${text}</h1>`
}

render(title2)