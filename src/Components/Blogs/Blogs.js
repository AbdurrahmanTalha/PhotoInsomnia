import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    // Question answering 
    return (
        <div className="mx-auto my-5 w-50 text-center">
            <h2>This is blogs</h2>     
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Authentication is telling who you are to the system while authorization is how much access you get to the site according to who you are. Authentication is like login to a site.Authentication can be done by using firebase and a lot more. Authorization can be something like admin powers. or the power to check people data. Etc
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        I use firebase to make the authentication system.I learned firebase first cuz my teacher teached it to me first.there is a lot of other options to firebase.Such as Parse, Back4App, Flutter Kuzzle, AWS Amplify etc. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase provides free hosting,  tools for tracking analytics, and more tools for reporting and fixing app crashes, creating marketing and product experiment.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;