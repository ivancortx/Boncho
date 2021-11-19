import React from 'react'
import {withStyles, makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '2px 8px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'green',
    borderColor: 'green',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#06bf37',
      borderColor: '#06bf37',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#06bf37',

    },
    '&:focus': {
      boxShadow: '0 0 0 0.1rem rgba(100, 232, 60, 0.5)',
    },
  },
})(Button);

const useStyles = makeStyles((theme: any) => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

export type Props = {
  orderDelivery: () => void
}

export const CheckOutButton:React.VFC<Props> = ({orderDelivery}) => {
  const classes = useStyles()

  return (
    <div>
      <BootstrapButton onClick={orderDelivery} variant="contained" color="primary" disableRipple className={classes.margin}>
        Оформить доставку
      </BootstrapButton>
    </div>
  )
}