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
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


import { ViewPager, Frame, Track, View } from 'react-view-pager'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.jsx";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      select_subject: ['physics', 'chemistry', 'maths', 'Islamiyat', 'Urdu'],
      select_city: ['Lahore', 'Karachi', 'Islambad', 'Peshawar', 'Faisalabad'],

    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row >
            <Col xs="12" >
              <Card className="card-chart" style={{ height: '750px' }}>
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                    <Col className="text-left" sm="4">
                      <CardTitle tag="h2">Find a tutor near you</CardTitle>
                    </Col>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row style={{ height: '250px' }}>&nbsp;</Row>
                  <Row>
                    <Col className="text-left" sm="2" xs="1">


                    </Col>
                    <Col className="text-left" sm="9" xs="11">
                      <select style={{ fontSize: '20px', width: '25%', height: '50px', padding: '5px', borderRadius: '10px', color: 'white', background: 'gray' }}>
                        <option>select your subject</option>
                        {
                          this.state.select_subject.map(item => {
                            return (
                              <option>{item}</option>
                            )

                          })
                        }

                      </select>&nbsp;
                    <select style={{ fontSize: '20px', width: '25%', height: '50px', padding: '5px', borderRadius: '10px', color: 'white', background: 'gray' }}>
                        <option>select your city</option>
                        {
                          this.state.select_city.map(item => {
                            return (
                              <option>{item}</option>
                            )

                          })
                        }
                      </select>&nbsp;
                   <Button style={{ fontSize: '20px', height: '50px', padding: '5px', marginLeft: '15px' }}>Find Tutors</Button>
                    </Col>

                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row >
            <Col xs="12" >
              <Card className="card-chart" >
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                    <Col className="text-left" sm="4">
                      <CardTitle tag="h1">CAN YOU TEACH ?</CardTitle>
                    </Col>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-left" sm="2">&nbsp;</Col>
                    <Col className="text-left" sm="3">
                      <img alt="..." src={require("../assets/img/main/main_1.png")} style={{ width: '70%' }} />
                      {/* <img alt="Upgrade to PRO"  src="../assets\img\main/main_1.png"   /> */}
                    </Col>
                    <Col className="text-left" sm="5" >
                      <CardTitle tag="h1">Join as a Tutor</CardTitle>
                      <div >
                        <p tag="h4">Studentpark ® allows you to connect with students in your vicinity.</p>
                        <p tag="h4">Present in more than 11 cotoes across Pakistan, StudentPark ® Provides you with exeptional tools in an extremely<br />
                          simple and user-friendly manner.<br /><br />
                          It is free to use a year, which means you can teach as many students as you can for 1 year. </p>
                      </div>

                      <Button style={{ fontSize: '20px', backgroundColor: 'green' }}>Sign up as a Tutor</Button>
                    </Col>
                    <Col className="text-left" sm="2">&nbsp;</Col>
                  </Row>

                  <hr style={{ fontSize: '20px', backgroundColor: 'white', marginLeft: '150px', marginRight: '150px' }} />
                  <br /><br /><br /><br />

                  <Row>
                    <Col className="text-left" sm="2">&nbsp;</Col>

                    <Col className="text-left" sm="1">
                      <img alt="..." src={require("../assets/img/main/main_2.png")} /> </Col>
                    <Col className="text-left" sm="2">
                      <CardTitle tag="h3">FREE for 1 year</CardTitle>
                      <p>Studentpark ® give you a tutor<br />
                        account and lets you use all of its<br />
                        services completely free of charge<br />
                        for a year.<br />
                        Yep, a year! </p>
                    </Col>

                    <Col className="text-left" sm="1">
                      <img alt="..." src={require("../assets/img/main/main_3.png")} /> </Col>
                    <Col className="text-left" sm="2">
                      <CardTitle tag="h3">You Keep 100%</CardTitle>
                      <p>We charge no commission from<br />
                        you when you start tezching<br />
                        someone. Teach without worrying<br />
                        about someone taking a cut from<br />
                        you paycheck.</p>
                    </Col>

                    <Col className="text-left" sm="1">
                      <img alt="..." src={require("../assets/img/main/main_4.png")} /> </Col>
                    <Col className="text-left" sm="2">
                      <CardTitle tag="h3">Nationwide Reach</CardTitle>
                      <p>Showcase your qualifications and <br />
                        teaching skills to thousands of<br />
                        students nationwide.</p>
                    </Col>

                    <Col className="text-left" sm="1">&nbsp;</Col>
                  </Row>

                  <hr style={{ fontSize: '20px', backgroundColor: 'white', marginLeft: '150px', marginRight: '150px' }} />

                  <br /><br /><br /><br />

                  <Row>
                    <Col className="text-left" sm="3">&nbsp;</Col>
                    <Col className="text-left" sm="6">
                      <p style={{ fontSize: '20px' }}>Get listed as a private tutor on Studentpark® and start teaching right away.</p>
                    </Col>
                    <Col className="text-left" sm="3">&nbsp;</Col>
                  </Row>

                  <Row>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                    <Col className="text-left" sm="6">
                      <Button style={{ fontSize: '15px' }}>Sign up as a Tutor</Button>
                      <Button style={{ fontSize: '15px' }}>Sign up with Facebook</Button>
                    </Col>
                    <Col className="text-left" sm="2">&nbsp;</Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row >
            <Col xs="12" >
              <Card className="card-chart" style={{ height: '750px' }}>
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                    <Col className="text-left" sm="4">
                      <CardTitle tag="h2">Top Tutors</CardTitle>
                    </Col>
                    <Col className="text-left" sm="4">&nbsp;</Col>
                  </Row>

                  <Row>
                    <Col className="text-left" sm="3">&nbsp;</Col>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h3">Meet the highest rated tutors on Studentpark®</CardTitle>
                    </Col>
                    <Col className="text-left" sm="3">&nbsp;</Col>
                  </Row>
                </CardHeader>
                <hr />
                <CardBody>
                  <Row>
                    <Col className="text-left" sm="2" xs="1">&nbsp;</Col>
                    <Col className="text-left" sm="8" xs="11">
                      <Row>
                        <Col className="text-left" sm="3" >
                          &nbsp;&nbsp;&nbsp;<img alt="..." src={require("../assets/img/main/main_5.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2, position: 'relative', bottom: '-40px', zIndex: 5 }} />
                          <div style={{ border: '1px', borderColor: 'black', backgroundColor: 'white', borderRadius: '5px', zIndex: 1 }}>
                            <br /><br /><br />
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; Shaher Bano Kazmi</p>
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; NUST  -ELECTRICAL Engineering-</p>
                            <hr />
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px solid black', borderColor: 'grey', backgroundColor: 'grey' }}>physics</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>chemistry</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>Maths</span>&nbsp;
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-First language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-second language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;&nbsp;<Button>View Profile</Button>
                            </p>
                          </div>
                        </Col>

                        <Col className="text-left" sm="3" >
                          &nbsp;&nbsp;&nbsp;<img alt="..." src={require("../assets/img/main/main_6.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2, position: 'relative', bottom: '-40px', zIndex: 5 }} />
                          <div style={{ border: '1px', borderColor: 'black', backgroundColor: 'white', borderRadius: '5px', zIndex: 1 }}>
                            <br /><br /><br />
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; Shaher Bano Kazmi</p>
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; NUST  -ELECTRICAL Engineering-</p>
                            <hr />
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px solid black', borderColor: 'grey', backgroundColor: 'grey' }}>physics</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>chemistry</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>Maths</span>&nbsp;
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-First language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-second language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;&nbsp;<Button >View Profile</Button>
                            </p>
                          </div>
                        </Col>

                        <Col className="text-left" sm="3" >
                          &nbsp;&nbsp;&nbsp;<img alt="..." src={require("../assets/img/main/main_6.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2, position: 'relative', bottom: '-40px', zIndex: 5 }} />
                          <div style={{ border: '1px', borderColor: 'black', backgroundColor: 'white', borderRadius: '5px', zIndex: 1 }}>
                            <br /><br /><br />
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; Shaher Bano Kazmi</p>
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; NUST  -ELECTRICAL Engineering-</p>
                            <hr />
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px solid black', borderColor: 'grey', backgroundColor: 'grey' }}>physics</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>chemistry</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>Maths</span>&nbsp;
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-First language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-second language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;&nbsp;<Button>View Profile</Button>
                            </p>
                          </div>
                        </Col>

                        <Col className="text-left" sm="3" >
                          &nbsp;&nbsp;&nbsp;<img alt="..." src={require("../assets/img/main/main_8.png")} style={{ width: 100, height: 100, borderRadius: 100 / 2, position: 'relative', bottom: '-40px', zIndex: 5 }} />
                          <div style={{ border: '1px', borderColor: 'black', backgroundColor: 'white', borderRadius: '5px', zIndex: 1 }}>
                            <br /><br /><br />
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; Shaher Bano Kazmi</p>
                            <p style={{ color: 'black' }}> &nbsp;&nbsp; &nbsp; NUST  -ELECTRICAL Engineering-</p>
                            <hr />
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px solid black', borderColor: 'grey', backgroundColor: 'grey' }}>physics</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>chemistry</span>&nbsp;
                            &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>Maths</span>&nbsp;
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-First language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;<span style={{ border: '1px', borderColor: 'grey', backgroundColor: 'grey' }}>English-second language</span>
                            </p>
                            <p>
                              &nbsp;&nbsp;&nbsp;<Button>View Profile</Button>
                            </p>
                          </div>
                        </Col>

                      </Row>


                    </Col>
                    <Col className="text-left" sm="2" xs="1">&nbsp;</Col>
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>
          {/*  .MgBawBEp4Gm2q5 */}
          {/* <img alt="..." src={require("../assets/img/main/main_8.png")} style={{ width: 80, height: 80, borderRadius: 80 / 2 }} /> */}
          <Row >
            <AwesomeSlider style={{ height: '200px' }}>
              <Row >
                <Col xs="12" >
                  <Row>
                  

                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                    <Col sm="2" xs="11">
                      <img alt="..." src={require("../assets/img/main/main_8.png")} style={{   borderRadius: 100 / 2 }} />
                    </Col>
                    <Col className="text-left" sm="6" xs="1">
                      <p>
                        Studentpark has really helped me a lot  in my <br />
                        teaching career. I like the no non-sense look and<br />
                        feel of the website. Everything is simple, wasy to<br />
                        use and just works!                      </p>
                      
                    </Col>
                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row >
                <Col xs="12" >
                  <Row>
                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                    <Col className="text-left" sm="2" xs="11">
                      <img alt="..." src={require("../assets/img/main/main_8.png")} style={{  borderRadius: 100 / 2 }} />
                    </Col>
                    <Col className="text-left" sm="6" xs="1">
                      <p>
                        Studentpark has really helped me a lot  in my <br />
                        teaching career. I like the no non-sense look and<br />
                        feel of the website. Everything is simple, wasy to<br />
                        use and just works!                      </p>
                    </Col>
                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row >
                <Col xs="12" >
                  <Row>
                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                    <Col className="text-left" sm="2" xs="11">
                      <img alt="..." src={require("../assets/img/main/main_8.png")} style={{  borderRadius: 100 / 2 }} />
                    </Col>
                    <Col className="text-left" sm="6" xs="1">
                      <p>
                        Studentpark has really helped me a lot  in my <br />
                        teaching career. I like the no non-sense look and<br />
                        feel of the website. Everything is simple, wasy to<br />
                        use and just works!                      </p>
                    </Col>
                    <Col className="text-left" sm="2" xs="1">
                    </Col>
                  </Row>
                </Col>
              </Row>
            </AwesomeSlider>
          </Row>
          <br />
          <Row >
            <Col xs="12" >
              <Card className="card-chart" >
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="2">&nbsp;</Col>
                    <Col className="text-left" sm="3">
                      <img alt="..." src={require("../assets/img/main/main_9.png")} />
                    </Col>
                    <Col className="text-left" sm="3">
                      <img alt="..." src={require("../assets/img/main/main_10.png")} />
                    </Col>
                    <Col className="text-left" sm="3">
                      <img alt="..." src={require("../assets/img/main/main_11.png")} />
                    </Col>
                    {/* <Col className="text-left" sm="1">&nbsp;</Col> */}
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-left" sm="2">&nbsp;</Col>
                    <Col className="text-left" sm="3">
                      <p>
                        <span style={{ fontSize: '40px' }}>4177</span><br />
                        <span style={{ fontSize: '40px' }}>Tutors</span><br />
                      </p>
                    </Col>
                    <Col className="text-left" sm="3">
                      <p>
                        <span style={{ fontSize: '40px' }}>219</span><br />
                        <span style={{ fontSize: '40px' }}>subjects</span><br />
                      </p>
                    </Col>
                    <Col className="text-left" sm="3">
                      <p>
                        <span style={{ fontSize: '40px' }}>13</span><br />
                        <span style={{ fontSize: '40px' }}>Cities</span><br />
                      </p>
                    </Col>
                    {/* <Col className="text-left" sm="1">&nbsp;</Col> */}
                  </Row>

                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Dashboard;
