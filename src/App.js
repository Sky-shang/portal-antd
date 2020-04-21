import React, { Component } from 'react'
import { Layout, Breadcrumb, Row, Col } from 'antd'
import './App.css'

const { Header, Footer, Content } = Layout
const style = { background: '#0092ff', padding: '8px 0' }
class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
        </Header>
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default App
