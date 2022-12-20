const container = document.querySelector('#container')
const clearGrid = document.querySelector('#clearGridBtn')
const eraseBtn = document.querySelector('#eraseBtn')
const penBtn = document.querySelector('#penBtn')
const colourPicker = document.querySelector('#colourPicker')
const gridSize = document.querySelector('#gridSize')


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
    size = gridSize.value
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

//value listeners
gridSize.oninput = resetGrid
colourPicker.oninput = changeColour

container.onmousedown = (e) => {
    mouseDown = true
    e.preventDefault()
}


//main function

const write = (e) => {e.target.style.backgroundColor = colour}


function run() {
    createGrid()
    const divs = document.querySelectorAll('.grid')
    divs.forEach(div => {
        div.addEventListener('mousedown', write)
    })
    clearGrid.addEventListener('click', () => {
        divs.forEach(div => div.style.backgroundColor = 'white')
    })
}
run()








