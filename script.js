var img;
function init(){
    img = document.createElement("img");
    img.src = "pictures/" + 0 +"."+"jpg";
    document.body.appendChild(img)
    img.style.width = "20em";
    img.style.display = "block";
    img.style.marginLeft = "auto";
    img.style.marginRight = "auto";
    setInterval(createInterval, 800)
}

var index = -1;
function createInterval(){

    index++
    if(index == 4){
        index = 0;
    }
    img.src = "pictures/" + index +"."+"jpg";
    document.body.appendChild(img)

}