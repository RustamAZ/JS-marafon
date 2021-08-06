const $upbtn = document.querySelector('.up-button')
const $downbtn = document.querySelector('.down-button')
const $sidebar = document.querySelector('.sidebar')
const $mainSlide = document.querySelector('.main-slide')
const slidesCount = $mainSlide.querySelectorAll('div').length
const $container = document.querySelector('.container')

$sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlide = 0

$upbtn.addEventListener('click', () => {
    changeBlock('up')
})

$downbtn.addEventListener('click', () => {
    changeBlock('down')
})

function changeBlock(direction) {
    if(direction === 'up') {
        activeSlide++
        if(activeSlide === slidesCount) {
            activeSlide = 0
        }
    } else if (direction === 'down') {
        activeSlide--
        if(activeSlide < 0) {
            activeSlide = slidesCount - 1
        }
    }
    
    const height = $container.clientHeight
    
    $mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    $sidebar.style.transform = `translateY(${activeSlide * height}px)`
}