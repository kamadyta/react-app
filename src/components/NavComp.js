import React, { Component } from 'react'

class NavComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            nav1: 'Create Meetup',
            nav2: 'Explore'
        }
    }

    render() {
        return(
            <div Classname="App">
                <h3><a href="#">{this.state.nav1}</a> &nbsp; <a href="#">{this.state.nav2}</a></h3>
            </div>
        )
    }
} 

export default NavComp