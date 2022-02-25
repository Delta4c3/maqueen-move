enum RadioMessage {
    L = 6987,
    B = 9031,
    F = 24246,
    S = 45537,
    R = 57643
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # . . .
            `)
        basic.pause(100)
    }
    if (receivedString == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 120)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
    }
    if (receivedString == "R") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 120)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
    }
    if (receivedString == "L") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 120)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.pause(100)
    }
    if (receivedString == "S") {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
        basic.pause(100)
    }
})
let message = ""
radio.setGroup(7)
basic.clearScreen()
basic.forever(function () {
    message = "Send"
    radio.sendString(message)
    basic.pause(100)
})
