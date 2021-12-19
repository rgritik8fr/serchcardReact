import React, { Component } from 'react'

export class serchbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <input type="text" placeholder='serch' onChange={this.props.change}/>
        )
    }
}

export default serchbox
