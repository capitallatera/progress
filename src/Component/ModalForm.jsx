import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 22,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 12,
  },
};
const finish = (value) => {
  console.log(value, 'Finish');
}



const ModalForm = ({ form, setIsVisible, finish }) => {
  const resetForm = () => {
    form.resetFields()
  }
  return (
    <div>
      <Form
        {...layout}
        form={form}
        onFinish={() => {
          finish();
          setIsVisible(false);
          resetForm();
        }}
      >
        <Form.Item
          name="task"
          label="Task"
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...tailLayout}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}
export default ModalForm;