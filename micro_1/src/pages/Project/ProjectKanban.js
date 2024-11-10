import React, { useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { Drawer, Button, Input, Select, Form } from 'antd';
import '@syncfusion/ej2-react-kanban/styles/material.css';
import './KanbanStyles.css';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRGNGfV5ycEVHalxRTnZcUiweQnxTdEFiWH5ecHVVRmBYV0J+Wg==');

const { Option } = Select;

const KanbanBoard = () => {
  const initialData = [
    { Id: 'Task 1', Status: 'Open', Summary: 'Analyze the new requirements', Priority: 'High' },
    { Id: 'Task 2', Status: 'InProgress', Summary: 'Improve application performance', Priority: 'Normal' },
    { Id: 'Task 3', Status: 'Testing', Summary: 'Testing new features', Priority: 'Low' },
    { Id: 'Task 4', Status: 'Close', Summary: 'Release the final version', Priority: 'Critical' },
  ];

  const [kanbanData, setKanbanData] = useState(initialData);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  const kanbanColumns = [
    { headerText: 'Tasks to Do', keyField: 'Open' },
    { headerText: 'Currently Working', keyField: 'InProgress' },
    { headerText: 'Testing Phase', keyField: 'Testing' },
    { headerText: 'Completed Tasks', keyField: 'Close' },
  ];

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  const addNewTask = (task) => {
    setKanbanData((prevData) => [...prevData, task]);
  };

  const onFinish = (values) => {
    addNewTask(values);
    form.resetFields();
    closeDrawer();
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer} style={{ marginBottom: '20px' }}>
        Add New Task
      </Button>
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        keyField="Status"
        cardSettings={{
          headerField: 'Id',
          contentField: 'Summary',
          template: (data) => (
            <div className="custom-kanban-card">
              <div className="custom-kanban-card-header">
                <h3 style={{ margin: '0px' }}>{data.Id}</h3>
              </div>
              <div className="custom-kanban-card-content">
                <p style={{ margin: '0px' }}>{data.Summary}</p>
              </div>
              <div className="custom-kanban-card-priority">
                <span>Priority: {data.Priority}</span>
              </div>
            </div>
          ),
        }}
      >
        <ColumnsDirective>
          {kanbanColumns.map((col, index) => (
            <ColumnDirective key={index} {...col} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
      <Drawer
        title="Add New Task"
        placement="right"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        width={400}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ Status: 'Open', Priority: 'Normal' }}
        >
          <Form.Item
            label="Task ID"
            name="Id"
            rules={[{ required: true, message: 'Please enter Task ID' }]}
          >
            <Input placeholder="Enter Task ID" />
          </Form.Item>
          <Form.Item
            label="Summary"
            name="Summary"
            rules={[{ required: true, message: 'Please enter Summary' }]}
          >
            <Input placeholder="Enter Summary" />
          </Form.Item>
          <Form.Item label="Status" name="Status" rules={[{ required: true }]}>
            <Select>
              <Option value="Open">Open</Option>
              <Option value="InProgress">In Progress</Option>
              <Option value="Testing">Testing</Option>
              <Option value="Close">Close</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Priority" name="Priority" rules={[{ required: true }]}>
            <Select>
              <Option value="High">High</Option>
              <Option value="Normal">Normal</Option>
              <Option value="Low">Low</Option>
              <Option value="Critical">Critical</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default KanbanBoard;
