const $board = document.querySelector('#board')
const SQUARES_NUMBER = 450
const colors = ['red','blue','yellow','purple','green']

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    
    $board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.backgroundColor = color
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}