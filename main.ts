function bluecontrol () {
    if (uartData == "A") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (uartData == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (uartData == "C") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (uartData == "D") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        -255
        )
    } else if (uartData == "0") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    }
}
function Set_Volume () {
    let l = control.createBuffer(7)
l.setUint8(0, 0x7E)
l.setUint8(1, 0x06)
l.setUint8(2, 0x00)
l.setUint8(3, 0x02)
l.setUint8(4, 0x00)
l.setUint8(5, Volume)
l.setUint8(6, 0xEF)
serial.writeBuffer(l)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        bluecontrol()
        ModeSelect()
    }
})
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
function Play_Track () {
    let m = control.createBuffer(7)
m.setUint8(0, 0x7E)
m.setUint8(1, 0x03)
m.setUint8(2, 0x00)
m.setUint8(3, 0x02)
m.setUint8(4, 0x00)
m.setUint8(5, Track_Num)
m.setUint8(6, 0xEF)
serial.writeBuffer(m)
}
let g_mode = 0
let uartData = ""
let connected = 0
let Track_Num = 0
serial.redirect(
SerialPin.P2,
SerialPin.P1,
BaudRate.BaudRate9600
)
let Volume = 16
connected = 0
bluetooth.startUartService()
basic.showString("J")
basic.forever(function () {
	
})
