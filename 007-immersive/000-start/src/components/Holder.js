import React from 'react'
import Header from './Header';
import details from '../details';

const Holder = () => {
        return (
            <div>
    {details.map((detailItem) => 
      <Header  key={detailItem.key} header={detailItem.header} content={detailItem.content}/>)}
            </div>
        )
}

export default Holder
