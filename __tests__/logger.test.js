'use strict';
const logger = require('../src/middleware/logger');
describe('logger', () => {
  describe('is welling to', () => {
    let consoleSpy = jest.spyOn(console, 'log');
    let req = { method: 'get', path: 'test' };
    let res = {};
    let next = jest.fn();

    it('sucessfully calling the next', () => {
      //arrange
      //act
      logger(req, res, next);
      expect(next).toHaveBeenCalledWith();
    });

    it('console the the get method and the path', () => {
      //arrange
      //act
      logger(req, res, next);
      //assert
      expect(consoleSpy).toHaveBeenCalledWith(
        '## from logger ##',
        'get',
        'test'
      );
    });
    it('console the the post method and the path', () => {
      //arrange
      let req = { method: 'post', path: 'test' };
      //act
      logger(req, res, next);
      //assert
      expect(consoleSpy).toHaveBeenCalledWith(
        '## from logger ##',
        'get',
        'test'
      );
    });
  });
});
