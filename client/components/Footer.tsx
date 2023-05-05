import { Typography, Link } from '@mui/material'
import Lightbulb from './Lightbulb'

export default function Footer() {
  return (
    <>
      <Lightbulb />
      <Copyright />
    </>
  )
}

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ paddingBottom: '50px' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://lou.knudsen.com/">
        lou.knudsen.com
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
