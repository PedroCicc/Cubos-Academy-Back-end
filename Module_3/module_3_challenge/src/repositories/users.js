const db = require('../utils/database');

async function obterUsuarioPorEmail(email) {
	const query = 'SELECT * FROM users WHERE email = $1';

	const result = await db.query({
		text: query,
		values: [email],
	});

	return result.rows.shift();
}

module.exports = { obterUsuarioPorEmail };
