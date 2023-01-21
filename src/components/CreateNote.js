import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNotes(props) {
    const [note, setNote] = useState({ title: '', content: '' });
    function handleChange(e) {
        const { name, value } = e.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }
    function handleClick() {
        props.onAdd(note);
        setNote({ title: '', content: '' })
    }
    return (
        <div className="create-note">
            <form>
                <div>
                    <TextField label="Title" variant="filled" color="secondary" name="title" onChange={handleChange} value={note.title} />
                </div>
                <div>
                    <TextField label="Content" variant="filled" color="success" name="content" onChange={handleChange} value={note.content} />
                </div>
                <Button sx={{ m: 2 }} variant="contained" color="success" onClick={handleClick}><AddIcon /></Button>
            </form>
        </div>
    );
}
export default CreateNotes;