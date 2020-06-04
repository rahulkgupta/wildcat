interface Field {
  label?: string;
  value?: string;
  error?: string;
  type?: string;
  id: string;
}

interface Form {
  id: string;
  fields: Field[];
  next?: {
    type: number;
    id: string;
  };
}

interface Data {
  [id: string]: Form;
}
const data: Data = {
  '1234': {
    id: '1234',
    fields: [
      {
        label: 'label',
        value: 'value',
        error: 'error',
        type: 'text',
        id: 'ssaf',
      },
      {
        label: 'label',
        value: 'value',
        type: 'submit',
        id: 'aasas',
      },
    ],
    next: {
      type: 0,
      id: '2345',
    },
  },
  '2345': {
    id: '2345',
    fields: [
      {
        label: 'Thank You',
        id: 'ssaf',
        value: 'value',
        error: 'error',
        type: 'text',
      },
    ],
  },
};

/**
 * if no {@link Form} exists, returns null
 * @param id {@link Form} id
 */
export function getFormByID(id: string): Form | null {
  console.log(id);
  const response = data[id];
  return response ? response : null;
}

/**
 * returns a {@link Form} based on the previous form ID
 * returns null if the {@link Form} is null or has no next
 * @param prevFormId previous {@link Form} ID
 */
export function getNextForm(prevFormId: string): Form | null {
  const form = getFormByID(prevFormId);
  if (!form) {
    return null;
  }
  const next = form.next;
  if (!next) {
    return null;
  }
  return getFormByID(next['id']);
}
