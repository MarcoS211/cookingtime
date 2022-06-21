input.onButtonPressed(Button.A, function () {
    A += 1
    if (A == 1) {
        basic.showString("Pizza")
    }
    if (A == 2) {
        basic.showString("Hambur")
    }
    if (A == 3) {
        basic.showString("Fide")
    }
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    basic.showString("CTime")
})
input.onButtonPressed(Button.AB, function () {
    if (A == 1) {
        Time = 10
        while (Time != 0) {
            Time += -1
            basic.showNumber(Time)
        }
        music.playMelody("- - C G A B C5 - ", 120)
    }
    if (A == 2) {
        Time = 30
        while (Time != 0) {
            Time += -1
            basic.showNumber(Time)
        }
        music.playMelody("C - - E F G A B ", 120)
    }
    if (A == 3) {
        Time = 60
        while (Time != 0) {
            Time += -1
            basic.showNumber(Time)
        }
        music.playMelody("- D - - D - D D ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    A += -1
    if (A == 1) {
        basic.showString("Pizza")
    }
    if (A == 2) {
        basic.showString("Hambur")
    }
    if (A == 3) {
        basic.showString("Fide")
    }
})
let Time = 0
let A = 0
basic.showString("CTime")
