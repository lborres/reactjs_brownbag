import React from "react";

class SampleClass extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lanid: "Louis Borres"
    }
  }

  render(){
    return(
      <>
        <h2>Hi from Class Coponent, my name is {this.state.lanid}</h2>
      </>
    )
  }
}

export default SampleClass