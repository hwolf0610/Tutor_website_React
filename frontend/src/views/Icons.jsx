/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";
import { TinyPagination } from 'react-pagination-custom'
import './pager.css'

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      select_subject: ['physics', 'chemistry', 'maths', 'Islamiyat', 'Urdu'],
      select_city: ['Lahore', 'Karachi', 'Islambad', 'Peshawar', 'Faisalabad'],
      ...props,
    };
    this.changePage = this.changePage.bind(this);
    this.renderBtnNumber = this.renderBtnNumber.bind(this);
  }
  changePage(id) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        selectedPageId: id
      }
    });
  }

  buttonPageClick(id) {
    let { selectedPageId } = this.state;
    switch (id) {
      case 'PRE':
        this.changePage(selectedPageId - 1);
        break;
      case 'NEXT':
        this.changePage(selectedPageId + 1);
        break;
      default:
        this.changePage(id);
        break;
    }
  }

  renderBtnNumber(id) {
    let { selectedPageId } = this.state;
    return (
      <button
        onClick={this.buttonPageClick.bind(this, id)}
        key={id}
        className={`page ${selectedPageId === id ? 'selected-page' : ''}`}
      >
        {id}
      </button>
    );
  }
  render() {
    let { selectedPageId, list } = this.state;
    const itemPerPage = 5;
    const maxBtnNumbers = 6;
    let listShow = [...list];
    listShow = listShow.splice((selectedPageId - 1) * itemPerPage, itemPerPage);
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col sm="1">&nbsp;</Col>
                    <Col sm="3">
                      <h3 className="title">Tuitions</h3>
                      Find, Post or apply to teaching jobs.
                    </Col>
                    <Col sm="5">&nbsp;</Col>
                    <Col sm="2">
                      <span >
                        Looking for a tutor?<br />
                        <Button>+Post a Tuition</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      &nbsp;
                    </Col>
                    {/* 
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <i className="tim-icons icon-alert-circle-exc" />
                        <p>icon-alert-circle-exc</p>
                      </div>
                    </Col> */}

                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="1">&nbsp;</Col>
            <Col md="2.5">
              <Card>
                <CardHeader>
                  <h3 className="title">Filter</h3>
                </CardHeader>
                <CardBody className="all-icons">
                  <div>
                    <span style={{ color: 'white' }}>Subjects</span> <br />
                    <select style={{ fontSize: '20px', width: '100%' }}>
                      <option>select subject</option>
                      {
                        this.state.select_subject.map(item => {
                          return (
                            <option>{item}</option>
                          )

                        })
                      }

                    </select>&nbsp;<br />
                    <span style={{ color: 'white' }}>Grades</span><br />
                    <select style={{ fontSize: '20px', width: '100%' }}>
                      <option>select grades</option>
                      {
                        this.state.select_subject.map(item => {
                          return (
                            <option>{item}</option>
                          )

                        })
                      }

                    </select>&nbsp;<br />
                    <span style={{ color: 'white' }}> City</span><br />
                    <select style={{ fontSize: '20px', width: '100%' }}>
                      <option>select City</option>
                      {
                        this.state.select_subject.map(item => {
                          return (
                            <option>{item}</option>
                          )

                        })
                      }

                    </select>&nbsp;<br />
                    <p><Button>Search</Button><Button>Reset</Button></p>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="7">
              <Card>
                <CardHeader>
                  <Row>
                    {/* <Col sm="1">&nbsp;</Col> */}
                    <Col sm="1">
                      <img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </Col>
                    <Col sm="5" style={{ marginLeft: '-20px' }}>Noreen Zaheer<br />Posted 3 days ago</Col>
                    <Col sm="2">&nbsp;</Col>
                    <Col sm="4">
                      <span >
                        <Button>Apply</Button>
                        <Button>Favourite</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">Needs to have 12-15 years of experience in a reputed college/university teaching A levels with a clear level of understanding of Physics and Chemistry.<hr /><br /></Col>
                    <Col sm="12">
                      <p><b>Subjects &nbsp;:</b>&nbsp; Physics, Chemistry</p>
                      <p><b>Grade &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Alumnus of &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Location &nbsp;:</b>&nbsp; DHA, Lahore</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Row>
                    {/* <Col sm="1">&nbsp;</Col> */}
                    <Col sm="1">
                      <img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </Col>
                    <Col sm="5" style={{ marginLeft: '-20px' }}>Noreen Zaheer<br />Posted 3 days ago</Col>
                    <Col sm="2">&nbsp;</Col>
                    <Col sm="4">
                      <span >
                        <Button>Apply</Button>
                        <Button>Favourite</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">Needs to have 12-15 years of experience in a reputed college/university teaching A levels with a clear level of understanding of Physics and Chemistry.<hr /><br /></Col>
                    <Col sm="12">
                      <p><b>Subjects &nbsp;:</b>&nbsp; Physics, Chemistry</p>
                      <p><b>Grade &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Alumnus of &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Location &nbsp;:</b>&nbsp; DHA, Lahore</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Row>
                    {/* <Col sm="1">&nbsp;</Col> */}
                    <Col sm="1">
                      <img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </Col>
                    <Col sm="5" style={{ marginLeft: '-20px' }}>Noreen Zaheer<br />Posted 3 days ago</Col>
                    <Col sm="2">&nbsp;</Col>
                    <Col sm="4">
                      <span >
                        <Button>Apply</Button>
                        <Button>Favourite</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">Needs to have 12-15 years of experience in a reputed college/university teaching A levels with a clear level of understanding of Physics and Chemistry.<hr /><br /></Col>
                    <Col sm="12">
                      <p><b>Subjects &nbsp;:</b>&nbsp; Physics, Chemistry</p>
                      <p><b>Grade &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Alumnus of &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Location &nbsp;:</b>&nbsp; DHA, Lahore</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Row>
                    {/* <Col sm="1">&nbsp;</Col> */}
                    <Col sm="1">
                      <img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </Col>
                    <Col sm="5" style={{ marginLeft: '-20px' }}>Noreen Zaheer<br />Posted 3 days ago</Col>
                    <Col sm="2">&nbsp;</Col>
                    <Col sm="4">
                      <span >
                        <Button>Apply</Button>
                        <Button>Favourite</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">Needs to have 12-15 years of experience in a reputed college/university teaching A levels with a clear level of understanding of Physics and Chemistry.<hr /><br /></Col>
                    <Col sm="12">
                      <p><b>Subjects &nbsp;:</b>&nbsp; Physics, Chemistry</p>
                      <p><b>Grade &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Alumnus of &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Location &nbsp;:</b>&nbsp; DHA, Lahore</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Row>
                    {/* <Col sm="1">&nbsp;</Col> */}
                    <Col sm="1">
                      <img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 50, height: 50, borderRadius: 50 / 2 }} />
                    </Col>
                    <Col sm="5" style={{ marginLeft: '-20px' }}>Noreen Zaheer<br />Posted 3 days ago</Col>
                    <Col sm="2">&nbsp;</Col>
                    <Col sm="4">
                      <span >
                        <Button>Apply</Button>
                        <Button>Favourite</Button>
                      </span>
                    </Col>
                    <Col sm="1">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">Needs to have 12-15 years of experience in a reputed college/university teaching A levels with a clear level of understanding of Physics and Chemistry.<hr /><br /></Col>
                    <Col sm="12">
                      <p><b>Subjects &nbsp;:</b>&nbsp; Physics, Chemistry</p>
                      <p><b>Grade &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Alumnus of &nbsp;:</b>&nbsp; A Levels</p>
                      <p><b>Location &nbsp;:</b>&nbsp; DHA, Lahore</p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Row>
                    &nbsp;
                  </Row>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    <Col sm="12">
                      <TinyPagination
                        total={list.length}
                        selectedPageId={selectedPageId}
                        itemPerPage={itemPerPage}
                        renderBtnNumber={this.renderBtnNumber}
                        maxBtnNumbers={maxBtnNumbers}
                        preKey='PRE'
                        nextKey='NEXT'
                        wrapStyle={{ backgroundColor: '#ffffff' }}
                        wrapClass='page-container'
                        btnsClass='btns-container'
                        counterClass='counter-container'
                        counterStyle={{ color: 'gray' }}
                        spreadClass='spread-container'
                        spreadStyle={{ padding: '0 5px' }}
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>



            </Col>
            <Col md="1">&nbsp;</Col>




          </Row>
        </div>
      </>
    );
  }
}


Icons.defaultProps = {
  selectedPageId: 1,
  list: [
    {name: 'item 1'},{name: 'item 2'},{name: 'item 3'},{name: 'item 4'},{name: 'item 5'},{name: 'item 6'},{name: 'item 7'},{name: 'item 8'},{name: 'item 9'},{name: 'item 10'},{name: 'item 11'},{name: 'item 12'},{name: 'item 13'},{name: 'item 14'},{name: 'item 15'},{name: 'item 16'},{name: 'item 17'},{name: 'item 18'},{name: 'item 19'},{name: 'item 20'},{name: 'item 21'},{name: 'item 22'},{name: 'item 23'},{name: 'item 24'},{name: 'item 25'},{name: 'item 26'},{name: 'item 27'},{name: 'item 28'},{name: 'item 29'},{name: 'item 30'},{name: 'item 31'},{name: 'item 32'},{name: 'item 33'},{name: 'item 34'},{name: 'item 35'},{name: 'item 36'},{name: 'item 37'},{name: 'item 38'},{name: 'item 39'},{name: 'item 40'},{name: 'item 41'},{name: 'item 42'},{name: 'item 43'},{name: 'item 44'},{name: 'item 45'},{name: 'item 46'},{name: 'item 47'},{name: 'item 48'}
  ],
}
 
export default Icons;
