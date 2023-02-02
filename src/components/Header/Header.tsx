import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return (
            <Navbar bg="warning" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">Users Cards</Navbar.Brand>
                </Container>
            </Navbar>
    );
};