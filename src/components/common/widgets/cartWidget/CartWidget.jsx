import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"

const CartWidget = ({theme}) => {
  return (
        <Badge badgeContent={3} color= 'accent'>
          <ShoppingCart color='primary' sx={{fontSize: '2.5rem'}}/>
        </Badge>
  )
}

export default CartWidget