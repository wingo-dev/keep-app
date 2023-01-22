import { React, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Notes from './Notes';
import { Container } from "@mui/material";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function App() {
    const defaultTodo = [
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "Why do we use it?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "Where does it come from?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "Where can I get some?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            title: "What is Lorem Ipsum?",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]
    const [tickets, setTicket] = useState(defaultTodo);
    function addTicket(note) {
        setTicket(prevTicket => {
            return [
                ...prevTicket,
                note
            ]
        });
        // setNote({ title: '', content: '' })
        console.log(tickets);
    }
    function deleteHandle(id) {
        setTicket(prevTickets => {
            return prevTickets.filter((tickets, index) => id !== index);
        })
        console.log(tickets);
    }
    return (
        <div>
            <Header />
            <Container fixed style={{ minHeight: '100vh', padding: '30px 20px' }} >
                <CreateNote onAdd={addTicket} />
                <Divider sx={{ mt: 2, mb: 2, color: 'white', borderWidth: 'thick', borderColor: 'white' }} />
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        tickets.map((ticket, index) => {
                            return (
                                <Grid key={index} item xs={4} sm={4} md={4}>
                                    <Notes id={index} title={ticket.title} content={ticket.content} onDelete={deleteHandle} />
                                </Grid>)
                        })
                    }

                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default App;