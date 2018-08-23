import _ from 'lodash';
import printMe from './print';

function componnent() {
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
}

document.body.appendChild(componnent());

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!')
        printMe();
    })
}