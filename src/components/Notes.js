import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function Notes(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
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
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
                <div style={{ textAlign: 'right' }}>
                    <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}><DeleteIcon /></Button>
                </div>
            </CardContent>
        </Card >
    );
}

export default Notes;