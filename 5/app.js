const $startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const $timeList = document.querySelector('#time-list')
const $timeEl = document.querySelector('#time')
const $board = document.querySelector('.board')

let time = 0
let score = 0

$timeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('time-btn')) {
        time = +e.target.getAttribute('data-time')
        screens[1].classList.add('up')
        startGame() 
    }
})

$startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

$board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000);
    setTime(time)
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        finishGame() 
    } else {
        let current = --time
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    $timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    $timeEl.parentNode.classList.add('hide')
    $board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`
}


function createRandomCircle() {
    const $circle  = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const {width, height} = $board.getBoundingClientRect() 
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)
    
    $circle.classList.add('circle')
    $circle.style.width = `${size}px`
    $circle.style.height = `${size}px`
    $circle.style.top = `${y}px`
    $circle.style.left = `${x}px`
    $circle.style.backgroundColor = `#${getRandomNumber(0,9)}${getRandomNumber(0,9)}${getRandomNumber(0,9)}${getRandomNumber(0,9)}${getRandomNumber(0,9)}${getRandomNumber(0,9)}`
    $circle.style.borderRadius = `${getRandomNumber(0,50)}%`

    $board.append($circle)
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle')

        if(!circle) {
            return
        }

        circle.click()
    }
    setInterval(kill, 42);
}