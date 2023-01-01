import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import * as React from "react";

export const Post = () => {
    return(
        <>
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'red'}} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="January 1, 2023"
            />
            <CardMedia
                component="img"
                height="250px"
                image="https://pbs.twimg.com/media/FflQI4OXkAA1X2K?format=jpg&name=small"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'error'}/>} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>

    <Card sx={{mt: '20px'}}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: 'blue'}} aria-label="recipe">
                    Y
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title="Barbeque your Dreams"
            subheader="January 02, 2023"
        />
        <CardMedia
            component="img"
            height="250"
            image="https://live.staticflickr.com/615/20194573464_ef8cf10c41_b.jpg"
            alt="Barbeque"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                A kebab always goes down well at a BBQ, and this Korean chicken with sweet, spicy and sticky
                glaze is our new favourite. Scatter over spring onions to serve
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'error'}/>} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>


    <Card sx={{mt: '20px'}}>
        <CardHeader
            avatar={
                <Avatar sx={{bgcolor: 'green'}} aria-label="recipe">
                    N
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title="How to Make a Hamburger"
            subheader="January 03, 2023"
        />
        <CardMedia
            component="img"
            height="310"
            image="https://st2.depositphotos.com/3957801/5642/i/450/depositphotos_56423065-stock-photo-bacon-burger.jpg"
            alt="Hamburger"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                Toss out those processed burger patties! Making your own burger is both easy and a much
                healthier option. All you need is to get some freshly ground beef from your favorite butcher and
                to put in a bit of effort.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite color={'error'}/>} />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>
        </>
    )
}

