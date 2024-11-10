import React, { useState } from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { Drawer, Button, Input, Select, Form, Dropdown, Row, Col, Tag, Tooltip, Avatar } from 'antd';
import '@syncfusion/ej2-react-kanban/styles/material.css';
import './KanbanStyles.css';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  MoreOutlined
} from "@ant-design/icons";
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1FpRGNGfV5ycEVHalxRTnZcUiweQnxTdEFiWH5ecHVVRmBYV0J+Wg==');

const { Option } = Select;

const KanbanBoard = () => {
  const initialData = [
    { 
      Id: 'Task 1',
      Status: 'Open',
      Summary: 'Analyze the new requirements',
      Priority: 'High',
      members: [
        { name: 'K', color: '#f56a80' },
        { name: 'D', color: '#f56f80' },
        { name: 'E', color: '#f51a80' },
        { name: 'F', color: '#f56a89' },
      ],
    },
    {
      Id: 'Task 2',
      Status: 'InProgress',
      Summary: 'Improve application performance',
      Priority: 'Normal',
      members: [
        { name: 'K', color: '#f56a80' },
        { name: 'D', color: '#f56f80' },
      ],
    },
    {
      Id: 'Task 3',
      Status: 'Testing',
      Summary: 'Testing new features',
      Priority: 'Low',
      members: [
        { name: 'A', color: '#87d068' },
        { name: 'B', color: '#81d062' },
        { name: 'E', color: '#f51a80' },
        { name: 'F', color: '#f56a89' },
      ],
    },
    {
      Id: 'Task 4',
      Status: 'Close',
      Summary: 'Release the final version',
      Priority: 'Critical',
      members: [
        { name: 'D', color: '#f56f80' },
      ],
    },
  ];
  const [kanbanData, setKanbanData] = useState(initialData);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [form] = Form.useForm();
  const initialColumns = [
    { headerText: 'Tasks to Do', keyField: 'Open' },
    { headerText: 'Currently Working', keyField: 'InProgress' },
    { headerText: 'Testing Phase', keyField: 'Testing' },
    { headerText: 'Completed Tasks', keyField: 'Close' },
  ];
  const [kanbanColumns, setKanbanColumns] = useState(initialColumns);
  const [selectedColumnKey, setSelectedColumnKey] = useState(null);
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

  const handleRenameColumn = (newHeaderText) => {
    setKanbanColumns(kanbanColumns.map(col =>
      col.keyField === selectedColumnKey ? { ...col, headerText: newHeaderText } : col
    ));
  };

  const items = [
    {
      label: (
        <div>
          Rename Column
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div>
          Delete
        </div>
      ),
      key: '1',
    },
  ];

  const columnTemplate = (props) => {
    return (
      <Row style={{ alignItems: 'center' }}>
        <Col span={20}>
          <span>{props.headerText}</span>
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
            placement="bottomRight"
          >
            <Button type="text" icon={<MoreOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    );
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
            <Row gutter={[8]} className="task-wrapper">
              <Col span={24}>
                {data.Id}
              </Col>
              <Col span={24}>
                {data.Summary}
              </Col>
              <Col span={24}>
                <span>Priority: {data.Priority}</span>
              </Col>
              <Col span={24}>
                <Row gutter={[8]}>
                  <Col span={16}>
                    <Tag icon={<CalendarOutlined />}>11 july</Tag>
                  </Col>
                  <Col span={8} style={{ textAlign: 'right' }}>
                    <Avatar.Group
                      max={{
                        count: 2,
                        style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                      }}
                    >
                      {
                        data.members.map((member) => (
                          <Tooltip title={member.name} placement="top">
                            <Avatar style={{ backgroundColor: `${member.color}` }}>{member.name}</Avatar>
                          </Tooltip>
                        ))
                      }
                    </Avatar.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
          ),
        }}
      >
        <ColumnsDirective>
          {kanbanColumns.map((col, index) => (
            <ColumnDirective key={index} {...col} template={columnTemplate} />
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
