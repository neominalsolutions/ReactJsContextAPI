import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardContext from '../store/contexts/CardContext';

function AboutPage() {

    const { cardItems } = useContext(CardContext);

    console.log('cardItems', cardItems);

    return <div>About Page

        <Link to="/">Home</Link>



    </div>;
}

export default AboutPage;
