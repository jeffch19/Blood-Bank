import { Modal } from 'antd';
import React from 'react';

function InventoryForm({ open, setOpen, reloadData }) {
 return (
    <Modal
      title="Add Inventory"
      visible={open} // Note: The prop should be `visible` for controlling the visibility of the Modal
      onCancel={() => setOpen(false)}
      centered
    ></Modal>
 );
}

export default InventoryForm;