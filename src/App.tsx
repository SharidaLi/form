import React, { useState } from 'react';
import Form from './Form';
console.log('🚀 ~ file: App.tsx ~ line 3 ~ Form', Form);
import { FormItem } from './Form/form-item';

const { Item } = Form;
console.log(Form.Item);

function App() {
  const onFinish = () => {};
  return (
    <div className="App">
      <Form onFinish={onFinish}>
        <Form.Item label="姓名" name="username">
          <input type="text" placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <input type="text" placeholder="请输入" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
