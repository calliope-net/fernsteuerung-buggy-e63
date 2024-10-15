btf.onReceivedDataChanged(function (receivedData, changed) {
    receiver.dual2MotorenLenkenBuffer(receivedData, 50)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
})
receiver.beimStart(
receiver.eHardware.v3,
90,
true,
65
)
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
