const db = require("./db");

exports.getEvents = async () => {
  const result = await db.query("SELECT * FROM calendar ORDER BY date ASC");
    return result.rows;
};

exports.addEvent = async ({ date, description }) => {
    const query = "INSERT INTO calendar (date, description) VALUES ($1, $2)";
    const values = [date, description];
    await db.query(query, values);
};
