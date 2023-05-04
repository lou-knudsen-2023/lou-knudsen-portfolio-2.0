import styled from '@emotion/styled'
import { Link, Typography, Box, AppBar } from '@mui/material'
import { StyledProps } from '../../commons/model'

export const StyledAppBar = styled(AppBar)<StyledProps>(() => ({
  margin: '0px',
  padding: '0px',
  height: '80px',
}))

export const StyledLink = styled(Link)<StyledProps>(() => ({
  textDecoration: 'none',
  color: 'whitesmoke',
  fontSize: '0.9em',
}))

export const StyledBox = styled(Box)<StyledProps>(() => ({
  margin: '10px',
  padding: '10px',
}))

export const StyledMainTypo = styled(Typography)<StyledProps>(() => ({
  marginTop: '110px',
  height: '20vh',
  p: 10,
  fontSize: '4rem',
  letterSpacing: '0.01em',
  wordSpacing: '0.01em',
  fontWeight: '300',
  color: '#10466f',
}))
