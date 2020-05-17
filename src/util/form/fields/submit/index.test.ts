import SubmitField from '.';

let submitField: SubmitField;

describe('SubmitField', () => {
  beforeEach(() => {
    submitField = new SubmitField(
      '1234',
      {
        value: '2343',
      },
      jest.fn(),
    );
  });

  test('getValue', () => {
    expect(submitField.getValue()).toMatchSnapshot();
  });

  test('toJSON', () => {
    expect(submitField.toJSON()).toMatchSnapshot();
  });
});
