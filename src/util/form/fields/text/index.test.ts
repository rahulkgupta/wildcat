import TextField from '.';

let textField: TextField;
let onUpdate: Function;

describe('TextField', () => {
  beforeEach(() => {
    onUpdate = jest.fn();
    textField = new TextField(
      '12234',
      {
        value: 'value',
        label: 'label',
        error: 'error',
      },
      onUpdate,
    );
  });

  test('getValue', () => {
    expect(textField.getValue()).toMatchSnapshot();
  });

  test('getId', () => {
    expect(textField.getId()).toMatchSnapshot();
  });

  test('getLabel', () => {
    expect(textField.getLabel()).toMatchSnapshot();
  });

  test('getError', () => {
    expect(textField.getError()).toMatchSnapshot();
  });

  test('setValue', () => {
    textField.setValue('34555');
    expect(textField.getValue()).toMatchSnapshot();
    expect(onUpdate).toHaveBeenCalled();
  });

  test('toJSON', () => {
    expect(textField.toJSON()).toMatchSnapshot();
  });
});
