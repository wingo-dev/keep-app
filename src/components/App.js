import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from './Notes';
import { Container } from "@mui/material";

function App() {
    return (
        <div>
            <Header />
            <Container fixed style={{ minHeight: '100vh', padding: '30px 0' }}>
                <CreateNote />
                <Notes />
            </Container>
            <Footer />
        </div>
    );
}

export default App;