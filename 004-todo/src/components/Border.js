import React from 'react';
import Testo from './Testo';
import New from './New';
import One from './One';
import Commit from './Commit';
import comments from "../comments";

 function Border() {
        return (
            <div className="border">
             <Testo />
             <New />
            <One />
     {comments.map((commitItem) => 
  <Commit key={commitItem.key} title={commitItem.title} q={commitItem.q} a={commitItem.a}/>)}
            </div>
        )
}

export default Border
