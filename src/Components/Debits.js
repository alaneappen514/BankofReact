import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";


class Debits extends Component{
  render(){
      return(
          <div className = "container">
              <h3>Debits</h3>
              <Link to='/Home'>Home</Link>
          </div>

      );
  }
}

export default Debits;