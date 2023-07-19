import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import ItemCounterContainer from "../../components/common/itemCount/ItemCounterContainer"

const ItemDetail = ({ item }) => {

    
    return (
        <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ margin: '5em',backgroundColor: 'secondary.main' }}>

                <CardMedia sx={{ width: '25em', backgroundColor: 'white' }} image={item.pictureUrl} title={item.title} component='img'/>
                <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="primary">
                            {item.description}
                        </Typography>
                        <Typography variant="h6" color='primary'>
                            ${item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ItemCounterContainer item={item}/>
                    </CardActions>
                </Box>
            </Box>
        </section>
    )
}

export default ItemDetail