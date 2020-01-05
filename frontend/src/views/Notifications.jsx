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
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";


import { TinyPagination } from 'react-pagination-custom'
import './pager.css'

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
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
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {

    let { selectedPageId, list } = this.state;
    const itemPerPage = 5;
    const maxBtnNumbers = 6;
    let listShow = [...list];
    listShow = listShow.splice((selectedPageId - 1) * itemPerPage, itemPerPage);

    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="1">&nbsp;  </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          Subjects
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          Grade
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          City
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          Alumi of
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          &nbsp;
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="1">&nbsp;  </Col>
                    </Row>

                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="1">&nbsp;  </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4"><span style={{ fontSize: '12px' }}>what can the tutor teach?</span><br />
                          <select style={{ fontSize: '20px' }}>
                            <option>Select subjects</option>
                            {
                              this.state.select_subject.map(item => {
                                return (
                                  <option>{item}</option>
                                )

                              })
                            }

                          </select>&nbsp;
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4"><span style={{ fontSize: '12px' }}>Gradle/Class the tutor can teach to</span><br />
                          <select style={{ fontSize: '20px' }}>
                            <option>Select a grade</option>
                            {
                              this.state.select_subject.map(item => {
                                return (
                                  <option>{item}</option>
                                )

                              })
                            }

                          </select>&nbsp;
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4"><span style={{ fontSize: '12px' }}>City the tutor can teach in</span><br />
                          <select style={{ fontSize: '20px' }}>
                            <option>select a city</option>
                            {
                              this.state.select_subject.map(item => {
                                return (
                                  <option>{item}</option>
                                )

                              })
                            }

                          </select>&nbsp;
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4"><span style={{ fontSize: '12px' }}>Where has the tutor studied?</span><br />
                          <select style={{ fontSize: '20px' }}>
                            <option>select tutor's institute</option>
                            {
                              this.state.select_subject.map(item => {
                                return (
                                  <option>{item}</option>
                                )

                              })
                            }

                          </select>&nbsp;
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <CardTitle tag="h4">
                          <a href="#">Verified Tutors Only</a>
                        </CardTitle>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="1">&nbsp;  </Col>
                    </Row>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <span>All Tutors(4178) </span>
            <span style={{ marginLeft: '80%' }}>
              <select style={{ fontSize: '20px' }}>
                <option>Sort by: TutorScore</option>
                {
                  this.state.select_subject.map(item => {
                    return (
                      <option>{item}</option>
                    )

                  })
                }

              </select>&nbsp;
           </span>
            <hr />
          </Row>
          <br />

          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          &nbsp;
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="12">
                        <Row>
                          <Col md="1">&nbsp;</Col>
                          <Col md="1">
                            <img alt="..." src={require("../assets/img/Tutors/Tutors_1.png")} />
                          </Col>
                          <Col md="9">
                            <div>
                              <p><u><span style={{ fontSize: '25px' }}>Intasar UI Haq</span>&nbsp;<span>--Fordign QUanlified Science Teacher</span></u></p>
                              <p><u><h3>BSc Chemical Engineering with Management from  <b>The University of Edinburgh</b>in 2018</h3></u></p>
                              <p>Physics.Chemistry.Maths - Additional. Mathematics D . Biology ...</p>
                              <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                | TutoerScore : 94 | Lahore | Can teach online | Active 18 hors ago</p>
                            </div>
                          </Col>
                          <Col md="1">&nbsp;</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          &nbsp;
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="12">
                        <Row>
                          <Col md="1">&nbsp;</Col>
                          <Col md="1">
                            <img alt="..." src={require("../assets/img/Tutors/Tutors_2.png")} />
                          </Col>
                          <Col md="9">
                            <div>
                              <p><u><span style={{ fontSize: '25px' }}>Intasar UI Haq</span>&nbsp;<span>--Fordign QUanlified Science Teacher</span></u></p>
                              <p><u><h3>BSc Chemical Engineering with Management from  <b>The University of Edinburgh</b>in 2018</h3></u></p>
                              <p>Physics.Chemistry.Maths - Additional. Mathematics D . Biology ...</p>
                              <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                | TutoerScore : 94 | Lahore | Can teach online | Active 18 hors ago</p>
                            </div>
                          </Col>
                          <Col md="1">&nbsp;</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          &nbsp;
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="12">
                        <Row>
                          <Col md="1">&nbsp;</Col>
                          <Col md="1">
                            <img alt="..." src={require("../assets/img/Tutors/Tutors_3.png")} />
                          </Col>
                          <Col md="9">
                            <div>
                              <p><u><span style={{ fontSize: '25px' }}>Intasar UI Haq</span>&nbsp;<span>--Fordign QUanlified Science Teacher</span></u></p>
                              <p><u><h3>BSc Chemical Engineering with Management from  <b>The University of Edinburgh</b>in 2018</h3></u></p>
                              <p>Physics.Chemistry.Maths - Additional. Mathematics D . Biology ...</p>
                              <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                | TutoerScore : 94 | Lahore | Can teach online | Active 18 hors ago</p>
                            </div>
                          </Col>
                          <Col md="1">&nbsp;</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="3">&nbsp;</Col>
            <Col md="6">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          {/* <ul>
                            {listShow.map(i => <li key={i.name}> {i.name}</li>)}
                          </ul> */}
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="12">
                        <Row>
                          <Col md="1">&nbsp;</Col>
                          <Col md="9">
                            <div>
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

                            </div>
                          </Col>
                          <Col md="2">&nbsp;</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="3">&nbsp;</Col>
            <Col md="6">
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="6">
                        <CardTitle tag="h4">
                          &nbsp;
                        </CardTitle>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="12">
                        <Row>
                          <Col md="1">&nbsp;</Col>
                          <Col md="1">
                            <img alt="..." src={require("../assets/img/Tutors/schedule.png")} />
                          </Col>
                          <Col md="9">
                            <div>
                              <p><span style={{ fontSize: '25px' }}>Can't find your tutor?</span></p>
                              <p>Post a tution with your requirements and let the tutors apply.</p>
                              <Button>Post a Tution</Button>

                            </div>
                          </Col>
                          <Col md="1">&nbsp;</Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>










        </div>
      </>
    );
  }
}

Notifications.defaultProps = {
  selectedPageId: 1,
  list: [
    { name: 'item 1' }, { name: 'item 2' }, { name: 'item 3' }, { name: 'item 4' }, { name: 'item 5' }, { name: 'item 6' }, { name: 'item 7' }, { name: 'item 8' }, { name: 'item 9' }, { name: 'item 10' }, { name: 'item 11' }, { name: 'item 12' }, { name: 'item 13' }, { name: 'item 14' }, { name: 'item 15' }, { name: 'item 16' }, { name: 'item 17' }, { name: 'item 18' }, { name: 'item 19' }, { name: 'item 20' }, { name: 'item 21' }, { name: 'item 22' }, { name: 'item 23' }, { name: 'item 24' }, { name: 'item 25' }, { name: 'item 26' }, { name: 'item 27' }, { name: 'item 28' }, { name: 'item 29' }, { name: 'item 30' }, { name: 'item 31' }, { name: 'item 32' }, { name: 'item 33' }, { name: 'item 34' }, { name: 'item 35' }, { name: 'item 36' }, { name: 'item 37' }, { name: 'item 38' }, { name: 'item 39' }, { name: 'item 40' }, { name: 'item 41' }, { name: 'item 42' }, { name: 'item 43' }, { name: 'item 44' }, { name: 'item 45' }, { name: 'item 46' }, { name: 'item 47' }, { name: 'item 48' }
  ],
}

export default Notifications;
