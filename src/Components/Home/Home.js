import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ErMCgfniBsEwoI7gwsFwbR172iQLUacKNg&usqp=CAU" alt="" className="w-100 img-fluid"></img>
            <Services ></Services>
            <Gallery></Gallery>
        </div>
    )
};

export default Home;