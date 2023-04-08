const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// EVENTLISTENERS
next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++;
    }
    console.log(currentActive);
    update();
})

prev.addEventListener('click', () => {
    if (currentActive > 1) {
        currentActive--;
    }
    console.log(currentActive);
    update();
})

//FUNCTIONS
function update() {
    if (currentActive == 1)
        prev.disabled = true;
    else
        prev.disabled = false;
    if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        next.disabled = false;
    }
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    //console.log("active.length: " + actives.length);
    //console.log("circles.length: " + circles.length);

    progress.style.width = (actives.length - 1) / (circles.length - 0.9) * 100 + '%';
}