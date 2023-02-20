import React, {Component} from "react";

class InputTodo extends Component{

    render(){
        return(
            <form>
                <input type="text" placeholder="Enter Todo ... "></input>
                <button>Submit</button>
            </form>
        )
    }
}

export default InputTodo;