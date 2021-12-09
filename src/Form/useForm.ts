import React from 'react';
import { Store } from "./interface";

export class FormStore {
  private store: Store = {};
  private forceRootUpdate: () => void;

  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }
  public getForm = () => ({
    getFieldValue: this.getFieldValue,
    setFieldsValue: this.setFieldsValue,
    getFieldsValue: this.getFieldsValue,
    // getFieldError: this.getFieldError,
    // getFieldWarning: this.getFieldWarning,
    // getFieldsError: this.getFieldsError,
    // isFieldsTouched: this.isFieldsTouched,
    // isFieldTouched: this.isFieldTouched,
    // isFieldValidating: this.isFieldValidating,
    // isFieldsValidating: this.isFieldsValidating,
    // resetFields: this.resetFields,
    // setFields: this.setFields,
    // setFieldsValue: this.setFieldsValue,
    // validateFields: this.validateFields,
    submit: this.submit,

    // getInternalHooks: this.getInternalHooks,
  });
  getFieldsValue = () => {
    return this.store;
  }
  setFieldsValue = (newStore: Store) => {
    this.store = { ...this.store, ...newStore };
  }
  getFieldValue = (key: string) => {
    return this.store[key]
  }
  submit = () => {
    return this.store;
  }

}

function useForm() {
  const formRef = React.useRef<any>();
  const [, forceUpdate] = React.useState({});

  if (!formRef.current) {
    // if (form) {
    //   formRef.current = form;
    // } else {
    // Create a new FormStore if not provided
    const forceReRender = () => {
      forceUpdate({});
    };

    const formStore: FormStore = new FormStore(forceReRender);

    formRef.current = formStore.getForm();
    // }
  }

  return [formRef.current];
}

export default useForm;