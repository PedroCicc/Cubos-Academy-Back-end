const database = require('../utils/database');

const now = async () => {
	const query = `SELECT NOW()`;

	const result = await database.query(query);

	return result;
};

module.exports = { now };
