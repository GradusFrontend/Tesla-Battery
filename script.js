let wheels = document.querySelectorAll('.wheel')

let radius = document.querySelector('.radius')
let radiusUp = document.querySelector('.radius-btn-up')
let radiusDown = document.querySelector('.radius-btn-down')


let capacity = document.querySelector('.capacity')


let speed = document.querySelector('.speed')
let speedUp = document.querySelector('.speed-up')
let speedDown = document.querySelector('.speed-down')


let temp = document.querySelector('.temp')
let tempUp = document.querySelector('.temp-up')
let tempDown = document.querySelector('.temp-down')

let conditioner = document.querySelector('.conditioner')
let conditionerBtn = document.querySelector('.conditioner-btn')

let view = document.querySelector('.view')




let speedJs = +speed.innerText.split(' км/ч').at(0)
let capacityJs = +capacity.innerText.split('км').at(0)
let tempJs = +temp.innerText.split('°').at(0)


speedUp.onclick = () => {
    if (speedJs < 80) {
        speedJs = speedJs + 5
        speed.innerText = speedJs + ' км/ч'
        capacityJs = capacityJs - 10
        capacity.innerText = capacityJs + 'км'

        wheels.forEach(wheel => {
            if (speedJs === 80) {
                wheel.style.animation = 'wheel .1s linear infinite'
            } else if (speedJs === 75) {
                wheel.style.animation = 'wheel .2s linear infinite'
            } else if (speedJs === 70) {
                wheel.style.animation = 'wheel .3s linear infinite'
            } else if (speedJs === 65) {
                wheel.style.animation = 'wheel .4s linear infinite'
            } else if (speedJs === 60) {
                wheel.style.animation = 'wheel .5s linear infinite'
            } else if (speedJs === 50) {
                wheel.style.animation = 'wheel .6s linear infinite'
            } else if (speedJs === 40) {
                wheel.style.animation = 'wheel .7s linear infinite'
            } else if (speedJs === 30) {
                wheel.style.animation = 'wheel .8s linear infinite'
            } else if (speedJs === 20) {
                wheel.style.animation = 'wheel .9s linear infinite'
            }
        })
    }
}

speedDown.onclick = () => {
    if (speedJs > 20) {
        speedJs = speedJs - 5
        speed.innerText = speedJs + ' км/ч'
        capacityJs = capacityJs + 10
        capacity.innerText = capacityJs + 'км'

        wheels.forEach(wheel => {
            if (speedJs === 80) {
                wheel.style.animation = 'wheel .1s linear infinite'
            } else if (speedJs === 75) {
                wheel.style.animation = 'wheel .2s linear infinite'
            } else if (speedJs === 70) {
                wheel.style.animation = 'wheel .3s linear infinite'
            } else if (speedJs === 65) {
                wheel.style.animation = 'wheel .4s linear infinite'
            } else if (speedJs === 60) {
                wheel.style.animation = 'wheel .5s linear infinite'
            } else if (speedJs === 50) {
                wheel.style.animation = 'wheel .6s linear infinite'
            } else if (speedJs === 40) {
                wheel.style.animation = 'wheel .7s linear infinite'
            } else if (speedJs === 30) {
                wheel.style.animation = 'wheel .8s linear infinite'
            } else if (speedJs === 20) {
                wheel.style.animation = 'wheel .9s linear infinite'
            }
        })
    }
}

tempUp.onclick = () => {
    tempJs = tempJs + 2
    temp.innerText = tempJs + '°'

    if (tempJs > 14) {
        conditioner.innerText = 'Кондиционер'
    }
}

tempDown.onclick = () => {
    tempJs = tempJs - 2
    temp.innerText = tempJs + '°'

    if (tempJs < 15) {
        conditioner.innerText = 'печка'
    }
}

conditionerBtn.onclick = () => {
    conditionerBtn.classList.toggle('checked')

    if (conditionerBtn.classList.contains('checked')) {
        capacityJs = capacityJs - 20
        capacity.innerText = capacityJs + 'км'
    } else {
        capacityJs = capacityJs + 20
        capacity.innerText = capacityJs + 'км'
    }
}


radiusUp.onclick = () => {
    radius.innerText = '21'

    wheels.forEach(wheel => {
        wheel.src = './img/Wheel20.png'
    })
}

radiusDown.onclick = () => {
    radius.innerText = '19'

    wheels.forEach(wheel => {
        wheel.src = './img/Wheel19.png'
    })
}



let salon = document.querySelector('.salon')
let tesla = document.querySelector('.tesla')
let tools = document.querySelectorAll('.tool')
let toggles = document.querySelectorAll('.toggles')
let colors = document.querySelector('.colors')
let viewBtn = document.querySelector('.view')
let colorBtns = document.querySelectorAll('.color-box')


view.onchange = () => {
    view.classList.toggle('view-salon')

    if (view.classList.contains('view-salon')) {
        salon.classList.add('salon-visible')
        tesla.classList.add('tesla-unvisible')
        colors.classList.remove('color-unvisible')

        tools.forEach(tool => {
            tool.classList.add('tool-unvisible')
        })
        toggles.forEach(tool => {
            tool.classList.add('tool-unvisible')
        })

    } else {
        salon.classList.remove('salon-visible')
        tesla.classList.remove('tesla-unvisible')
        colors.classList.add('color-unvisible')

        tools.forEach(tool => {
            tool.classList.remove('tool-unvisible')
        })
        toggles.forEach(tool => {
            tool.classList.remove('tool-unvisible')
        })
    }
}


let colorsName = {
    black: './img/black-salon.jpg',
    milk: './img/milk-salon.jpg',
    white: './img/white-salon.jpg'
}

let prev = 0

colorBtns.forEach((btn, idx) => {
    btn.onclick = () => {
        colorBtns[prev].classList.remove('color-box-active')
        btn.classList.add('color-box-active')
    
        prev = idx

        let btnId = btn.getAttribute('id')
        salon.style.backgroundImage = `url(${colorsName[btnId]})`
        console.log(colorsName[btnId]);
    }
})

