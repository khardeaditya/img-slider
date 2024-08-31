
const imagesArr= ["./business-management.jpeg",
    "./econimics.jpeg",
    "./finance-image.jpeg",
    "./information-technology.jpeg"];

let imgIndex=0;

function next(){
    if(imgIndex==imagesArr.length-1){
        imgIndex=0;
    }
    else{
        imgIndex++;
    }
    const imgElement =document.getElementById('img');
    imgElement.src=imagesArr[imgIndex]
}

setInterval(next,1000)
