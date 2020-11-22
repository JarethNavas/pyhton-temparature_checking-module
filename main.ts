let tempf = 70
let tempf2 = 40
while (true) {
    console.log("temparature" + input.temperature(input.temperature(TemperatureUnit.Fahrenheit)))
    if (input.temperature(TemperatureUnit.Fahrenheit) > tempf) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < tempf && input.temperature(TemperatureUnit.Fahrenheit) > tempf2) {
        light.setAll(light.rgb(0, 255, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) < tempf) {
        light.setAll(light.rgb(0, 0, 255))
    } else {
        light.clear()
    }
    
}
