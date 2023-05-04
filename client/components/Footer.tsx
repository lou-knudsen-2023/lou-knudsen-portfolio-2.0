import { Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <>
      <Copyright />
    </>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://lou.knudsen.com/">
        lou.knudsen.com
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
