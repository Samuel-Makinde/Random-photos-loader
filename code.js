const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

function generateImage(){
    for (let index = 0; index < imageNum; index++) {
        const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.ceil(Math.random()*3000)}`;
    imageContainerEl.appendChild(newImageEl);
}
}
btnEl.addEventListener("click", ()=>{
    imageNum = 10;
    generateImage();
    }
) 
