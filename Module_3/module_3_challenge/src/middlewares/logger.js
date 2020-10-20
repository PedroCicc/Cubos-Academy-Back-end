const logger = (ctx, next) => {
	console.log(`Método: ${ctx.method}, URL: ${ctx.url}`);

	next();
};

module.exports = logger;
