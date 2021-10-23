import React, { useEffect } from 'react';
import { Checkbox, Table } from 'antd';
import './Style.css'

const DataTable = ({ dataSource, onChange, check, setId, id, setDataSource, removeItem }) => {

  useEffect(() => {
    const array = dataSource.map(data => {
      if (data.key === id) {
        return { ...data, action: check };
      }
      return data;

    });
    setDataSource(array)
  }, [id, check]);


  const columns = [
    {
      title: 'Action',
      key: 'action',
      width: 100,
      render: (text) => (
        <div onClick={() => { setId(text.key) }}>
          <Checkbox checked={text.action} onChange={onChange} />
        </div>
      )
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: (text) => <p>{text}</p>
    },
    {
      key: 'delete',
      width: 100,
      render: (text) => (
        <div onClick={() => {
          removeItem(text.key)
        }}>
          <a>Delete</a>
        </div>
      )
    }

  ];

  return (
    <div className='table-container'>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
}
export default DataTable;