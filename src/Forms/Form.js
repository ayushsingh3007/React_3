import { Component } from "react";
import Data from "./Data";
class Form extends Component{
    constructor(){
        super()
        this.state={
            name:"",
            department:"",
            ratting:"",
            emdata:[],
            toggle:true
        }
    }

    changedata=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    TogglePage = () => {
        this.setState({ toggle: !this.state.toggle });
      }
      
    handlesubmit=(e)=>{
        e.preventDefault();
        if (!this.state.name || !this.state.department || !this.state.ratting) {
            alert("Please fill in all fields");
            return;
        }
        const temobj={
            name:this.state.name,
            department:this.state.department,
            ratting:this.state.ratting
        }
        this.state.emdata.push(temobj)
        this.setState({
            emdata:this.state.emdata,
            name:"",
            department:"",
            ratting:"",
            toggle:false
        })
      




    }
     

    render(){
        return(
            <>
    
   <h1 id="heading">EMPLOYEE FEEDBACK FORM</h1>
        
   {this.state.toggle?<form id="form-div">
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.changedata}
                 required />
            </div>
            <div>
                <label htmlFor="department">Department :</label>
                <input type="text" name="department" id="department" value={this.state.department} onChange={this.changedata} required />
            </div>
            <div>
                <label htmlFor="rating">Rating :</label>
                <input type="number" id="ratting" name="ratting" value={this.state.ratting} onChange={this.changedata} required/>
            </div>
            <button onClick={this.handlesubmit} id="submit">Submit</button>
            </form>:<Data value={this.state.emdata} togFunc={this.TogglePage}/>}
            
            </>
        )
    }






}
export default Form;