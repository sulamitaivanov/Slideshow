var i = 0;
var images = [];
var time = 2000;

images[0] = 'https://i.postimg.cc/d0fgZ9k2/image1.jpg';
images[1] = 'https://i.postimg.cc/t4TrdxH2/image2.jpg';
images[2] = 'https://i.postimg.cc/GtXF9X9r/image3.jpg';
images[3] = 'https://i.postimg.cc/cHb1HYZ2/image4.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;



Resources