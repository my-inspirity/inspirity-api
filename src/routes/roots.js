import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Welcome to inspirity world!';
  // console.log(ctx);
});

module.exports = router;
