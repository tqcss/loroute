import { Hono } from 'hono';

const App = new Hono();
App.get('/', (c) => c.text('Hono!'));

export default App;
