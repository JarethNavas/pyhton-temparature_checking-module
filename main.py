tempf = 70
tempf2 = 40
while True:
    print("temparature" + input.temperature(input.temperature(TemperatureUnit.FAHRENHEIT)))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > tempf:
        light.set_all(light.rgb(255, 0, 0))
    
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < tempf and input.temperature(TemperatureUnit.FAHRENHEIT) > tempf2:
        light.set_all(light.rgb(0, 255, 0) )
   
    elif input.temperature(TemperatureUnit.FAHRENHEIT) < tempf:
        light.set_all( light.rgb(0, 0, 255) )
    
    else:
        light.clear()


