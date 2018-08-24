import printMe from './print';
import { cube } from './math';

function component() {
    let element = document.createElement('pre');
    let button = document.createElement('button');

    element.innerHTML = [
        'Hello webpack!',
        '5 cube is equal to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());