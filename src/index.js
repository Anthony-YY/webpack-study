import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = _.join(['hello', 'webpack'], ' ');

    button.innerHTML = 'Click me and check the console!';
    button.onclick = printMe;

    element.appendChild(button);

    return element;
}

let element = component();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js', function(printMe) {
        console.log('Accepting the updated printMe module!')
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}