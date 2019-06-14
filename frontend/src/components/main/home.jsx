import React from 'react';

import NavbarContainer from './navbarContainer';
import FeatureIndex from '../features/feature_index';

const Home = props => (
    <div id='homepage-container'>
        <NavbarContainer />

        <button onClick={props.logout}>Logout</button>
        <main className='homepage-main-content'>
            <FeatureIndex user={props.user} />
            {/* Index Container */}
            {/* Story Container */}
            {/* People You May Know Container */}
        </main>
    </div>
);

export default Home;