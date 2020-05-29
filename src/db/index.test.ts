import { getFormByID, getNextForm } from '.';

describe('db', () => {
  describe('getFormByID', () => {
    test('finds a form', () => {
      expect(getFormByID('1234')).toMatchSnapshot();
    });

    test('returns null if no form is found', () => {
      expect(getFormByID('123')).toBe(null);
    });
  });

  describe('getNextForm', () => {
    test('gets the next form', () => {
      expect(getNextForm('1234')).toMatchSnapshot();
    });

    test('returns null if form does not exist', () => {
      expect(getNextForm('sfaf')).toMatchSnapshot();
    });

    test('returns null if form has no next', () => {
      expect(getNextForm('2345')).toMatchSnapshot();
    });
  });
});
