btf.onReceivedDataChanged(function (receivedData, changed) {
    receiver.dual2MotorenLenkenBuffer(btf.btf_receivedBuffer19(), 50)
    btf.setLedColors(btf.btf_RgbLed(btf.eRgbLed.a), 0x0000ff, true, true)
})
receiver.beimStart(
receiver.eHardware.v3,
90,
true,
65
)
