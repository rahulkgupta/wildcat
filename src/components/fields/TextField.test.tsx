import TextFieldView from './TextField';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import TextField from '@src/util/form/fields/text';

describe('TextFieldView', () => {
  test('render', () => {
    const textFieldView: ReactTestRenderer = renderer.create(
      <TextFieldView
        {...{
          field: new TextField(
            '1234',
            {
              value: 'value',
              label: 'label',
            },
            jest.fn(),
          ),
          submit: jest.fn(),
        }}
      />,
    );
    expect(textFieldView.toJSON()).toMatchSnapshot();
  });

  test('onClick', () => {
    const submit: Function = jest.fn();
    const textField = new TextField(
      '1234',
      {
        value: 'value',
      },
      jest.fn(),
    );
    const { getByTestId } = render(
      <TextFieldView
        {...{
          field: textField,
          submit,
        }}
      />,
    );
    fireEvent.change(getByTestId('1234'), { target: { value: 'new value' } });
    expect(textField.getValue()).toMatchSnapshot();
  });
});
