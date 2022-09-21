import React from 'react'

class MyButton extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    
    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

export default MyButton