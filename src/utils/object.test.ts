import {objectUtils} from "./object";

describe("Convert object to a query string", () => {
  test('Should throw error undefined input', () => {
    expect(() => {
      objectUtils.serializeQueryParamsObject(undefined)
    }).toThrow('Query params should be type object');
  });

  test('Should throw error on null input', () => {
    expect(() => {
      objectUtils.serializeQueryParamsObject(undefined)
    }).toThrow('Query params should be type object');
  });

  test('Should return empty string on empty object', () => {
    expect(objectUtils.serializeQueryParamsObject({})).toEqual('');
  });

  test('Should return query param string for objects with key values', () => {
    expect(objectUtils.serializeQueryParamsObject({key: 'test'})).toEqual('key=test');
  });

  test('Should return query param string for objects with key values', () => {
    expect(objectUtils.serializeQueryParamsObject({key: 'test', search: 'hello'})).toEqual('key=test&search=hello');
  });
});