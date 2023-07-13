import { Box, Button } from "@mui/material"

const ItemCounter = ({ add, substract, counter, stock, addToCart }) => {
    
    return (
        <Box color='accent.main' sx={{ width: '100%',display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '0.5em', flexWrap: 'nowrap', color: 'primary.main' }}>
            <Box sx={{height: '2em', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    disabled={counter <= 1}
                    onClick={substract}
                    // color='secondary'
                    sx={{ backgroundColor: 'accent.main' }}
                > - </Button>

                <Box sx={{ margin: 'auto 2em', color: 'primary.main'}}>
                    {stock === 0 ? stock : counter}
                </Box>

                <Button
                    disabled={counter == stock}
                    onClick={add}
                    sx={{ backgroundColor: 'accent.main' }}
                > + </Button>
            </Box>
            <Button 
                disabled={stock === 0}
                sx={{ width: '100%', backgroundColor: 'accent.main' }}
              onClick={() => addToCart(counter)}
            >
                {/* Agregar al Carrito */}
                Add to my cart
            </Button>
        </Box>
    )
}

export default ItemCounter