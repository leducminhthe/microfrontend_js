import React from 'react';
import { Card, Row, Col, Progress, Avatar, Tooltip, Tag, Dropdown, Space } from 'antd';
import { AntDesignOutlined, UserOutlined, PaperClipOutlined, CheckCircleOutlined, ClockCircleOutlined, DownOutlined } from '@ant-design/icons';

function Project() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  return (
    <Row gutter={[8,8]}>
      <Col xs={24} sm={24} md={8} lg={8} xl={6}>
        <Card
          title="Project 1"
          extra={
            <Dropdown
              menu={{ items }}
              placement="bottomRight"
              trigger={['click']}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          }
          style={{ width: '100%' }}
        >
          <Row gutter={[8,8]}>
            <Col span={24} style={{ display: 'flex', color: 'rgb(8 10 12 / 49%)' }}>
              <div>
                <PaperClipOutlined />
                <span>12</span>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <CheckCircleOutlined />
                <span>27/32</span>
              </div>
              <div style={{ marginLeft: '10px' }}>
                <Tag icon={<ClockCircleOutlined />}>
                  21 days left
                </Tag>
              </div>
            </Col>
            <Col span={24}>
              <Progress percent={50} status="active" />
            </Col>
            <Col span={24}>
              <Avatar.Group
                max={{
                  count: 3,
                  style: { color: '#f56a00', backgroundColor: '#fde3cf' },
                }}
              >
                <Tooltip title="C" placement="top">
                  <Avatar style={{ backgroundColor: '#f56a80' }}>C</Avatar>
                </Tooltip>
                <Tooltip title="K" placement="top">
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                </Tooltip>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
