import React from 'react';

type FormProps = {
  onFinish?: () => void;
};

export const Form: React.FC<FormProps> = (props) => {
  const { onFinish } = props;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onFinish?.();
      }}
    >
      {props.children}
    </form>
  );
};
