import Router from 'koa-router';
import koaBody from 'koa-body';
import CustomerService from '../services/customer-service';
import customerSchema from '../schemas/customer-schema';

const router = new Router({
  prefix: '/customers'
});

router.get('/test', async (ctx, next) => {
  ctx.body = ctx.db.query('select 1');
});

router.get('/', async (ctx, next) => {
  ctx.body = await new CustomerService(ctx.db).find(ctx.query);
});

router.get('/:id', async (ctx, next) => {
  let id = ctx.params.id;
  ctx.body = await new CustomerService(ctx.db).get(id);
});

router.post('/', koaBody(), async (ctx, next) => {
  let data = ctx.request.body;
  let valid = customerSchema(data);
  if (!valid) {
    ctx.throw(400, JSON.stringify(customerSchema.errors));
  }

  ctx.body = await new CustomerService(ctx.db).create(data);
});

router.put('/:id', koaBody(), async (ctx, next) => {
  let id = ctx.params.id;
  let data = ctx.request.body;

  let valid = customerSchema(data);
  if (!valid) {
    ctx.throw(400, JSON.stringify(customerSchema.errors));
  }

  ctx.body = await new CustomerService(ctx.db).change(id, data);
});

module.exports = router;
