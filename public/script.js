const imageInput = document.getElementById('image-input');
const backgroundCanvas = document.getElementById('canvas');
const backgroundCtx = backgroundCanvas.getContext('2d');

const img = new Image();
img.src = '/images/mountain_test_resize.jpeg';
 backgroundCtx.canvas.width  = img.width;
 backgroundCtx.canvas.height = img.height;  
let x;
let y;
let start = false;
let done = false;
img.onload = () => {
    backgroundCtx.drawImage(img, 0, 0);

    backgroundCanvas.addEventListener('click', function (e) {
        if (start === false) {
            x = event.clientX;
            y = event.clientY;
            backgroundCtx.beginPath();
            backgroundCtx.moveTo(x, y);
            
            start = true;
        } else {
            x = event.clientX;
            y = event.clientY;
            backgroundCtx.lineTo(x, y);
            
            backgroundCtx.strokeStyle = 'rgb(0,128,0)';
            backgroundCtx.lineWidth = 5;
            backgroundCtx.stroke();
            

        }




    });
};

imageInput.addEventListener('click', function (e) {
    genImg = new Image();
    genImg.src = backgroundCanvas.toDataURL();
    imageInput.value = genImg;
});