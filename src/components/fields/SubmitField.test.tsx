import SubmitFieldView from './SubmitField';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import SubmitField from '@src/util/form/fields/submit';
import { render, fireEvent } from '@testing-library/react';

describe('SubmitFieldView', () => {
  test('render', () => {
    const submitFieldView: ReactTestRenderer = renderer.create(
      <SubmitFieldView
        {...{
          field: new SubmitField(
            '1234',
            {
              value: 'value',
            },
            jest.fn(),
          ),
          submit: jest.fn(),
        }}
      />,
    );
    expect(submitFieldView.toJSON()).toMatchSnapshot();
  });

  test('onClick', () => {
    const submit: Function = jest.fn();

    const { getByTestId } = render(
      <SubmitFieldView
        {...{
          field: new SubmitField(
            '1234',
            {
              value: 'value',
            },
            jest.fn(),
          ),
          submit,
        }}
      />,
    );
    fireEvent.click(getByTestId('1234'));
    expect(submit).toHaveBeenCalled();
  });
});
