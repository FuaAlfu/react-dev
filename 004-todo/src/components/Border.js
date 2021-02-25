import React from 'react';
import Testo from './Testo';
import New from './New';
import One from './One';
import Commit from './Commit';
import notes from "../comments";

 function Border() {
        return (
            <div className="border">
             <Testo />
             <New />
            <One />
     {comments.map((commitItem) => 
  <Note key={commitItem.key} title={commitItem.title} content={commitItem.content} />)}
            </div>
        )
}

export default Border
