const request = require('supertest');
const { app, server } = require('../index');

describe('Todo API', () => {
  it('GET /todos - should return empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /todos - should create a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ task: 'Learn Docker' });
    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe('Learn Docker');
  });

  it('DELETE /todos/:id - should delete a todo', async () => {
    const res = await request(app).delete('/todos/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Todo deleted');
  });
});

afterAll(() => {
  server.close();
});