import React, { useState } from 'react';
import { Card, Col, Row, Button } from 'antd';

export const OrdersBoard = () => {
  //Added Raskan_dev
 
  const [orderStatus, setOrderStatus] = useState({
    1901: false, // New Order
    1902: false, // New Order
    1903: false, // Active Order
    1904: false, // Active Order
    1905: false, // Ready Order
  });

  // Function to handle approval, ready, or complete actions
  const handleAction = (orderId) => {
    setOrderStatus((prevState) => ({
      ...prevState,
      [orderId]: true,
    }));
  };

  return (
    <span style={{ margin: 24 }}>
      <Row gutter={16}>
        {/* New Orders Section */}
        <Col span={8}>
          <Card title="New" bordered={false}>
            {!orderStatus[1901] && (
              <Card
                title="Lunch from Olive & Hyde Restaurant"
                bordered={false}
                style={{ marginBottom: 16 }}
              >
                <p>5 items - €20.20</p>
                <p>Order #1901</p>
                <Button type="primary" onClick={() => handleAction(1901)}>
                  Approve
                </Button>
              </Card>
            )}
            {!orderStatus[1902] && (
              <Card
                title="Lunch from Olive & Hyde Restaurant"
                bordered={false}
              >
                <p>3 items - €64.70</p>
                <p>Order #1902</p>
                <Button type="primary" onClick={() => handleAction(1902)}>
                  Approve
                </Button>
              </Card>
            )}
          </Card>
        </Col>

        {/* Active Orders Section */}
        <Col span={8}>
          <Card title="Active" bordered={false}>
            {!orderStatus[1903] && (
              <Card
                title="Lunch from Sunnies Cafe"
                bordered={false}
                style={{ marginBottom: 16 }}
              >
                <p>2 items - €19.50</p>
                <p>Order #1903</p>
                <Button type="primary" onClick={() => handleAction(1903)}>
                  Ready
                </Button>
              </Card>
            )}
            {!orderStatus[1904] && (
              <Card
                title="Lunch from Olive & Hyde Restaurant"
                bordered={false}
              >
                <p>5 items - €20.20</p>
                <p>Order #1904</p>
                <Button type="primary" onClick={() => handleAction(1904)}>
                  Ready
                </Button>
              </Card>
            )}
          </Card>
        </Col>

        {/* Ready Orders Section */}
        <Col span={8}>
          <Card title="Ready" bordered={false}>
            {!orderStatus[1905] && (
              <Card
                title="Breakfast from Sunnies Cafe"
                bordered={false}
              >
                <p>2 items - €19.50</p>
                <p>Order #1905</p>
                <Button type="primary" onClick={() => handleAction(1905)}>
                  Complete
                </Button>
              </Card>
            )}
          </Card>
        </Col>
      </Row>
    </span>
  );
};
