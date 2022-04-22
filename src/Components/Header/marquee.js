import React, { Component } from 'react'
import Marquee from "react-fast-marquee";
import arrowFunction from '../../CommonFunctions/arrow';

export default class Marque extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const {listData} = this.props;
    return (
      <>
        <Marquee>
          {
                  listData && listData.length > 0 && listData.map((item,index) =>{
                return   <div className="Topbar TopHed" key={index}>
                <p>{item.symbol} </p>
                <span className="GreenColor">{item?.data?.c}</span>
                <span className="text-muted">{(item?.data?.d).toFixed(2)}% {arrowFunction(item?.data?.d)}</span>
                </div>
                  })
              }
         </Marquee>
         </>
    )
  }
}
