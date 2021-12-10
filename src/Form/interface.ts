export type StoreValue = any;
export type Store = Record<string, StoreValue>;

export type FormInstance = {
  getFieldValue: (key: string) => any;
  setFieldValue: (name: string, value: any) => void;
  setFieldsValue: (newStore: Store) => void;
  getFieldsValue: () => Store;
  setCallbacks: (callbacks: Callbacks) => void;
  setInitialValues: (newStore: Store, init: boolean) => void;
  submit: () => void;
};

export type ErrorField = { name: string; errors: string[] }[];

export interface ValidateErrorEntity<Values = any> {
  values: Values;
  errorFields: ErrorField[];
  outOfDate: boolean;
}

export interface Callbacks<Values = any> {
  // onValuesChange?: (changedValues: any, values: Values) => void;
  // onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void;
  onFinish?: (values: Values) => void;
  onFinishFailed?: (errorInfo: ValidateErrorEntity<Values>) => void;
}

export interface ChildProps {
  [name: string]: any;
}