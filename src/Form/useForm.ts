import React from 'react';
import { Callbacks, FormInstance, Store } from "./interface";

export class FormStore {
  private store: Store = {};
  private forceRootUpdate: () => void;
  private callbacks: Callbacks = {};


  constructor(forceRootUpdate: () => void) {
    this.forceRootUpdate = forceRootUpdate;
  }

  public getForm = () => ({
    getFieldValue: this.getFieldValue,
    setFieldValue: this.setFieldValue,
    setFieldsValue: this.setFieldsValue,
    getFieldsValue: this.getFieldsValue,
    setCallbacks: this.setCallbacks,
    setInitialValues: this.setInitialValues,
    submit: this.submit,
  });
  private setCallbacks = (callbacks: Callbacks) => {
    this.callbacks = callbacks;
  };
  getFieldsValue = () => {
    return this.store;
  }
  setFieldsValue = (newStore: Store) => {
    this.store = { ...this.store, ...newStore };
    this.forceRootUpdate();
  }
  setFieldValue = (name: string, value: any) => {
    this.store[name] = value;
    this.forceRootUpdate();
  }
  getFieldValue = (key: string) => {
    return this.store[key]
  }
  setInitialValues = (newStore: Store, init: boolean) => {
    if (init) {
      this.setFieldsValue(newStore)
    }
  }
  submit = () => {
    const { onFinish } = this.callbacks
    if (onFinish) {
      onFinish(this.store)
    }
  }
}

function useForm() {
  const formRef = React.useRef<FormInstance>();

  // 刷新组件
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