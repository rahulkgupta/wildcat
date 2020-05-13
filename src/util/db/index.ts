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

export function getFormByID(id: string): Form {
  return data[id];
}

export function getNextForm(prevFormId: string): Form {
  const form = data[prevFormId];
  return data[form.next?.id as string];
}
