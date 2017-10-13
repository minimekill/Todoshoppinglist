import React from 'react'

const HelloWorld = ({ name }) => {
    const sayHi = (event) => {
        alert('Hi ${name}')
    }
    return (
        <div>
            <a
            href="#"
            onClick={sayHi}>Say Hi</a>
            </div>

        
    )

}


HelloWorld.propTypes = {

name: React.PropTypes.string.isRequired

}
export default HelloWorld