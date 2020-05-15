interface Field {
  label?: string;
  value?: string;
  error?: string;
  type?: string;
}

interface Form {
  fields: {
    [fieldID: string]: Field;
  };
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
    fields: {
      ssaf: {
        label: 'label',
        value: 'value',
        error: 'error',
        type: 'text',
      },
      aasas: {
        label: 'label',
        value: 'value',
        type: 'submit',
      },
    },
    next: {
      type: 0,
      id: '2345',
    },
  },
  '2345': {
    fields: {
      afsafd: {
        label: 'thank you',
        type: 'plain-text',
      },
    },
  },
};

/**
 * if no {@link Form} exists, returns null
 * @param id {@link Form} id
 */
export function getFormByID(id: string): Form | null {
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
