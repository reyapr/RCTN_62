import React from 'react';
import HeroName from './HeroName';

export default class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            title: 'bambang'
        }
    }
    
    setTitle = (title) => {
        this.setState({ title })
    }
    
    render() {
        return (
            <HeroName 
                title={this.state.title} 
                setTitle={this.setTitle}
            />
        )
    }
}