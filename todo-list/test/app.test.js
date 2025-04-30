const request = require('supertest');
const app = require('../src/index');
const { describe } = require('node:test');

describe('REST API', () => {
    it('it should return an empty array', async () => {
        const res = await request(app).get('/tasks');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);

    });
    
} );