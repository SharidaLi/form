import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [form] = Form.useForm();

  const onFinish = (value: object) => {
    console.log(value);
  };

  const onFinishFailed = (value: any) => {
    console.log(value);
  };

  return (
    <div className="App">
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // initialValues={{ username: 'zhangsan' }}
      >
        <Form.Item label="姓名" name="username">
          <input type="text" placeholder="请输入" />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <input type="text" placeholder="请输入" />
        </Form.Item>
        <button>提交</button>
      </Form>
    </div>
  );
}

export default App;
