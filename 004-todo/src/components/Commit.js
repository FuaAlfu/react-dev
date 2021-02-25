import React from 'react'

const Commit = (props) => {
 
    return (
        <div className="commit">
          <h1>{props.title}</h1>
           <p className="Q">{props.q}</p>
           <p className="A">{props.a}</p>
        </div>
    )
}

export default Commit;
