-- Table for storing weather data
CREATE TABLE weather (
    id SERIAL PRIMARY KEY,
    currentWeather VARCHAR(100),
    temperature INTEGER,
    humidity INTEGER,
    rainChance INTEGER,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing field data
CREATE TABLE fields (
    fieldId SERIAL PRIMARY KEY,
    status VARCHAR(50),
    needsFertilizer BOOLEAN,
    needsLime BOOLEAN,
    growthStage VARCHAR(50)
);
