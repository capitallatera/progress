import { Modal } from 'antd';
import React from 'react';
import ModalForm from './ModalForm';
// import ReactDOM from 'react-dom'
const AddModal = ({ isVisible, setIsVisible, form, finish }) => {
  return (
    <Modal
      visible={isVisible}
      footer={false}
      closable={false}
    >
      <ModalForm form={form} setIsVisible={setIsVisible}
        finish={finish}
      />
    </Modal>
  )
}
export default AddModal;
