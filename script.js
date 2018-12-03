var img;
function init(){
    img = document.createElement("img");
    img.style.width = "20em";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";
    setInterval(createInterval, 700)
}

var index = 0;
function createInterval(){

    index++
    if(index == 3){
        index = 0;
    }
    img.src = "pictures/" + index +"."+"jpg";
    document.body.appendChild(img)

}