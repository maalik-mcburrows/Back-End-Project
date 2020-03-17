const imageInput = document.getElementById('image-input')
const submit2 = document.getElementById('submit2');
const backgroundCanvas = document.getElementById('canvas');
const backgroundCtx = backgroundCanvas.getContext('2d');
const form = document.getElementById('form');

const img = new Image();

let x;
let y;
let start = false;
let done = false;
img.onload = () => {
<<<<<<< HEAD
=======
    console.log("loaded")
    backgroundCtx.canvas.width  = img.width;
    backgroundCtx.canvas.height = img.height;   
>>>>>>> f1dc5f4d4b747c66d8698b02c2242d67aba0d1f6
    backgroundCtx.drawImage(img, 0, 0);

    backgroundCanvas.addEventListener('click', function (e) {
        if (start === false) {
            x = event.offsetX;
            y = event.offsetY;
            backgroundCtx.beginPath();
            backgroundCtx.moveTo(x, y);
            
            start = true;
        } else {
            x = event.offsetX;
            y = event.offsetY;
            backgroundCtx.lineTo(x, y);
            
            backgroundCtx.strokeStyle = 'rgb(0,128,0)';
            backgroundCtx.lineWidth = 5;
            backgroundCtx.stroke();
            

        }
        
        
        



    });
};


  
img.src = '/images/mountain_test_resize.jpeg';


 
submit2.addEventListener('click', function (e) {
    console.log("submitted")
const dataURL = backgroundCanvas.toDataURL();
imageInput.value = dataURL;

})

