import _ from 'lodash';
import printMe from './print.js';
import myName from './myName.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const myNameBtn = document.createElement('button');
    const name = "niko"

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    myNameBtn.innerHTML = 'Click to print name';
    myNameBtn.onclick = myName;
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    element.appendChild(myNameBtn);

    return element;
}

document.body.appendChild(component());