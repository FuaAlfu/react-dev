import React from 'react';
import Testo from './Testo';
import New from './New';
import One from './One';
import Commit from './Commit';
import comments from "../comments";

import details from "../details";
import Header from "./Header";
import Footer from "./Footer";

 function Border() {
        return (
            <div className="border">
            <Header header={details[0].header}
            content={details[0].content}
            />
             <Testo />
             <New />
            <One />
     {comments.map((commitItem) => 
  <Commit key={commitItem.key} title={commitItem.title} q={commitItem.q} a={commitItem.a}/>)}
  <Footer />
            </div>
        )
}

export default Border
