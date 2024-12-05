const { Client } = require("pg");

const insertFieldData = async (fields) => {
    fields.forEach(async (field) => {
        const { fieldId, status, needsFertilizer, needsLime, growthStage } = field;
        const query = `
        INSERT INTO fields (fieldId, status, needsFertilizer, needsLime, growthStage)
        VALUES ($1, $2, $3, $4, $5)
        `;
        await client.query(query, [fieldId, status, needsFertilizer, needsLime, growthStage]);
    });
};

module.exports = { insertFieldData };
