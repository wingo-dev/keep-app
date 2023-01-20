import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from './Notes';
import { Container } from "@mui/material";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function App() {
    return (
        <div>
            <Header />
            <Container fixed style={{ minHeight: '100vh', padding: '30px 20px' }} >
                <CreateNote />
                <Divider sx={{ mt: 2, mb: 2, color: 'white', borderWidth: 'thick', borderColor: 'white' }} />

                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={4} >
                        <Notes />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Notes />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Notes />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} >
                        <Notes />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default App;