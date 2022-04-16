import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carosel = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.news18.com/ibnlive/uploads/2021/08/sun-photo-16293134143x2.jpg?impolicy=website&width=510&height=356"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://blog.ipleaders.in/wp-content/uploads/2018/02/BV-Acharya-17.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/young-woman-using-dslr-camera-picture-id610259354?k=20&m=610259354&s=612x612&w=0&h=Cpl2WdB4ssvGOIfwYOa0R2C94k7M1cQ3a7zpNBNxNrk="
                        alt="Third slide"
                    />

                   
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;