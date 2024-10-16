receiver.onSpurPinEvent(function (links_hell, rechts_hell) {
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.b), 0xffffff, links_hell)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.c), 0xffffff, rechts_hell)
})
input.onButtonEvent(Button.B, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonBhold()
})
btf.onReceivedDataChanged(function (receivedData, changed) {
    receiver.dual2MotorenLenkenBuffer(receivedData, 30)
    btf.zeige5x5Buffer(receivedData)
    btf.zeige5x5Joystick(receivedData)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
})
input.onButtonEvent(Button.A, btf.buttonEventValue(ButtonEvent.Hold), function () {
    btf.buttonAhold()
})
receiver.beimStart2Motoren()
btf.comment(receiver.spurSensorRegisterEvents(true))
loops.everyInterval(700, function () {
    if (btf.timeout(30000, true)) {
        receiver.pinRelay(false)
    } else if (btf.timeout(1000)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0xff0000, true, true)
        receiver.dualMotor128(receiver.eDualMotor.M0_M1, 128)
    } else if (btf.timeout(1000, true)) {
        btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x00ff00)
    }
})
