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
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>

            <Col md="7">
              <Card>
                <CardHeader>
                  <h3 className="title">Summary</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <p style={{ marginLeft: '25px', marginRight: '25px' }}>
                        Please contact me on Whatsapp +447460261139 or Cell number +923137447440<br /><br />

                        I am a foreign qualified teacher having more than five years of experience in teaching Chemistry, Physics and Maths. You will get full dedication and honest commitment from me. My method of teaching is analysing students first and understanding their strengths and weakness. Once I complete my assessment, I program my teaching style according to their needs and requirement. I take frequent feedback from them on my approach and style. Furthermore, I keep testing them from time to time to analyse their improvement in their skills and confidence.
                      <br /><br />
                        My first lecture would be FREE!<br /><br />
                      </p>

                      <h3 className="title" style={{ marginLeft: '25px', marginRight: '25px' }}>Teaching Experience</h3>

                      <p style={{ marginLeft: '25px', marginRight: '25px' }}>
                        I am a foreign qualified teacher having more than five years of experience in teaching Chemistry, Physics and Maths. I have taught students in both in Pakistan and United Kingdom. I have taught more than 40 students so far and all of them have produced excellent results
                      </p>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  &nbsp;
                </CardFooter>
              </Card>


              <Card>
                <CardHeader>
                  <h3 className="title">EDUCATION</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <p style={{ marginLeft: '25px', marginRight: '25px' }}>
                        Most Recent:<br /><br />
                        <a href="3" >The University of Edinburgh</a> – BSc Chemical Engineering with Management (2018)
                      <br /><br />
                        Previous:<br /><br />
                        <a href="3" >Westminster School and College Islamabad</a> – A,levels (2011)
                      <br />
                        <a href="3" >Army Burn Hall College, Abbottabad</a> – O,levels (2009)
                      <br />
                      </p>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  &nbsp;
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="title">REVIEWS</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <p style={{ marginLeft: '25px', marginRight: '25px' }}>
                        <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                        <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                        <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                        <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                        <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                        5.0 out of 5 based on 11 ratings<br /><br /></p>
                      <hr />

                      <div>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="12">
                            <Row>
                              <Col md="1">&nbsp;</Col>
                              <Col md="1">
                                <img alt="..." src={require("../assets/img/Tutors/Tutors_3.png")} />
                              </Col>
                              <Col md="9">
                                <div>
                                  <p><span style={{ fontSize: '25px' }}>Zaynah</span></p>
                                  <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    | Dedicated &amp; Determined(5 / 5)</p>
                                  <p>
                                    I have had a tremendous amount of help from Intasar Sir for both Chemistry and Physics at A-Levels. His style of teaching is very detailed and specific, which really helped me to address and overcome the complex concepts in my studies. Intasar Sir is a very dedicated and determined teacher who is willing to go the extra mile to support his students. Tutoring sessions are also arranged to a time that suits the student best and timings are quite flexible. I would highly recommend Intasar Sir as a tutor.
                                  </p>
                                </div>
                              </Col>
                              <Col md="1">&nbsp;</Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>

                      <div>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="12">
                            <Row>
                              <Col md="1">&nbsp;</Col>
                              <Col md="1">
                                <img alt="..." src={require("../assets/img/Tutors/Tutors_3.png")} />
                              </Col>
                              <Col md="9">
                                <div>
                                  <p><span style={{ fontSize: '25px' }}>Zaynah</span></p>
                                  <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    | Dedicated &amp; Determined(5 / 5)</p>
                                  <p>
                                    I have had a tremendous amount of help from Intasar Sir for both Chemistry and Physics at A-Levels. His style of teaching is very detailed and specific, which really helped me to address and overcome the complex concepts in my studies. Intasar Sir is a very dedicated and determined teacher who is willing to go the extra mile to support his students. Tutoring sessions are also arranged to a time that suits the student best and timings are quite flexible. I would highly recommend Intasar Sir as a tutor.
                                  </p>
                                </div>
                              </Col>
                              <Col md="1">&nbsp;</Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>

                      <div>
                        <Row>
                          <Col className="ml-auto mr-auto" lg="12">
                            <Row>
                              <Col md="1">&nbsp;</Col>
                              <Col md="1">
                                <img alt="..." src={require("../assets/img/Tutors/Tutors_3.png")} />
                              </Col>
                              <Col md="9">
                                <div>
                                  <p><span style={{ fontSize: '25px' }}>Zaynah</span></p>
                                  <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    | Dedicated &amp; Determined(5 / 5)</p>
                                  <p>
                                    I have had a tremendous amount of help from Intasar Sir for both Chemistry and Physics at A-Levels. His style of teaching is very detailed and specific, which really helped me to address and overcome the complex concepts in my studies. Intasar Sir is a very dedicated and determined teacher who is willing to go the extra mile to support his students. Tutoring sessions are also arranged to a time that suits the student best and timings are quite flexible. I would highly recommend Intasar Sir as a tutor.
                                  </p>
                                </div>
                              </Col>
                              <Col md="1">&nbsp;</Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                        <hr/><br/>
                      <div>
                        <Row>
                        <Col className="ml-auto mr-auto" lg="12">
                          <Row>
                          <Col md="1"><h4>&nbsp;</h4></Col>
                          <Col md="9"><h3>Leave a review</h3></Col>
                          <Col md="2"><h4>&nbsp;</h4></Col>
                            </Row> 
                          
                          </Col>
                          <Col className="ml-auto mr-auto" lg="12">
                            <Row>
                              <Col md="1"><h4>&nbsp;</h4></Col>
                              <Col md="10">
                                <div>
                                  <p> Do you know or have been tutored by Intasar Ul Haq? Let others know by sharing your experience.</p>
                                  <p>Rate your experience</p>
                                  <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                                    </p>
                                  <p><a href="#"> Add a title to your review </a></p>
                                  <p>
                                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue=" "                             
                            placeholder="Write a review"
                            type="text"
                          />
                        </FormGroup>
                      </Col></Row></Form>
                                  </p>
                                  <Button>Submit Review</Button>
                                </div>
                              </Col>
                              <Col md="1">&nbsp;</Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>

                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  &nbsp;
                </CardFooter>
              </Card>


            </Col>


            <Col md="5">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/emilyz.jpg")}
                      />
                      <h5 className="title">Intasar UI Haq</h5>
                    </a>
                    <p className="description">--Fordign QUanlified Science Teacher</p>
                  </div>
                  <div className="card-description">

                    <Row>
                      <Col md="1">&nbsp;</Col>
                      <Col md="10">
                        <div>
                          <p>
                            <Button className="  btn-round" color="facebook">Physics</Button>
                            <Button className="  btn-round" color="facebook">Chemistry</Button>
                            <Button className="  btn-round" color="facebook">Maths</Button>
                            <Button className="  btn-round" color="facebook">Mathematics-Additional</Button>
                            <Button className="  btn-round" color="facebook">Mathematics D</Button>
                            <Button className="  btn-round" color="facebook">Biology</Button>
                            <Button className="  btn-round" color="facebook">Pure Mathematics</Button>
                            <Button className="  btn-round" color="facebook">Applied Mathematics</Button>
                            <Button className="  btn-round" color="facebook">Calculus</Button>
                            <Button className="  btn-round" color="facebook">Pre Calculus</Button>
                            <Button className="  btn-round" color="facebook">Project Management</Button></p>
                          <hr />
                          <p><h4>Bachelors · A Levels · SAT · O Levels · Class 9 · Class 6 to 8</h4></p>
                          <hr />
                          <p> <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                            <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                            <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                            <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />
                            <img alt="..." src={require("../assets/img/Tutors/star.png")} style={{ width: '2%' }} />5.0 (11 ratings)
                                | TutoerScore : 94 | View contact</p>
                        </div>
                      </Col>
                      <Col md="1">&nbsp;</Col>
                    </Row>

                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                  <div className="button-container">
                    Contact Intasar <Button className="  btn-round" color="facebook">Send Message</Button>
                  </div>
                </CardFooter>
              </Card>


              <Card>
                <CardHeader>
                  <h3 className="title">Google Map</h3>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <div style={{ marginLeft: '25px', marginRight: '25px', height:'300px' }}>
                      <Map
                          google={this.props.google}
                          zoom={8}
                          // style={{ width: '100%', height: '100%' }}
                          initialCenter={{ lat: 47.444, lng: -122.176 }}
                        >
                          <Marker position={{ lat: 48.00, lng: -122.00 }} />
                        </Map>
                        {/* style={{width: '100%', height: '100%'}} */}
                        <href src="./Dashboard.jsx" />
                      </div>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  &nbsp;
                </CardFooter>
              </Card>


            </Col>


          </Row>
        </div>
      </>
    );
  }
}

// export default UserProfile;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB7r1x1VVNh1fIwGyGzcHKq0LcFiBP46yM'
})(UserProfile);