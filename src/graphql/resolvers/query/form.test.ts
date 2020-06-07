import form from './form';
import { getFormByID } from '@src/db/datastore';

jest.mock('@src/db/datastore');
describe('resolvers', () => {
  it('form', () => {
    const formFn = form as Function;
    formFn({}, { id: 'id' }, {}, {});
    expect(getFormByID).toHaveBeenCalledWith('id');
  });
});
