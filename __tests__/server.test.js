const server = require('../src/server');
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const { async } = require('rsvp');
const request = supertest(server.app);

describe('server', () => {
  describe('is responding when', () => {
    // 404 on a bad route
    it('there is 404 on a bad route', async () => {
      //arrange
      let route = '/foo';
      //act
      const response = await request.get(route);
      let parsed = JSON.parse(response.text);
      //assert
      expect(response.status).toBe(404);
      expect(parsed.message).toBe(
        'Oh no! It look like the Behemoth took this page to The Upside Down'
      );
    });

    it('there is 404 on a bad method', async () => {
      //arrange
      let route = '/';
      //act
      const response = await request.post(route);
      expect(response.status).toBe(404);
    });

    it('there is 500 if no name in the query string', async () => {
      //arrange
      let route = '/person?name=';
      //act
      const response = await request.get(route);
      //assert
      expect(response.status).toBe(500);
    });

    it('there 200 if the name is in the query string', async () => {
      //arrange
      let route = '/person?name=ibrahim';
      //act
      const response = await request.get(route);
      let parsed = JSON.parse(response.text);
      // arrange
      expect(response.status).toBe(200);
      expect(parsed).toEqual({
        name: 'ibrahim',
      });
    });

    it('root route is called', async () => {
      //arrange
      let route = '/';
      //act
      const response = await request.get(route);
      //arrange
      expect(response.status).toBe(200);
      expect(response.text).toEqual('i am working !');
    });
  });
});
