import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CartProduct = ({ product }) => {
    return (
        // <div style={{color: 'white'}}>
        //     {product.title}
        // </div>

        <section style={{width: '100%',display: 'flex', justifyContent: 'center', gap: '5em'}}>

            <Card sx={{ width: '345px', backgroundColor: 'secondary.main', margin: '3em' }}>

                <CardMedia sx={{ height: '15em', backgroundColor: 'white' }} image={product.pictureUrl} title={product.title} />
                <Box sx={{ height: '10em', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="primary">
                            {product.description}
                        </Typography>
                        <Typography variant='h5' color='primary'>
                            ${product.price}
                        </Typography>
                        <Typography variant='h6' color='primary'>
                            Quantity: {product.quantity}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* <Link to={`/itemDetail/${item.id}`}>
            <Button size="small" variant="contained" sx={{ backgroundColor: 'detail.main', color: 'white' }}>
                Ver detalle
            </Button>
        </Link> */}
                    </CardActions>
                </Box>
            </Card>
        </section>
    )
}

export default CartProduct