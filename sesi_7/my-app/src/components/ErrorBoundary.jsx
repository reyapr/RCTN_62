import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state = {
            isError: false
        }
    }
    
    componentDidCatch(error) {
        
        this.setState({
            isError: true
        })
    }
    
    render() {
        if(this.state.isError) {
            return <h1>Something Went Wrong.</h1>
        }
        
        return this.props.children
    }
}

export default ErrorBoundary