import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function Notes(props) {
    return (
        <Card >
            <CardMedia
                component="img"
                height="110"
                src="/images/bw3.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                <div style={{ textAlign: 'right' }}>
                    <Button variant="contained" sx={{ mt: 2 }} ><DeleteIcon /></Button>
                </div>
            </CardContent>
        </Card >
    );
}

export default Notes;