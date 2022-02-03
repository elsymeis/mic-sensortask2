basic.showIcon(IconNames.Yes)
let strip = neopixel.create(DigitalPin.P12, 5, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    if (gatorMicrophone.getSoundIntensity() > 200) {
        basic.clearScreen()
        strip.setBrightness(50)
        strip.showBarGraph(gatorMicrophone.getSoundIntensity(), 2000)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
