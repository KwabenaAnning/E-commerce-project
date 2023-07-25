let body = document.body

// let h3 = document.createElement('h3');

// h3.innerHTML = 'Hello World';
// h3.style.color = 'red';
// body.appendChild(h3);

// creating elements
//createElement
let outsideDiv = document.createElement('Div');
let semiOutsideDiv = document.createElement('Div');
let Authen = document.createElement('h2');
let semiOutside2Div = document.createElement('Div');
let secureText = document.createElement ('h4');
let pswdText = document.createElement ('h5');
let enableText = document.createElement ('h5');
let nextButton = document.createElement ('button');

// set attributes
//setAttribute
outsideDiv.setAttribute ('class', 'Outdiv');
semiOutsideDiv.setAttribute ('class', 'semiOutdiv');
semiOutside2Div.setAttribute ('class', 'SemiOut2div');
pswdText.setAttribute('type', 'text');
enableText.setAttribute('class', 'text');
Authen.setAttribute('type', 'text');

// adding texts
//innerHTML
Authen.innerHTML = 'Authentication';
secureText.innerHTML = 'Secure your account';
pswdtext.innerHTML = 'Password';
enableText.innerHTML = 'Enable 2FA';
nextButton.innerHTML = 'Next';

// adding styles
outsideDiv.style.boxSizing = 'border-box';
outsideDiv.style.background = '#FFF';
outsideDiv.style.background = 'solid  red';
moutsideDiv.style.border = '1px solid rgba(0, 0, 0, 0.1)';
outsideDiv.style.boxShadow = '0px 5px 10px 1px rgba(0, 0, 0, 0.15)';
outsideDiv.style.borderRadius = '25px';
outsideDiv.style.padding = '30px 20px 15px 20px';
outsideDiv.style.width = '400px';
semiOutside2Div.style.display ='flex';
semiOutside2Div.style.flexDirection = 'column'
semiOutside2Div.style.flexDirection = 'column'
nextButton.style.backgroundColor = 'black'
nextButton.style.Color = 'white'
nextButton.style.width = '100%'
nextButton.style.textAlign = 'centre' 
nextButton.style.marginTop = '10px'

// button styles
// appending them
body.appendchild(outsideDiv);
outsideDiv.appendchild(semiOutsideDiv);
Authen.appendChild(semiOutsideDiv);
semiOutside2Div.appendChild(outsideDiv)
pswdText.appendChild(semiOutside2Div);
enableText.appendChild(semiOutside2Div);
nextButton.appendChild(outsideDiv);
