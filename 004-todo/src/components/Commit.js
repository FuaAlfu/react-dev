import React from 'react'

const Commit = (props) => {
 
    return (
        <div className="commit">
          <h1>{props.title}</h1>
           <p>{props.content}</p>
        </div>
    )
}

export default Commit;
