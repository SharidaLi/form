import React from 'react';

type FormItemProps = {
  name: string;
  label: string;
};

export const FormItem: React.FC<FormItemProps> = (props) => {
  const { label } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>{label}</div>
      <div style={{ marginLeft: 8 }}>{props.children}</div>
    </div>
  );
};
