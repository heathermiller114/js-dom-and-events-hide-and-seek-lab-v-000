function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
    const l = document
        .getElementById('app')
        .querySelectorAll('ul.ranked-list li');

    for (let i=0; i < l.length; i++) {
        l[i].innerHTML = parseInt(l[i].innerHTML) + n
    }
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
}