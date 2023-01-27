import { Hono } from 'hono';
const app = new Hono();
export default app;

export interface Env {
}

app.get('/', async (c) => {
	return c.text('Hello, World!');
});
