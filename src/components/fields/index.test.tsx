import renderer, { ReactTestRenderer } from 'react-test-renderer';
import TextField from '@src/util/form/fields/text';
import FieldView from '.';
import SubmitField from '@src/util/form/fields/submit';
import Field from '@src/util/form/fields';

class UnknownField extends Field {
  toJSON() {
    throw new Error('Method not implemented.');
  }
}

describe('FieldView', () => {
  test('renders TextFieldView', () => {
    const textFieldView: ReactTestRenderer = renderer.create(
      <FieldView
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

  test('renders SubmitFieldView', () => {
    const textFieldView: ReactTestRenderer = renderer.create(
      <FieldView
        {...{
          field: new SubmitField(
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

  test('renders error', () => {
    const textFieldView: ReactTestRenderer = renderer.create(
      <FieldView
        {...{
          field: new UnknownField(
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
});
