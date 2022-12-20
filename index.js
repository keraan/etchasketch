const container = document.querySelector('#container')
const clearGrid = document.querySelector('#clearGridBtn')
const eraseBtn = document.querySelector('#eraseBtn')
const penBtn = document.querySelector('#penBtn')
const colourPicker = document.querySelector('#colourPicker')
const gridSize = document.querySelector('#gridSize')
const gridSizeText = document.querySelector('#gridSizeText')


let size = gridSize.value
let colour = colourPicker.value
let mouseDown = false



//create grid
const createGrid = () => {
    for (i = 0; i < size**2; i++) {
        const div = document.createElement('div')
        div.classList.add('grid')
        container.append(div)
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

const resetGrid = () => {
    changeGridSize()
    removeGrid()
    createGrid()
    run()
}


//buttons

eraseBtn.addEventListener('click', () => {
    colour = 'white'
})

penBtn.addEventListener('click', () => {
    colour = colourPicker.value
})

const removeGrid = () => {
    container.innerHTML = ''
}

function changeColour() {
    colour = colourPicker.value
}

function changeGridSize() {
    size = gridSize.value
    gridSizeText.textContent = `${size} x ${size}`
}

//value listeners
gridSize.oninput = resetGrid
colourPicker.oninput = changeColour

container.onmousedown = (e) => {
    mouseDown = true
    e.preventDefault()
}
document.body.onmouseup = () => {
    mouseDown = false
}


//main function

const write = (e) => {
    if (!mouseDown && !(e.type === 'mousedown')) return
    e.target.style.backgroundColor = colour
}


function run() {
    createGrid()
    const divs = document.querySelectorAll('.grid')
    divs.forEach(div => {
        div.addEventListener('mousedown', write)
        div.addEventListener('mouseover', write)
    })
    clearGrid.addEventListener('click', () => {
        divs.forEach(div => div.style.backgroundColor = 'white')
    })
}
run()








