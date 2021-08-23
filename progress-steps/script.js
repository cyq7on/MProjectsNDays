const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const verticel = document.querySelector('.vertical')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
})

function update() {
    // circle状态控制
    circles.forEach((circle, index) => {
        if (currentActive < index + 1) {
            circle.classList.remove('active');
        } else {
            circle.classList.add('active');
        }
    })

    // 按钮状态控制
    if(currentActive <= 1) {
        prev.disabled = true;
    }else if(currentActive >= circles.length) {
        next.disabled = true;
    }else {
        next.disabled = false;
        prev.disabled = false;
    }

    // 设置进度条长度
    if(verticel) {
        progress.style.height = (currentActive - 1) * 100 / (circles.length - 1) + '%';
    }else {
        progress.style.width = (currentActive - 1) * 100 / (circles.length - 1) + '%';
    }
}