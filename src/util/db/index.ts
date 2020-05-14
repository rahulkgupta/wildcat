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

export function getFormByID(id: string): Form | null {
  const response = data[id];
  return response ? response : null;
}

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
