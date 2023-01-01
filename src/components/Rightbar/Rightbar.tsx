import {
    Avatar,
    AvatarGroup,
    Box, Divider,
    ImageList,
    ImageListItem, List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import React from "react";


export const Rightbar = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        // {
        //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        //     title: 'Basketball',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        //     title: 'Fern',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        //     title: 'Mushrooms',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        //     title: 'Tomato basil',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        //     title: 'Sea star',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        //     title: 'Bike',
        // },
    ];
    return (
        <Box
            // bgcolor={'#efefef'}
            flex={2}
            p={2}
            sx={{display: {xs: "none", sm: "block"}}}
        >

            <Box position={'fixed'}>
                <Typography variant={'h6'} sx={{textAlign: 'center'}} fontWeight={'300'} >Online
                    Friends</Typography>
                <AvatarGroup max={6}>
                    <Avatar alt="Remy Sharp"
                            src="https://i.pinimg.com/280x280_RS/3d/28/5a/3d285abb663ef02655c8d4ee5ec53d57.jpg"/>
                    <Avatar alt="Travis Howard" src="https://cs8.pikabu.ru/avatars/1672/x1672551-179614235.png"/>
                    <Avatar alt="Cindy Baker" src="https://weblinks.ru/wp-content/uploads/2021/04/hqdefault-20.jpg"/>
                    <Avatar alt="Nastya Walker"
                            src="https://i.pinimg.com/736x/98/f8/94/98f894b553e07aa841048a3cba40e69c.jpg"/>
                    <Avatar alt="Trevor Henderson" src="https://d6z72aalekwc3.cloudfront.net/avatar/WqBRmhsV1nT4.jpg"/>
                    <Avatar alt="Hleb Henderson" src="https://cs6.pikabu.ru/avatars/1592/v1592553-1408957057.jpg"/>
                    <Avatar alt="Abdula Henderson" src="https://cs13.pikabu.ru/avatars/3115/x3115547-738915255.png"/>
                    <Avatar alt="Gretta Henderson"
                            src="https://image.jimcdn.com/app/cms/image/transf/none/path/s70cd91a6a34fcf1d/image/i887ebf39f650ef19/version/1608736742/image.jpg"/>
                </AvatarGroup>

                <Typography variant={'h6'} sx={{textAlign: 'center'}} fontWeight={'300'} marginTop={'30px'}>Latest
                    Photos</Typography>

                <ImageList sx={{ width: 370, height: 250 }} cols={3} rowHeight={100}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://cs8.pikabu.ru/avatars/1672/x1672551-179614235.png" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/98/f8/94/98f894b553e07aa841048a3cba40e69c.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}