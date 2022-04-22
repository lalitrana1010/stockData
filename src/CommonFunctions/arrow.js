const arrowFunction =(value)=>{
    if(value === 0) { return <i className="fa fa-minus"></i>}
    let arrow = value.toString();
    if(arrow.indexOf("-") !== -1){
   return <i className="fa fa-angle-down"></i>
    }else{
        return <i className="fa fa-angle-up"></i>
    }
}

export default arrowFunction;