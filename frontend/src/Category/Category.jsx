import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import electronics from '../images/electronic.jpg'
import homestore from '../images/homestore.jpg'
import outfit from '../images/outfit.jpg'
import pet from '../images/dog.jpg'
import './Category.css'

export const Category = () => {


    return(
        <div className="category">
            <div className="category-electronics">
            <Card sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    src={electronics}
                    alt="category"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Electronics
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="large"
                    loadingPosition="center" 
                    href="/Electronics"
                    sx={{color:'tomato'}}>
                    SHOP!
                    </Button>
                </CardActions>
            </Card>
            </div>

            <div className="category-homestore">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    src={homestore}
                    alt="category"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Home&Living
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="large"
                    loadingPosition="center" 
                    href="/HomeStore"
                    sx={{color:'tomato'}}>
                    SHOP!
                    </Button>
                </CardActions>
            </Card>
            </div> 

            <div className="category-outfit">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    src={outfit}
                    alt="category"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Outfit
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="large"
                    loadingPosition="center" 
                    href="/Outfit"
                    sx={{color:'tomato'}}>
                    SHOP!
                    </Button>
                </CardActions>
            </Card>
            </div>

            <div className="category-pet">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="150"
                    src={pet}
                    alt="category"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pet
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="large"
                    loadingPosition="center" 
                    href="/Pet"
                    sx={{color:'tomato'}}>
                    SHOP!
                    </Button>
                </CardActions>
            </Card>
            </div>
            
        </div>
    )
}