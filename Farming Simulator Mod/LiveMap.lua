-- FS25 Server Mod to gather data and send it to an external API
-- Place this script in your FS25 server mod folder

-- Function to get the field data (fertilizer, lime, growth stage, etc.)
function getFieldData()
    local fields = {}
    -- Loop through all fields in the map
    for fieldId, field in pairs(g_currentMission.fieldManager.fields) do
        local fieldData = {
            fieldId = fieldId,
            status = field:getGrowthState(),
            needsFertilizer = field:getNeedsFertilizer(),
            needsLime = field:getNeedsLime(),
            growthStage = field:getGrowthStage(),
        }
        table.insert(fields, fieldData)
    end
    return fields
end

-- Function to get weather data (temperature, humidity, rain chance, etc.)
function getWeatherData()
    local weather = {
        currentWeather = g_currentMission.weatherManager.currentWeather,
        temperature = g_currentMission.weatherManager.currentTemperature,
        humidity = g_currentMission.weatherManager.currentHumidity,
        rainChance = g_currentMission.weatherManager.currentRainChance,
    }
    return weather
end

-- Function to send data to the backend API
function sendToAPI(endpoint, data)
    local jsonData = json.encode(data)  -- Convert data to JSON format
    -- Use the HTTP library to make a POST request to your backend API
    HttpRequest.post(endpoint, jsonData, function(response)
        if response.status == 200 then
            print("Data sent successfully")
        else
            print("Error sending data: " .. response.status)
        end
    end)
end

-- Periodic task to gather and send data every 30 minutes
function onUpdate(dt)
    if g_currentMission.time % 1800 == 0 then  -- 30 minutes in seconds
        local fieldsData = getFieldData()
        local weatherData = getWeatherData()

        -- Send weather data to the API
        sendToAPI("https://your-api-endpoint/weather", weatherData)

        -- Send field data to the API
        sendToAPI("https://your-api-endpoint/fields", fieldsData)
    end
end

-- Register the update function to be called periodically
g_currentMission:addUpdateFunction(onUpdate)
