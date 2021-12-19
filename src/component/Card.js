import React, { Component } from 'react'
import './card.css';
export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
       
        return (
            <>
<div className="col-3 py-3">
<div class="card" >
  <img src={`https://image.tmdb.org/t/p/w1280${this.props.img}`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{this.props.title}</h5>
    <p class="card-text">{this.props.overview}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
            </>
        )
    }
}

export default Card
