'use strict';

const { expect } = require('@jest/globals');
const validator = require('../src/middleware/validator');

describe('validator', () => {
  describe('is sucessfully', () => {
    it('returning the query name', () => {
      //arrange
      let req = {
        query: {
          name: 'ibrahim',
        },
      };
      let res = {};
      let next = jest.fn();
      //act
      validator(req, res, next);
      //assert
      expect(next).toHaveBeenCalledWith();
    });

    it('handling no query', () => {
      //arrange
      let req = {
        query: {
          name: '',
        },
      };
      let res = {};
      let next = jest.fn();
      //act
      validator(req, res, next);
      //assert
      expect(next).toHaveBeenCalledWith('there is no name');
    });
  });
});
