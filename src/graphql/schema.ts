import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "forms" */
export type Forms = {
  __typename?: 'forms';
  created_at: Scalars['timestamptz'];
  data: Scalars['jsonb'];
  id: Scalars['uuid'];
  next?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "forms" */
export type FormsDataArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "forms" */
export type FormsNextArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "forms" */
export type Forms_Aggregate = {
  __typename?: 'forms_aggregate';
  aggregate?: Maybe<Forms_Aggregate_Fields>;
  nodes: Array<Forms>;
};

/** aggregate fields of "forms" */
export type Forms_Aggregate_Fields = {
  __typename?: 'forms_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Forms_Max_Fields>;
  min?: Maybe<Forms_Min_Fields>;
};


/** aggregate fields of "forms" */
export type Forms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Forms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "forms" */
export type Forms_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Forms_Max_Order_By>;
  min?: Maybe<Forms_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Forms_Append_Input = {
  data?: Maybe<Scalars['jsonb']>;
  next?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "forms" */
export type Forms_Arr_Rel_Insert_Input = {
  data: Array<Forms_Insert_Input>;
  on_conflict?: Maybe<Forms_On_Conflict>;
};

/** Boolean expression to filter rows from the table "forms". All fields are combined with a logical 'AND'. */
export type Forms_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Forms_Bool_Exp>>>;
  _not?: Maybe<Forms_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Forms_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  next?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "forms" */
export enum Forms_Constraint {
  /** unique or primary key constraint */
  FormsPkey = 'forms_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Forms_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
  next?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Forms_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Forms_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "forms" */
export type Forms_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  next?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Forms_Max_Fields = {
  __typename?: 'forms_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "forms" */
export type Forms_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Forms_Min_Fields = {
  __typename?: 'forms_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "forms" */
export type Forms_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "forms" */
export type Forms_Mutation_Response = {
  __typename?: 'forms_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Forms>;
};

/** input type for inserting object relation for remote table "forms" */
export type Forms_Obj_Rel_Insert_Input = {
  data: Forms_Insert_Input;
  on_conflict?: Maybe<Forms_On_Conflict>;
};

/** on conflict condition type for table "forms" */
export type Forms_On_Conflict = {
  constraint: Forms_Constraint;
  update_columns: Array<Forms_Update_Column>;
  where?: Maybe<Forms_Bool_Exp>;
};

/** ordering options when selecting data from "forms" */
export type Forms_Order_By = {
  created_at?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "forms" */
export type Forms_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Forms_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>;
  next?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "forms" */
export enum Forms_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Next = 'next',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "forms" */
export type Forms_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  next?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "forms" */
export enum Forms_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Next = 'next',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "integrations" */
export type Integrations = {
  __typename?: 'integrations';
  created_at: Scalars['timestamptz'];
  data: Scalars['jsonb'];
  id: Scalars['uuid'];
  service: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "integrations" */
export type IntegrationsDataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "integrations" */
export type Integrations_Aggregate = {
  __typename?: 'integrations_aggregate';
  aggregate?: Maybe<Integrations_Aggregate_Fields>;
  nodes: Array<Integrations>;
};

/** aggregate fields of "integrations" */
export type Integrations_Aggregate_Fields = {
  __typename?: 'integrations_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Integrations_Max_Fields>;
  min?: Maybe<Integrations_Min_Fields>;
};


/** aggregate fields of "integrations" */
export type Integrations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Integrations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "integrations" */
export type Integrations_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Integrations_Max_Order_By>;
  min?: Maybe<Integrations_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Integrations_Append_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "integrations" */
export type Integrations_Arr_Rel_Insert_Input = {
  data: Array<Integrations_Insert_Input>;
  on_conflict?: Maybe<Integrations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "integrations". All fields are combined with a logical 'AND'. */
export type Integrations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Integrations_Bool_Exp>>>;
  _not?: Maybe<Integrations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Integrations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  service?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "integrations" */
export enum Integrations_Constraint {
  /** unique or primary key constraint */
  IntegrationsPkey = 'integrations_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Integrations_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Integrations_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Integrations_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "integrations" */
export type Integrations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  service?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Integrations_Max_Fields = {
  __typename?: 'integrations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  service?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "integrations" */
export type Integrations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  service?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Integrations_Min_Fields = {
  __typename?: 'integrations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  service?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "integrations" */
export type Integrations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  service?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "integrations" */
export type Integrations_Mutation_Response = {
  __typename?: 'integrations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Integrations>;
};

/** input type for inserting object relation for remote table "integrations" */
export type Integrations_Obj_Rel_Insert_Input = {
  data: Integrations_Insert_Input;
  on_conflict?: Maybe<Integrations_On_Conflict>;
};

/** on conflict condition type for table "integrations" */
export type Integrations_On_Conflict = {
  constraint: Integrations_Constraint;
  update_columns: Array<Integrations_Update_Column>;
  where?: Maybe<Integrations_Bool_Exp>;
};

/** ordering options when selecting data from "integrations" */
export type Integrations_Order_By = {
  created_at?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  service?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "integrations" */
export type Integrations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Integrations_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "integrations" */
export enum Integrations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "integrations" */
export type Integrations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  service?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "integrations" */
export enum Integrations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Data = 'data',
  /** column name */
  Id = 'id',
  /** column name */
  Service = 'service',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "forms" */
  delete_forms?: Maybe<Forms_Mutation_Response>;
  /** delete single row from the table: "forms" */
  delete_forms_by_pk?: Maybe<Forms>;
  /** delete data from the table: "integrations" */
  delete_integrations?: Maybe<Integrations_Mutation_Response>;
  /** delete single row from the table: "integrations" */
  delete_integrations_by_pk?: Maybe<Integrations>;
  /** insert data into the table: "forms" */
  insert_forms?: Maybe<Forms_Mutation_Response>;
  /** insert a single row into the table: "forms" */
  insert_forms_one?: Maybe<Forms>;
  /** insert data into the table: "integrations" */
  insert_integrations?: Maybe<Integrations_Mutation_Response>;
  /** insert a single row into the table: "integrations" */
  insert_integrations_one?: Maybe<Integrations>;
  /** update data of the table: "forms" */
  update_forms?: Maybe<Forms_Mutation_Response>;
  /** update single row of the table: "forms" */
  update_forms_by_pk?: Maybe<Forms>;
  /** update data of the table: "integrations" */
  update_integrations?: Maybe<Integrations_Mutation_Response>;
  /** update single row of the table: "integrations" */
  update_integrations_by_pk?: Maybe<Integrations>;
};


/** mutation root */
export type Mutation_RootDelete_FormsArgs = {
  where: Forms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Forms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_IntegrationsArgs = {
  where: Integrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Integrations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_FormsArgs = {
  objects: Array<Forms_Insert_Input>;
  on_conflict?: Maybe<Forms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Forms_OneArgs = {
  object: Forms_Insert_Input;
  on_conflict?: Maybe<Forms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_IntegrationsArgs = {
  objects: Array<Integrations_Insert_Input>;
  on_conflict?: Maybe<Integrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Integrations_OneArgs = {
  object: Integrations_Insert_Input;
  on_conflict?: Maybe<Integrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FormsArgs = {
  _append?: Maybe<Forms_Append_Input>;
  _delete_at_path?: Maybe<Forms_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Forms_Delete_Elem_Input>;
  _delete_key?: Maybe<Forms_Delete_Key_Input>;
  _prepend?: Maybe<Forms_Prepend_Input>;
  _set?: Maybe<Forms_Set_Input>;
  where: Forms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Forms_By_PkArgs = {
  _append?: Maybe<Forms_Append_Input>;
  _delete_at_path?: Maybe<Forms_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Forms_Delete_Elem_Input>;
  _delete_key?: Maybe<Forms_Delete_Key_Input>;
  _prepend?: Maybe<Forms_Prepend_Input>;
  _set?: Maybe<Forms_Set_Input>;
  pk_columns: Forms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_IntegrationsArgs = {
  _append?: Maybe<Integrations_Append_Input>;
  _delete_at_path?: Maybe<Integrations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Integrations_Delete_Elem_Input>;
  _delete_key?: Maybe<Integrations_Delete_Key_Input>;
  _prepend?: Maybe<Integrations_Prepend_Input>;
  _set?: Maybe<Integrations_Set_Input>;
  where: Integrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Integrations_By_PkArgs = {
  _append?: Maybe<Integrations_Append_Input>;
  _delete_at_path?: Maybe<Integrations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Integrations_Delete_Elem_Input>;
  _delete_key?: Maybe<Integrations_Delete_Key_Input>;
  _prepend?: Maybe<Integrations_Prepend_Input>;
  _set?: Maybe<Integrations_Set_Input>;
  pk_columns: Integrations_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "forms" */
  forms: Array<Forms>;
  /** fetch aggregated fields from the table: "forms" */
  forms_aggregate: Forms_Aggregate;
  /** fetch data from the table: "forms" using primary key columns */
  forms_by_pk?: Maybe<Forms>;
  /** fetch data from the table: "integrations" */
  integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "integrations" */
  integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "integrations" using primary key columns */
  integrations_by_pk?: Maybe<Integrations>;
};


/** query root */
export type Query_RootFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** query root */
export type Query_RootForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** query root */
export type Query_RootForms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootIntegrationsArgs = {
  distinct_on?: Maybe<Array<Integrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Integrations_Order_By>>;
  where?: Maybe<Integrations_Bool_Exp>;
};


/** query root */
export type Query_RootIntegrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Integrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Integrations_Order_By>>;
  where?: Maybe<Integrations_Bool_Exp>;
};


/** query root */
export type Query_RootIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "forms" */
  forms: Array<Forms>;
  /** fetch aggregated fields from the table: "forms" */
  forms_aggregate: Forms_Aggregate;
  /** fetch data from the table: "forms" using primary key columns */
  forms_by_pk?: Maybe<Forms>;
  /** fetch data from the table: "integrations" */
  integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "integrations" */
  integrations_aggregate: Integrations_Aggregate;
  /** fetch data from the table: "integrations" using primary key columns */
  integrations_by_pk?: Maybe<Integrations>;
};


/** subscription root */
export type Subscription_RootFormsArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForms_AggregateArgs = {
  distinct_on?: Maybe<Array<Forms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Forms_Order_By>>;
  where?: Maybe<Forms_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootForms_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootIntegrationsArgs = {
  distinct_on?: Maybe<Array<Integrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Integrations_Order_By>>;
  where?: Maybe<Integrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIntegrations_AggregateArgs = {
  distinct_on?: Maybe<Array<Integrations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Integrations_Order_By>>;
  where?: Maybe<Integrations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIntegrations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetFormQueryVariables = {
  id: Scalars['uuid'];
};


export type GetFormQuery = (
  { __typename?: 'query_root' }
  & { forms: Array<(
    { __typename?: 'forms' }
    & Pick<Forms, 'data'>
  )> }
);


export const GetFormDocument = gql`
    query getForm($id: uuid!) {
  forms(where: {id: {_eq: $id}}) {
    data
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getForm(variables: GetFormQueryVariables): Promise<GetFormQuery> {
      return withWrapper(() => client.request<GetFormQuery>(print(GetFormDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;