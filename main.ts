
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("temp")
    basic.showNumber(input.temperature())
    basic.pause(500)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("light")
    basic.showNumber(input.lightLevel())
    basic.pause(500)
})

let slowness: number
slowness = 1

basic.forever(function () {
    basic.pause(slowness)
    led.toggle(randint(0, 4), randint(0, 4))    

        basic.pause(slowness) 
})
