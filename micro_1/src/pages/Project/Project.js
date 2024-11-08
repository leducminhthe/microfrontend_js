import React from "react";
import {
  Card,
  Row,
  Col,
  Progress,
  Avatar,
  Tooltip,
  Tag,
  Dropdown,
  Space,
} from "antd";
import {
  AntDesignOutlined,
  UserOutlined,
  PaperClipOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  MoreOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";

const data = [
  {
    name: 'Project 1',
    type: 'Web Application',
    file: 12,
    total: 32,
    success: 12,
    dayLeft: 20,
    process: 50,
    members: [
      { name: 'K', color: '#f56a80' },
      { name: 'D', color: '#f56f80' },
      { name: 'E', color: '#f51a80' },
      { name: 'F', color: '#f56a89' },
    ],
  },
  {
    name: 'Project 2',
    type: 'ReactJS',
    file: 4,
    total: 16,
    success: 9,
    dayLeft: 14,
    process: 30,
    members: [
      { name: 'K', color: '#f56a80' },
      { name: 'D', color: '#f56f80' },
    ],
  },
  {
    name: 'Project 3',
    type: 'Dot net',
    file: 9,
    total: 18,
    success: 11,
    dayLeft: 25,
    process: 80,
    members: [
      { name: 'A', color: '#87d068' },
      { name: 'B', color: '#81d062' },
      { name: 'E', color: '#f51a80' },
      { name: 'F', color: '#f56a89' },
    ],
  },
  {
    name: 'Project 4',
    type: 'Laravel',
    file: 3,
    total: 9,
    success: 4,
    dayLeft: 5,
    process: 75,
    members: [
      { name: 'D', color: '#87d068' },
      { name: 'K', color: '#81d062' },
      { name: 'E', color: '#f51a80' },
      { name: 'F', color: '#f56a89' },
    ],
  },
]

function Project() {
  const items = [
    {
      label: <div><EyeOutlined /> <span>View</span></div> ,
      key: "0",
    },
    {
      label: <div><EditOutlined /> <span>Edit</span></div> ,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <div><DeleteOutlined /> <span>Delete project</span></div> ,
      key: "3",
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      {
        data.map((item) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <Card
              title={
                <div>
                  {item.name}
                  <br />
                  {item.type}
                </div>
              }
              extra={
                <Dropdown
                  menu={{ items }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <MoreOutlined />
                    </Space>
                  </a>
                </Dropdown>
              }
              style={{ width: "100%" }}
            >
              <Row gutter={[8, 8]}>
                <Col
                  span={24}
                  style={{ display: "flex", color: "rgb(8 10 12 / 49%)" }}
                >
                  <div>
                    <PaperClipOutlined />
                    <span style={{ marginLeft: '2px' }}>{item.file}</span>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <CheckCircleOutlined />
                    <span style={{ marginLeft: '2px' }}>{item.success}/{item.total}</span>
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <Tag icon={<ClockCircleOutlined />}>{item.dayLeft} days left</Tag>
                  </div>
                </Col>
                <Col span={24}>
                  <Progress percent={item.process} />
                </Col>
                <Col span={24}>
                  <Avatar.Group
                    max={{
                      count: 3,
                      style: { color: "#f56a00", backgroundColor: "#fde3cf" },
                    }}
                  >
                    {
                      item.members.map((member) => (
                        <Tooltip title={member.name} placement="top">
                          <Avatar style={{ backgroundColor: `${member.color}` }}>{member.name}</Avatar>
                        </Tooltip>
                      ))
                    }
                  </Avatar.Group>
                </Col>
              </Row>
            </Card>
          </Col>
        ))
      }
    </Row>
  );
}

export default Project;
