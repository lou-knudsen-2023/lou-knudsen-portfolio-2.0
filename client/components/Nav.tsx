import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from '@mui/material'
import { StyledLink, StyledAppBar } from '../styles/styled'
import GitHubIcon from '@mui/icons-material/GitHub'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Nav() {
  return (
    <>
      <StyledAppBar position="relative">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            margin: ' 0 1em',
            height: '100%',
          }}
        >
          <StyledLink href="/">
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{ flex: 1 }}
            >
              Portfolio
            </Typography>
          </StyledLink>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: ' 0 1em',
              height: '100%',
              borderSpacing: '0.1em',
            }}
          >
            <Button
              variant="outlined"
              size="large"
              sx={{ color: 'whitesmoke' }}
            >
              View CV
            </Button>
            <IconButton>
              <GitHubIcon
                fontSize="large"
                color="secondary"
                sx={{ margin: '5px' }}
              />
              <MailOutlineIcon
                fontSize="large"
                color="secondary"
                sx={{ margin: '5px' }}
              />
              <LinkedInIcon
                fontSize="large"
                color="secondary"
                sx={{ margin: '5px' }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

// ;<Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
//   <Button size="small">Subscribe</Button>
//   <Typography
//     component="h2"
//     variant="h5"
//     color="inherit"
//     align="center"
//     noWrap
//     sx={{ flex: 1 }}
//   >
//     {title}
//   </Typography>
//   <IconButton>
//     <SearchIcon />
//   </IconButton>
//   <Button variant="outlined" size="small">
//     Sign up
//   </Button>
// </Toolbar>

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
