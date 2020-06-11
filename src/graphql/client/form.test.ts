import form from './form';

describe('form', () => {
  it('works', () => {
    expect(form('test')).toMatchSnapshot();
  });
});
