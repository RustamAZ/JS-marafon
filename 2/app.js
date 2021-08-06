const $item = document.querySelector('.item')
const $placeholders = document.querySelectorAll('.placeholder')
const $topDoor = document.querySelector('.placeholder__door--top')
const $bottomDoor = document.querySelector('.placeholder__door--bottom')


$item.addEventListener('dragstart', dragStart)

$item.addEventListener('dragend', dragEnd)

for(let placeholder of $placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}



function dragStart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragEnd(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()

}

function dragenter(event) {
    event.target.childNodes[1].classList.add('active')
}

function dragleave(event) {
    $topDoor.classList.remove('hovered')
    $bottomDoor.classList.remove('hovered')
    event.target.childNodes[1].classList.remove('active')

}

function dragdrop(event) {
    $topDoor.classList.remove('hovered')
    $bottomDoor.classList.remove('hovered')
    event.target.childNodes[1].classList.remove('active')
    event.target.append($item)
}

