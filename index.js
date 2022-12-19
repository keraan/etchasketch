const container = document.querySelector('#container')
const coloured = document.querySelector('.coloured')


let rows = 25
let columns = 25
let colour = 'pink'
coloured.style.backgroundColor = colour

container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`

const createGrid = (rows, columns) => {
    for (i = 0; i < rows*columns; i++) {
        const div = document.createElement('div')
        div.classList.add('grid')
        container.append(div)
    }
}
createGrid(rows,columns)

const removeGrid = () => {
    container.innerHTML = ''
}


const divs = document.querySelectorAll('.grid')
divs.forEach(div => div.addEventListener('mouseover', () => {
    div.classList.add('coloured')
}
))


const clearGrid = document.querySelector('#clearGrid')
clearGrid.addEventListener('click', () => {
    divs.forEach(div => div.classList.remove('coloured'))
})

