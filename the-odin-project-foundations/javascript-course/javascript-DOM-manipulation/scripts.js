const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red'
para.textContent = 'Hey, I\'m red'

container.appendChild(para);

const hThree = document.createElement('h3');
hThree.style.color = 'blue';
hThree.textContent = 'Hey, I\'m blue';

container.appendChild(hThree);

const div = document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.border = "2px solid black";

container.appendChild(div);

const hOne = document.createElement('h1');
hOne.textContent = "I'm in a div";

const paraInDiv = document.createElement('p');
paraInDiv.textContent = "ME TOO!"


div.appendChild(hOne);
div.appendChild(paraInDiv);

/* const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello world!"); */

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});

btn.addEventListener('click', function (e) {
    console.log(e);
  });
btn.addEventListener('click', function (e) {
  console.log(e.target);
});
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});