import './App.css';
import React, { useEffect, useState } from 'react';
import { Avatar, Button, Form } from 'antd';
import AddModal from './Component/AddModal';
import DataTable from './Component/DataTable';
import { nanoid } from 'nanoid';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState(JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []);
  const [check, setCheck] = useState(false);
  const [id, setId] = useState(0);
  const onChange = (e) => {
    setCheck(e.target.checked)
  }
  const finish = (value) => {
    if (!form.getFieldsValue()) return
    const data = { key: nanoid(), action: false, ...form.getFieldsValue() }
    setDataSource([...dataSource, data])
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(dataSource))
  }, [dataSource])
  const count = dataSource.filter((item) => item.action)

  const removeItem = (id) => {
    console.log('Working', id)
    setDataSource(dataSource.filter((item) => (item.key !== id)))
  }
  return (
    <div className="App">
      <div>Progress</div>
      <Button type="primary" onClick={() => setIsVisible(true)} >Add Task</Button>
      <AddModal isVisible={isVisible} setIsVisible={setIsVisible} form={form}
        finish={finish}
      />
      <DataTable dataSource={dataSource} onChange={onChange} check={check} setId={setId} id={id} setDataSource={setDataSource} removeItem={removeItem} />
      <Avatar className='avatar-progress' >
        {
          Math.floor((count.length / dataSource.length) * 100) ?
            Math.floor((count.length / dataSource.length) * 100)
            :
            0
        }
      </Avatar>
    </div>
  );
}

export default App;
