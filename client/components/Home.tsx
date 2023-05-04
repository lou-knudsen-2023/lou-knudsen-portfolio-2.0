import * as React from 'react'
import { Container, Typography, Box } from '@mui/material'

// import Link from '@mui/material/Link'

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ margin: '2rem', textAlign: 'center', marginTop: '4rem' }}
          gutterBottom
        >
          Lou Knudsen
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          sx={{ margin: '2rem', textAlign: 'center' }}
          gutterBottom
        >
          full stack software developer
        </Typography>
      </Box>
    </Container>
  )
}
