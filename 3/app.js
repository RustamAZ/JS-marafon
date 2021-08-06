const $upbtn = document.querySelector('.up-button')
const $downbtn = document.querySelector('.down-button')
const $sidebar = document.querySelector('.sidebar')
const $mainSlide = document.querySelector('.main')
const $slides = $mainSlide.querySelectorAll('div')
const slidesCount = $slides.length
const $container = document.querySelector('.container')
const $sidebarTitles = document.querySelectorAll('.sidebar__title')
$sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let activeSlide = 0

let isActive = false

$sidebarTitles.forEach(title => {
    title.addEventListener('click', () => {
        $slides.forEach(slide => {
            slide.classList.toggle('active')
            isActive = true
        })
    })
})


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
    
    $slides.forEach(slide => {
        if(isActive) {
            slide.classList.remove('active')
        }
    })
    
    $mainSlide.style.transform = `translateY(-${activeSlide * height}px)`
    
    $sidebar.style.transform = `translateY(${activeSlide * height}px)`
}