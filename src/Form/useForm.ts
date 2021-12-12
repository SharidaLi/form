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
  }
  setFieldValue = (name: string, value: any) => {
    this.store[name] = value;
  }
  getFieldValue = (key: string) => {
    return this.store[key];
  }
  setInitialValues = (newStore: Store, init: boolean) => {
    if (init) {
      this.setFieldsValue(newStore)
    }
  }
  validateFields = () => {
    return new Promise<void>((resolve, reject) => {
      resolve()
    })
  }

  submit = () => {
    this.validateFields().then(
      () => {
        const { onFinish } = this.callbacks
        if (onFinish) {
          onFinish(this.store)
        }
      }
    ).catch(
      errors => {
        const { onFinishFailed } = this.callbacks
        if (onFinishFailed) {
          onFinishFailed(errors)
        }
      }
    )
  }
}

function useForm() {
  const formRef = React.useRef<FormInstance>();

  // 刷新组件
  const [, forceUpdate] = React.useState({});
  if (!formRef.current) {
    const forceReRender = () => {
      forceUpdate({});
    };

    const formStore: FormStore = new FormStore(forceReRender);

    formRef.current = formStore.getForm();
  }

  return [formRef.current];
}

export default useForm;