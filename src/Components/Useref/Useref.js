import React, { useRef, useState } from 'react'

const Useref = () => {
    const [name, setName] = useState([])

    const myname = useRef('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let thisname = myname.current.value
        let date = new Date()
        let current = date.getTime();

        thisname === '' ? alert("no") : setName([...name, {name: thisname, id: current}])
        myname.current.value = '';
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="value"></label>
                <input type="text" id="value" ref={myname} />
                <input type="submit" value='submit' />
            </form>
            {name.map((inname) => {
                return <div key={inname.id}>{inname.name}</div>
            })}
            {/* {name !== '' ? `My name is ${name}` : ''} */}
        </div>
    )
}

export default Useref
