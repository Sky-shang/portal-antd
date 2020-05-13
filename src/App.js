import React, { Component } from 'react'
import {
  Layout,
  Breadcrumb,
  Row,
  Col,
  Skeleton,
  Card,
  Avatar,
  List,
  Typography,
} from 'antd'
import './App.css'

const { Meta } = Card
const { Title } = Typography
const { Header, Footer, Content } = Layout

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          {/* <div className="logo"> */}
          <img className="logo" src="/logo128.png" alt="logo" />
          {/* </div> */}
        </Header>
        <Content
          className="site-layout content"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <List
                  header={<Title level={4}>通知栏公告</Title>}
                  bordered
                  dataSource={[]}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                  )}
                />
              </Col>

              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://10.0.18.21:8093"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./logo.png"
                              />
                            }
                            title="HelpDesk"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://10.0.23.31:8086/NaNaWeb/GP//ForwardIndex?hdnMethod=findIndexForward"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/oa.png"
                              />
                            }
                            title="EasyFlow GP"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://pdm.globe.com/Windchill"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/windchill.png"
                              />
                            }
                            title="WindChill"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://10.0.18.32:88/srm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/srm.png"
                              />
                            }
                            title="SRM"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://cloudlan.greenworks.local/signin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/cloud.png"
                              />
                            }
                            title="云平台(中国)"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://172.31.101.37/signin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/cloud.png"
                              />
                            }
                            title="云平台(越南)"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card hoverable>
                      <Skeleton loading={false} avatar active>
                        <Meta
                          avatar={
                            <Avatar
                              shape="square"
                              size={64}
                              src="./assets/smes.png"
                            />
                          }
                          title="sMES"
                          className="verticalTitle"
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://10.0.23.29/leanmes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/CF_mes.png"
                              />
                            }
                            title="博康电子MES"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <a
                      href="http://10.0.23.26:8080/sree/Reports"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card hoverable>
                        <Skeleton loading={false} avatar active>
                          <Meta
                            avatar={
                              <Avatar
                                shape="square"
                                size={64}
                                src="./assets/report.png"
                              />
                            }
                            title="思达报表"
                            className="verticalTitle"
                          />
                        </Skeleton>
                      </Card>
                    </a>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card hoverable>
                      <Skeleton loading={false} avatar active>
                        <Meta
                          avatar={
                            <Avatar
                              shape="square"
                              size={64}
                              src="./assets/wms.png"
                            />
                          }
                          title="Globe WMS"
                          className="verticalTitle"
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card hoverable>
                      <Skeleton loading={false} avatar active>
                        <Meta
                          avatar={
                            <Avatar
                              shape="square"
                              size={64}
                              src="./assets/erp.png"
                            />
                          }
                          title="TOPGP"
                          className="verticalTitle"
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Card hoverable>
                      <Skeleton loading={false} avatar active>
                        <Meta
                          avatar={
                            <Avatar
                              shape="square"
                              size={64}
                              src="./assets/sap.png"
                            />
                          }
                          title="SAP"
                          className="verticalTitle"
                        />
                      </Skeleton>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          格力博（江苏）股份有限公司 ©2020 Created by 信息部
        </Footer>
      </Layout>
    )
  }
}

export default App
