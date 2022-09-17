const numbstars = 100;

for(let i=0; i < numbstars; i++) {
    let star = document.createElement("div");
    let showcase = document.getElementById("showcase");
    let xy = getRandomPosition();
    star.classList.add("stars");
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    showcase.append(star);
}

function getRandomPosition() { 
    const showcase = document.getElementById("showcase");
    let range;
    if(showcase.clientWidth >= showcase.clientHeight) {
        range = showcase.clientWidth;
    }else {
        range = showcase.clientHeight;
    }
    let randomX = Math.floor(Math.random()*range);
    let randomY = Math.floor(Math.random()*range);
    return [randomX,randomY];
}


function resize() {
    let starArr = document.querySelectorAll(".stars");
    for(let i=0; i < starArr.length; i++) {
        let xy = getRandomPosition();
        starArr[i].style.top = xy[0] + 'px';
        starArr[i].style.left = xy[1] + 'px';
    }
}

window.addEventListener("resize", _.debounce(resize, 500));
