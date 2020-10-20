const Example = require('../respositories/example');

const hello = async (ctx, next) => {
	// eslint-disable-next-line no-unused-vars
	const now = await Example.now();
	ctx.body = { now: 'Hello!' };
	await next();
};

module.exports = { hello };
