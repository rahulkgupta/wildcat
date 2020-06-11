const getQuery = (id: string): string => {
  return `{
    forms_by_pk(id: "${id}") {
      data,
      id
    }
  }`;
};

export default getQuery;
