import React,{Component} from "react";


class Data extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value);
        

    }
   render(){
    return(
        <div>

      <div id="flex">
            {
              this.props.value.map((currEle)=>{
                const {id,name,department,ratting}=currEle;
                return(
                  <div className="showDataStyle" key={id}>
                    <p>Name:{name}||Department:{department}||Rating:{ratting}</p>
                    
                  </div>
                )
              })
            }
          </div>
          
          

      
          <div >
        
        <button onClick={this.props.togFunc} id="goback-btn">Go Back</button>
        
        </div>
        </div>
    )
   }



}
export default Data;
