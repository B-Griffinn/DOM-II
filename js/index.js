// Your code goes here
//Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:

//Directions
// alert page to check console
// list direction in console 

// Event Listener *1*
//mouseOver BLUR ALL IMGs
const blur = document.querySelectorAll('body img');
blur.forEach(startBlur => {
    startBlur.addEventListener('mouseover', event => {
    console.log('you clicked me')
   event.target.style.opacity = '0.5'; 
    });
});


//mouseLEAVE *UN-blur* ALL IMGs
const images = document.querySelectorAll('body img');
images.forEach(exitBlur => {
    exitBlur.addEventListener('mouseleave', (event) => {
        event.target.style.opacity = '1';
    });
});
//////


// Event Listener *2*
//What Mouse Button Did You Press?
const body = document.querySelector("body");
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

  // Event Listener *2a*
  //BOLD the paragraph when you click it.
  let paras = document.querySelectorAll('p');
  paras.forEach(bold => {
    bold.addEventListener('mousedown', event => {
        event.target.style.fontWeight = 'bold';
    });
  });
//////


//Event Listener *3*
//Hover over a Header and scroll with mouse wheel!
let wheel = document.querySelectorAll('h2, h4');
wheel.forEach(grow => {
    grow.addEventListener('wheel', bold => {
        bold.target.style.color = 'red';
    });
});
/////


//Event Listener *4*
//My Color Wheel for the p's.

const colors = ['skyBlue', 'pink', 'white', 'lightGrey']; //our arr of colors to choose from.
const colorWheel = document.querySelectorAll('p');
colorWheel.forEach(cycleColor => {
    cycleColor.addEventListener('wheel', (e) => { 
        e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;
    });
});
//////


//Event Listener *5*
//Drag and...kinda Drop.

const bannerImg = document.querySelector('img'); //select our first img only.

bannerImg.addEventListener('dragstart', dragstart);
bannerImg.addEventListener('dragend', dragend);

function dragstart (){
    setTimeout(() => this.style.display = 'none', 0);
    console.log('dragstart');
};
function dragend (){
    this.style.display = 'inline';
console.log('end');
};
//////


//Event Listener *6*
//onLoad 
const loadBody = document.querySelector('body');
//add function to our element
loadBody.setAttribute('onload', myFunction1());

function myFunction1() {
    // console.log('Hello! The page loaded successfully'); ****un comment****
    // alert('Welcome to the Fun Bus!');
};
//////


//Event Listener *7*
//Double Click to increase Paragraph sizes.
const click2X = document.querySelectorAll('p');

click2X.forEach(enlarge => {
    enlarge.addEventListener('dblclick', (event) => {
        event.target.style.fontSize = '2rem';//increases on dblclick
        event.target.style.background = 'yellow';//highlight background
    });

    //return our paragraphs back to normal with ease. 
    click2X.forEach(returnSize => {
        returnSize.addEventListener('mouseleave', (event) =>{
            event.target.style.fontSize = '1.6rem';//back to normal font size
            event.target.style.background = 'lightgrey';//show what they clicked
        });
    });
});
//////

//Event Listener *8*
//click = .stopPropogation();
const ourButton = document.querySelectorAll('.btn');
console.log(ourButton)

ourButton.forEach(clickAlert => {
    clickAlert.addEventListener('click', (event => {
        alert('Sorry, button under construction.');
        // event.stopPropagation();
    }));
});
//////


//Event Listener *9*
//Double Click Backgrounds to change the sites color at RANDOM!
const dblclickBackGround = document.querySelector('body, .main-navigation');

dblclickBackGround.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;
});
//////


//Event Listener *10*
//keyUp
//create input element and make it visible 
const theInput = document.createElement('input');

theInput.style.display = 'inline';
theInput.style.marginLeft = '780px';
// theInput.style.marginTop = '250px';
// theInput.style.position = 'sticky';
theInput.setAttribute('value', 'Enter Lower Case Letters');
theInput.setAttribute('type', 'text');
theInput.setAttribute('onkeyup', 'myFunction()');

//new Var to append our input html to the page
const append = document.querySelector('footer');
append.append(theInput);
//transform the entered data to upperCase
theInput.addEventListener('keydown', (e) => {
    e.target.style.textTransform = 'uppercase';
    }); 

    //update after entered text
//remove 'Enter Lower Case here' text to experience toUpperCase
theInput.addEventListener('mouseover', (e) => {
    e.target.value = '';//blank string will display when mouseover fires
});
//put text back when mouseLeaves fires
theInput.addEventListener('mouseleave', (e) => {
    e.target.value = 'Enter Lower Case Letters';
});


//Event Listener === Using preventDefault()
const parentEl = document.querySelector('.destination:nth-child(1)');
parentEl.addEventListener('click', (e) => {
    console.log('Parent Slapping')
});
const btn3 = document.querySelector('.destination .btn:nth-child(3)');
btn3.addEventListener('click', (e) => {
    console.log('slap div');
    // alert('Oops! preventDefault() enabled.');
    e.stopPropagation();
});

const aTag = document.querySelector('a');
aTag.addEventListener('click', (e) => {
    console.log('You clicked me.');
    e.preventDefault();
});
