import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';




class Calulator extends Component {
  render() {
    return (
      <div>
          <div className="container-fluid calculator">
              <div className="calc"> 
                <h3>Shipping Calculator</h3>
                <p>Using state and LGA details provided by the customer to show the shipping rates and estimates saves you and your customers valuable time.</p>
              </div>
              <div className="row">
                  <div className="col-4 calculator1">
                  <Form>
                      <option>From</option>
                    <Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                        </Row>
                        <option>To</option>
                        <Row>
                            <Col>
                            <Form.Control placeholder="First name" />
                            
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <option>Weight(Kg)</option>     
                        <Row>
                            <Col>
                            <Form.Control placeholder="First name" as="select">
                            <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                            
                            </Col>
                            <Col>
                            <Button variant="success" type="submit"> Calculate Rate </Button>
                            </Col>
                        </Row>
                   
                    </Form>

                      
                  </div>
                  <div className="col-3 calculator2 ">
                      <h1> ₦0.00</h1>
                      <p>Estimated Shipping Fee</p>
                      <div className="alert alert-danger" role="alert">
                          <img src="https://kxpress.ng/img/caution-1.svg" alt="warning"/> <p>Note: The above is an estimate, actual charges may vary</p></div>
                      </div>
                  </div>
              </div>
             
          </div>
      
    );
  }
}

export default Calulator;
