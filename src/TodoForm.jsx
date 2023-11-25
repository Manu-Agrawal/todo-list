import { InputAdornment, TextField } from "@mui/material"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import ListItem from "@mui/material/ListItem";

export default function TodoForm({ addTodo }) {
    const [text, SetText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        SetText("")
    }

    const handleChange = (evt) => {
        SetText(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <ListItem>
                <TextField
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                onClick={handleSubmit}
                            // type="submit"//makes the button submit as well.//use onClick above or this.
                            >
                                <AddIcon />
                            </IconButton>
                        </InputAdornment>
                    }}
                />
            </ListItem>
        </form>
    )


}