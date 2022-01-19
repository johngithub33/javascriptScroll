

// POSITION
    //element.getBoundingClientRect();


// EASING anything (scrolling)
    //setInterval(), setTimeout()
    //scrollBy()
    //scrollTo()

// https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element

// easing math functions:
// https://betterprogramming.pub/smooth-scrolling-with-javascript-a4cd787e447f

//https://github.com/tarun-dugar/easy-scroll


//built in scrolling
var defButt = document.querySelector('.builtIn')

defButt.addEventListener('click', () => {
    window.scroll({
        top: 400,
        left: 0,
        behavior: 'smooth'
      });
})

function defScroll(){
    window.scroll(0,400)
}

//custom scrolling
var butt = document.querySelector('.custom')
butt.addEventListener('click',() => {
    scrollpage();
})

function scrollpage(){

    var base = .1;
    var breakpoint = 380;    

    for(let i = 0; i < 400; i++)
    {
        console.log(base);
        setTimeout( () => {window.scrollBy(0,1)}, base);
        
        if(i<breakpoint) base += .5;        
        if(i>breakpoint && i<breakpoint+5) base += 14;
        if(i>breakpoint+5) base += 30;
    }
}

function scrollpage2(){
    var base = 1;
    var inc = 1;
    var breakpoint = 380;    

    for(let i = 0; i < 400; i++)
    {
        setTimeout( () => {window.scrollBy(0,1)}, base);
        base = 205 + (base/2);
    }

    function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
    }
}

var getTopBtn = document.querySelector('.backToTop');
getTopBtn.addEventListener('click', () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

//move an item

//DOMrect from getBoundingClientRect()
//this is CURRENT viewport position including movement/scrolling
    //x,y = top left corner of element
    //bottom, right = bottom right corner of element
var el1 = document.querySelector('#sectionone');
var el2 = document.querySelector('#sectiontwo');
var elPos1 = el1.getBoundingClientRect();
var elPos2 = el2.getBoundingClientRect();
console.log(elPos1);
console.log(elPos2);

console.log('coors on page for el2:',
    'top:', elPos2['top'],
    'left: ', elPos2['left'])

// https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/

// The scrollX and scrollY properties return the number of pixels that the document 
// is currently scrolled horizontally and vertically.   
    // The pageXOffset and pageYOffset are aliases of the scrollX and scrollY properties.

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
})


//move an element
var moveEl = document.querySelector('.moveEl')
moveEl.addEventListener('click',() => {

    let num = 40;
    let base2 = .1;
    
    for(let i = 0; i < 40; i++){
        setTimeout( () => {el1.style.left = `${i}px`}, base2);
        base2 += 9;
    }
    
})

//bring in an element
const newEL = document.createElement('div');
newEL.textContent = 'new element';
document.querySelector('#sectiontwo').appendChild(newEL);
newEL.classList.add('newEl')
newEL.style.backgroundColor = 'orange';
newEL.style.width = '50px';
newEL.style.position = "relative"
newEL.style.top = '50px';
newEL.style.left = '160px';

var newElement = document.querySelector('.bringInEl')
newElement.addEventListener('click',() => {

    let num = 460;
    let base2 = .1;
    
    for(let i = 0; i < 160; i++){
                
        // setTimeout( () => {newEL.style.left = `${i-160}px`}, base2);
        setTimeout( () => {newEL.style.left = (i-160) + 'px'}, base2);
        base2 += 5;
    }
   
})


//power of n

console.log('quad: ', quad(5), circ(.1)*800)

function quad(timeFraction) {
    return Math.pow(timeFraction, 2)
  }

function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}




// use requestAnimationFrame
// <button class='reqAnimationFrame'> scroll with request animation frame </button> 
//<div class='reqAnimDiv'> req animation frame mover </div>

// https://medium.com/geekculture/requestanimationframe-in-javascript-82a913cf8c46

// Calling requestAnimationFrame() once is pretty meaningless most of the time. The magic happens 
// when we call it "recursively" to construct the desired animation frame by frame, with each frame 
// being called only when the browser is ready for it.

//window.requestAnimationFrame(callback);

var frameDiv = document.querySelector('.reqAnimDiv');
var leftpos = 0;

function moveit(timestamp){
        console.log('in reqanimationframe')
        leftpos += 5
        frameDiv.style.left = leftpos + 'px';

        if(leftpos < 200) requestAnimationFrame(moveit);
}

requestAnimationFrame(moveit);













