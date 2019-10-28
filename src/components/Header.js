import React from 'react';

function Header(props) {

    return (
        <header className='jumbotron'>
            <h1>Clicky Game</h1>         
            <h3 className='mt-4'>Click on an image to earn points, but don't click on any more than once!</h3>
        </header>
    );
}
export default Header;