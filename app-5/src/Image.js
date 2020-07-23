import React, {Component} from 'react'
import App from './App'


export default class Image extends Component{
    render(){
        return (
            <div>
                <img src={this.props.url} />
                <div>Error 626</div>
            </div>
        )
    }
}








