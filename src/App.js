import React from "react";
import './App.css';
import Footer from './components/Footer';
import SampleClass from './components/SampleClass';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <>
        <div className="App">
          <SampleClass />
          <Footer />
        </div>
      </>
    )
  }
}

export default App;
