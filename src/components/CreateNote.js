import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
function CreateNotes() {
    return (
        <div className="create-note">
            <form>
                <div>
                    <TextField label="Title" variant="filled" color="secondary" />
                </div>
                <div>
                    <TextField label="Content" variant="filled" color="success" />
                </div>
                <Button sx={{ m: 2 }} variant="contained" color="success"><AddIcon /></Button>
            </form>
        </div>
    );
}
export default CreateNotes;