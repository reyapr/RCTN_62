import React from 'react'

class HeroName extends React.Component {
    render() {
        console.log(this.props, 'props')
        return (
            <div>
                <h1>{this.props.title}</h1>
                {
                    this.props.setTitle && 
                        <button onClick={() => this.props.setTitle('Sedunia')}>
                            Change Title
                        </button>
                }
                
            </div>
        )
    }
}

export default HeroName