import React, { useState } from 'react'
import { customTheme, customThemeDark } from '../../../themeConfig'
import { Button, ThemeProvider } from '@mui/material'
import './Navbar.css'
import CartWidget from '../../common/widgets/cartWidget/CartWidget'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {


  const [isDark, setDark] = useState(true)
  const [theme, setTheme] = useState(customTheme)

  const changeMode = () => {

    setDark(!isDark)
    // getTheme()
    isDark ? setTheme(customThemeDark) : setTheme(customTheme)
  }


  return (
    <ThemeProvider theme={theme}>
      <nav style={{ padding: theme.spacing(4), height: theme.spacing(18), backgroundColor: theme.palette.secondary.main }}>

        <Link to='/'>
          <h1 style={{ color: theme.palette.primary.main }}>Ecommerce</h1>
        </Link>

        <ul style={{ gap: theme.spacing(1.6) }}>
          <Link to='/' style={{ color: theme.palette.primary.main }}>Todos</Link>
          <Link to='/category/urbanas' style={{ color: theme.palette.primary.main }}>Urbanas</Link>
          <Link to='/category/deportivas' style={{ color: theme.palette.primary.main }}>Deportivas</Link>
        </ul>

        <div>
          <Button sx={{ backgroundColor: 'primary', margin: theme.spacing(2)}} onClick={changeMode}>Cambiar modo</Button>
          
          <Link to='/cart/1' style={{color: 'white'}}>
            <CartWidget theme={theme} />
          </Link>
        </div>
      </nav>

      <Outlet />
    </ThemeProvider>
  )
}

export default Navbar;