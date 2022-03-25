import axios from 'axios';
import './App.css';
import React, { useEffect, useState,Component} from "react";

  class App extends Component {
    constructor() {
        super();
        this.state = {
          village_status:[]
        };
    }
    componentDidMount() {
      this.interval = setInterval(this.getData, 1);
      this.getData();
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    getData = () => {
      axios.get("http://localhost:3001/villages").then((response) =>{
          const village_status = response.data;
          this.setState({village_status})
        })
    }

    render() {
      return (
        <div className="container">
        <div className="App">
          <div className='whole'>
          <center><p>Mask Detection System</p></center>
          <div>
          <center><img src="https://i.ibb.co/CJcmbbR/New-SI-3.jpg" className="map"></img> </center>
          </div>
          <br></br>
          {this.state.village_status.map((val,key) =>{
            if (val.Village_1.substring(0, 4)=="1"){
              return (
                <div>
                  <center>
                  <table>
                    <tr>
                      <td><img src="https://i.ibb.co/SN8h9tN/640px-Red-Light-Icon-svg.png"  className="red" /></td>
                      <td><strong>Village 1</strong></td>
                   
                      <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                      <td><strong>Village 2</strong></td>
                    
                      <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                      <td><strong>Village 3</strong></td>
                    
                      <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                      <td><strong>Village 4</strong></td>
                    </tr>
                  </table>
                  <h3>Last Updated :{val.Time_Stamp}</h3>
                  </center>
                </div>
              );    
            }
            else{
              return (
              <div>
              <center>
              <table>
                <tr>
                  <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                  <td><strong>Village 1</strong></td>
               
                  <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                  <td><strong>Village 2</strong></td>
               
                  <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                  <td><strong>Village 3</strong></td>
               
                  <td><img src="https://i.ibb.co/JQcpSZY/640px-Green-Light-Icon-svg.png"  className="green" /></td>
                  <td><strong>Village 4</strong></td>
                </tr>
              </table>
              <h3>Last Updated :{val.Time_Stamp}</h3>
              </center>
            </div>
            
          );   
          
          }
            
          })}
         
         </div>
         </div>
         </div>
      );
    }
}
  
  
  
  


export default App;
