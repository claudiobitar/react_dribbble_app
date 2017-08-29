import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Dribbble extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      work: [],
      hover: false    
    };
    
  }  

  componentDidMount() {
    this.ShotList();
  }

  ShotList() {
    return $.getJSON('https://api.dribbble.com/v1/shots?per_page=3&access_token=41ff524ebca5e8d0bf5d6f9f2c611c1b0d224a1975ce37579326872c1e7900b4&callback=?')
      .then((resp) => {
        this.setState({ work: resp.data.reverse() });
      });
  } 

  render() {

    let self = this;

    const works = this.state.work.map((val, i) => {
      return <ul>
        
        <li key={i} className="box"          
          onMouseEnter={() => self.setState({ hover: true })}
          onMouseLeave={() => self.setState({ hover: false})}
          >    
          {!self.state.hover ?     
            <div>
              <img className="cover" src={val.images.normal} />
              <div className="bar">
                <h2>{val.title}</h2>
                <span>{val.views_count}</span>
                <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
              </div>
            </div> 
          : null} 
          {self.state.hover ?
            <div>
              <h3>{val.user.name}</h3>
              <img className="avatar img-circle" src={val.user.avatar_url}/>
              <p>{val.description}</p>              
            </div>
           :
           null
          }           
        </li>       
      </ul>
    });

    return <div>{works}</div>
  }
}

