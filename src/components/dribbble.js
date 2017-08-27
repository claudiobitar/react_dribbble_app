import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Dribbble extends React.Component {
  constructor(props) {
    super(props);

    this.state = { work: [] };     
  }

  getInitialState() {
    return {
      isMouseInside: false
    }
  }  
  
  
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
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
  
  /*
   $('.box').click(function () {
     $('body').append('<div id="modal' + val.id + '" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><img class="avatar img-circle" src="' + val.user.avatar_url + '"/><h3>' + val.user.name + '</h3></div><div class="modal-body"><p>' + val.description + '</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>');
   });  
  */
  
  render() {
    const works = this.state.work.map((val, i) => {
      return <ul>
        <li onMouseEnter={this.mouseEnter} className="box" data-toggle="modal" data-target="#modal' + val.id + '">
          <img className="cover" src={val.images.normal} />
          <div className="bar">
            <h2>{val.title}</h2>
            <span>{val.views_count}'</span>
            <i className="fa fa-eye fa-2x" aria-hidden="true"></i>
          </div>
        </li>        
        {this.state.isMouseInside ? <li><h2>{val.title}</h2> <span>{val.views_count}</span></li> : null }       
      </ul>
    });

    return <div>{works}</div>    
  }
}

