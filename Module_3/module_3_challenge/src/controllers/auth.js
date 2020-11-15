const jwt = require('jsonwebtoken');
const response = require('./response');
const UsersDB = require('../repositories/users');
const Password = require('../utils/password');
const users = require('../repositories/users');

require('dotenv').config();

async function autenticar(ctx) {
	const { email = null, password = null } = ctx.request.body;

	if (email === null || password === null) {
		return response(ctx, 400, { mensagem: 'Pedido mal formatado.' });
	}

	const user = await UsersDB.obterUsuarioPorEmail(email);

	if (user) {
		// comparar user.senha com password
		const comparison = await Password.check(password, user.senha);
		if (comparison) {
			const token = jwt.sign(
				{ id: user.id, email: users.email },
				process.env.JWT_SECRET,
				{
					expiresIn: '1h',
				}
			);
			return response(ctx, 200, { token });
		}
	}
	return response(ctx, 400, { mensagem: 'Email ou senha incorretos.' });
}

module.exports = { autenticar };
