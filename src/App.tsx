import React, { useState } from 'react';
import Form from './Form';

function App() {
  const onFinish = () => {
    console.log('123');
  };
  return (
    <div className="App">
      <Form onFinish={onFinish}>
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
