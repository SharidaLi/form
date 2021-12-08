import React from 'react';

type FormProps = {
  onFinish?: () => void;
};

export const Form: React.FC<FormProps> = (props) => {
  return <form>{props.children}</form>;
};
