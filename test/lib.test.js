import Lib from '../src';

it('should do my thing', () => {

  const LibInstance = new Lib();
  const result = LibInstance.returnThing();
  expect(result).toBe(1);
});
