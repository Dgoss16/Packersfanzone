import React, { Component } from 'react';
import logo from './Images/logo.png';
import './App.css';


class App extends Component {

  constructor () {
    super();

    this.state = {
      distanceInMiles: 0,
      showMessage: false,
      zipCode: "54729"
    };
    
  }

  render() {
    return (
      
        <div>

          <div className="header">
            <div className="logoContainer">
              <img className="packersLogo" src={logo} />
            </div>

            <div className="siteTitle">
              Packers Fan Zone
            </div>

          </div>

    
    
          <div className="mainContent">
        

          <div className="getZip">
            <form className="getZipForm">
                What is your zip code?<br/>
              <input type="number" name="zipcode" value={this.state.zipCode} onChange={(e) => this.setState({zipCode: e.target.vaule})} />
            </form>
            <button className="submitButton">Submit</button>
          </div>

          <div className="">
            You need to travel { this.state.distanceInMiles } to get to Lambeau Field
          </div>

        
        </div>

        <div className="footer">

        </div>



        </div>
      

    );
  }
}

export default App;
