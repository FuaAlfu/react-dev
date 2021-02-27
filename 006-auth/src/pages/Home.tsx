import React from 'react';

const Home = (props: { name: string }) => {
    return (
        <div>
            {props.name ? 'yo ' + props.name : 'You are not logged in'}
        </div>
    );
};

export default Home;