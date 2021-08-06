function slidesPlugin(activeSlide) {
    const $slides = document.querySelectorAll('.slide')

    $slides[activeSlide].classList.add('.active')

    $slides.forEach(item => {
        item.addEventListener('click', () => {
            clearActiveClass()
            item.classList.add('active')
        })
    })

    function clearActiveClass() {
        for (let slide of $slides) {
            slide.classList.remove('active')
        }
    }
}
slidesPlugin(3);
