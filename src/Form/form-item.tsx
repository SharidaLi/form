import React, { useContext, ReactElement } from 'react';
import FieldContext from './context/FieldContext';
import { ChildProps, FormInstance } from './interface';

type FormItemProps = {
  name: string;
  label: string;
};

export const FormItem: React.FC<FormItemProps> = (props) => {
  const { label, name, children } = props;
  
  const { getFieldValue, setFieldValue } =
    useContext<FormInstance>(FieldContext);

  const getControlled = (childProps: ChildProps) => {
    const { onChange } = childProps;
    return {
      ...childProps,
      value: getFieldValue(name), // 如果为 undefined 会变成 非受控组件
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event.target.value);
        // 如果子元素存在 onChange 事件，执行子元素的事件
        if (onChange) {
          onChange(event);
        }
      },
    };
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>{label}</div>
      <div style={{ marginLeft: 8 }}>
        {React.cloneElement(
          children as ReactElement,
          getControlled((children as ReactElement).props)
        )}
      </div>
    </div>
  );
};
