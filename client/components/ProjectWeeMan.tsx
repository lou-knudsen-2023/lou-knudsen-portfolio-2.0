import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'

export default function ProjectWeeMan() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            margin: '2rem',
            textAlign: 'center',
            marginTop: '4rem',
            marginBottom: '1rem',
          }}
          gutterBottom
        >
          WEE MAN ADVENTURES
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            marginLeft: '2rem',
            marginRight: '2rem',
            textAlign: 'center',
            marginBottom: '4rem',
            marginTop: '1rem',
          }}
          gutterBottom
        >
          A front end react style game.
        </Typography>
      </Box>
    </Container>
  )
}
