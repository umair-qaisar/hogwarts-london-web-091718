import React from 'react'
import {Card, Image, Visibility} from 'semantic-ui-react'

export default class Hogcard extends React.Component{
    constructor() {
        super()
        this.state={
            visibility: false
        }
    }

    handleClick = () => {
        this.setState({
            visibility: !this.state.visibility
        })

    }

    render(){
        return(
            <div>
                  <Card onClick={this.handleClick}>
                    <Image src='/images/avatar/large/matthew.png' />
                    <Card.Content>
                        <Card.Header>{this.props.hog.name}</Card.Header>
                        { this.state.visibility
                        ? (<div><Card.Meta> {this.props.hog.specialty} </Card.Meta>
                        <Card.Description>Matthew is a musician living in Nashville.</Card.Description></div>)
                    : "" }
                    </Card.Content>
                </Card>
            </div>
        )
    }
}
