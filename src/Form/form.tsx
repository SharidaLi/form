import React from 'react';
import { Callbacks, Store } from './interface';
import FieldContext from './context/FieldContext';
import useForm from './useForm';

type FormProps = {
  onFinish?: Callbacks['onFinish'];
  initialValues?: Store;
  form?: any;
};

export const Form: React.FC<FormProps> = (props) => {
  const { onFinish, initialValues, form } = props;
  const [formInstance] = useForm();
  formInstance.setCallbacks({ onFinish });

  // const mountRef = React.useRef<boolean | null>(null);
  // formInstance.setInitialValues(initialValues, !mountRef.current);
  // if (!mountRef.current) {
  //   mountRef.current = true;
  // }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {props.children}
      </FieldContext.Provider>
    </form>
  );
};
