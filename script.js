

// Background Colours
const collection = document.querySelectorAll(".box");
let colours = ['red','blue','green','yellow','cyan','orange', 'BlueViolet', 'Turquoise', 'Teal', 'BlanchedAlmond', 'DarkBlue','DarkSalmon','DeepPink', 'Indigo','SeaGreen',  ];


// Picking a background colour
for (let i = 0; i < collection.length; i++) {
    ramColor =  Math.floor(Math.random()*colours.length);
    collection[i].style.backgroundColor = colours[ramColor];
};

// On Click

window.addEventListener("load", ()=>{
    const sound = document.querySelectorAll(".sound");
    const container = document.querySelectorAll(".box");

    container.forEach((box, index)=> {
        box.addEventListener("click", function(){

            sound[index].currentTime = 0;  // play for ever click
            sound[index].play();
        })
    })
})


// keydown

keys = ['a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v']

const sounds = document.querySelectorAll(".sound");
document.addEventListener('keydown', e => {
    const key = e.key
    const keyIdx = keys.indexOf(key)
    
    if (keyIdx > -1) sounds[keyIdx].play()
    
})






   










   
