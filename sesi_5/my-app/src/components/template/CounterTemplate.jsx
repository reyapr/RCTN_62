import React from 'react'

class CounterTemplate extends React.Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1>{this.props.title}</h1>
                <span>{this.props.desc}</span>
                <div style={{
                    marginBottom: '25px',
                    border: '1px solid grey',
                    borderRadius: '5px',
                    width: '100px',
                }}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default CounterTemplate