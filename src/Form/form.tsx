import React from 'react';
import { Store } from './interface';
import FormContext from './context/FormContext';

import useForm from './useForm';

type FormProps = {
  onFinish?: () => void;
  initialValues?: Store;
};

export const Form: React.FC<FormProps> = (props) => {
  const { onFinish, initialValues } = props;
  const [form] = useForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onFinish?.();
      }}
    >
      <FormContext.Provider value={form}>{props.children}</FormContext.Provider>
    </form>
  );
};
