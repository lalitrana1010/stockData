import React, {Component} from 'react';
import { Container,  Col, Row , Nav, Button} from 'react-bootstrap';
import Crown from '../../assets/crown.png';
class HeaderComponent extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className="HeaderSec">
                    <Container>
                        <Row>
                            <Col lg="2">
                                <a className="Logo" to="/">Logo</a>
                            </Col>
                            <Col lg="10">
                                <Nav className="Navbar">
                                    <div className="searchNav">
                                        <i className="fa fa-search"></i>
                                        <input type="text" placeholder='Search eg: infy bse, nifty fut weekly, gold mcx'/>
                                    </div>
                                    <div className="rightSideNav">
                                    <a to="">
                                            <i className="fa fa-tag"></i>
                                        </a>
                                        <a to="">
                                            <img src={Crown} />
                                        </a>
                                       
                                        <Button>
                                            Login
                                        </Button>
                                    </div>

                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
 
export default HeaderComponent;