import React, { Component } from 'react'
import Marquee from "react-fast-marquee";

export default class Marque extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const {listData} = this.props;
      console.log(listData, "10***")
    return (
      <>
        <Marquee>
          {
                  listData && listData.length > 0 && listData.map((item,index) =>{
                return   <div class="Topbar TopHed" key={index}>
                <p>{item.symbol} </p>
                <span class="GreenColor">{item?.data?.c}</span>
                <span class="text-muted">{(item?.data?.d).toFixed(2)}% <i className="fa fa-angle-up "></i></span>
                </div>
                  })
              }
         </Marquee>
         </>
    )
  }
}
