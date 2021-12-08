import React from 'react';

type FormItemProps = {
  name: string;
  label: string;
};

export const FormItem: React.FC<FormItemProps> = (props) => {
  return <>{props.children}</>;
};
