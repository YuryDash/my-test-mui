import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import React from "react";
import {HzType} from "../../App";

type PropsType = {
    setMode: (str: HzType)=> void
    mode: HzType
}

export const Sidebar = (props: PropsType) => {
    return (
        <Box
            // bgcolor={'#efefef'}
            flex={1}
            p={2}
            sx={{
                display: {xs: "none", sm: "block"},
            }}
        >
            <Box position={'fixed'}>
            <List>
                <ListItem sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <GroupAddOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <EmailOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Message"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <NotificationsActiveOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Notification"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <SettingsOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home">
                        <LogoutOutlinedIcon sx={{mr: '30px'}}>
                            <GroupAddOutlinedIcon/>
                        </LogoutOutlinedIcon>
                        <ListItemText primary=" Logout"/>
                    </ListItemButton>

                    <ListItemButton component="a" href="#home"
                                    sx={{mt: '30px'}}
                    >
                        <ListItemIcon>
                            <Brightness6Icon/>
                        </ListItemIcon>
                        <Switch
                            onChange={e=> props.setMode(props.mode === 'light' ? "dark" : 'light')}
                        />
                    </ListItemButton>

                </ListItem>

            </List>
            </Box>
        </Box>
    )
}