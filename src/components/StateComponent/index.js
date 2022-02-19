import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 0,
            inputvalue1: '',
        };
        this.handelClickAdd = this.handelClickAdd.bind(this);
        this.handelClick = this.handelClick.bind(this);
        this.handelOnChange = this.handelOnChange.bind(this);
    }
    handelClickAdd(){
        this.setState({value: this.state.value +1});
    }
    handelClick(){
        this.setState((prevValue, props)=>{
            console.log(prevValue,props);
            return {value: this.state.value -1};
        });
    }
    handelFocus(){
        console.log("Fucos");
    }
    handelBlur(){
        console.log("Blur");
    }
    handelOnChange(e){        
        this.setState({
            inputvalue1: e.target.value,
        });
    }
    render(){
        return(
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handelClickAdd}>+</button>
                <button onClick={this.handelClick}>-</button>
                <input type="text" onFocus={()=> this.handelFocus()} onBlur={()=> this.handelBlur()}></input>
                <input type="text" onChange={this.handelOnChange}/>
                <h2>{this.state.inputvalue1}</h2>
            </div>
        );
    }
}

export default StateComponent;