import {Box} from "@mui/material";
import * as React from 'react';
import { Post } from "../Post/Post";


export const Feed = () => {


    return (
        //bgcolor={'#EFEFEF'}
        <Box flex={4} p={2} >
            <Post/>
        </Box>
    )
}