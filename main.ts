function bluecontrol () {
    if (uartData == "A") {
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, 255)
    } else if (uartData == "B") {
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, -255)
    } else if (uartData == "C") {
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, -255, SuperBit.enMotors.M3, 255)
    } else if (uartData == "D") {
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, 255, SuperBit.enMotors.M3, -255)
    } else if (uartData == "0") {
        SuperBit.MotorRunDual(SuperBit.enMotors.M1, 0, SuperBit.enMotors.M3, 0)
    }
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
    connected = 0
})
function ModeSelect () {
    if (uartData == "S") {
        basic.showIcon(IconNames.House)
        g_mode = 1
    } else if (uartData == "T") {
        basic.showIcon(IconNames.Angry)
        g_mode = 2
    } else if (uartData == "U") {
        basic.showIcon(IconNames.EighthNote)
        g_mode = 3
    } else if (uartData == "V") {
        basic.showIcon(IconNames.Happy)
        g_mode = 0
    }
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        music2()
        ModeSelect()
    }
})
function music2 () {
    music.setVolume(255)
    if (uartData == "1") {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (uartData == "2") {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (uartData == "3") {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (uartData == "4") {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (uartData == "5") {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (uartData == "6") {
        music.playTone(440, music.beat(BeatFraction.Whole))
    } else if (uartData == "7") {
        music.playTone(494, music.beat(BeatFraction.Whole))
    } else if (uartData == "8") {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (uartData == "B1") {
        music.playTone(554, music.beat(BeatFraction.Whole))
    } else if (uartData == "B2") {
        music.playTone(622, music.beat(BeatFraction.Whole))
    } else if (uartData == "B3") {
        music.playTone(740, music.beat(BeatFraction.Whole))
    } else if (uartData == "B4") {
        music.playTone(831, music.beat(BeatFraction.Whole))
    } else if (uartData == "B5") {
        music.playTone(932, music.beat(BeatFraction.Whole))
    } else if (uartData == "O") {
        music.setVolume(0)
    }
}
let g_mode = 0
let uartData = ""
let connected = 0
connected = 0
bluetooth.startUartService()
basic.showString("JD")
basic.forever(function () {
	
})
