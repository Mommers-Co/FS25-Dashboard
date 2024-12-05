const { Client } = require("pg");

const getLatestWeather = async () => {
  const query = "SELECT * FROM weather ORDER BY timestamp DESC LIMIT 1";
    const result = await client.query(query);
    return result.rows[0];
};

const insertWeather = async (weather) => {
    const { currentWeather, temperature, humidity, rainChance } = weather;
    const query = `
    INSERT INTO weather (currentWeather, temperature, humidity, rainChance)
    VALUES ($1, $2, $3, $4)
    `;
    await client.query(query, [currentWeather, temperature, humidity, rainChance]);
};

module.exports = { getLatestWeather, insertWeather };
