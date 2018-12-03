let audio;
let running;
let now;

window.onload = function() {
    let a = document.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        a[i].setAttribute("target", "blank");
    }
}

function start() {
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        if (running) {
            pausedAt = audio.currentTime;
            audio.pause();
            audio.currentTime = 0;
        } else {
            p[i].onclick = function() {
                audio = new Audio(`voices/${p[i].id}.m4a`);
                audio.play();
                running = true;
                now = p[i].id;
            }
        }
    }
}

document.addEventListener("mousedown", start);