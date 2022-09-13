import React from 'react'

class MyButton extends React.Component {
    
    render() {
        return (
            <button
                style={{
                    backgroundColor: this.props.bgColor || 'white',
                    border: '1px solid grey',
                    padding: '7px',
                    borderRadius: '15px',
                    color: this.props.color || 'black'
                }}
                onClick={this.props.onClick}
            >{this.props.children}</button>
        )
    }
}

export default MyButton