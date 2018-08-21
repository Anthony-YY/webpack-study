import _ from 'lodash';

function componnent() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(componnent());