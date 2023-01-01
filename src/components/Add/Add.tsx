import React, {useState} from "react";
import {Avatar, Box, Fab, Modal, Stack, styled, TextField, Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonAddIcon from '@mui/icons-material/PersonAdd';


const StyleModal = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
})

export const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip
                onClick={event => setOpen(true)}
                title="Add new Post"
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    left: {
                        xs: "calc(50% -25px)",
                        md: 30
                    }
                }}>
                <IconButton>
                    <Fab color="primary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </IconButton>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={400}
                    height={250}
                    p={3}
                    borderRadius={5}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2" color={'gray'} textAlign={'center'}>
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar src="https://i.pinimg.com/originals/44/8d/87/448d8733d48968f2c48896178f81dce1.jpg"/>
                        <Typography fontWeight={500} >
                            Escanor
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width: '100%'}}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mb={3} mt={2}>
                        <EmojiEmotionsIcon color={"primary"}/>
                        <InsertPhotoIcon color={'primary'}/>
                        <PersonAddIcon color={'success'}/>

                    </Stack>
                </Box>
            </StyleModal>
        </>
    )
}