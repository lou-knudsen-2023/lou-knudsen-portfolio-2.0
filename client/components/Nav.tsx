import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'
import { StyledLink } from '../styles/styled'

export default function Nav() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: 'space-between', margin: ' 0 1em' }}>
          {/* Detail in the top left */}
          <Box>
            <StyledLink href="/">
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  letterSpacing: '0.05em',
                }}
                className="logo"
              >
                LOU
              </Typography>
            </StyledLink>
          </Box>
          {/* end?? */}
        </Toolbar>
      </AppBar>
    </>
  )
}

// BUTTON LINKED IN MATERIAL UI//
{
  /* <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
  }}
>
  Button Link
</Link> */
}

// className="custom-appbar"
