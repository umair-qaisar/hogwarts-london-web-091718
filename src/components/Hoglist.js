import React from 'react'
import Hogcard from './Hogcard';

export default class Hoglist extends React.Component{

    render(){
        return(
         <div>
             {this.props.hogs.map(hog =><Hogcard hog={hog}/>)}
        </div>
        )
    }

}
