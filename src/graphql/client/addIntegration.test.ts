import addIntegration from './addIntegration';

describe('addIntegration', () => {
  it('works', () => {
    expect(
      addIntegration(
        {
          key: 'value',
        },
        'service',
      ),
    ).toMatchSnapshot();
  });
});
