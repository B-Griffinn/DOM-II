// Your code goes here
//Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
// *1*
//mouseOver Banner IMG
const blur = document.querySelectorAll('body img');
blur.forEach(startBlur => {
    startBlur.addEventListener('mouseover', event => {
    console.log('you clicked me')
   event.target.style.opacity = '0.5'; 
    });
});
//mouseleave Banner IMG
const images = document.querySelectorAll('body img');
images.forEach(exitBlur => {
    exitBlur.addEventListener('mouseleave', (event) => {
        event.target.style.opacity = '1';
    });
});
//////


// *2*
//keyDown on page
let body = document.querySelector("body");
body.addEventListener("mousedown", event => {
    if (event.button == 0) {
      console.log("Left button");
    //   alert("You pressed the Left button!");
    } else if (event.button == 1) {
      console.log("Middle button");
    //   alert("You pressed the  Middle button!");
    } else if (event.button == 2) {
      console.log("Right button");
    //   alert("You pressed the  Right button!");
    }
  });
  let paras = document.querySelectorAll('p');
  paras.forEach(bold => {
    bold.addEventListener('mousedown', event => {
        event.target.style.fontWeight = 'bold';
    });
  });
//////

// *3*
//Wheel
let wheel = document.querySelectorAll('h2, h4');
wheel.forEach(grow => {
    grow.addEventListener('wheel', bold => {
        bold.target.style.color = 'red';
    });
});


/////
//*4*
//My Color Wheel for the p's
const colors = ['skyBlue', 'pink', 'white', 'lightGrey'];
const colorWheel = document.querySelectorAll('p');
colorWheel.forEach(cycleColor => {
    cycleColor.addEventListener('wheel', (e) => { 
        e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;
    })
})

//////

//*5*
//Drag and Drop
const ourImages = document.querySelector('img');

ourImages.addEventListener('dragstart', dragstart);
ourImages.addEventListener('dragend', dragend);

function dragstart (){
    setTimeout(() => this.style.display = 'none', 0);
    console.log('dragstart');
};
function dragend (){
    this.style.display = 'inline';
console.log('end');
};
//////


//*6*
//onLoad
const loadBody = document.querySelector('body');
//add function to our element
loadBody.setAttribute('onload', myFunction());

function myFunction() {
    console.log('Hello! The page loaded successfully');
    // alert('Page is laoded');
};
//////


//*7*
//dblclick
const click2X = document.querySelectorAll('p');

click2X.forEach(enlarge => {
    enlarge.addEventListener('dblclick', (event) => {
        event.target.style.fontSize = '2rem';//increases on dblclick
        event.target.style.background = 'yellow';//highlight background
    });
    click2X.forEach(returnSize => {
        returnSize.addEventListener('mouseleave', (event) =>{
            event.target.style.fontSize = '1.6rem';//back to normal font size
            event.target.style.background = 'lightgrey';//show what they clicked
        });
    });
});

//////

//*8*
//click
const ourButton = document.querySelectorAll('.btn');
console.log(ourButton)

ourButton.forEach(clickAlert => {
    clickAlert.addEventListener('click', (event => {
        alert('Sorry, button under construction.');
    }));
});

//////

//*9*
//dblclick background
const dblclickBackGround = document.querySelector('body, .main-navigation');

dblclickBackGround.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;
});

//////

//*10*
//keyUp
//create input element and make it visible 
const theInput = document.createElement('input');

theInput.style.display = 'inline';
theInput.style.marginLeft = '780px';
theInput.style.marginTop = '250px';
// theInput.style.position = 'sticky';
theInput.setAttribute('value', 'Enter Lower Case Letters');
theInput.setAttribute('type', 'text');
theInput.setAttribute('onkeyup', 'myFunction()');

//new Var to append our input html to the page
const append = document.querySelector('header');
append.append(theInput);
//transform the entered data to upperCase
theInput.addEventListener('keydown', (e) => {
    e.target.style.textTransform = 'uppercase';
    }); 
//remove 'Enter Lower Case here' text to experience toUpperCase
theInput.addEventListener('mouseover', (e) => {
    e.target.value = '';//blank string will display when mouseover fires
});
//put text back when mouseLeaves fires
theInput.addEventListener('mouseleave', (e) => {
    e.target.value = 'Enter Lower Case Letters';
});
