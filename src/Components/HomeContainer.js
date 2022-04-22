import React, {Component} from "react";
import HeaderComponent from "./Header/Header";
import {Container , Row , Col, Button} from 'react-bootstrap';
import profile from '../assets/admin-login-bg.png';
import { apiCall } from "../Api/api";
import moment from "moment"
import Marquee from "react-fast-marquee";
import statistics from '../assets/statistics.png';
import Marque from "./Header/marquee";
class HomeContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            news :[],
            list : [ "CBKCQ","ISAPF","SAGGF","ATEN","GCI"],
            listData:[]
        }
    }

  newsfunction =async() =>{
        let res = await apiCall({url :"news" ,params :"category=general&token=c9gki52ad3ie8rv3rn40" , method: "get"});
        if (res && res.length > 0){
          this.setState({ news : res.slice(0,5)})
        }
    }

 shareDataFunction = async()=>{
       const {list} = this.state;
       let arr = []
       list.map(async(item) =>{
        let res = await apiCall({url :"quote" ,params :`symbol=${item}&token=c9gki52ad3ie8rv3rn40` , method: "get"});
        if (res){
            let obj ={
                symbol :item,
                data: res
            }
          arr.push(obj)
        }
       })
       this.setState({listData : arr})
   } 
    componentDidMount = async()=>{
      this.newsfunction();
      this.shareDataFunction();
    }
    dateformate =(stamp)=>{
        let date = new Date(stamp *1000);
      return  moment(date).format("LL")
    }
   
    render() {
        const {news , listData} = this.state ;
        console.log(listData , "45****")
        return (
            <>
            {/* <Marquee listData ={listData}/> */}
             <Marque listData ={listData}/>
                <HeaderComponent/>
                <div className="Section">
                    <Container>
                        <Row className="Heading mt-5 mb-5">
                            <Col lg="4">
                                <h3>Hi , User</h3>
                            </Col>
                            <Col lg="8" className="RightSecHed">
                                <p>No Active Plan</p>
                                <Button>Buy Plan</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <div  className="leftSectionbar">
                                    <div className="TopHedleft">
                                        <div className="TopHed">
                                            <p>NYSE COMPOSITE </p>
                                            <span className="GreenColor">16244.0406</span>
                                            <span className="text-muted">-1.55%</span>
                                        </div>
                                    </div>
                                    <div className="HedleftSearch">
                                        <input type="text" placeholder="Search eg: infy bse, nifty fut weekly, gold mcx" />
                                        <i className="fa fa-search"></i>
                                    </div>
                                    <div className="ListSearch">
                                        {
                                            listData && listData.length > 0 && listData.map((item,index) =>{
                                          return      <div className="listloop" key ={index}>
                                            <div>
                                                <h3>{item.symbol}</h3>
                                            </div>
                                            {/* <i className="fa fa-eye"></i> */}
                                            <span className="spanwidth">{(item?.data?.d).toFixed(2)}% <i className="fa fa-angle-down"></i></span>
                                            
                                            <span className="lastSpan">{item?.data?.c}</span>
                                        </div>
                                            })

                                        }
                                        
                                      
                                    </div>
                                </div>
                            </Col>
                            <Col lg="8">
                                <Row>
                                    <Col>
                                        <div className="SubsPlanSection">
                                            <div className="SubLeft">
                                                <img src={profile} />
                                            </div>
                                            <div className="SubRight">
                                                <h3><span className="blueColor">Subscription plan</span> tailored to meet your daily needs.</h3>
                                                <p>Pick a plan best suited for you.</p>
                                                <Button>Buy a Plan Now</Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                   
                                    <Col lg="12" > 
                                        <h3 className="text-center Chooseaplan">Choose a Plan</h3>
                                    </Col>
                                    <Col lg="4">
                                        <div className="planDiv">
                                            <img src={statistics} />
                                            <h3>Get subscription for </h3>
                                            <b>30 days</b>
                                            <Button>$39 per month</Button>
                                            <p>Get Subscription</p>
                                        </div>
                                    </Col>
                                    <Col lg="4">
                                        <div className="planDiv">
                                        <img src={statistics} />
                                            <h3>Get subscription for </h3>
                                            <b>90 days</b>
                                            <Button>$49 per month</Button>
                                            <p>Get Subscription</p>
                                        </div>
                                    </Col>
                                    <Col lg="4">
                                        <div className="planDiv">
                                        <img src={statistics} />
                                            <h3>Get subscription for </h3>
                                            <b>180 days</b>
                                            <Button>$59 per month</Button>
                                            <p>Get Subscription</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    
                                    <Col lg="12">
                                        <div className="marketsection">
                                        <h3>Market News</h3>
                                        {
                                            news && news.length > 0 && news.map((item, index) =>{
                                                return <div className="Newsloop" key={index}>
                                                <div className="NewsImgLeft">
                                                    <img src={item.image} />
                                                </div>
                                                <div className="rightNews">
                                                    <h3>{item.headline}</h3>
                                                    <p>{item.summary}</p>
                                                    <span>{this.dateformate(item.datetime)}</span>
                                                </div>
                                            </div>
                                            })
                                        }
                                        </div>
                                       
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}
 
export default HomeContainer;