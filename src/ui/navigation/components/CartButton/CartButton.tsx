import React from 'react'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import cartIcon from '@/assets/images/cart_icon.png'
import style from './CartButton.module.scss'
import { useNavigationPage } from '../..'
import { Routes } from '@/ui/navigation/const/routes'
import { Link } from 'react-router-dom'

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    background: 'green'
  }
}))(Badge)

export const CartButton: React.VFC = () => {
  const { auctionsData } = useNavigationPage()

  return (
    <div className={style.image}>
      <Link to={Routes.CartPage}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={auctionsData?.length} color="secondary">
            <img src={cartIcon} alt="cart"/>
          </StyledBadge>
        </IconButton>
      </Link>
    </div>
  )
}