import gql from 'graphql-tag';

export default gql`
  type Field {
    id: ID!
    label: String
    value: String
    error: String
    fieldType: String
  }

  # figure out enums
  # figure out if you can use type
  type FormPointer {
    nextType: Int
    id: ID!
  }

  type Form {
    id: ID!
    fields: [Field]
    next: FormPointer
  }

  type Query {
    form(id: ID!): Form
  }

  extend type Query {
    forms: [Form]
  }
`;
