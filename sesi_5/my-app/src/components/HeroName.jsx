import React from 'react'
import PropTypes from 'prop-types'
import MyButton from './atoms/MyButton'

class HeroName extends React.Component {
    
    static defaultProps = {
        description: 'lorem'
    }
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        setTitle: PropTypes.func
    }
    
    render() {
        console.log(this.props, 'props')
        return (
            <div>
                <h1>{this.props.title}</h1>
                {
                    this.props.setTitle && 
                        <MyButton
                            onClick={() => this.props.setTitle('Sedunia')}
                        >
                            Change Title
                        </MyButton>
                }
                
                <span>{this.props.description}</span>
                
            </div>
        )
    }
}


export default HeroName