import Form from '@src/util/form';

let form: Form;
let onUpdate: Function;

describe('Form', () => {
  beforeEach(() => {
    onUpdate = jest.fn();
    form = new Form(
      {
        id: '1234',
        fields: {
          ssaf: {
            label: 'label',
            value: 'value',
            error: 'error',
            type: 'text',
          },
        },
      },
      {
        onUpdate: onUpdate,
      },
    );
  });

  describe('constructor', () => {
    test('creates a form', () => {
      expect(form.getId()).toBe('1234');
    });
    test('throws if a bad field type is passed in', () => {
      try {
        new Form(
          {
            id: '123',
            fields: {
              sdfasdf: {
                type: 'asdfasf',
              },
            },
          },
          {
            onUpdate: jest.fn(),
          },
        );
      } catch (e) {
        expect(e.message).toBe('no field type found asdfasf');
      }
    });
  });

  describe('functions', () => {
    test('updates and calls onUpdate', () => {
      form.update();
      expect(onUpdate).toHaveBeenCalled();
    });

    test('getFields', () => {
      expect(form.getFields().length).toBe(1);
    });
  });
});
