import React from 'react';

function Header(props) {

    return (
        <header className='jumbotron'>
            <h3 className='mt-5'>Test your memory.</h3>
            <h4>Click each image only once to accumulate the most points</h4>
            <h2>Click an image twice. GAME OVER!</h2>
        </header>
    );
}
export default Header;