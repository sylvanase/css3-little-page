import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage({ location }) {
  return (
    <MainLayout location={location}>
      <Row>
        <Col span={24}>
          <Button type="primary">
            <Link to="/doraemon">哆啦A梦</Link>
          </Button>
        </Col>
      </Row>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
